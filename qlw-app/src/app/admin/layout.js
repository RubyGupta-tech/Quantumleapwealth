import AdminSidebar from "@/components/AdminSidebar";

export const metadata = {
  title: "Admin Portal - Quantum Leap Wealth",
};

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f7fa" }}>
      <AdminSidebar />
      <div style={{ flex: 1, padding: "40px", marginLeft: "260px" }} className="admin-main-content">
        {children}
      </div>
    </div>
  );
}
