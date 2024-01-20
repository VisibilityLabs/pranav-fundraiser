import React, {useState} from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { GET, POST } from "../../apis/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import "./index.css";

const Login = () => {
  // const { login, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate()
  const handleLogin = async () => {
    // login({email, password})
    navigation('/')
  }
  return (
    <div className="login-page">
      <div className="login-content">
        <div className="login-heading">Log in</div>
        <div>
          Don't have an account? <span className="sign-up-link">Sign Up</span>
        </div>
        <div className="login-input-fields">
          <input type="text" className="login-input-top" placeholder="Email" onChange={(e) => {
            setEmail(e.target.value);
          }}  />
          <input
            type="text"
            className="login-input-bottom"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="forgot-password-section">
            <div className="forgot-password-text">Forgot Password?</div>
          </div>
          <div className="login-button">
            <div className="login-button-text"
              onClick={() => {
                handleLogin();
              }}
            >Login</div>
          </div>
          <div className="login-legal-conditions">
            By logging in or continuing, you accept Change.org's
            <span className="terms-of-service"> Terms of Service</span> and
            <span className="privacy-policy"> Privacy Policy </span>.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;