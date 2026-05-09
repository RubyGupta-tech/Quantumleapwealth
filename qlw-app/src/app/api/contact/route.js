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

    // 4. Client auto-reply HTML - professionally branded
    const userEmailHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
        
        <!-- Header with brand color -->
        <div style="background:#0a2540;padding:28px 32px;text-align:center;">
          <img 
            src="https://www.quantumleapwealth.com/images/QWL_logo_backup.png"
            alt="Quantum Leap Wealth Logo"
            style="height:60px;width:auto;background:white;padding:8px 12px;border-radius:8px;"
          />
          <h1 style="color:#c9a84c;font-size:1.1rem;margin:12px 0 0;letter-spacing:1px;text-transform:uppercase;">
            Quantum Leap Wealth
          </h1>
        </div>

        <!-- Body -->
        <div style="padding:32px;">
          <h2 style="color:#0a2540;margin:0 0 16px;">Thank You, ${firstName || name}! 🎉</h2>
          <p style="color:#475569;line-height:1.7;margin:0 0 16px;">
            We have received your inquiry and our team will get back to you within <strong>24 hours</strong>.
          </p>
          ${service ? `<p style="color:#475569;line-height:1.7;margin:0 0 16px;">We noted your interest in: <strong style="color:#0a2540;">${service}</strong></p>` : ""}
          <p style="color:#475569;line-height:1.7;margin:0 0 24px;">
            In the meantime, feel free to explore our services at 
            <a href="https://www.quantumleapwealth.com" style="color:#c9a84c;">quantumleapwealth.com</a>.
          </p>

          <!-- Divider -->
          <hr style="border:none;border-top:2px solid #c9a84c;margin:24px 0;opacity:0.3;"/>

          <!-- Contact Info -->
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;color:#0a2540;font-weight:700;width:32px;">📞</td>
              <td style="padding:8px 0;color:#475569;">
                <a href="tel:+14082033877" style="color:#475569;text-decoration:none;">(+1) 408-203-3877</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#0a2540;font-weight:700;">✉️</td>
              <td style="padding:8px 0;color:#475569;">
                <a href="mailto:quantumlfs@gmail.com" style="color:#475569;text-decoration:none;">quantumlfs@gmail.com</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#0a2540;font-weight:700;">🌐</td>
              <td style="padding:8px 0;color:#475569;">
                <a href="https://www.quantumleapwealth.com" style="color:#c9a84c;text-decoration:none;">www.quantumleapwealth.com</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#0a2540;font-weight:700;">📍</td>
              <td style="padding:8px 0;color:#475569;">California, USA — Serving clients nationwide</td>
            </tr>
          </table>
        </div>

        <!-- Footer -->
        <div style="background:#f8fafc;padding:20px 32px;text-align:center;border-top:1px solid #e2e8f0;">
          <p style="margin:0;color:#94a3b8;font-size:0.8rem;">
            This is an automated confirmation. Please do not reply to this email.<br/>
            © ${new Date().getFullYear()} Quantum Leap Wealth. All rights reserved.
          </p>
        </div>
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
