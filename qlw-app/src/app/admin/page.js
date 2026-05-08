import { prisma } from "@/lib/prisma";
import LeadRow from "@/components/LeadRow";
import DashboardExportButton from "@/components/DashboardExportButton";

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  // Fetch real data from PostgreSQL
  const leads = await prisma.lead.findMany({
    where: { 
      isArchived: false,
      status: { not: "Client" }
    },
    orderBy: { createdAt: 'desc' },
    take: 10,
  });

  const allActiveLeads = await prisma.lead.findMany({
    where: { isArchived: false },
    orderBy: { createdAt: 'desc' }
  });

  const totalLeads = await prisma.lead.count({ where: { isArchived: false } });
  
  // Calculate new leads this week
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const newThisWeek = await prisma.lead.count({
    where: { createdAt: { gte: oneWeekAgo } }
  });

  const closedLeads = await prisma.lead.count({ where: { status: 'Closed' } });
  const conversionRate = totalLeads > 0 ? Math.round((closedLeads / totalLeads) * 100) : 0;

  const getStatusBadge = (status) => {
    switch (status) {
      case "New":
        return <span style={{ padding: "4px 10px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "600", backgroundColor: "#e0f2fe", color: "#0284c7" }}>New</span>;
      case "Contacted":
        return <span style={{ padding: "4px 10px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "600", backgroundColor: "#fef08a", color: "#854d0e" }}>Contacted</span>;
      case "Closed":
        return <span style={{ padding: "4px 10px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "600", backgroundColor: "#dcfce7", color: "#166534" }}>Closed</span>;
      default:
        return <span>{status}</span>;
    }
  };

  return (
    <div>
      <style>{`
        .admin-table-row:hover { background-color: #f8fafc; }
      `}</style>
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
        <div>
          <h1 style={{ margin: "0 0 8px 0", color: "#0a2540", fontFamily: "'Inter', sans-serif" }}>Dashboard</h1>
          <p style={{ margin: 0, color: "#6b7c8d", fontSize: "0.95rem" }}>Welcome back! Here is an overview of your recent leads.</p>
        </div>
        <DashboardExportButton leads={allActiveLeads} />
      </div>

      {/* Stats Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "40px" }}>
        <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.03)", border: "1px solid #e2e8f0" }}>
          <h3 style={{ margin: "0 0 10px", fontSize: "0.9rem", color: "#6b7c8d", textTransform: "uppercase", letterSpacing: "0.05em" }}>Total Leads</h3>
          <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "#0a2540" }}>{totalLeads}</div>
        </div>
        <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.03)", border: "1px solid #e2e8f0" }}>
          <h3 style={{ margin: "0 0 10px", fontSize: "0.9rem", color: "#6b7c8d", textTransform: "uppercase", letterSpacing: "0.05em" }}>New This Week</h3>
          <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "#0284c7" }}>{newThisWeek}</div>
        </div>
        <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.03)", border: "1px solid #e2e8f0" }}>
          <h3 style={{ margin: "0 0 10px", fontSize: "0.9rem", color: "#6b7c8d", textTransform: "uppercase", letterSpacing: "0.05em" }}>Conversion Rate</h3>
          <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "#166534" }}>{conversionRate}%</div>
        </div>
      </div>

      {/* Recent Leads Table */}
      <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.03)", border: "1px solid #e2e8f0", overflow: "hidden" }}>
        <div style={{ padding: "20px 24px", borderBottom: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0, fontSize: "1.1rem", color: "#0a2540" }}>Recent Leads</h2>
          <a href="/admin/leads" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "0.9rem", fontWeight: "600" }}>View All →</a>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f8fafc", textAlign: "left", fontSize: "0.85rem", color: "#6b7c8d", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              <th style={{ padding: "16px 24px", fontWeight: "600" }}>Name & Contact</th>
              <th style={{ padding: "16px 24px", fontWeight: "600" }}>Interest</th>
              <th style={{ padding: "16px 24px", fontWeight: "600" }}>Message</th>
              <th style={{ padding: "16px 24px", fontWeight: "600" }}>Date</th>
              <th style={{ padding: "16px 24px", fontWeight: "600", textAlign: "center" }}>Status</th>
              <th style={{ padding: "16px 24px", fontWeight: "600", textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr><td colSpan="6" style={{ padding: "30px", textAlign: "center", color: "#94a3b8" }}>No leads received yet. Submit the contact form to test!</td></tr>
            ) : (
              leads.map((lead) => (
                <LeadRow key={lead.id} lead={lead} isArchivedView={false} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
