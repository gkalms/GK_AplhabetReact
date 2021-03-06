// import express
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

//establish session/healthcheck
router.get("/session/establish", (request, response) => {
  request.session.testProperty = "API health check";
  response.send("Health check OK");
});

//Retrieve session
router.get("/session/retrieve", (request, response) => {
  response.send(request.session.testProperty);
});

// Expire session
router.get("/session/expire", (request, response) => {
  request.session.destroy(() => response.send("Session expired"));
});

module.exports = router;
