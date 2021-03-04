import React from 'react';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
import Axios from "axios";

export default function Listado() {

    
    const [concept, setConcept] = useState("");
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState("");
    const [typeOperation, setTypeOperation] = useState(0);

    const [conceptList, setConceptList] = useState([]);
    const [newConcept, setNewConcept] = useState(0);
    const [totalEgreso, setTotalEgreso] = useState([]);
    const [totalIngreso, setTotalIngreso] = useState([]);

      const getConcept = () => {
        Axios.get("http://localhost:3001/consult").then((response) => {
          setConceptList(response.data);
        });
      };

      const updateEmployeeWage = (id) => {
        Axios.put("http://localhost:3001/update", {
          concept: newConcept,
          id: id,
        }).then((response) => {
          setConceptList(
            conceptList.map((val) => {
              return val.id == id
                ? {
                    concept: concept,
                    price: price,
                    date: date,
                    typeOperation: typeOperation,
                  }
                : val;
            })
          );
        });
      };

      const deleteConcept = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
          setConceptList(
            conceptList.filter((val) => {
              return val.id != id;
            })
          );
        });
      };

    return (
      <div>
        <Row className="listado">
          <h4>Listado de gastos</h4>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Gasto</th>
                <th>Precio</th>
                <th>Fecha</th>
                <th>Tipo</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {conceptList.map((val, key) => {
                return (
                  <tr>
                    <td>{val.id}</td>
                    <td>{val.concept}</td>
                    <td>{val.price}</td>
                    <td>{val.date}</td>
                    <td>{val.typeOperation}</td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => updateEmployeeWage(val.id)}
                      >
                        Update
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => deleteConcept(val.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <Button onClick={getConcept}>Mostrar Gastos</Button>
        </Row>
      </div>
    );
}
