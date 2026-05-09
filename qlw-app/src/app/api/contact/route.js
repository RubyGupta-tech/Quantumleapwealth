import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();

    // Extract fields
    const firstName = data.first_name || "";
    const lastName = data.last_name || "";
    const name = data.user_name || data.name || `${firstName} ${lastName}`.trim() || "Unknown";
    const email = data.user_email || data.email;
    const phone = data.phone_number || data.phone || null;
    const service = data.service_interest || data.service || null;
    const message = data.message || null;
    const source = data.source || "Website Form";

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 1. Save to PostgreSQL CRM Database
    const newLead = await prisma.lead.create({
      data: { name, email, phone, service, message, source },
    });

    // 2. Get admin notification email from DB or fallback
    const dbEmailSetting = await prisma.setting.findUnique({
      where: { key: "notification_email" },
    });
    const notificationEmail = dbEmailSetting?.value || "hello@quantumleapwealth.com";

    // 3. Admin notification email HTML
    const adminEmailHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#0a2540;border-bottom:3px solid #c9a84c;padding-bottom:10px;">
          🔔 New Lead — Quantum Leap Wealth
        </h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service Interest:</strong> ${service || "Not provided"}</p>
        <p><strong>Message:</strong><br/>${message || "No message"}</p>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0;"/>
        <p style="color:#6b7c8d;font-size:0.9rem;">
          <em>This lead has been saved to your 
          <a href="https://www.quantumleapwealth.com/admin">CRM Dashboard</a>.</em>
        </p>
      </div>
    `;

    // 4. Client auto-reply HTML
    const userEmailHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#0a2540;border-bottom:3px solid #c9a84c;padding-bottom:10px;">
          Thank You for Reaching Out!
        </h2>
        <p>Hi ${firstName || name},</p>
        <p>Thank you for contacting <strong>Quantum Leap Wealth</strong>. We have received your inquiry and our team will get back to you within <strong>24 hours</strong>.</p>
        <p>In the meantime, feel free to explore our services at 
          <a href="https://www.quantumleapwealth.com">quantumleapwealth.com</a>.
        </p>
        <br/>
        <p>
          Best regards,<br/>
          <strong>Anuradha Gupta</strong><br/>
          Quantum Leap Wealth<br/>
          📞 (+1) 408-203-3877
        </p>
      </div>
    `;

    // 5. Send both emails using verified domain — independently so one failure doesn't block the other
    const [adminResult, clientResult] = await Promise.allSettled([
      resend.emails.send({
        from: "Quantum Leap Wealth <noreply@quantumleapwealth.com>",
        to: [notificationEmail],
        subject: `🔔 New Lead: ${name} — ${service || "General Inquiry"}`,
        html: adminEmailHtml,
      }),
      resend.emails.send({
        from: "Quantum Leap Wealth <noreply@quantumleapwealth.com>",
        to: [email],
        subject: "We received your inquiry — Quantum Leap Wealth",
        html: userEmailHtml,
      }),
    ]);

    // Log to Vercel for debugging
    console.log("Admin email result:", adminResult.status, adminResult.value?.data || adminResult.reason);
    console.log("Client email result:", clientResult.status, clientResult.value?.data || clientResult.reason);

    return NextResponse.json({ success: true, leadId: newLead.id });
  } catch (error) {
    console.error("API /contact error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
