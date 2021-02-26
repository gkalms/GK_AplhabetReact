// import express
const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../Models/Usermodel");

// Create a new router to handle internal routes
const router = express.Router();

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

// Register user
router.post("/register", (request, response) => {
  const body = request.body;
  console.log("user register", body);
  const passwordHash = bcrypt.hashSync(body.password, 10);
  console.log("password Hash", passwordHash)
  const user = { name: body.name, password: passwordHash };
  console.log("user:", user);
  UserModel.create(user).then((data) => {
    response.send(data);
  })
});

// Login user
router.post("/login", (request, response) => {
  UserModel.findOne({ name: request.body.name }).then((data) => {
    if (data) {
      const checkHashPassword = bcrypt.compareSync(
        request.body.password,
        data.password
      );
      if (checkHashPassword) {
        console.log("request.session", request.session);
        request.session.user = {
          id: data._id,
        };
        console.log("request.session", request.session);
        response.send("logged in");
      } else {
        response.status(401).send("Incorrect credentials");
      }
    } else {
      response.status(401).send("Wrong user credentials");
    }
  });
});

// Logout user
router.get("/logout", (request, response) => {
  request.session.loggedIn = false;
  response.send("User has logged out!");
});


// Update user?? 

module.exports = router;
