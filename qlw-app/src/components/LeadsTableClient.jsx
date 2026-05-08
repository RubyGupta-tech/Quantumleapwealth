"use client";

import { useState } from "react";
import LeadRow from "./LeadRow";

export default function LeadsTableClient({ initialLeads, isArchivedView, emptyMessage }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLeads = initialLeads.filter((lead) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      lead.name.toLowerCase().includes(searchLower) ||
      lead.email.toLowerCase().includes(searchLower) ||
      (lead.phone && lead.phone.toLowerCase().includes(searchLower)) ||
      (lead.service && lead.service.toLowerCase().includes(searchLower)) ||
      (lead.tags && lead.tags.toLowerCase().includes(searchLower))
    );
  });

  const handleExportCSV = () => {
    if (filteredLeads.length === 0) {
      alert("No data to export!");
      return;
    }

    const headers = ["Name", "Email", "Phone", "Interest", "Message", "Status", "Date", "Notes", "Tags"];
    
    const escapeCSV = (val) => {
      if (!val) return '""';
      const str = String(val).replace(/"/g, '""');
      return `"${str}"`;
    };

    const csvRows = filteredLeads.map(lead => [
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
    link.setAttribute("download", `crm_export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.03)", border: "1px solid #e2e8f0", overflow: "hidden" }}>
      <div style={{ padding: "20px 24px", borderBottom: "1px solid #e2e8f0", backgroundColor: "#f8fafc", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "15px", flex: 1 }}>
          <div style={{ fontWeight: "600", color: "#0a2540", whiteSpace: "nowrap" }}>
            Total: {filteredLeads.length}
          </div>
          <div style={{ position: "relative", width: "100%", maxWidth: "350px" }}>
            <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }}>🔍</span>
            <input 
              type="text" 
              placeholder="Search by name, email, phone, or tags..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 10px 10px 35px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                fontSize: "0.9rem",
                outline: "none",
                boxSizing: "border-box"
              }}
            />
          </div>
        </div>
        
        <button 
          onClick={handleExportCSV}
          style={{ 
            padding: "8px 16px", 
            backgroundColor: "#c9a84c", 
            color: "white", 
            border: "none", 
            borderRadius: "6px",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "0.85rem",
            boxShadow: "0 4px 6px rgba(201, 168, 76, 0.2)"
          }}>
          Export to Excel (CSV)
        </button>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "900px" }}>
          <thead>
            <tr style={{ textAlign: "left", fontSize: "0.85rem", color: "#6b7c8d", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              <th style={{ padding: "16px 24px", fontWeight: "600" }}>Name & Contact</th>
              <th style={{ padding: "16px 24px", fontWeight: "600" }}>Interest</th>
              <th style={{ padding: "16px 24px", fontWeight: "600" }}>Message</th>
              <th style={{ padding: "16px 24px", fontWeight: "600" }}>Date</th>
              <th style={{ padding: "16px 24px", fontWeight: "600", textAlign: "center" }}>Status</th>
              <th style={{ padding: "16px 24px", fontWeight: "600", textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.length === 0 ? (
              <tr><td colSpan="6" style={{ padding: "40px", textAlign: "center", color: "#94a3b8" }}>{searchTerm ? "No results found for your search." : emptyMessage}</td></tr>
            ) : (
              filteredLeads.map((lead) => (
                <LeadRow key={lead.id} lead={lead} isArchivedView={isArchivedView} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
