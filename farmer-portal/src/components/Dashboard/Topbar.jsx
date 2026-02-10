import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import logo from "../../assets/images/website logo.png";

const Topbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dashboard-header">
      {/* LEFT */}
      <div className="header-left">
        <img src={logo} alt="AgroTech" className="header-logo" />
        <h2>AgroTech</h2>
      </div>

      {/* RIGHT */}
      <div className="header-right">
        <div className="profile" onClick={() => setOpen(!open)}>
          <span className="farmer-name">Farmer Ravi</span>
          <span className="avatar">👨‍🌾</span>
        </div>

        {open && <ProfileDropdown />}
      </div>
    </div>
  );
};

export default Topbar;
