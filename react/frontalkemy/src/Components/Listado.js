import React from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
  Modal,
} from "react-bootstrap";
import Axios from "axios";

export default function Listado() {

  const [conceptList, setConceptList] = useState([]);

      const getConcept = () => {
        Axios.get("http://localhost:3001/consult").then((response) => {
          setConceptList(response.data);
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
        

        <h2 className="pt-5 pb-5 text-center text-white border bg-dark">
          Listado de gastos
        </h2>
        <Row className="text-center ml-auto mr-auto">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Numero</th>
                <th>Gasto</th>
                <th>Precio</th>
                <th>Fecha</th>
                <th>Tipo</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {conceptList.map((val, key) => {
                console.log(val);
                return (
                  
                  <tr>
                    <td>{val.id}</td>
                    <td>{val.concept}</td>
                    <td>{val.price}</td>
                    <td>{val.date}</td>
                    <td>{val.typeOperation}</td>
                    <td>
                      <Link
                        variant="warning"
                        className="m-2"
                        to ="/actualizar"
                      >
                        Actualizar
                      </Link>

                      <Button
                        variant="danger"
                        className="m-2"
                        onClick={() => deleteConcept(val.id)}
                      >
                        Borrar
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <Button
            className="btn btn-lg btn-success text-center ml-auto mr-auto"
            onClick={getConcept}
          >
            Mostrar Gastos
          </Button>
        </Row>
      </div>
    );
}
