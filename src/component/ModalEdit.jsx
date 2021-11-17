import React, { useState, useEffect } from "react";
import { Button, FormControl, FormGroup, Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import Cross from "../img/OopsCross.svg";
import axios from "axios";
import centang from "../img/saveLogo.png";
import "sweetalert2/dist/sweetalert2.min.css";

function ModalEdit({ id, closeModal }) {
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
  const [bobotData, setBobotData] = useState({
    id: "",
    bobotPer: 0,
    bobotPbv: 0,
    bobotRoe: 0,
    bobotDy: 0,
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

  useEffect(() => {
    setUpdate({
      ...update,
      id: data?.id,
      nama: data?.nama,
      harga_per_lot: data?.harga_per_lot,
      img: data?.img,
      per: data?.per,
      pbv: data?.pbv,
      roe: data?.roe,
      dy: data?.dy,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    setBobotData({
      ...bobotData,
      id: data?.id,
      bobotPer: 0,
      bobotPbv: 0,
      bobotRoe: 0,
      bobotDy: 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  console.log("data-modal", data);
  console.log("data-id", id);
  console.log("data-update", update);

  const swal = () => {
    console.log("data-update", update);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const submitedHandle = async (e) => {
    try {
      let url = `https://datapengumuman.herokuapp.com/data_saham/${id}`;
      await axios.put(url, update);
      // window.location.reload();
      // console.log("data-update", update);
      Swal.fire(
        {
          imageUrl: `${centang}`,
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: "Custom image",
          width: 450,
          timer: 1500,
          showConfirmButton: false,
          title: "Your data Has Been Updated",
        },
        window.setTimeout(function () {
          window.location.reload();
        }, 400)
      );
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
            <FormControl type="number" step="0.01" placeholder="Per" required style={{ marginBottom: "2rem" }} value={update?.per} onChange={(e) => setUpdate({ ...update, per: parseFloat(e.target.value) })} />
          </FormGroup>
          <FormGroup>
            <FormControl type="number" step="0.01" placeholder="Pbv" required style={{ marginBottom: "2rem" }} value={update?.pbv} onChange={(e) => setUpdate({ ...update, pbv: parseFloat(e.target.value) })} />
          </FormGroup>
          <FormGroup>
            <FormControl type="number" step="0.01" placeholder="Roe" required style={{ marginBottom: "2rem" }} value={update?.roe} onChange={(e) => setUpdate({ ...update, roe: parseFloat(e.target.value) })} />
          </FormGroup>
          <FormGroup>
            <FormControl type="number" step="0.01" placeholder="Dy" required value={update?.dy} onChange={(e) => setUpdate({ ...update, dy: parseFloat(e.target.value) })} />
          </FormGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          type="submit"
          block
          onClick={() => {
            submitedHandle();
          }}
        >
          Save
        </Button>
        {/* <Button variant="success" type="submit" block onClick={() => swal()}>
          Swal
        </Button> */}
      </Modal.Footer>
    </div>
  );
}

export default ModalEdit;
