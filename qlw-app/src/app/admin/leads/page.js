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
      <div style={{ marginBottom: "40px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <h1 style={{ margin: "0 0 8px 0", color: "#0a2540", fontFamily: "'Inter', sans-serif" }}>
            {isArchivedView ? "Archived Leads" : "Leads Inbox"}
          </h1>
          <p style={{ margin: 0, color: "#6b7c8d", fontSize: "0.95rem" }}>
            {isArchivedView ? "View all archived inquiries." : "Manage all incoming contact forms and messages."}
          </p>
        </div>
        
        <div style={{ display: "flex", backgroundColor: "#f1f5f9", padding: "4px", borderRadius: "8px" }}>
          <Link 
            href="/admin/leads" 
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: "600",
              color: !isArchivedView ? "#0a2540" : "#64748b",
              backgroundColor: !isArchivedView ? "white" : "transparent",
              boxShadow: !isArchivedView ? "0 2px 4px rgba(0,0,0,0.05)" : "none",
              transition: "all 0.2s"
            }}
          >
            Active Inbox
          </Link>
          <Link 
            href="/admin/leads?archived=true" 
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: "600",
              color: isArchivedView ? "#0a2540" : "#64748b",
              backgroundColor: isArchivedView ? "white" : "transparent",
              boxShadow: isArchivedView ? "0 2px 4px rgba(0,0,0,0.05)" : "none",
              transition: "all 0.2s"
            }}
          >
            Archive
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
