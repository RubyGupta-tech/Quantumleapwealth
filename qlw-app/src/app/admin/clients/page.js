import { prisma } from "@/lib/prisma";
import LeadsTableClient from "@/components/LeadsTableClient";

export const dynamic = 'force-dynamic';

export default async function ClientsPage() {
  // Fetch all leads that have been converted to Clients
  const clients = await prisma.lead.findMany({
    where: { status: "Client", isArchived: false },
    orderBy: { updatedAt: 'desc' }
  });

  return (
    <div>
      <div style={{ marginBottom: "40px" }}>
        <h1 style={{ margin: "0 0 8px 0", color: "#0a2540", fontFamily: "'Inter', sans-serif" }}>Your Clients</h1>
        <p style={{ margin: 0, color: "#6b7c8d", fontSize: "0.95rem" }}>
          Manage leads that have successfully converted into clients.
        </p>
      </div>

      <LeadsTableClient 
        initialLeads={clients} 
        isArchivedView={false} 
        emptyMessage="You do not have any clients yet. Convert a lead to see them here!" 
      />
    </div>
  );
}
