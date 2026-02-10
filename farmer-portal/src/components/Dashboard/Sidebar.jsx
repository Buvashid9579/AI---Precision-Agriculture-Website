const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <a className="active">Dashboard</a>
        <a>Soil Health</a>
        <a>Crop Recommendation</a>
        <a>Weather</a>
        <a>Reports</a>
        <a>Profile</a>
        <a className="logout">Logout</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
