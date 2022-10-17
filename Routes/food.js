const express = require("express");

const server = require("../Contollers/food");

const dataRouter7 = express.Router();

dataRouter7
  .route("/food")

  .get(server.apicontrol7);
module.exports = dataRouter7;
