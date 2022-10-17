const express = require("express");

const server = require("../Contollers/Hollywood");

const dataRouter2 = express.Router();

dataRouter2
  .route("/hollywood")

  .get(server.apicontrol2);
module.exports = dataRouter2;
