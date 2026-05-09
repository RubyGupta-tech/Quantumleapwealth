import AdminSidebar from "@/components/AdminSidebar";

export const metadata = {
  title: "Admin Portal - Quantum Leap Wealth",
};

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f7fa" }}>
      {/* Sidebar Navigation */}
      <AdminSidebar />

      {/* Main Content Area */}
      {/* On desktop: marginLeft 260px for sidebar. On mobile: marginLeft 0, paddingTop for top bar */}
      <div style={{
        flex: 1,
        padding: "40px",
        // Desktop: offset for fixed sidebar
        marginLeft: "260px",
        // Will be overridden by inline responsive styles below
      }}
        className="admin-main-content"
      >
        {children}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .admin-main-content {
            margin-left: 0 !important;
            padding: 72px 16px 24px 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
