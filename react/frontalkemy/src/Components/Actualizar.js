import React from "react";
import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";

export default function Actualizar() {
  

  const updateConcept = (id) => {
    
  };
        
      

  return (
    <div>
      <h2 className="pt-5 pb-5 text-center text-white border bg-dark">
        ACTUALIZAR GASTO
      </h2>
      <Form className="mt-5 mb-5 text-center w-75 ml-auto mr-auto">
        <FormGroup className="text-center">
          <FormLabel className="text-center">
            Ingrese el nombre del Gasto
          </FormLabel>
          <FormControl
            className="text-center"
            type="text"
            name="ActualizarGasto"
            placeholder="ingrese el nombre"
            onChange={(event) => {
              ;
            }}
          ></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Ingrese el nombre Importe</FormLabel>
          <FormControl
            className="text-center"
            type="text"
            name="ActualizarPrecio"
            placeholder="ingrese el importe"
            onChange={(event) => {
              ;
            }}
          ></FormControl>
        </FormGroup>
        <Link to="/" className="btn btn-lg btn-success" onClick={updateConcept()}>
          Actualizar
        </Link>
      </Form>
    </div>
  );
}
