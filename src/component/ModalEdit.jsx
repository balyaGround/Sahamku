import React, { useState, useEffect } from "react";
import { Button, FormControl, FormGroup, Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import Cross from "../img/OopsCross.svg";
import axios from "axios";
import centang from "../img/saveLogo.png";

function ModalEdit({ showModal, id, closeModal }) {
  const [SetShow] = useState(showModal);
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState({
    id: "",
    nama: "",
    harga_per_lot: "",
    img: "",
    per: 0,
    pbv: 0,
    roe: 0,
    dy: 0,
  });
  const getData = async () => {
    await axios
      .get(`https://datapengumuman.herokuapp.com/data_saham/${id}`)
      .then((result) => setData(result.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // didMount
    getData();
  }, []);

  // let bobotPbv = 0;

  // if (data?.pbv >= 0.1 && data?.pbv <= 0.9) {
  //   bobotPbv = 1;
  // } else if (data?.pbv == 1 && data?.pbv <= 1.9) {
  //   bobotPbv = 0.75;
  // } else if (data?.pbv == 2 && data?.pbv <= 2.9) {
  //   bobotPbv = 0.5;
  // } else if (data?.pbv == 3 && data?.pbv <= 3.9) {
  //   bobotPbv = 0.25;
  // } else data?.pbv >= 4;
  // bobotPbv = 0;

  // let bobotRoe = 0;

  // if (data?.roe >= 1 && data?.roe <= 4.9) {
  //   bobotRoe = 0;
  // } else if (data?.roe >= 5 && data?.roe <= 9.9) {
  //   bobotRoe = 0.25;
  // } else if (data?.roe >= 10 && data?.roe <= 19.9) {
  //   bobotRoe = 0.5;
  // } else if (data?.roe >= 20 && data?.roe <= 99) {
  //   bobotRoe = 0.75;
  // } else data?.roe >= 100;
  // bobotRoe = 1;

  // let bobotDY = 0;
  // if (data?.dy >= 0 && data?.dy <= 0.9) {
  //   bobotDy = 0;
  // } else if (data?.dy >= 1 && data?.dy <= 1.9) {
  //   bobotDy = 0.25;
  // } else if (data?.dy >= 2 && data?.dy <= 2.9) {
  //   bobotDy = 0.5;
  // } else if (data?.dy >= 3 && data?.dy <= 3.9) {
  //   bobotDy = 0.75;
  // } else data?.dy >= 4;
  // bobotDy = 1;

  // let bobotPER = 0;
  // let bobot = 0;
  // if (data?.per <= 5 && data?.per <= 9) {
  //   bobotPer = 1;
  // } else if (data?.per == 10 && data?.per <= 14) {
  //   bobotPER = 0.75;
  // } else if (data?.per == 15 && data?.per <= 19) {
  //   bobotPER = 0.5;
  // } else if (data?.per == 20 && data?.per <= 24) {
  //   bobotPER = 0.25;
  // } else data?.per >= 25;
  // bobotPER = bobot;

  // const [update, setUpdate] = useState({
  //   id: "",
  //   nama: "",
  //   harga_per_lot: "",
  //   img: "",
  //   per: 0,
  //   pbv: 0,
  //   roe: 0,
  //   dy: 0,
  // });

  // useEffect(() => {
  //   setUpdate({
  //     ...update,
  //     id: data?.id,
  //     nama: data?.nama,
  //     harga_per_lot: data?.harga_per_lot,
  //     img: data?.img,
  //     per: data?.per,
  //     pbv: data?.pbv,
  //     roe: data?.roe,
  //     dy: data?.dy,
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data]);
  // useEffect(() => {
  //   setBobotData({
  //     ...bobotData,
  //     id: "",
  //     nama: data?.nama,
  //     harga_per_lot: data?.harga_per_lot,
  //     img: data?.img,
  //     per: bobotPer,
  //     pbv: bobotPbv,
  //     roe: bobotRoe,
  //     dy: bobotDy,
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data, bobotPer, bobotPbv, bobot]);
  console.log("data-modal", data);
  console.log("data-update", update);
  console.log("data-id", id);
  const submitedHandle = async (e) => {
    try {
      let url = `https://datapengumuman.herokuapp.com/data_saham/${id}`;
      await axios.put(url, update);
      window.location.reload();
      Swal.fire({
        imageUrl: `${centang}`,
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Custom image",
        width: 450,
        confirmButtonText: "Ok",
        confirmButtonColor: "#625BAD",
        title: "Your Profile Has Been Updated",
      });
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
    }
  };
  return (
    <div>
      <Modal.Header>
        <Modal.Title className="modal-title">
          Ubah Data Parameter Fundamental
          <Button variant="info" style={{ marginLeft: "2rem" }} onClick={() => closeModal(false)}>
            X
          </Button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup>
            <FormControl type="number" step="0.01" placeholder="Per" required style={{ marginBottom: "2rem" }} value={update?.per} onChange={(e) => setUpdate({ ...update, per: e.target.value })} />
          </FormGroup>
          <FormGroup>
            <FormControl type="number" step="0.01" placeholder="Pbv" required style={{ marginBottom: "2rem" }} value={update?.pbv} onChange={(e) => setUpdate({ ...update, pbv: e.target.value })} />
          </FormGroup>
          <FormGroup>
            <FormControl type="number" step="0.01" placeholder="Roe" required style={{ marginBottom: "2rem" }} value={update?.roe} onChange={(e) => setUpdate({ ...update, roe: e.target.value })} />
          </FormGroup>
          <FormGroup>
            <FormControl type="number" step="0.01" placeholder="Dy" required value={update?.dy} onChange={(e) => setUpdate({ ...update, dy: e.target.value })} />
          </FormGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" type="submit" block onClick={submitedHandle}>
          Save
        </Button>
      </Modal.Footer>
    </div>
  );
}

export default ModalEdit;
