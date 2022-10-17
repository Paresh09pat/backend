const express = require("express");

const server = require("../Contollers/Bollywood");

const dataRouter1 = express.Router();

dataRouter1
  .route("/bollywood")

  .get(server.apicontrol);
module.exports = dataRouter1;
