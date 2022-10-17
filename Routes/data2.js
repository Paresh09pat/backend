const express = require("express");

const server = require('../Contollers/Bollywood')

const dataRouter = express.Router();

dataRouter
  .route("/bolly")

  .get(server.apicontroller);
module.exports = dataRouter;
