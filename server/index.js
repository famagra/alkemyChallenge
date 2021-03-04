const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { json, response } = require("express");

app.use(cors());
app.use(express.json());


/* conexión a base de datos */ 
const db = mysql.createConnection({
  user: "root",
  password: "Riverplate01",
  database: "crud",
});

/* api para crear usuario */ 
app.post("/create", (req, res) => {
  const concept = req.body.concept;
  const price = req.body.price;
  const date = req.body.date;
  const typeOperation = req.body.typeOperation;

  db.query(
    "INSERT INTO operation (concept, price, date, typeOperation) VALUES (?,?,?,?)",
    [concept, price, date, typeOperation],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("valores insertados");
      }
    }
  );
});

/* api para consultar */ 

app.get("/consult", (req, res) => {
  db.query("SELECT * FROM operation", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

/* api para actualizar usuario */ 
app.put("/update", (req, res) => {
  console.log("update");
  const id = req.body.id;
  const concept = req.body.concept;
  db.query(
    "UPDATE operation SET  concept = ? where id = ?",
    [concept, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

/* api para borrar usuario */ 
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE from operation where id= ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

/* consultar total */
app.get("/consultaEgreso", (req, res) => {
  
  db.query("select sum(price) as egreso from operation where typeOperation = 'egreso';", (err, result) => {
    
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.get("/consultaIngreso", (req, res) => {
  db.query(
    "select sum(price) as ingreso from operation where typeOperation = 'ingreso';",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});


app.listen(3001, () => {
  console.log("server ok 3001");
});
