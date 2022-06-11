import React from "react";
import { Link } from "react-router-dom";
import "../Main/main.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ModalEdit from "../../component/ModalEdit";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Proses from "../hasil/proses";
import Cross from "../../img/OopsCross.svg";
function Main() {
  const [data, setData] = useState([]);
  const [show, SetShow] = useState(false);
  const [dataOlah, setdataOlah] = useState([]);
  // const [hasil, SetShow] = useState([]);
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
  const getDataBaru = async () => {
    await axios
      .get("https://datapengumuman.herokuapp.com/data_saham")
      .then((result) => setdataOlah(result.data))
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
  useEffect(async () => {
    // didMount
    await getData();
    await getDataBaru();
  }, []);

  // let bobotPbv = data.map((item) => {
  //   if (item.pbv >= 0.1 && item.pbv <= 0.9) {
  //     bobotPbv = 1;
  //   } else if (item.pbv >= 1 && item.pbv <= 1.9) {
  //     bobotPbv = 0.75;
  //   } else if (item.pbv >= 2 && item.pbv <= 2.9) {
  //     bobotPbv = 0.5;
  //   } else if (item.pbv >= 3 && item.pbv <= 3.9) {
  //     bobotPbv = 0.25;
  //   } else bobotPbv = 0;
  // });

  // let bobotRoe = data.map((item) => {
  //   if (item.roe >= 1 && item.roe <= 4.9) {
  //     item.roe = 0;
  //   } else if (item.roe >= 5 && item.roe <= 9.9) {
  //     item.roe = 0.25;
  //   } else if (item.roe >= 10 && item.roe <= 19.9) {
  //     item.roe = 0.5;
  //   } else if (item.roe >= 20 && item.roe <= 50) {
  //     item.roe = 0.75;
  //   } else bobotRoe = 1;
  // });
  // console.log("bobot roe>>>>", bobotRoe);
  // console.log("bobot PBV>>>>>", bobotPbv);

  const test = dataOlah?.map((item) => {
    if (item?.pbv >= 0.1 && item?.pbv <= 0.9) {
      item.pbv = 1;
    } else if (item?.pbv >= 1 && item?.pbv <= 1.9) {
      item.pbv = 0.75;
    } else if (item?.pbv >= 2 && item?.pbv <= 2.9) {
      item.pbv = 0.5;
    } else if (item?.pbv >= 3 && item?.pbv <= 3.9) {
      item.pbv = 0.25;
    } else item.pbv = 0;

    if (item?.per >= 5 && item?.per <= 9) {
      item.per = 1;
    } else if (item?.per >= 10 && item?.per <= 14) {
      item.per = 0.75;
    } else if (item?.per >= 15 && item?.per <= 19) {
      item.per = 0.5;
    } else if (item?.per >= 20 && item?.per <= 24) {
      item.per = 0.25;
    } else if (item?.per > 24) item.per = 0;

    if (item?.dy >= 0 && item?.dy <= 0.9) {
      item.dy = 0;
    } else if (item?.dy >= 1 && item?.dy <= 1.9) {
      item.dy = 0.25;
    } else if (item?.dy >= 2 && item?.dy <= 2.9) {
      item.dy = 0.5;
    } else if (item?.dy >= 3 && item?.dy <= 3.9) {
      item.dy = 0.75;
    } else if (item?.dy >= 4) item.dy = 1;

    if (item?.roe >= 1 && item?.roe <= 4.9) {
      item.roe = 0;
    } else if (item?.roe >= 5 && item?.roe <= 9.9) {
      item.roe = 0.25;
    } else if (item?.roe >= 10 && item?.roe <= 19.9) {
      item.roe = 0.5;
    } else if (item?.roe >= 20 && item?.roe <= 50) {
      item.roe = 0.75;
    } else if (item?.roe > 50);
    item.roe = 1;
    return item;
  });
  // console.log("test", test);
  console.log("data Awal", data);
  console.log("first", test);
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
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`} {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const handleSignOut = async () => {
    const Swal = require("sweetalert2");
    await Swal.fire({
      title: "Do you want to Logout?",
      showCancelButton: true,
      confirmButtonText: "Ok",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        window.location.replace("/");
      } else {
        window.location.reload();
      }
    });
  };
  return (
    <>
      {/* <Header /> */}
      <div className="container-fluid p-0 m-0">
        <div className="row ">
          <div className="col-12">
            <Box className="box" sx={{ width: "100%" }}>
              <AppBar position="static" color="inherit">
                <Tabs classname="tabss" centered value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" variant="scrollable" aria-label="full width tabs example">
                  <Tab label="Profiles" {...a11yProps(0)} />
                  <Tab label="Bluechip" {...a11yProps(1)} />
                  {/* <Tab label="Parameter" {...a11yProps(2)} /> */}
                  <Tab label="Proses" {...a11yProps(2)} />
                  <Tab label="Hasil" {...a11yProps(3)} />
                  <Tab label="Log Out" {...a11yProps(4)} onClick={handleSignOut} />
                </Tabs>
              </AppBar>
              <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={handleChangeIndex}>
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <div class="container mt-1 ms-auto">
                    <div class="row text-center mb-3 text-white">
                      <div className="col main">
                        <h1>PROFIL</h1>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col">
                        <div class="card-saya">
                          <div class="card-body">
                            <h2 class="card-title text-black">Mengenal Saham</h2>
                            <p class="card-text text-black ">
                              Saham merupakan salah satu instrument investasi yang bisa digunakan untuk mencapai tujuan keuangan anda. Tujuan dari berinvestasi saham biasanya untuk memperoleh keuntungan dari kenaikan harga (capital gain)
                              ataupun dividen (cashflow). Investasi saham, biasanya lebih cocok untuk investasi jangka panjang agar memperoleh keuntungan yang optimal. Investasi saham memiliki tingkat potensi keuntungan yang tinggi, namun
                              tingkat risikonya juga tinggi karna investasi saham. Saham menurut M. Paulus Situmorang (2008:45) Saham adalah tanda pernyataan modal pada suatu perusahaan perseroan terbatas dengan manfaat yang dapat diperoleh
                              berupa deviden yaitu bagian dari keuntungan perusahaan yang dibagikan kepada harga belinya, manfaat non-financial antara lain berupa konsekuensinya atas kepemilikan saham berupa kekuasaaan, kebanggaan dan
                              khususnya hak suara dalam menentukan jalannya perusahaan. Di Bursa Efek Indonesia (BEI), ada yang disebut sebagai Indeks Saham, yang merupakan ukuran statistik terhadap pergerakan harga dari daftar saham yang
                              dipilih berdasarkan karakteristik atau kriteria tertentu yang digunakan sebagai wadah atau sarana untuk investasi. Ada 22 jenis indeks saham di BEI, beberapa di antaranya misalnya Indeks Harga Saham Gabungan
                              (IHSG), Indeks LQ45, Indeks IDX30, Indeks Kompas100, Indeks Saham Syariah Indonesia (ISSI), Indeks IDX BUMN20, dan seterusnya. Ada beberapa Permasalahan konvensional pemilihan saham muncul apabila tersedia
                              lebih dari beberapa alternatif pilihan saham dan beberapa kriteria – kriteria yang menjadi bahan pertimbangan dalam pembelian saham tersebut. Secara global ada dua kelompok kriteria pemilihan saham, yaitu:
                              pertimbangan fundamental dan pertimbangan teknikal (Hartono, 2003).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row ">
                      <div className="col">
                        <div class="card-saya">
                          <div class="card-body">
                            <h2 class="card-title text-black">Jenis saham</h2>
                            <p class="card-text text-black ">
                              1. Saham Biasa <br></br>
                              2. Saham Preferen Ciri ciri saham: <br></br>
                              1. Saham yang Anomali dan Indeks <br></br>
                              2. Saham yang posisi open lebih rendah dari posisi close <br></br>
                              3. Saham yang jatuh dalam Manfaat saham:<br></br>
                              1. Deviden <br></br>
                              Deviden adalah bagian laba pada perusahan yang diberikan pada penjabat saham. Beberapa deviden yang diberikan dan dianjurkan oleh Dewan Direksi dan disepakati dalam RUPM. <br></br>
                              2. Capital Gain Penanaman modal dapat menghayati capital gain, ketika tariff jual melampaui tarif beli saham tersebut. Risiko saham: Adapun beberapa risiko pada saham, yaitu:<br></br>
                              1. Tidak terdapat pembagian deviden <br></br>
                              2. Risiko Likuidasi <br></br>
                              3. Saham delisting dari bursa <br></br>
                              4. Kehilangan aset Karakteristik saham: Dalam hal ini, karakteristik saham adalah karakteristik saham perusahaan go – public.<br></br>
                              Terdapat 3 jenis nilai yang melekat pada suatu saham perusahaan go – public, adalah: <br></br>
                              1. Nilai nominal (Nilai pari) <br></br>
                              2. Nilai wajar saham <br></br>
                              3. Nilai pasar
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <div class="container mt-1">
                    <div class="row text-center mb-3 main">
                      <h1>BLUECHIPS</h1>
                    </div>
                    <div class="row text-center mb-4">
                      {" "}
                      {/* data-aos="fade-right" data-aod-delay="500"// */}
                      <div className="col">
                        <h1 className="mb-4">Mengenal Saham Bluechip: Pengertian dan kriterianya</h1>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div class="card-saya">
                            <img src="https://giansister.files.wordpress.com/2017/10/dss.jpeg?w=640" className="card-img-top rounded-circle  " alt="..." />
                            <div class="card-body">
                              <h2 class="card-title text-black">Apa itu Bluechip</h2>
                              <p class="card-text text-black ">
                                Saham menjadi salah satu instrumen investasi yang cukup populer di Indonesia, salah satunya adalah saham blue chip. Melalui bursa saham atau pasar modal, masyarakat bisa meraih keuntungan sebagai salah satu
                                cara memperkuat kondisi finansialnya.<br></br>
                                Bagi Anda yang tertarik atau baru mencoba instrumen investasi ini, mungkin Anda akan menemukan berbagai istilah baru. Dua diantaranya ialah saham LQ45, dan saham blue chip.<br></br>
                                Saham blue chip sendiri diartikan sebagai saham lapis dari perusahaan besar yang labanya sudah stabil. Istilah Blue Chip awalnya berasal dari permainan poker. Dalam permainan poker, keping koin (chip)
                                berwarna biru memiliki nilai tertinggi dibandingkan warna merah dan putih.<br></br>
                                <br></br>
                                Istilah Blue Chip dipakai dan dikenal secara luas di dunia saham setelah diperkenalkan oleh Oliver Gingold. Saat itu, Gingold melihat tren bahwa saham-saham seharga USD 200-USD 250 menarik minat investor.
                                Setelah itu, ia kembali ke kantor kemudian berkata kepada temannya untuk menuliskan blue chip stocks atau saham-saham kepingan biru. Dari situlah, istilah blue chip hingga saat ini terkenal dan digunakan oleh
                                mereka yang terjun ke dunia saham. Sejak saat itu, penggunaan terminologi Blue Chip digunakan untuk saham-saham unggulan di dunia pasar modal. <br></br>
                                <br></br>
                                Menurut New York Stock Exchange, blue chip dapat didefinisikan sebagai saham dari perusahaan yang memiliki reputasi nasional, baik dari sisi kualitas, kemampuan serta kehandalan untuk beroperasi yang
                                menguntungkan dalam berbagai situasi ekonomi dengan keadaan baik maupun buruk. Dengan kata lain, saham blue juga biasa diartikan sebagai saham papan atas yang bergerak di bidang industri, umumnya pada
                                perusahaan besar.<br></br>
                                Selain memiliki kapitalisasi pasar yang besar dan ramai diperdagangkan, saham blue chip punya kriteria lainnya, yaitu saham yang menjadi market leader (pemimpin pasar) di sektornya. Oleh karena itu,
                                perusahaan yang masuk ke dalam kategori saham blue chip harus memiliki etos kerja yang baik, fundamental yang baik, serta dikelola oleh orang-orang profesional dan dikerjakan oleh banyak orang.{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row text-center mb-4 mt-5" data-aos="fade-down " data-aos-delay="200">
                      <div className="col">
                        <div class="card-saya">
                          <div class="card-body">
                            <h2 class="card-title text-black mt-5 ">Ciri Perusahaan Kategori Saham Blue Chip</h2>
                            <p class="card-text text-black ">
                              Sebagai saham blue chip, perusahaan yang masuk ke dalam kelompok saham blue chip harus memiliki beberapa kriteria atau kategori agar bisa disebut sebagai saham blue chip. Salah satunya adalah memiliki
                              kapitalisasi besar. Nilai kapitalisasi suatu perusahaan mampu mencapai nilai triliunan rupiah. Besarnya kapitalisasi pasar ini mampu membuat investor sulit dalam memanipulasi harga. Selain itu, saham Blue Chip
                              juga memiliki likuiditas yang bagus. Biasanya likuiditas ini dipengaruhi oleh jumlah saham yang dimiliki publik atau beredar di bursa. Makin banyak kepemilikan saham publik, maka makin likuid pula saham
                              tersebut. Saham yang masuk ke dalam kategori Blue Chip biasanya juga telah sudah cukup lama lama terdaftar di Bursa Efek Indonesia, dengan jangka waktu minimal lima tahun.
                            </p>
                            <h3 className=" text-black">Saham Blue Chip: Nilai Kapitalisasi Besar</h3>
                            <p className="card-text  text-black">
                              Ciri pertama dari saham blue chip adalah kapitalisasi yang besar, adapun istilah kapitalisasi adalah harga perusahaan jika ingin dibeli secara utuh. Untuk saham blue chip, memiliki kapitalisasi besar di atas
                              Rp40 triliun. Untuk penggolongannya sendiri, biasanya ketika kapitalisasi sudah mencapai di atas Rp10 triliun ke atas maka sudah dikatakan besar. Sementara untuk kapitalisasi antara Rp500 miliar hingga Rp10
                              triliun, maka saham itu akan dikategorikan sebagai saham lapis dua. Kemudian, untuk harga di bawah Rp500 miliar, makan akan dimasukkan ke dalam saham lapis tiga.
                            </p>
                            <h3 className=" text-black">Saham Blue Chip: Pemimpin di Sektor Industrinya</h3>
                            <p className=" card-text text-black">
                              Untuk ciri-ciri lain saham blue chip adalah perusahaan dengan saham ini merupakan pemimpin di sektor industrinya. Produknya bisa saja sudah terkenal di nasional maupun internasional, sehingga sudah pasti telah
                              beroperasi selama puluhan tahun.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row text-center mb-4">
                      <div class="card-saya">
                        <div class="card-body">
                          <h3 className=" text-black">Saham Blue Chip: Dividen yang Konsisten</h3>
                          <p className=" card-text text-black">
                            Ciri-ciri berikutnya dari saham blue chip adalah perusahaan yang memiliki dividen konsisten. Dividen sendiri adalah laba yang dihasilkan perusahaan tersebut, kemudian diberikan kepada pemegang saham dalam kurun
                            waktu 10 tahun secara konsisten. Tiap tahunnya perusahaan tersebut memberikan laba sebagai bentuk apresiasi atas dukungan pemegang saham tersebut. Hal inilah yang membuat saham perusahaan tersebut layak
                            dikategorikan sebagai saham blue chip.
                          </p>
                          <h3 className=" text-black">Saham Blue Chip: Kinerja Perusahaan Sudah Solid</h3>
                          <p className="card-text  text-black">
                            Ciri saham blue chip yang selanjutnya adalah memiliki trek kinerja perusahaan yang solid. Misalnya saja seperti laba yang dihasilkan konsisten, memiliki produk berkualitas dan dicintai masyarakat, track record
                            perusahaan terus tumbuh tiap tahunnya. Dengan kata lain, perusahaan dengan saham blue chip termasuk ke dalam kategori perusahaan yang tidak mudah goyah dan bangkrut meskipun keadaan ekonomi sedang mengalami
                            krisis sekalipun.
                          </p>
                          <h2 className=" text-black">Saham Blue Chip: Ramai Diperdagangkan</h2>
                          <p className="card-text  text-black">
                            Banyak investor, baik itu perorangan maupun lembaga yang memiliki dan memperdagangkan saham blue chip ini. Saham yang masuk ke dalam kategori blue chip juga selalu memasuki daftar teraktif di bursa serta masuk
                            indeks LQ45. Adapun, LQ45 ini adalah indeks yang berisikan saham-saham likuid ataupun saham-saham yang ramai diperdagangkan, dan rata-rata saham blue chip ada di dalam indeks tersebut.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-evenly fs-5">
                      <div class="col text-start bluechips">
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
                        <div className="col mb-2 pb-1">
                          <h4 data-aos="zoom-in-right" data-aos-delay="500">
                            Telah listing di BEI minimal 3 bulan lamanya
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                {/* <TabPanel value={value} index={2} dir={theme.direction}>
                  <div class="container mt-1">
                    <div class="row text-center mb-3 main">
                      <h1>BLUECHIPS</h1>
                    </div>
                    <div class="row justify-content-evenly fs-5">
                      <div class="col text-start bluechips">
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
                        <div className="col mb-2 pb-1">
                          <h4 data-aos="zoom-in-right" data-aos-delay="500">
                            Telah listing di BEI minimal 3 bulan lamanya
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div> */}

                <TabPanel value={value} index={2} dir={theme.direction}>
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
                        {data.map((item) => (
                          <div className="col saham">
                            <div className="col-card " data-aos="zoom-in" data-aos-delay="500">
                              <img src={item.img} alt="" className="mt-3 " />
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
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
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
                            </tr>
                          </thead>
                          <tbody>
                            {dataOlah.map((item) => (
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
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction}>
                  <div class="container mt-1 ms-auto">
                    <div class="row text-center mb-3 text-white">
                      <div className="col main">
                        <h1>PROFIL</h1>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col">
                        <div class="card-saya">
                          <div class="card-body">
                            <h2 class="card-title text-black">Mengenal Saham</h2>
                            <p class="card-text text-black ">
                              Saham merupakan salah satu instrument investasi yang bisa digunakan untuk mencapai tujuan keuangan anda. Tujuan dari berinvestasi saham biasanya untuk memperoleh keuntungan dari kenaikan harga (capital gain)
                              ataupun dividen (cashflow). Investasi saham, biasanya lebih cocok untuk investasi jangka panjang agar memperoleh keuntungan yang optimal. Investasi saham memiliki tingkat potensi keuntungan yang tinggi, namun
                              tingkat risikonya juga tinggi karna investasi saham. Saham menurut M. Paulus Situmorang (2008:45) Saham adalah tanda pernyataan modal pada suatu perusahaan perseroan terbatas dengan manfaat yang dapat diperoleh
                              berupa deviden yaitu bagian dari keuntungan perusahaan yang dibagikan kepada harga belinya, manfaat non-financial antara lain berupa konsekuensinya atas kepemilikan saham berupa kekuasaaan, kebanggaan dan
                              khususnya hak suara dalam menentukan jalannya perusahaan. Di Bursa Efek Indonesia (BEI), ada yang disebut sebagai Indeks Saham, yang merupakan ukuran statistik terhadap pergerakan harga dari daftar saham yang
                              dipilih berdasarkan karakteristik atau kriteria tertentu yang digunakan sebagai wadah atau sarana untuk investasi. Ada 22 jenis indeks saham di BEI, beberapa di antaranya misalnya Indeks Harga Saham Gabungan
                              (IHSG), Indeks LQ45, Indeks IDX30, Indeks Kompas100, Indeks Saham Syariah Indonesia (ISSI), Indeks IDX BUMN20, dan seterusnya. Ada beberapa Permasalahan konvensional pemilihan saham muncul apabila tersedia
                              lebih dari beberapa alternatif pilihan saham dan beberapa kriteria – kriteria yang menjadi bahan pertimbangan dalam pembelian saham tersebut. Secara global ada dua kelompok kriteria pemilihan saham, yaitu:
                              pertimbangan fundamental dan pertimbangan teknikal (Hartono, 2003).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row ">
                      <div className="col">
                        <div class="card-saya">
                          <div class="card-body">
                            <h2 class="card-title text-black">Jenis saham</h2>
                            <p class="card-text text-black ">
                              1. Saham Biasa <br></br>
                              2. Saham Preferen Ciri ciri saham: <br></br>
                              1. Saham yang Anomali dan Indeks <br></br>
                              2. Saham yang posisi open lebih rendah dari posisi close <br></br>
                              3. Saham yang jatuh dalam Manfaat saham:<br></br>
                              1. Deviden <br></br>
                              Deviden adalah bagian laba pada perusahan yang diberikan pada penjabat saham. Beberapa deviden yang diberikan dan dianjurkan oleh Dewan Direksi dan disepakati dalam RUPM. <br></br>
                              2. Capital Gain Penanaman modal dapat menghayati capital gain, ketika tariff jual melampaui tarif beli saham tersebut. Risiko saham: Adapun beberapa risiko pada saham, yaitu:<br></br>
                              1. Tidak terdapat pembagian deviden <br></br>
                              2. Risiko Likuidasi <br></br>
                              3. Saham delisting dari bursa <br></br>
                              4. Kehilangan aset Karakteristik saham: Dalam hal ini, karakteristik saham adalah karakteristik saham perusahaan go – public.<br></br>
                              Terdapat 3 jenis nilai yang melekat pada suatu saham perusahaan go – public, adalah: <br></br>
                              1. Nilai nominal (Nilai pari) <br></br>
                              2. Nilai wajar saham <br></br>
                              3. Nilai pasar
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </SwipeableViews>
            </Box>
          </div>
        </div>

        {/* <nav class="navbar navbar-expand-lg navbar-dark ">
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
        </nav> */}
        {/* <section id="Profiles">
          
        </section> */}
        {/* <section id="Bluechips">
          
        </section> */}
        {/* <section id="Result">
         
        </section> */}
        {/* <section id="Hasil">
          
        </section> */}
      </div>
    </>
  );
}

export default Main;
