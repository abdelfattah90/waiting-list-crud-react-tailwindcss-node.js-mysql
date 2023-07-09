import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import mysql from "mysql";
import cors from "cors";

const app = express()
dotenv.config()
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('In the name of of Allah the Merciful')
})


// CONNECTION
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "waiting-list-db",
});

// Get Clients
app.get("/clients", (req, res) => {
  const queryDB = "SELECT * FROM clinets";
  db.query(queryDB, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});


// Add Client
app.post("/clients", (req, res) => {
  const queryDB = "INSERT INTO clinets(`clinetname`, `clinetid`, `priority`, `created_at`) VALUES (?)";

  const values = [
    req.body.clinetname,
    req.body.clinetid,
    req.body.priority,
    req.body.created_at,
  ];

  db.query(queryDB, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// Update Client
app.put("/clients/:clientid", (req, res) => {
  const clientId = req.params.clientid;
  const queryDB = "UPDATE clinets SET `clinetname`= ? WHERE clinetid = ?";

  const values = [
    req.body.clinetname,
  ];

  db.query(queryDB, [...values, clientId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});


// Delete Client
app.delete("/clients/:id", (req, res) => {
  const clientId = req.params.id;
  const queryDB = " DELETE FROM clinets WHERE id = ? ";

  db.query(queryDB, [clientId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});


app.listen(process.env.PORT || 5000, () => console.log('App Running...'))
