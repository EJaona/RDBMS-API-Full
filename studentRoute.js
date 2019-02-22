const express = require("express");
const db = require("./db");

const studentRoute = express.Router();

studentRoute.get("/", async (req, res) => {
  try {
    const students = await db.select().from("students");
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json("ooops");
  }
});
studentRoute.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const students = await db
      .select()
      .from("students")
      .where({ id: id })
      .first();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json("ooops");
  }
});
studentRoute.post("/", async (req, res) => {
  const newStudent = req.body;
  try {
    const student = await db.insert(newStudent).into("students");
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json("ooops");
  }
});
studentRoute.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  try {
    const updated = await db
      .update(changes)
      .from("students")
      .where({ id: id });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json("ooops");
  }
});
studentRoute.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await db
      .delete()
      .from("students")
      .where({ id: id });
    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json("ooops");
  }
});

module.exports = studentRoute;
