import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export default function AuthComponent() {
  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    // redirect user to the landing page
    localStorage.clear();
    window.location.href = "/";
  };

  const [state, setState] = useState(localStorage.getItem("Result"));

  const [payment, setPayment] = useState("");
  const [name, setName] = useState(localStorage.getItem("Name"));
  const [email, setEmail] = useState(localStorage.getItem("Email"));
  const [address, setAddress] = useState(localStorage.getItem("Address"));
  const book = () => {
    if (localStorage.getItem("Connection") === "1") {
      const configuration = {
        method: "post",
        url: "http://localhost:3001/book",
        data: {
          name,
          email,
          address,
          payment,
        },
      };
      axios(configuration)
        .then((result) => {
          alert("Gas Booked!");
        })
        .catch((error) => {
          error = new Error();
          alert("You have reached the limit for bookings");
        });
    } else {
      alert("Connection Required!");
    }
  };

  const apply = () => {
    if (localStorage.getItem("Connection") === "1") {
      alert("Connection Already Exists");
    } else {
      const configuration = {
        method: "post",
        url: "http://localhost:3001/applyconnect",
        data: {
          name,
          email,
          address,
        },
      };
      axios(configuration)
        .then((result) => {
          alert("Connection Requested");
        })
        .catch((error) => {
          error = new Error();
          alert("Something went wrong");
        });
    }
  };

  return (

    <div className="reg2">
      <h1 className="text-center" style={{padding:"10px",backgroundColor:"black",borderRadius:"10px",color:"white"}}>Welcome, {localStorage.getItem("Name")}</h1>
      <div className="mb-2" style={{padding:"10px",backgroundColor:"black",borderRadius:"10px",color:"white"}}>
        <h2>BOOK GAS</h2>
        <Form onSubmit={() => book()}>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              <b>Payment Method</b>
            </Form.Label>
            <br />
            <Form.Group className="d-flex" style={{padding:"10px"}}>
            ONLINE
            <Form.Check
              type="radio"
              name="payment"
              value={"Online"}
              onChange={() => setPayment("Online")}
              style={{marginRight:"20px"}}
            />
            CASH ON DELIVERY
            <Form.Check
              type="radio"
              name="payment"
              value={"Cash On Delivery"}
              onChange={() => setPayment("Cash On Delivery")}
            />
            </Form.Group>
          </Form.Group>
          <Button type="submit" variant="success">
            Book
          </Button>
        </Form>
      </div>
      <div className="mb-2" style={{padding:"10px",backgroundColor:"black",borderRadius:"10px",color:"white"}}>
        <h3>APPLY FOR CONNECTION</h3>
        <Button type="submit" onClick={() => apply()}>
          Apply
        </Button>
      </div>
      <div className="mb-2" style={{padding:"10px",backgroundColor:"black",borderRadius:"10px",color:"white"}}>
        <h3>TRANSFER ADDRESS</h3>
        <Form.Control
            type="email"
            name="email"
            
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter New Address"
            className="mb-2"
          />
        <Button type="submit" onClick={() => apply()}>
          Apply
        </Button>
      </div>
      <div>
        <Button type="submit" variant="danger" onClick={() => logout()}>
          Logout
        </Button>
      </div>
      <br></br>
    </div>
  );
}
