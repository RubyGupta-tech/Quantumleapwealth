import { prisma } from "@/lib/prisma";
import LeadsTableClient from "@/components/LeadsTableClient";
import Link from "next/link";
import LeadRow from "@/components/LeadRow";

export const dynamic = 'force-dynamic';

export default async function LeadsInbox({ searchParams }) {
  const params = await searchParams;
  const isArchivedView = params.archived === 'true';

  const leads = await prisma.lead.findMany({
    where: { 
      isArchived: isArchivedView,
      status: { not: "Client" } 
    },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      <div style={{ marginBottom: "32px" }}>
        {/* Title row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
          <div>
            <h1 style={{ margin: "0 0 8px 0", color: "#0a2540", fontFamily: "'Inter', sans-serif" }}>
              {isArchivedView ? "📦 Archived Leads" : "📥 Leads Inbox"}
            </h1>
            <p style={{ margin: 0, color: "#6b7c8d", fontSize: "0.95rem" }}>
              {isArchivedView ? "View all archived inquiries. Click Restore to move them back." : "Manage all incoming contact forms and messages."}
            </p>
          </div>
        </div>

        {/* Tab Toggle */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Link 
            href="/admin/leads" 
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: "700",
              color: !isArchivedView ? "white" : "#64748b",
              backgroundColor: !isArchivedView ? "#0a2540" : "#f1f5f9",
              border: `2px solid ${!isArchivedView ? "#0a2540" : "#e2e8f0"}`,
              transition: "all 0.2s"
            }}
          >
            ✅ Active Inbox
          </Link>
          <Link 
            href="/admin/leads?archived=true" 
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: "700",
              color: isArchivedView ? "white" : "#64748b",
              backgroundColor: isArchivedView ? "#0a2540" : "#f1f5f9",
              border: `2px solid ${isArchivedView ? "#0a2540" : "#e2e8f0"}`,
              transition: "all 0.2s"
            }}
          >
            📦 View Archived
          </Link>
        </div>
      </div>

      <LeadsTableClient 
        initialLeads={leads} 
        isArchivedView={isArchivedView} 
        emptyMessage={isArchivedView ? "No archived leads." : "Inbox is empty."} 
      />
    </div>
  );
}
