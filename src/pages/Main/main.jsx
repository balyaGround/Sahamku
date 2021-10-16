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
  const [dataAwal, setDataAwal] = useState([]);

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
  const getDataAwal = async () => {
    await axios
      .get("https://datapengumuman.herokuapp.com/data_saham")
      .then((result) => setDataAwal(result.data))
      .catch((err) => console.log(err));
  };
  // const getBobot = async () => {
  //   await axios
  //     .get("https://datapengumuman.herokuapp.com/data_bobot")
  //     .then((result) => setBobotData(result.data))
  //     .catch((err) => console.log(err));
  // };

  // function shuffle(data) {
  //   for (let i = data.length - 1; i > 0; i--) {
  //     let j = Math.floor(Math.random() * (i + 1));
  //     let temp = data[i];
  //     data[i] = data[j];
  //     data[j] = temp;
  //   }
  //   return data;
  // }

  // const [hasil, setHasil] = useState({
  //   a: (Math.random() * (100.0 - 1.0 + 1.0) + 1.0).toFixed(2),
  //   b: (Math.random() * (100.0 - 1.0 + 1.0) + 1.0).toFixed(2),
  //   c: (Math.random() * (100.0 - 1.0 + 1.0) + 1.0).toFixed(2),
  //   d: (Math.random() * (100.0 - 1.0 + 1.0) + 1.0).toFixed(2),
  //   e: (Math.random() * (100.0 - 1.0 + 1.0) + 1.0).toFixed(2),
  //   f: (Math.random() * (100.0 - 1.0 + 1.0) + 1.0).toFixed(2),
  //   g: (Math.random() * (100.0 - 1.0 + 1.0) + 1.0).toFixed(2),
  //   h: (Math.random() * (100.0 - 1.0 + 1.0) + 1.0).toFixed(2),
  //   i: (Math.random() * (100.0 - 1.0 + 1.0) + 1.0).toFixed(2),
  //   j: (Math.random() * (100.0 - 1.0 + 1.0) + 1.0).toFixed(2),
  // });
  // const result = shuffle(data);

  // // console.log("random", result);
  // console.log("Hasil", hasil);
  useEffect(() => {
    // didMount
    getData();
  }, []);
  useEffect(() => {
    // didMount
    getDataAwal();
  }, []);

  // useEffect(() => {
  //   // didMount
  //   getBobot();
  // }, []);
  const test = data.map((item) => {
    if (item.pbv >= 0.1 && item.pbv <= 0.9) {
      item.pbv = 1;
    } else if (item.pbv >= 1 && item.pbv <= 1.9) {
      item.pbv = 0.75;
    } else if (item.pbv >= 2 && item.pbv <= 2.9) {
      item.pbv = 0.5;
    } else if (item.pbv >= 3 && item.pbv <= 3.9) {
      item.pbv = 0.25;
    } else item.pbv = 0;

    if (item.per >= 5 && item.per <= 9) {
      item.per = 1;
    } else if (item.per >= 10 && item.per <= 14) {
      item.per = 0.75;
    } else if (item.per >= 15 && item.per <= 19) {
      item.per = 0.5;
    } else if (item.per >= 20 && item.per <= 24) {
      item.per = 0.25;
    } else if (item.per > 24) item.per = 0;

    if (item.dy >= 0 && item.dy <= 0.9) {
      item.dy = 0;
    } else if (item.dy >= 1 && item.dy <= 1.9) {
      item.dy = 0.25;
    } else if (item.dy >= 2 && item.dy <= 2.9) {
      item.dy = 0.5;
    } else if (item.dy >= 3 && item.dy <= 3.9) {
      item.dy = 0.75;
    } else if (item.dy >= 4) item.dy = 1;

    if (item.roe >= 1 && item.roe <= 4.9) {
      item.roe = 0;
    } else if (item.roe >= 5 && item.roe <= 9.9) {
      item.roe = 0.25;
    } else if (item.roe >= 10 && item.roe <= 19.9) {
      item.roe = 0.5;
    } else if (item.roe >= 20 && item.roe <= 50) {
      item.roe = 0.75;
    } else if (item.roe > 50) item.roe = 1;

    return item;
  });
  console.log("test", test);
  // const bobotPbv = (data) => {
  //   if (data?.pbv >= 0.1 && data?.pbv <= 0.9) {
  //     bobotData.bobotPbv = 1;
  //   } else if (data?.pbv >= 1 && data?.pbv <= 1.9) {
  //     setBobotData.bobotPbv = 0.75;
  //   } else if (data?.pbv >= 2 && data?.pbv <= 2.9) {
  //     setBobotData.bobotPbv = 0.5;
  //   } else if (data?.pbv >= 3 && data?.pbv <= 3.9) {
  //     setBobotData.bobotPbv = 0.25;
  //   } else setBobotData.bobotPbv = 0;

  //   if (data?.per >= 5 && data?.per <= 9) {
  //     setBobotData.bobotPer = 1;
  //   } else if (data?.per >= 10 && data?.per <= 14) {
  //     setBobotData.bobotPer = 0.75;
  //   } else if (data?.per >= 15 && data?.per <= 19) {
  //     setBobotData.bobotPer = 0.5;
  //   } else if (data?.per >= 20 && data?.per <= 24) {
  //     setBobotData.bobotPer = 0.25;
  //   } else setBobotData.bobotPer = 0;

  //   if (data?.dy >= 0 && data?.dy <= 0.9) {
  //     setBobotData.bobotDy = 0;
  //   } else if (data?.dy >= 1 && data?.dy <= 1.9) {
  //     setBobotData.bobotDy = 0.25;
  //   } else if (data?.dy >= 2 && data?.dy <= 2.9) {
  //     setBobotData.bobotDy = 0.5;
  //   } else if (data?.dy >= 3 && data?.dy <= 3.9) {
  //     setBobotData.bobotDy = 0.75;
  //   } else setBobotData.bobotDy = 1;

  //   if (data?.roe >= 1 && data?.roe <= 4.9) {
  //     setBobotData.bobotRoe = 0;
  //   } else if (data?.roe >= 5 && data?.roe <= 9.9) {
  //     setBobotData.bobotRoe = 0.25;
  //   } else if (data?.roe >= 10 && data?.roe <= 19.9) {
  //     setBobotData.bobotRoe = 0.5;
  //   } else if (data?.roe >= 20 && data?.roe <= 50) {
  //     setBobotData.bobotRoe = 0.75;
  //   } else setBobotData.bobotRoe = 1;
  // };

  // useEffect(() => {
  //   // didMount
  //   nilaiBobotAwal(data);
  // }, []);
  // console.log("data", data);
  // console.log("bobot", bobotData);
  // console.log("bobot data", nilaiBobotAwal());

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
                    Proses
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Hasil">
                    Hasil
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section id="Profiles">
          <div class="container mt-5 ms-auto">
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
                <div class="card-saya" style={{ width: "45rem" }}>
                  <img src="https://giansister.files.wordpress.com/2017/10/dss.jpeg?w=640" className="card-img-top rounded-circle  " alt="..." />
                  <div class="card-body">
                    <h4 class="card-title text-black">Sistem Pendukung Keputusan</h4>
                    <p class="card-text text-black"> bagian dari sistem informasi berbasis komputer termasuk sistem berbasis pengetahuan (manajemen pengetahuan) yang dipakai untuk mendukung pengambilan keputusan </p>
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
                  <div class="card-saya">
                    <img src="https://infinityleap.com/wp-content/uploads/2016/comps/fuzzy%20logic.jpeg" className="card-img-top rounded-circle" alt="..." />
                    <div class="card-body">
                      <h4 class="card-title text-black mt-5 ">Triangular Fuzzy Number</h4>
                      <p class="card-text text-black ">Bilangan Triangular Fuzzy Number (TFN) adalah himpunan fuzzy, yang digunakan untuk pengukuran yang berhubungan dengan penilaian subjektif manusia yang memakai bahasalinguistik. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row text-center mb-4" data-aos="fade-right" data-aod-delay="500">
              <div className="col-3" style={{ marginLeft: "13rem" }}>
                <h3>Apa itu AHP?</h3>
              </div>
              <div className="row">
                <div class="card-saya" style={{ width: "47rem" }}>
                  <img src="https://2.bp.blogspot.com/-MYvDXrYiOY0/UYDFu61HLMI/AAAAAAAABLs/BUZFeaNdrPw/s1600/ahp.gif" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h4 class="card-title text-black">Analitycal Hierarchy Process</h4>
                    <p class="card-text text-black">
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
              <h1>Proses</h1>
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
                {dataAwal.map((item) => (
                  <div className="col saham">
                    <div className="col-card " data-aos="zoom-in" data-aos-delay="500">
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
        <section id="Hasil">
          <div class="container mt-5">
            <div class="row text-center mb-3 main">
              <h1>Hasil</h1>
            </div>
            <div class="row justify-content-evenly fs-5">
              <div class="col-md-12 text-start bluechips mt-2 " data-aos="zoom-in" data-aos-delay="100">
                <table className="table table-striped table-hover table-bordered border-info caption-top align-middle">
                  <caption className="text-white tex-bold">Tabel Hasil Perhitungan</caption>
                  <thead>
                    <tr>
                      <th scope="col">Nama</th>
                      <th scope="col">Harga Per Lot</th>
                      <th scope="col">Price to Earnings Ratio</th>
                      <th scope="col">Price to Book Value</th>
                      <th scope="col">Return on Equity </th>
                      <th scope="col">Dividend Yield</th>
                      <th scope="col">Hasil</th>
                      {/* <th scope="col">Hasil</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr>
                        <td>
                          <img src={item.img} alt="" className="rounded" style={{ width: "100px", height: "100px" }} />
                        </td>
                        <td>Rp.{item.harga_per_lot}</td>
                        <td>{item.per}x</td>
                        <td>{item.pbv}x</td>
                        <td>{item.roe}x</td>
                        <td>{item.dy}x</td>
                        <td>{item.hasil}%</td>

                        {/* <td>{item.roe}%</td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Main;
