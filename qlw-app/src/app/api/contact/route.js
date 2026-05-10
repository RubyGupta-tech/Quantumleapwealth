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

          <!-- Signature -->
          <p style="color:#475569;line-height:1.8;margin:0 0 20px;">
            Best regards,<br/>
            <strong style="color:#0a2540;">Anuradha &amp; Prasad</strong><br/>
            <span style="color:#c9a84c;font-weight:600;">Quantum Leap Wealth</span>
          </p>

          <!-- Divider -->
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;"/>

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
