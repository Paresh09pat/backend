const express = require("express");

const server = require("../Contollers/Technology");

const dataRouter5 = express.Router();

dataRouter5
  .route("/technology")

  .get(server.apicontrol5);
module.exports = dataRouter5;
