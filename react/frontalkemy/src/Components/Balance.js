import React from "react";
import Axios from "axios";
import { useState } from "react";
import {
  Table,Row,
} from "react-bootstrap";

export default function Balance() {
  const [totalEgreso, setTotalEgreso] = useState([]);
  const [totalIngreso, setTotalIngreso] = useState([]);

  const handleLoad = () => {
    Axios.get("http://localhost:3001/consultaIngreso").then((response) => {
      setTotalIngreso(response.data[0].ingreso);
    });
    Axios.get("http://localhost:3001/consultaEgreso").then((response) => {
      setTotalEgreso(response.data[0].egreso);
    });
  };
  return (
    <div>
      <h2 className="mt-5 pt-5 pb-5 text-center text-danger border bg-dark">
        Balance de Gastos
      </h2>
      <Row className="listado ">
        <Table striped bordered hover size="sm" onLoad={handleLoad()}>
          <thead>
            <tr>
              <th>Total Ingreso</th>
              <th>Total Egreso</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{totalIngreso}</td>
              <td>{totalEgreso}</td>
              <td>{totalIngreso - totalEgreso}</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </div>
  );
}
