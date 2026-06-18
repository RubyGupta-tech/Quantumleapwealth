import { prisma } from "@/lib/prisma";
import SubscriberExportButton from "@/components/SubscriberExportButton";

export const dynamic = 'force-dynamic';

export default async function SubscribersDashboard() {
  const subscribers = await prisma.subscriber.findMany({
    orderBy: { createdAt: 'desc' },
  });

  const totalSubscribers = subscribers.length;
  
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const newThisWeek = subscribers.filter(sub => new Date(sub.createdAt) >= oneWeekAgo).length;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
        <div>
          <h1 style={{ margin: "0 0 8px 0", color: "#0a2540", fontFamily: "'Inter', sans-serif" }}>Newsletter Subscribers</h1>
          <p style={{ margin: 0, color: "#6b7c8d", fontSize: "0.95rem" }}>Manage your mailing list here. Export to CSV to send mass emails.</p>
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
          <SubscriberExportButton subscribers={subscribers} />
        </div>
      </div>

      {/* Stats Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px", marginBottom: "40px", maxWidth: "800px" }}>
        <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.03)", border: "1px solid #e2e8f0" }}>
          <h3 style={{ margin: "0 0 10px", fontSize: "0.9rem", color: "#6b7c8d", textTransform: "uppercase", letterSpacing: "0.05em" }}>Total Subscribers</h3>
          <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "#0a2540" }}>{totalSubscribers}</div>
        </div>
        <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.03)", border: "1px solid #e2e8f0" }}>
          <h3 style={{ margin: "0 0 10px", fontSize: "0.9rem", color: "#6b7c8d", textTransform: "uppercase", letterSpacing: "0.05em" }}>New This Week</h3>
          <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "#0284c7" }}>{newThisWeek}</div>
        </div>
      </div>

      {/* Subscribers Table */}
      <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.03)", border: "1px solid #e2e8f0", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f8fafc", textAlign: "left", fontSize: "0.85rem", color: "#6b7c8d", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              <th style={{ padding: "16px 24px", fontWeight: "600", width: "25%" }}>First Name</th>
              <th style={{ padding: "16px 24px", fontWeight: "600", width: "40%" }}>Email Address</th>
              <th style={{ padding: "16px 24px", fontWeight: "600", width: "15%" }}>Source</th>
              <th style={{ padding: "16px 24px", fontWeight: "600", width: "20%" }}>Date Subscribed</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.length === 0 ? (
              <tr><td colSpan="4" style={{ padding: "30px", textAlign: "center", color: "#94a3b8" }}>No subscribers yet.</td></tr>
            ) : (
              subscribers.map((sub) => (
                <tr key={sub.id} style={{ borderTop: "1px solid #e2e8f0", transition: "background-color 0.2s" }} className="admin-table-row">
                  <td style={{ padding: "16px 24px", color: "#0a2540", fontWeight: "500" }}>{sub.firstName}</td>
                  <td style={{ padding: "16px 24px", color: "#6b7c8d" }}>
                    <a href={`mailto:${sub.email}`} style={{ color: "#0284c7", textDecoration: "none" }}>{sub.email}</a>
                  </td>
                  <td style={{ padding: "16px 24px", color: "#6b7c8d" }}>
                    <span style={{ padding: "4px 10px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: "600", backgroundColor: "#f1f5f9", color: "#475569" }}>
                      {sub.source}
                    </span>
                  </td>
                  <td style={{ padding: "16px 24px", color: "#6b7c8d", fontSize: "0.9rem" }}>
                    {new Date(sub.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
