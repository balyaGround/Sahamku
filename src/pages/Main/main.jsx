import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg";
import "./main.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ModalEdit from "../../component/ModalEdit";
import { Modal } from "react-bootstrap";

function Main() {
  const [data, setData] = useState([]);
  const [show, SetShow] = useState(false);
  const [requestid, SetRequestId] = useState();
  // const handleShow = () => SetShow(true);

  const handleOpen = (requestid) => {
    SetRequestId(requestid);
    SetShow(true);
  };

  const getData = async () => {
    await axios
      .get("https://datapengumuman.herokuapp.com/data_saham")
      .then((result) => setData(result.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // didMount
    getData();
  }, []);
  console.log("data", data);

  return (
    <div>
      <div className="wrapper-main">
        <nav class="navbar navbar-expand-lg navbar-dark ">
          <div class="container">
            <a class="navbar-brand atas-main">
              <Link to="/">
                <img src={logo} alt="" style={{ width: "150px", height: "150px" }} class="d-inline-block align-text-top rounded-circle" />
              </Link>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#Profiles">
                    PROFIL
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Bluechips">
                    BlueChip
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Result">
                    Hasil
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section id="Profiles">
          <div class="container mt-5">
            <div class="row text-center mb-3 text-white">
              <div className="col main">
                <h1>PROFIL</h1>
              </div>
            </div>
            <div class="row text-center mb-4" data-aos="fade-right" data-aod-delay="500">
              <div className="col-3" style={{ marginLeft: "11rem" }}>
                <h3>Apa itu Spk?</h3>
              </div>
              <div className="row">
                <div class="card-saya" style={{ width: "40rem" }}>
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h4 class="card-title text-white">Sistem Pendukung Keputusan</h4>
                    <p class="card-text text-white"> bagian dari sistem informasi berbasis komputer termasuk sistem berbasis pengetahuan (manajemen pengetahuan) yang dipakai untuk mendukung pengambilan keputusan </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row text-center mb-4 mt-5" data-aos="fade-left" data-aos-delay="200">
              <div className="col-3" style={{ marginLeft: "65rem" }}>
                <h3>Apa itu TFN?</h3>
              </div>
              <div className="row ">
                <div className="col-8">
                  <span></span>
                </div>
                <div className="col-4">
                  <div class="card-saya" style={{ width: "40rem" }}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h4 class="card-title text-white mt-5 ">Triangular Fuzzy Number</h4>
                      <p class="card-text text-white ">Bilangan Triangular Fuzzy Number (TFN) adalah himpunan fuzzy, yang digunakan untuk pengukuran yang berhubungan dengan penilaian subjektif manusia yang memakai bahasalinguistik. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row text-center mb-4" data-aos="fade-right" data-aod-delay="500">
              <div className="col-3" style={{ marginLeft: "11rem" }}>
                <h3>Apa itu AHP?</h3>
              </div>
              <div className="row">
                <div class="card-saya" style={{ width: "40rem" }}>
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h4 class="card-title text-white">Analitycal Hierarchy Process</h4>
                    <p class="card-text text-white">
                      metode untuk memecahkan suatu situasi yang kompleks tidak terstruktur kedalam beberapa komponen dalam susunan yang hirarki, dengan memberi nilai subjektif tentang pentingnya setiap variabel secara relatif, dan
                      menetapkan variabel mana yang memiliki prioritas paling tinggi guna mempengaruhi hasil pada situasi tersebut{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Bluechips">
          <div class="container mt-5">
            <div class="row text-center mb-3 main">
              <h1>BLUECHIPS</h1>
            </div>
            <div class="row justify-content-evenly fs-5">
              <div class="col-md-9 text-start bluechips">
                <div className="col">
                  <h4 data-aos="zoom-in-right" data-aos-delay="200">
                    Perusahaan yg diakui secara nasional, mapan, dan sehat secara finansial. Perusahaan blue chip umumnya menjual produk dan layanan berkualitas tinggi dan diterima secara luas.
                  </h4>
                </div>
                <div className="col">
                  <h4 data-aos="zoom-in-right" data-aos-delay="300">
                    Masuk dalam 60 perusahaan dengan nilai transaksi di bursa tertinggi dalam 1 tahun terakhir
                  </h4>
                </div>
                <div className="col">
                  <h4 data-aos="zoom-in-right" data-aos-delay="400">
                    Masuk daftar 60 perusahaan dengan market capitalization tertinggi dalam 1 tahun atau 12 bulan terakhir
                  </h4>
                </div>
                <div className="col">
                  <h4 data-aos="zoom-in-right" data-aos-delay="400">
                    Menunjukkan kinerja keuangan serta prospek pertumbuhan yang tinggi
                  </h4>
                </div>
                <div className="col">
                  <h4 data-aos="zoom-in-right" data-aos-delay="500">
                    Telah listing di BEI minimal 3 bulan lamanya
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Result">
          <div class="container mt-5">
            <div class="row text-center mb-3 main ">
              <h1>HASIL</h1>
            </div>
            <div className="row">
              <div className="col-lg-12 mt-5">
                <h2>Masukkan Data Parameter Saham Bluechips Terbaru</h2>
              </div>
            </div>
          </div>
          <div className="album ">
            <div className="container">
              <div className="row justify-content-evenly">
                {data.map((item) => (
                  <div className="col saham">
                    <div className="col-card " data-aos="flip-left" data-aos-delay="400">
                      <img src={item.img} alt="" className="mt-3" />
                      <div className="card-body justify-text-center">
                        <p className="card-text text-black">{item.nama}</p>
                        <h5 className="card-text text-black">Price to Earning Ratio(PER) : {item.per}x</h5>
                        <h5 className="card-text text-black">Price to Book Value (PBV) : {item.pbv}x</h5>
                        <h5 className="card-text text-black">Return on Equity (ROE) : {item.roe}%</h5>
                        <h5 className="card-text text-black">Dividend Yield (DY) : {item.dy}%</h5>
                        <div className="d-flex justify-content-end align-items-center">
                          <div>
                            <button
                              type="button"
                              className="btn btn-m btn-outline-info"
                              onClick={() => {
                                handleOpen(item.id);
                              }}
                            >
                              Ubah
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <Modal show={show}>
                  <ModalEdit showModal={show} id={requestid} closeModal={SetShow} />
                </Modal>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Main;
