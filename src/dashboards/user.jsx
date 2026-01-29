import Sidebar from "../components/sideBar";

function Userdashboard() {
    const usermenu = ["profile", "orders", "support"]

    return(
        <div style={{ display: "flex" }}>
      <Sidebar
        title="User Menu"
        menuItems={usermenu}
      />

      <div style={{ padding: "20px" }}>
        <h1>User Dashboard</h1>
        <p>Welcome back!</p>
      </div>
    </div>
    )
}

export default Userdashboard;