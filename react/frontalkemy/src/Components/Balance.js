import React from 'react'
import Axios from "axios";
import { useState } from "react";
import {
  Container,
  Row,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
  Thead,
  Tr,
  Th,
  Table,
  Col,
  Nav,
} from "react-bootstrap";

export default function Balance() {

      const [totalEgreso, setTotalEgreso] = useState([]);
      const [totalIngreso, setTotalIngreso] = useState([]);

      const egreso = () => {
        Axios.get("http://localhost:3001/consultaEgreso").then((response) => {
          console.log(response.data[0].egreso);
          setTotalEgreso(response.data[0].egreso);
        });
      };

      const ingreso = () => {
        Axios.get("http://localhost:3001/consultaIngreso").then((response) => {
          console.log(response.data[0].ingreso);
          setTotalIngreso(response.data[0].ingreso);
        });
      };
    return (
      <div>
        <Table striped bordered hover size="sm">
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

          <Button onClick={ingreso}>Total Ingresos</Button>
          <hr></hr>
          <Button onClick={egreso}>Total Egresos</Button>
        </Table>
      </div>
    );
}
