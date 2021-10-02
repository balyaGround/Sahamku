import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg";
import usu from "../../img/usu.jpeg";
import "./landing.css";
export default function LandingPage() {
  return (
    <div>
      <div className="wrapper">
        <nav class="navbar navbar-ligth bg-ligth">
          <div class="container-fluid">
            <div class="row">
              <div class="col judul">
                <a class="navbar-brand" href="#">
                  <img src={logo} alt="" style={{ width: "150px", height: "120" }} class="d-inline-block align-text-top rounded-circle" />
                </a>
                <h1 class="mt-5">SISTEM PENDUKUNG KEPUTUSAN PEMILIHAN SAHAM BLUE CHIP UNTUK INVESTOR PEMULA DENGAN MENGGUNAKAN METODE FUZZY TRIANGULAR </h1>
              </div>
            </div>
          </div>
        </nav>
        <div class="container">
          <div class="row text-center mb-5 mt-5">
            <div class="col">
              <img src={usu} alt="user" class="rounded-circle" />
              <h1>SUTI SULISTYANI</h1>
              <p>151401091</p>
              <p class="satu">Silahkan masuk untuk dapat mengakses Sahamku</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button type="button" class="button">
                <Link style={{ textDecoration: "none", color: "black" }} to="/main">
                  <a>Masuk</a>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
