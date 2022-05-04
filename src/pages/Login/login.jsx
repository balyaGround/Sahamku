import React from "react";
import LoginForm from "../../component/loginForm";
import "./login.css";
function Login() {
  return (
    <div className="container-login text-center pt-4" >
       <div className="row">
        <div className="col">
          <h3 className="text-white text-center">SISTEM PENDUKUNG KEPUTUSAN PEMILIHAN SAHAM BLUE CHIP UNTUK INVESTOR PEMULA DENGAN MENGGUNAKAN METODE FUZZY TRIANGULAR </h3>
        </div>
      </div>
      <div className="form-signin text-center d-flex justify-content-center m-0 p-0">
        <LoginForm />
      </div>
     
    </div>
  );
}

export default Login;
