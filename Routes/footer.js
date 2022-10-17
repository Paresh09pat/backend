const express = require("express");

const server = require("../Contollers/Footer");

const dataRouter4 = express.Router();

dataRouter4
  .route("/footer")

  .get(server.apicontrol4);
module.exports = dataRouter4;
