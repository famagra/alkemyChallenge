import React from 'react'
import Axios from "axios";
import { useState } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";

export default function FormularioIngreso() {

        const [concept, setConcept] = useState("");
        const [price, setPrice] = useState(0);
        const [date, setDate] = useState("");
        const [typeOperation, setTypeOperation] = useState(0);
        const [conceptList, setConceptList] = useState([]);
        
        
      const addConcept = () => {
        Axios.post("http://localhost:3001/create", {
          concept: concept,
          price: price,
          date: date,
          typeOperation: typeOperation,
        }).then(() => {
          setConceptList([
            ...conceptList,
            {
              concept: concept,
              price: price,
              date: date,
              typeOperation: typeOperation,
            },
          ]);
        });
      };


    return (
      <div>
        <h2 className="pt-5 pb-5 text-center text-white border bg-dark">
          {" "}
          GASTOS{" "}
        </h2>
        <Form className="mt-5 mb-5 text-center w-75 ml-auto mr-auto">
          <FormGroup className="text-center">
            <FormLabel className="text-center">
              Ingrese el nombre del Gasto
            </FormLabel>
            <FormControl
              className="text-center"
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
              className="text-center"
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
              className="text-center"
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
              className="text-center"
              type="text"
              name="typeOperation"
              onChange={(event) => {
                setTypeOperation(event.target.value);
              }}
            ></FormControl>
          </FormGroup>
          <Button className="btn btn-lg btn-success" onClick={addConcept}>
            Guardar
          </Button>
        </Form>
      </div>
    );
}
