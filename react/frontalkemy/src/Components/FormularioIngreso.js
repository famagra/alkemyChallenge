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
        <Form className="formulario">
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
          <Button onClick={addConcept}>Save</Button>
        </Form>
      </div>
    );
}
