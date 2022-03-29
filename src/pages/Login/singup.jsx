import React from "react";
import LoginForm from "../../component/loginForm";
import SignupForm from "../../component/SignUpForm";
import "./login.css";
function Signup() {
  return (
    <div className="container-login text-center pt-4" style={{ height: "100vh" }}>
      <div className="form-signin text-center d-flex justify-content-center m-0 p-0">
        <SignupForm />
      </div>
    </div>
  );
}

export default Signup;
