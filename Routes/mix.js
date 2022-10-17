const express = require("express");

const server = require("../Contollers/Mix");

const dataRouter3 = express.Router();

dataRouter3
  .route("/mix")

  .get(server.apicontrol3);
module.exports = dataRouter3;
