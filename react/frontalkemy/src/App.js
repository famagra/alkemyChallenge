import React from "react";
import { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  
} from "react-bootstrap";
import NavBar from "../src/Components/Navbar";
import "./App.css";
import Listado from "./Components/Listado";
import FormularioIngreso from "./Components/FormularioIngreso";
import Balance from "./Components/Balance";

export default function App() {
  return (
    <div>
        <NavBar />
      <Container>
        <FormularioIngreso />
      </Container>
      <Container>
        <Listado />
        <Balance />
      </Container>
    </div>
  );
}
