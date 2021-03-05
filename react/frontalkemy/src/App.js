import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "../src/Components/Navbar";
import Actualizar from "../src/Components/Actualizar";
import Listado from "./Components/Listado";
import FormularioIngreso from "./Components/FormularioIngreso";
import Balance from "./Components/Balance";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <FormularioIngreso />
      </Container>
      <Container>
        <Listado />
        <Balance />
      </Container>
      <Switch>
        <Route path="/actualizar">
          <Actualizar />
        </Route>
      </Switch>
    </Router>
  );
}
