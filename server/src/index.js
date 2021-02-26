const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routers
const alphabetRouter = require("./Routes/AlphaRoute");
const userRouter = require("./Routes/UserRoute");

// seeding alphabet and word data
const AlphabetApi = require("./Models/AlphabetModel");
const alphaSeed = require("./Models/alphabetseed");

// Connect to mongodb
mongoose.connect("mongodb://localhost:27017/DemoDay", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error'));
// db.on('open', function () {
//   // enter all alphabet letters
//   AlphabetApi.create(alphaSeed, (err, data) => {
//     if (err) console.log(err.message)
//     console.log("added aplhabet categories")
//   });
//   // connected!
//   console.log("Mongoose online")
// });

// Initialise app object
const app = express();

const port = 3000;

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
app.use("/api/user", userRouter);

// Start listening
app.listen(port, () =>
  console.log(`Listening at http://localhost:${port}`)
);
