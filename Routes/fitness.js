const express = require("express");

const server = require("../Contollers/Fitness");

const dataRouter6 = express.Router();

dataRouter6
  .route("/fitness")

  .get(server.apicontrol6);
module.exports = dataRouter6;
