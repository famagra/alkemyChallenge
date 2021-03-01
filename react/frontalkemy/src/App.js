
import React from 'react'
import { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container,Row,Form,FormGroup,FormControl,FormLabel,Button,Thead, Tr, Th, Table} from 'react-bootstrap';




export default function App() {


  const [concept, setConcept] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState("");
  const [typeOperation, setTypeOperation] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);
  const [newWage, setNewWage] = useState(0);
  const [totalEgreso, setTotalEgreso]=useState([]);
  const [totalIngreso, setTotalIngreso] = useState([]);

  


  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
          concept: concept,
          price: price,
          date: date,
          typeOperation: typeOperation,
      
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          concept: concept,
          price: price,
          date: date,
          typeOperation: typeOperation,
        },
      ]);
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const updateEmployeeWage = (id) => {
    Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
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
      }
    );
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

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

   const total = () =>{
     return (totalIngreso - totalEgreso);
   }



  return (
    <div>
      <Container>
        <h1>Bienvenidos al sistema de gestion de gastos</h1>
      </Container>

      <Container>
        <Row>
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
              {employeeList.map((val, key) => {
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
                        onClick={() => deleteEmployee(val.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <hr></hr>
          <Button onClick={getEmployees}>Mostrar Gastos</Button>
        </Row>

        <hr></hr>
        <Row>
          <Form>
            <FormGroup>
              <FormLabel>Ingrese el nombre del Gasto</FormLabel>
              <FormControl
                type="text"
                name="concept"
                onChange={(event) => {
                  setConcept(event.target.value);
                }}
              ></FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel>Ingrese el nombre Importe</FormLabel>
              <FormControl
                type="text"
                name="price"
                placeholder="ingrese el importe"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              ></FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel>Ingrese la fecha</FormLabel>
              <FormControl
                type="date"
                name="date"
                onChange={(event) => {
                  setDate(event.target.value);
                }}
              ></FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel>Ingrese tipo de gasto</FormLabel>
              <FormControl
                type="text"
                name="typeOperation"
                onChange={(event) => {
                  setTypeOperation(event.target.value);
                }}
              ></FormControl>
            </FormGroup>
            <Button onClick={addEmployee}>Save</Button>
          </Form>
        </Row>
        <Row>
          <Container>
            <Row>
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
                <Button onClick={egreso}>Total Egresos</Button>
              </Table>
            </Row>
          </Container>
        </Row>
      </Container>
    </div>
  );
}
