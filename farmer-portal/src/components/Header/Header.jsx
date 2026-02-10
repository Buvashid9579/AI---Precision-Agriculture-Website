import "./Header.css";
import logo from "../../assets/images/website logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
            <header className="header">
                <div className="header-container">
                    {/* LEFT: Logo + Brand */}
                    <div className="header-left">
                    <img src={logo} alt="AgroTech Logo" className="logo" />
                    <div className="brand-text">
                        <h1>AgroTech</h1>
                        <p>IoT-Integrated Precision Agriculture</p>
                    </div>
                    </div>

                    {/* RIGHT: Navigation */}
                    <nav className="header-right">
                    <a href="/" className="nav-link">Home</a>
                    <a href="/login" className="nav-link">Login</a>
                    <a href="/signup" className="nav-btn">Signup</a>
                    </nav>
                 </div>
            </header>

        
  );
};

export default Header;
