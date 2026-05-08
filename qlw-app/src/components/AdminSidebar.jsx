"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: "📊", path: "/admin" },
    { name: "Leads Inbox", icon: "📥", path: "/admin/leads" },
    { name: "Clients", icon: "👥", path: "/admin/clients" },
    { name: "Settings", icon: "⚙️", path: "/admin/settings" },
  ];

  return (
    <aside style={{
      width: "260px",
      backgroundColor: "#0a2540",
      color: "white",
      height: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      display: "flex",
      flexDirection: "column",
      borderRight: "1px solid rgba(255,255,255,0.1)"
    }}>
      <div style={{ padding: "20px 15px", borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <div style={{ backgroundColor: "white", padding: "6px 12px", borderRadius: "8px", display: "flex", justifyContent: "center" }}>
          <img 
            src="/images/QWL_logo_backup.png?v=2.0" 
            alt="Quantum Leap Wealth Logo" 
            style={{ width: "100%", maxWidth: "110px", height: "auto", display: "block" }} 
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", margin: 0, fontSize: "1.1rem", color: "#c9a84c" }}>
            AnuPrasad Admin Portal
          </h2>
          <p style={{ margin: "2px 0 0", fontSize: "0.7rem", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.5px" }}>Quantum Leap Wealth</p>
        </div>
      </div>

      <nav style={{ padding: "20px 10px", flex: 1 }}>
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                borderRadius: "8px",
                textDecoration: "none",
                color: isActive ? "white" : "rgba(255,255,255,0.7)",
                backgroundColor: isActive ? "rgba(201, 168, 76, 0.2)" : "transparent",
                marginBottom: "8px",
                transition: "all 0.2s",
                fontWeight: isActive ? "600" : "400"
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div style={{ padding: "20px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", gap: "15px" }}>
        <a href="/" style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "rgba(255,255,255,0.7)",
          textDecoration: "none",
          fontSize: "0.9rem"
        }}>
          <span>🌍</span> Back to Website
        </a>
        
        <button 
          onClick={async () => {
            await fetch('/api/auth/logout', { method: 'POST' });
            window.location.href = '/login';
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            color: "white",
            backgroundColor: "#ef4444",
            border: "1px solid #dc2626",
            borderRadius: "6px",
            padding: "10px",
            cursor: "pointer",
            fontSize: "0.95rem",
            fontWeight: "600",
            width: "100%",
            transition: "all 0.2s"
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#dc2626"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#ef4444"}
        >
          <span>🔒</span> Logout
        </button>
      </div>
    </aside>
  );
}
