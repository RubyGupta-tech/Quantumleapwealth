"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LeadRow({ lead, isArchivedView }) {
  const router = useRouter();
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // State for the expanded panel
  const [isExpanded, setIsExpanded] = useState(false);
  const [notes, setNotes] = useState(lead.notes || "");
  const [tags, setTags] = useState(lead.tags || "");
  const [isSavingDetails, setIsSavingDetails] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case "New": return { bg: "#e0f2fe", text: "#0284c7" };
      case "In Discussion": return { bg: "#fef08a", text: "#854d0e" };
      case "Client": return { bg: "#dcfce7", text: "#166534" };
      default: return { bg: "#f1f5f9", text: "#475569" };
    }
  };

  const updateLead = async (payload) => {
    try {
      const res = await fetch(`/api/leads/${lead.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) router.refresh();
      else alert("Failed to update");
      return res.ok;
    } catch (err) {
      alert("Error connecting to server");
      return false;
    }
  };

  const handleStatusChange = async (e) => {
    setIsUpdating(true);
    await updateLead({ status: e.target.value });
    setIsUpdating(false);
  };

  const handleArchiveToggle = async () => {
    setIsUpdating(true);
    await updateLead({ isArchived: !lead.isArchived });
    setIsUpdating(false);
  };

  const handleSaveDetails = async () => {
    setIsSavingDetails(true);
    const success = await updateLead({ notes, tags });
    if (success) setIsExpanded(false);
    setIsSavingDetails(false);
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    setShowDeleteModal(false);
    try {
      const res = await fetch(`/api/leads/${lead.id}`, { method: "DELETE" });
      if (res.ok) router.refresh();
      else alert("Failed to delete");
    } catch (err) {
      alert("Error connecting to server");
    } finally {
      setIsDeleting(false);
    }
  };

  if (isDeleting) return null;

  const currentColors = getStatusColor(lead.status);

  // Parse tags for display if they exist
  const tagList = lead.tags ? lead.tags.split(',').map(t => t.trim()).filter(Boolean) : [];

  return (
    <>
      <tr style={{ borderTop: "1px solid #e2e8f0", transition: "background 0.2s", opacity: isUpdating ? 0.5 : 1, backgroundColor: isExpanded ? "#f8fafc" : "transparent" }}>
        <td style={{ padding: "16px 24px" }}>
          <div style={{ fontWeight: "600", color: "#0a2540" }}>{lead.name}</div>
          <div style={{ marginTop: "4px" }}>
            <a href={`mailto:${lead.email}`} style={{ fontSize: "0.85rem", color: "#0284c7", textDecoration: "none" }} title="Click to email">
              ✉️ {lead.email}
            </a>
          </div>
          <div style={{ fontSize: "0.85rem", color: "#6b7c8d", marginTop: "2px" }}>📞 {lead.phone || "-"}</div>
        </td>
        
        <td style={{ padding: "16px 24px" }}>
          <div style={{ color: "#475569", fontSize: "0.9rem", fontWeight: "500", marginBottom: "6px" }}>
            {lead.service || "General"}
          </div>
          {/* Display Tags */}
          {tagList.length > 0 && (
            <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
              {tagList.map((tag, idx) => (
                <span key={idx} style={{ padding: "2px 6px", backgroundColor: "#f1f5f9", color: "#475569", borderRadius: "4px", fontSize: "0.7rem", border: "1px solid #e2e8f0" }}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </td>
        
        <td style={{ padding: "16px 24px", color: "#475569", fontSize: "0.85rem", maxWidth: "250px" }}>
          <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} title={lead.message || ""}>
            {lead.message || <span style={{ color: "#cbd5e1", fontStyle: "italic" }}>No message</span>}
          </div>
        </td>
        
        <td style={{ padding: "16px 24px", color: "#475569", fontSize: "0.9rem" }}>
          {new Date(lead.createdAt).toLocaleDateString()}<br />
          <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{new Date(lead.createdAt).toLocaleTimeString()}</span>
        </td>
        
        <td style={{ padding: "16px 24px", textAlign: "center" }}>
          <select 
            value={lead.status} 
            onChange={handleStatusChange}
            disabled={isUpdating}
            style={{
              padding: "6px 10px",
              borderRadius: "20px",
              fontSize: "0.8rem",
              fontWeight: "600",
              backgroundColor: currentColors.bg,
              color: currentColors.text,
              border: `1px solid ${currentColors.text}`,
              outline: "none",
              cursor: "pointer",
              appearance: "none",
              WebkitAppearance: "none",
              textAlign: "center",
              width: "110px"
            }}
          >
            <option value="New">New</option>
            <option value="In Discussion">In Discussion</option>
            <option value="Client">Client</option>
          </select>
        </td>
        
        <td style={{ padding: "16px 24px", textAlign: "right" }}>
          <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ padding: "6px", background: "none", border: "none", cursor: "pointer", color: "#6b7c8d" }}
              title="Notes & Tags"
            >
              📝
            </button>
            <button 
              onClick={handleArchiveToggle}
              disabled={isUpdating}
              style={{ padding: "6px", background: "none", border: "none", cursor: "pointer", color: "#6b7c8d" }}
              title={lead.isArchived ? "Unarchive" : "Archive"}
            >
              📦
            </button>
            <button 
              onClick={() => setShowDeleteModal(true)}
              disabled={isUpdating}
              style={{ padding: "6px", background: "none", border: "none", cursor: "pointer", color: "#fca5a5" }}
              title="Delete"
            >
              🗑️
            </button>
          </div>
        </td>
      </tr>

      {/* Expandable Notes & Tags Panel */}
      {isExpanded && (
        <tr style={{ backgroundColor: "#f8fafc", borderBottom: "2px solid #e2e8f0" }}>
          <td colSpan="6" style={{ padding: "20px 24px" }}>
            <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#0a2540", marginBottom: "8px" }}>
                  Internal Notes & Call Logs
                </label>
                <textarea 
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="E.g. Called on Tuesday, left a voicemail..."
                  style={{
                    width: "100%",
                    minHeight: "80px",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid #cbd5e1",
                    fontSize: "0.9rem",
                    fontFamily: "inherit",
                    resize: "vertical",
                    outline: "none"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#c9a84c"}
                  onBlur={(e) => e.target.style.borderColor = "#cbd5e1"}
                />
              </div>
              
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#0a2540", marginBottom: "8px" }}>
                  Custom Tags <span style={{ color: "#94a3b8", fontWeight: "normal" }}>(comma separated)</span>
                </label>
                <input 
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="E.g. High Net Worth, Annuity, Call Back"
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    border: "1px solid #cbd5e1",
                    fontSize: "0.9rem",
                    outline: "none"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#c9a84c"}
                  onBlur={(e) => e.target.style.borderColor = "#cbd5e1"}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "10px" }}>
                <button 
                  onClick={() => setIsExpanded(false)}
                  style={{ padding: "8px 16px", backgroundColor: "white", border: "1px solid #cbd5e1", borderRadius: "6px", color: "#6b7c8d", fontSize: "0.85rem", fontWeight: "500", cursor: "pointer" }}
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSaveDetails}
                  disabled={isSavingDetails}
                  style={{ padding: "8px 16px", backgroundColor: "#0a2540", color: "white", border: "none", borderRadius: "6px", fontSize: "0.85rem", fontWeight: "600", cursor: "pointer" }}
                >
                  {isSavingDetails ? "Saving..." : "Save Details"}
                </button>
              </div>
            </div>
          </td>
        </tr>
      )}
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <tr>
          <td colSpan="6" style={{ padding: 0, border: "none" }}>
            {/* Full-screen overlay */}
            <div style={{
              position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              {/* Modal Card */}
              <div style={{
                backgroundColor: "white", borderRadius: "16px", padding: "36px",
                maxWidth: "420px", width: "90%", boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                textAlign: "center", animation: "fadeIn 0.2s ease"
              }}>
                {/* Icon */}
                <div style={{
                  width: "64px", height: "64px", borderRadius: "50%",
                  backgroundColor: "#fef2f2", display: "flex", alignItems: "center",
                  justifyContent: "center", margin: "0 auto 20px", fontSize: "2rem"
                }}>🗑️</div>

                <h3 style={{ margin: "0 0 12px", color: "#0a2540", fontSize: "1.25rem", fontWeight: "700" }}>
                  Delete Record?
                </h3>
                <p style={{ margin: "0 0 8px", color: "#475569", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  Are you sure you want to permanently delete
                </p>
                <p style={{ margin: "0 0 28px", color: "#0a2540", fontWeight: "700", fontSize: "1rem" }}>
                  {lead.name}
                </p>
                <p style={{ margin: "-16px 0 28px", color: "#ef4444", fontSize: "0.85rem", fontWeight: "500" }}>
                  ⚠️ This action cannot be undone.
                </p>

                <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    style={{
                      flex: 1, padding: "12px", backgroundColor: "white",
                      border: "1px solid #e2e8f0", borderRadius: "8px",
                      color: "#475569", fontWeight: "600", cursor: "pointer", fontSize: "0.95rem"
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDelete}
                    style={{
                      flex: 1, padding: "12px", backgroundColor: "#ef4444",
                      border: "none", borderRadius: "8px",
                      color: "white", fontWeight: "700", cursor: "pointer", fontSize: "0.95rem"
                    }}
                  >
                    Yes, Delete
                  </button>
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
