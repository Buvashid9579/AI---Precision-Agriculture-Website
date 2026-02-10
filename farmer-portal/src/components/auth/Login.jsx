import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-card">
      <h2 className="auth-title">LOGIN</h2>

      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      <button className="auth-btn">Login</button>

      <p className="auth-switch">
        Don’t have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;
