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
    const notificationEmail = dbEmailSetting?.value || "webserviesbygupta@gmail.com";

    // 3. Admin notification email HTML
    const adminEmailHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
        
        <!-- Header with logo -->
        <div style="background:#0a2540;padding:24px 32px;display:flex;align-items:center;gap:16px;">
          <img src="https://www.quantumleapwealth.com/images/QWL_logo_backup.png" alt="Logo"
            style="height:50px;width:auto;background:white;padding:6px 10px;border-radius:8px;" />
          <div>
            <h1 style="color:#c9a84c;font-size:1rem;margin:0;letter-spacing:1px;text-transform:uppercase;">Quantum Leap Wealth</h1>
            <p style="color:rgba(255,255,255,0.6);font-size:0.75rem;margin:4px 0 0;">CRM Dashboard Notification</p>
          </div>
        </div>

        <!-- Alert Banner -->
        <div style="background:#fef9ec;border-left:4px solid #c9a84c;padding:14px 24px;">
          <p style="margin:0;color:#92400e;font-weight:700;font-size:0.95rem;">🔔 New Lead Received!</p>
        </div>

        <!-- Lead Details -->
        <div style="padding:28px 32px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr style="border-bottom:1px solid #f1f5f9;">
              <td style="padding:12px 0;color:#6b7c8d;font-size:0.85rem;width:130px;font-weight:600;">Name</td>
              <td style="padding:12px 0;color:#0a2540;font-weight:700;">${name}</td>
            </tr>
            <tr style="border-bottom:1px solid #f1f5f9;">
              <td style="padding:12px 0;color:#6b7c8d;font-size:0.85rem;font-weight:600;">Email</td>
              <td style="padding:12px 0;"><a href="mailto:${email}" style="color:#0284c7;text-decoration:none;">${email}</a></td>
            </tr>
            <tr style="border-bottom:1px solid #f1f5f9;">
              <td style="padding:12px 0;color:#6b7c8d;font-size:0.85rem;font-weight:600;">Phone</td>
              <td style="padding:12px 0;color:#0a2540;">${phone || "Not provided"}</td>
            </tr>
            <tr style="border-bottom:1px solid #f1f5f9;">
              <td style="padding:12px 0;color:#6b7c8d;font-size:0.85rem;font-weight:600;">Service Interest</td>
              <td style="padding:12px 0;color:#0a2540;">${service || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;color:#6b7c8d;font-size:0.85rem;font-weight:600;vertical-align:top;">Message</td>
              <td style="padding:12px 0;color:#475569;line-height:1.6;">${message || "No message provided"}</td>
            </tr>
          </table>

          <!-- CTA Button -->
          <div style="text-align:center;margin-top:28px;">
            <a href="https://www.quantumleapwealth.com/admin/leads"
               style="background:#0a2540;color:white;text-decoration:none;padding:14px 28px;border-radius:8px;font-weight:700;font-size:0.95rem;display:inline-block;">
              View in CRM Dashboard →
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background:#f8fafc;padding:20px 32px;text-align:center;border-top:1px solid #e2e8f0;">
          <p style="margin:0 0 4px;color:#0a2540;font-weight:700;font-size:0.9rem;">Quantum Leap Wealth</p>
          <p style="margin:0;color:#94a3b8;font-size:0.8rem;">
            📞 (+1) 408-203-3877 &nbsp;|&nbsp; ✉️ quantumlfs@gmail.com &nbsp;|&nbsp; 📍 California, USA
          </p>
        </div>
      </div>
    `;

    // 4. Client auto-reply HTML - professionally branded
    const userEmailHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
        
        <!-- Header (Table structure for better Dark Mode support) -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#0a2540;">
          <tr>
            <td align="center" style="padding:40px 20px; background-color:#0a2540" bgcolor="#0a2540">
              <div style="background-color:#ffffff; padding:12px 16px; border-radius:12px; display:inline-block; margin-bottom:16px;">
                <img 
                  src="https://www.quantumleapwealth.com/images/QWL_logo_original.png"
                  alt="Quantum Leap Wealth Logo"
                  style="height:65px; width:auto; display:block; border:0;"
                />
              </div>
              <h1 style="color:#c9a84c; font-size:1.4rem; margin:0; letter-spacing:1px; text-transform:uppercase; font-weight:bold; font-family:Arial, sans-serif;">
                Quantum Leap Wealth
              </h1>
            </td>
          </tr>
        </table>

        <!-- Body -->
        <div style="padding:40px 32px;">
          <h2 style="color:#05192d;margin:0 0 20px;font-size:1.5rem;">Thank You, ${firstName || name}! 🎉</h2>
          <p style="color:#475569;line-height:1.8;margin:0 0 16px;font-size:1rem;">
            We have received your inquiry and our team will get back to you within <strong>24 hours</strong>.
          </p>
          ${service ? `<p style="color:#475569;line-height:1.8;margin:0 0 16px;font-size:1rem;">We noted your interest in: <strong style="color:#05192d;">${service}</strong></p>` : ""}
          <p style="color:#475569;line-height:1.8;margin:0 0 32px;font-size:1rem;">
            In the meantime, feel free to explore our services at 
            <a href="https://www.quantumleapwealth.com" style="color:#c9a84c;text-decoration:none;font-weight:bold;">quantumleapwealth.com</a>.
          </p>

          <!-- Signature & Footer -->
          <div style="border-top:2px solid #c9a84c;padding-top:24px;">
            <p style="color:#475569;line-height:1.6;margin:0 0 20px;font-size:1.1rem;">
              Best regards,<br/>
              <strong style="color:#05192d;font-size:1.2rem;">Anuradha &amp; Prasad</strong><br/>
              <span style="color:#c9a84c;font-weight:bold;">Quantum Leap Wealth</span>
            </p>

            <div style="color:#6b7c8d;font-size:0.95rem;line-height:1.8;">
              <p style="margin:4px 0;">📞 <strong>(+1) 408-203-3877</strong></p>
              <p style="margin:4px 0;">✉️ <a href="mailto:quantumlfs@gmail.com" style="color:#6b7c8d;text-decoration:none;">quantumlfs@gmail.com</a></p>
              <p style="margin:4px 0;">🌐 <a href="https://www.quantumleapwealth.com" style="color:#6b7c8d;text-decoration:none;">www.quantumleapwealth.com</a></p>
              <p style="margin:4px 0;">📍 California, USA</p>
            </div>
          </div>
        </div>

        <!-- Very Bottom Copyright -->
        <div style="background:#f8fafc;padding:16px;text-align:center;border-top:1px solid #e2e8f0;">
          <p style="margin:0;color:#94a3b8;font-size:0.75rem;">
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
