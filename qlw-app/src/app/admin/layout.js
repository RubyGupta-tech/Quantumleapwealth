import AdminSidebar from "@/components/AdminSidebar";

export const metadata = {
  title: "CRM Admin - Quantum Leap Wealth",
};

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f7fa" }}>
      {/* Sidebar Navigation */}
      <AdminSidebar />
      
      {/* Main Content Area */}
      <div style={{ marginLeft: "260px", flex: 1, padding: "40px" }}>
        {children}
      </div>
    </div>
  );
}
