import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import { Routes, Route,Link , useLocation} from "react-router-dom";
import Account from "./Account";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "./Login";
import Register from "./Register";
import img from './img.png';

function Navbar(){
  const location=useLocation();
  
    return(
    <Row>
        <Col className="d-flex">
        <img src={img} style={{width:"75px",height:"75px"}}></img>
        <h1>Falkearth's Fuel</h1> 
        </Col>
      </Row>
    )
}

export default Navbar;
