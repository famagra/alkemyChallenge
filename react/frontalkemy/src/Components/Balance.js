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
      <Row className="listado">
        <Table striped bordered hover size="sm" onLoad={handleLoad()}>
          <thead className="text-center">
            <tr>
              <th>Ingreso</th>
              <th>Egreso</th>
              <th className="text-danger ">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-success ">{totalIngreso}</td>
              <td className="text-success">{totalEgreso}</td>
              <td className="text-danger w-50">{totalIngreso - totalEgreso}</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </div>
  );
}
