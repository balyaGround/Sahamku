import React, { useState } from "react";
import axios from "axios";
import Cross from "../img/OopsCross.svg";
import load from "../img/load.gif";
import { Button } from "react-bootstrap";
import logo from "../img/usu.jpeg";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const body = { email: email, password: password };
    const Swal = require("sweetalert2");
    await Swal.fire({
      imageUrl: `${load}`,
      imageWidth: 800,
      imageHeight: 200,
      imageAlt: "Custom image",
      width: 500,
      timer: 2000,
      showConfirmButton: false,
      title: "Loading",
    });
    try {
      const res = await axios.post("https://server-suti.herokuapp.com/api/v1/auth/login", body).then((resp) => {
        localStorage.setItem("Token", resp.data.data.token);
        localStorage.setItem("USERID", resp.data.data.id);
        localStorage.setItem("ROLE", resp.data.data.role);
        localStorage.setItem("USERNAME", resp.data.data.username);
        window.location.replace("/main");
      });

      console.log("respond api", res.data);
    } catch (error) {
      if (error.response.status === 400) {
        // console.log("ini error", error.response.data.errors[0]);
        Swal.fire({
          imageUrl: `${Cross}`,
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: "Custom image",
          width: 450,
          confirmButtonText: "Ok",
          confirmButtonColor: "#625BAD",
          title: error.response.data.errors[0],
          text: "Please Check Again",
        });
      }
      if (error.response.status === 401) {
        // console.log("ini error", error.response.data.errors[0]);
        Swal.fire({
          imageUrl: `${Cross}`,
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: "Custom image",
          width: 450,
          confirmButtonText: "Ok",
          confirmButtonColor: "#625BAD",
          title: error.response.data.errors[0],
          text: "Please Check Again",
        });
      }
      if (error.response.status === 403) {
        alert(`Sesi anda habis, mohon login kembali`);
        if (error.response.status === 500) {
          alert(`Sepertinya ada yang salah`);
        }
      }
    }
  };

  // const handleLogin = async () => {
  //   // await axios.get("https://api-portal.herokuapp.com/api/v1/auth/admin", { headers: { Authorization: `Bearer ${Token}` } }).then((resp) => {
  //   //   const json = JSON.stringify(resp.data);
  //   //   const parsed = JSON.parse(json);
  //   //   OK = parsed.message;
  //   //   console.log(OK);
  //   // });

  //   await axios.get("https://api-portal.herokuapp.com/api/v1/auth/admin", { headers: { Authorization: `Bearer ${Token}` } }).then((resp) => {
  //     const json = JSON.stringify(resp.data);
  //     const parsed = JSON.parse(json);
  //     OK = parsed.message;
  //     console.log(OK);
  //     role = parsed.data.role;
  //     console.log("var role", role);
  //   });

  //   if (OK === "OK") {
  //     window.location.href = "/dashboard/" + role;
  //   }
  // };
  // console.log(loading);
  return (
    <>
      <form className="d-flex flex-column align-items-center">
        <h1 className="h3 mb-3 fw-normal text-white">SUTI SULISTYANI</h1>
        <h2 className="text-white">151401091</h2>
        <img className="mb-4 rounded-circle bg-light" src={logo} alt="" width="300" height="300" />
        <h1 className="h2 mb-3 fw-normal text-white">Please sign in</h1>

        <div className="form d-flex align-item-center">
          <input type="text" style={{ width: "15rem" }} className="form-control mb-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form  d-flex align-item-center">
          <input type="password" style={{ width: "15rem" }} className="form-control mb-2" placeholder="Password" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <Button color="primary" style={{ width: "10rem" }} className="px-4 mb-3" onClick={handleLogin}>
          Login
        </Button>
        <Link to="/signUp">
          <p>dont have an acoount? Sign up</p>
        </Link>
        <h2 className="mt-5 mb-3 text-white">
          Program S-1 Ilmu Komputer Fakultas Komputer dan Teknologi Informasi<br></br> Universitas Sumatera Utara
        </h2>
      </form>
    </>
  );
}

export default LoginForm;
