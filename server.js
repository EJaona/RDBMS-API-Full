const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const knexConfig = require("./knexfile");

knex(knexConfig);
const server = express();

server.use(express.json());
server.use(helmet());

module.exports = server;
