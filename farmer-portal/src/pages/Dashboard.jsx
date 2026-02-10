import Sidebar from "../components/Dashboard/Sidebar";
import Topbar from "../components/Dashboard/Topbar";
import DashboardCards from "../components/Dashboard/DashboardCards";
import "../components/Dashboard/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      {/* TOPBAR – full width */}
      <Topbar />

      {/* BODY */}
      <div className="dashboard-body">
        <Sidebar />
        <main className="dashboard-content">
          <DashboardCards />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
