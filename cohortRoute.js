const express = require("express");
const db = require("./db");

const cohortRoute = express.Router();

cohortRoute.get("/", async (req, res) => {
  try {
    const cohorts = await db.select().from("cohort");
    res.status(200).json(cohorts);
  } catch (error) {
    res.status(500).json("ooops");
  }
});
cohortRoute.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cohort = await db
      .select()
      .from("cohort")
      .where({ id: id })
      .first();
    res.status(200).json(cohort);
  } catch (error) {
    res.status(500).json("ooops");
  }
});
cohortRoute.get("/:id/students", async (req, res) => {
  const { id } = req.params;
  try {
    const cohort = await db
      .select()
      .from("cohort")
      .join("students")
      .where({ cohortId: id })
      .first();
    res.status(200).json(cohort);
  } catch (error) {
    res.status(500).json("ooops");
  }
});
cohortRoute.post("/", async (req, res) => {
  const newCohort = req.body;
  try {
    const cohort = await db.insert(newCohort).into("cohort");
    res.status(200).json(cohort);
  } catch (error) {
    res.status(500).json("ooops");
  }
});
cohortRoute.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  try {
    const updated = await db
      .update(changes)
      .from("cohort")
      .where({ id: id });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json("ooops");
  }
});
cohortRoute.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await db
      .delete()
      .from("cohort")
      .where({ id: id });
    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json("ooops");
  }
});

module.exports = cohortRoute;
