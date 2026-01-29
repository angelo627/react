import Sidebar from "../components/sideBar.jsx";


function AdminDashboard() {
    const adminMenu = ["users", "settings", "reports", "logs", "details"]

    return(
        <div style={{ display: "flex" }}>
       <Sidebar
        title="Admin Panel"
        menuitems={adminMenu}
       />

       <div style={{ padding: "20px" }}>
        <h1>Admin Dashboard</h1>
        <p>Manage the system here.</p>
       </div>
      </div>
    );
}

export default AdminDashboard;