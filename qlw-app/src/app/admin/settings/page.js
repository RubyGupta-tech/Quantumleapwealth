"use client";

import { useState, useEffect } from "react";

export default function SettingsPage() {
  const [notificationEmail, setNotificationEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    // Fetch existing settings
    fetch("/api/settings")
      .then(res => res.json())
      .then(data => {
        if (data.notification_email) {
          setNotificationEmail(data.notification_email);
        } else {
          // Fallback if not set
          setNotificationEmail("hello@quantumleapwealth.com");
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Error fetching settings:", err);
        setIsLoading(false);
      });
  }, []);

  const handleSaveEmail = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage({ text: "", type: "" });

    try {
      const res = await fetch("/api/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notification_email: notificationEmail })
      });
      
      if (res.ok) {
        setMessage({ text: "Notification email updated successfully!", type: "success" });
      } else {
        setMessage({ text: "Failed to update email.", type: "error" });
      }
    } catch (err) {
      setMessage({ text: "An error occurred.", type: "error" });
    }
    setIsSaving(false);
  };

  const handleSavePassword = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setMessage({ text: "Passwords do not match!", type: "error" });
      return;
    }

    if (newPassword.length < 6) {
      setMessage({ text: "Password must be at least 6 characters.", type: "error" });
      return;
    }

    setIsSaving(true);
    setMessage({ text: "", type: "" });

    try {
      const res = await fetch("/api/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ admin_password: newPassword })
      });
      
      if (res.ok) {
        setMessage({ text: "Master password updated successfully! Please use this next time you log in.", type: "success" });
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setMessage({ text: "Failed to update password.", type: "error" });
      }
    } catch (err) {
      setMessage({ text: "An error occurred.", type: "error" });
    }
    setIsSaving(false);
  };

  if (isLoading) {
    return <div style={{ padding: "40px", color: "#6b7c8d" }}>Loading settings...</div>;
  }

  return (
    <div style={{ maxWidth: "800px" }}>
      <div style={{ marginBottom: "40px" }}>
        <h1 style={{ margin: "0 0 8px 0", color: "#0a2540", fontFamily: "'Inter', sans-serif" }}>Dashboard Settings</h1>
        <p style={{ margin: 0, color: "#6b7c8d", fontSize: "0.95rem" }}>
          Manage your secure dashboard configuration.
        </p>
      </div>

      {message.text && (
        <div style={{ 
          padding: "16px", 
          marginBottom: "30px", 
          borderRadius: "8px", 
          backgroundColor: message.type === 'error' ? '#fef2f2' : '#f0fdf4',
          color: message.type === 'error' ? '#991b1b' : '#166534',
          border: `1px solid ${message.type === 'error' ? '#fecaca' : '#bbf7d0'}`,
          fontWeight: "500"
        }}>
          {message.text}
        </div>
      )}

      {/* Notifications Section */}
      <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.03)", border: "1px solid #e2e8f0", overflow: "hidden", marginBottom: "30px" }}>
        <div style={{ padding: "20px 24px", borderBottom: "1px solid #e2e8f0", backgroundColor: "#f8fafc" }}>
          <h2 style={{ margin: 0, fontSize: "1.1rem", color: "#0a2540" }}>✉️ Email Notifications</h2>
          <p style={{ margin: "5px 0 0", fontSize: "0.85rem", color: "#6b7c8d" }}>Change the email address where new website leads are sent.</p>
        </div>
        <form onSubmit={handleSaveEmail} style={{ padding: "24px" }}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem", color: "#334155" }}>
              Notification Email Address
            </label>
            <input 
              type="email" 
              required
              value={notificationEmail}
              onChange={(e) => setNotificationEmail(e.target.value)}
              style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "1rem" }}
            />
          </div>
          <button 
            type="submit" 
            disabled={isSaving}
            style={{ 
              padding: "10px 20px", 
              backgroundColor: "#0a2540", 
              color: "white", 
              border: "none", 
              borderRadius: "8px",
              fontWeight: "600",
              cursor: isSaving ? "not-allowed" : "pointer",
              opacity: isSaving ? 0.7 : 1
            }}>
            {isSaving ? "Saving..." : "Save Email Preferences"}
          </button>
        </form>
      </div>

      {/* Security Section */}
      <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.03)", border: "1px solid #e2e8f0", overflow: "hidden" }}>
        <div style={{ padding: "20px 24px", borderBottom: "1px solid #e2e8f0", backgroundColor: "#fef2f2" }}>
          <h2 style={{ margin: 0, fontSize: "1.1rem", color: "#991b1b" }}>🔒 Security Settings</h2>
          <p style={{ margin: "5px 0 0", fontSize: "0.85rem", color: "#b91c1c" }}>Update the master password required to access this dashboard.</p>
        </div>
        <form onSubmit={handleSavePassword} style={{ padding: "24px" }}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem", color: "#334155" }}>
              New Password
            </label>
            <input 
              type="password" 
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter a secure password"
              style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "1rem" }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem", color: "#334155" }}>
              Confirm New Password
            </label>
            <input 
              type="password" 
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-type your new password"
              style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "1rem" }}
            />
          </div>
          <button 
            type="submit" 
            disabled={isSaving}
            style={{ 
              padding: "10px 20px", 
              backgroundColor: "#ef4444", 
              color: "white", 
              border: "none", 
              borderRadius: "8px",
              fontWeight: "600",
              cursor: isSaving ? "not-allowed" : "pointer",
              opacity: isSaving ? 0.7 : 1
            }}>
            {isSaving ? "Saving..." : "Change Master Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
