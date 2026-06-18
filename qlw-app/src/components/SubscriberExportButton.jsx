'use client';

import React from 'react';

export default function SubscriberExportButton({ subscribers }) {
  const handleExportFull = () => {
    if (!subscribers || subscribers.length === 0) {
      alert("No subscribers to export.");
      return;
    }
    const headers = ['First Name', 'Email', 'Source', 'Date Subscribed'];
    const csvContent = [
      headers.join(','),
      ...subscribers.map(sub => [
        `"${sub.firstName || ''}"`,
        `"${sub.email || ''}"`,
        `"${sub.source || ''}"`,
        `"${new Date(sub.createdAt).toLocaleDateString()}"`
      ].join(','))
    ].join('\n');
    downloadCSV(csvContent, 'Full_Details');
  };

  const handleExportEmails = () => {
    if (!subscribers || subscribers.length === 0) {
      alert("No subscribers to export.");
      return;
    }
    const headers = ['Email'];
    const csvContent = [
      headers.join(','),
      ...subscribers.map(sub => `"${sub.email || ''}"`)
    ].join('\n');
    downloadCSV(csvContent, 'Emails_Only');
  };

  const downloadCSV = (csvContent, type) => {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `QLW_Subscribers_${type}_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <button 
        onClick={handleExportFull}
        style={{
          padding: "8px 16px", borderRadius: "8px", fontSize: "0.85rem", fontWeight: "600",
          color: "#0a2540", backgroundColor: "#f1f5f9", border: "2px solid #e2e8f0",
          cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", transition: "all 0.2s"
        }}
        onMouseOver={(e) => { 
          e.currentTarget.style.backgroundColor = "#c9a84c"; 
          e.currentTarget.style.borderColor = "#c9a84c"; 
          e.currentTarget.style.color = "white"; 
        }}
        onMouseOut={(e) => { 
          e.currentTarget.style.backgroundColor = "#f1f5f9"; 
          e.currentTarget.style.borderColor = "#e2e8f0"; 
          e.currentTarget.style.color = "#0a2540"; 
        }}
      >
        <span>📄</span> Export Full Details
      </button>

      <button 
        onClick={handleExportEmails}
        style={{
          padding: "8px 16px", borderRadius: "8px", fontSize: "0.85rem", fontWeight: "600",
          color: "white", backgroundColor: "#c9a84c", border: "none",
          cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", transition: "background 0.2s"
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#b5953e"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#c9a84c"}
      >
        <span>📥</span> Export Emails Only
      </button>
    </div>
  );
}
