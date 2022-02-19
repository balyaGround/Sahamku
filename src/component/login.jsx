import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { getDatabase, ref, child, get } from "firebase/database";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../config/fire";

export default function Login() {
  initializeApp(firebaseConfig);
  const rtdb = ref(getDatabase());
  const [userPassword, setuserPassword] = useState("");
  const [Username, setUsername] = useState("");
  const Swal = require("sweetalert2");

  const handleSubmit = async () => {
    await get(child(rtdb, "/User/" + Username))
      .then((doc) => {
        if (doc.exists()) {
          // console.log(doc.val());
          const jsonData = doc.val();
          const jsonString = JSON.stringify(jsonData);
          const json = JSON.parse(jsonString);

          if (userPassword === json.Password) {
            console.log(json.userPassword);
            window.location.href = "/main";
          } else {
            Swal.fire({
              icon: "error",
              title: "Username/Password is incorrect",
            });
          }
        } else {
          console.log("no data");
          Swal.fire({
            icon: "error",
            title: "Username not Exist",
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <div className="home">
        <div className="create box">
          <div className="tulisan">
            <Form>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label className="text-white">User Name</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setuserPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Button onClick={handleSubmit}>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
