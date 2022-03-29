import React, { useState } from "react";
import axios from "axios";
import Cross from "../img/OopsCross.svg";
import { Button } from "react-bootstrap";
import logo from "../img/usu.jpeg";
import { Link } from "react-router-dom";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = async () => {
    const body = { email: email, password: password, username: username };
    const Swal = require("sweetalert2");
    try {
      const res = await axios.post("https://server-suti.herokuapp.com/api/v1/auth/signup", body).then((resp) => {
        Swal.fire({
          icon: "success",
          title: "Done",
          text: "Your Account has been registered",
          footer: "Great!!",
        });
      });

      console.log("respond api", res.data);
      console.log(body);
    } catch (error) {
      //   if (error.resp.status === 400) {
      //     // console.log("ini error", error.response.data.errors[0]);
      //     Swal.fire({
      //       imageUrl: `${Cross}`,
      //       imageWidth: 100,
      //       imageHeight: 100,
      //       imageAlt: "Custom image",
      //       width: 450,
      //       confirmButtonText: "Ok",
      //       confirmButtonColor: "#625BAD",
      //       title: error.resp.data[0],
      //       text: "Please Check Again",
      //     });
      //   }
      //   if (error.resp.status === 401) {
      //     // console.log("ini error", error.response.data.errors[0]);
      //     Swal.fire({
      //       imageUrl: `${Cross}`,
      //       imageWidth: 100,
      //       imageHeight: 100,
      //       imageAlt: "Custom image",
      //       width: 450,
      //       confirmButtonText: "Ok",
      //       confirmButtonColor: "#625BAD",
      //       title: error.resp.data[0],
      //       text: "Please Check Again",
      //     });
      //   }
      //   if (error.resp.status === 403) {
      //     alert(`Sesi anda habis, mohon login kembali`);
      //     if (error.resp.status === 500) {
      //       alert(`Sepertinya ada yang salah`);
      //     }
      //   }
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
        <img className="mb-4 rounded-circle bg-light" src={logo} alt="" width="300" height="300" />

        <h1 className="h2 mb-3 fw-normal text-white">Please Sign Up to get Account</h1>

        <div className="form d-flex align-item-center">
          <input type="text" style={{ width: "15rem" }} className="form-control mb-2" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form  d-flex align-item-center">
          <input type="text" style={{ width: "15rem" }} className="form-control mb-2" placeholder="Email" autoComplete="current-password" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form  d-flex align-item-center">
          <input type="text" style={{ width: "15rem" }} className="form-control mb-4" placeholder="Password" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <Button color="primary" style={{ width: "10rem" }} className="px-4 mb-3" onClick={handleSignup}>
          Sign Up
        </Button>
        <Link to="/">
          <Button color="primary" style={{ width: "10rem" }} className="px-4">
            Back to Login
          </Button>
        </Link>

        <h2 className="mt-5 mb-3 text-white">S-1 Ilmu Komputer USU</h2>
      </form>
    </>
  );
}

export default SignupForm;
