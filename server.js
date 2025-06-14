import pool from "./db.js";
import express from "express";

const port = 3000;
const app = express();

app.use(express.json());

// routes
app.get("/", async (req, res) => {
  try {
    const data = await pool.query(
      "SELECT * FROM schools"
    );
    res.status(201).send(data.rows);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.post("/", async (req, res) => {
  const { name, location } = req.body;
  try {
    await pool.query(
      "INSERT INTO schools (name, address) VALUES ($1, $2)", [name, location]
    );
    res.status(201).send({message: "Successfully added info."});
  } catch (error) {
    res.sendStatus(500);
  }
});

app.get("/setup", async (req, res) => {
  try {
    await pool.query(
      "CREATE TABLE schools(id SERIAL PRIMARY KEY, name VARCHAR(100), address VARCHAR(100))"
    );
    res.status(201).send({message: "Successfully created table."});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(port, () => console.log(`Server has is listening on port ${port}`));
