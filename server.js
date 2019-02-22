const studentRoute = require("./studentRoute");
const cohortRoute = require("./cohortRoute");
const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(express.json());
server.use(helmet());
server.use("/api/students", studentRoute);
server.use("/api/cohort", cohortRoute);

module.exports = server;
