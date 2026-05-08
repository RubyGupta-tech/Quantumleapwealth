"use client";

export default function DashboardExportButton({ leads }) {
  const handleExportCSV = () => {
    if (!leads || leads.length === 0) {
      alert("No data to export!");
      return;
    }

    const headers = ["Name", "Email", "Phone", "Interest", "Message", "Status", "Date", "Notes", "Tags"];
    
    const escapeCSV = (val) => {
      if (!val) return '""';
      const str = String(val).replace(/"/g, '""');
      return `"${str}"`;
    };

    const csvRows = leads.map(lead => [
      escapeCSV(lead.name),
      escapeCSV(lead.email),
      escapeCSV(lead.phone),
      escapeCSV(lead.service),
      escapeCSV(lead.message),
      escapeCSV(lead.status),
      escapeCSV(new Date(lead.createdAt).toLocaleString()),
      escapeCSV(lead.notes),
      escapeCSV(lead.tags)
    ].join(","));

    const csvContent = [headers.join(","), ...csvRows].join("\n");
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `crm_dashboard_export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      onClick={handleExportCSV}
      style={{ 
        padding: "10px 20px", 
        backgroundColor: "#c9a84c", 
        color: "white", 
        border: "none", 
        borderRadius: "8px",
        fontWeight: "600",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(201, 168, 76, 0.2)"
      }}>
      Export All Active Data
    </button>
  );
}
