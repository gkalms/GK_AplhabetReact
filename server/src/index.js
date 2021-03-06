const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routers
const alphabetRouter = require("./Routes/AlphaRoute");

// Connect to mongodb
mongoose.connect("mongodb://localhost:27017/React", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Initialise app object
const app = express();

const port = 9000;

// Middleware - to read and understand json files)
app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: "Secret word",
    resave: false,
    saveUninitialized: false,
  })
);

// Use the initilaised routers
app.use("/api/alphabet", alphabetRouter);

// Start listening
app.listen(port, () =>
  console.log(`Listening at http://localhost:${port}`)
);
