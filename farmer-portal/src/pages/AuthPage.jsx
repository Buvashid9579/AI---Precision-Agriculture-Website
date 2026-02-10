import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import "../components/auth/Auth.css";
import Header from "../components/Header/Header";

const AuthPage = ({ type }) => {
  return (
    <>
      <Header />

      <div className="auth-page corporate-bg">
        <div className="auth-container">
          {type === "login" ? <Login /> : <Signup />}
        </div>
      </div>
    </>
  );
};

export default AuthPage;
