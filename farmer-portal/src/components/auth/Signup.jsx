import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="auth-card">
      <h2 className="auth-title">SIGNUP</h2>

      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />

      <button className="auth-btn">Signup</button>

      <p className="auth-switch">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
