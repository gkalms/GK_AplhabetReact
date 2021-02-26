const express = require("express");
const WordsApi = require("../Models/WordsModel");
const AlphabetApi = require("../Models/AlphabetModel");


const router = express.Router();

//Create the alphabet category
router.post("/alphabet", (request, response) => {
  const requestBody = request.body;
  AlphabetApi.create(requestBody).then((data) => {
    response.send(data);
  }).catch(() => {
    response.status(500).send("unable to create alphabet category");
  });
});

//get alphabet list
router.get("/alphabet/all", (request, response) => {
  AlphabetApi.find().then((data) => {
    response.send(data);
  }).catch((error) => {
    response.status(500).send("cannot upload alphabet list");
  });
});

//get all words
router.get("/words/all", (request, response) => {
  WordsApi.find()
  .populate("alphabetId")
  .then((data) => {
  response.send(data);
  })
  .catch((error) => {
    response.status(500).send("unable to query words list");
  });
});

// create words
router.post("/words", (request, response) => {
  const requestBody = request.body;
  WordsApi.create(requestBody).then((data) => {
    console.log(data);
    response.send("Word added successfully");
  }).catch((error) => {
    response.status(500).send("unable to create the word");
  });
});

//get words by targetted alphabet ID
router.get("/words/:id", (request, response) => {
  console.log("request params", request.params.alphabetId)
  WordsApi.find({ alphabetId: request.params.alphabetId }).then((data) => {
    response.send(data);
  }).catch((error) => {
    response.status(500).send("cannot find words by alphabet ID");
  });
});

//get by targetted alphabet letter
router.get("/words/:alphabetName", (request, response) => {
  console.log("request params", request.params.alphabetName)
  WordsApi.find({ alphabetName: request.params.alphabetName }).then((data) => {
    console.log("this is the data I get back", data)
    response.send(data);
  }).catch((error) => {
    response.status(500).send("cannot find by alphabet letter");
  });
});

//get by targetted word 
router.get("/words/:name", (request, response) => {
  console.log("request params", request.params.name)
  WordsApi.find({ name: request.params.name }).then((data) => {
    console.log("this is the data I get back", data)
    response.send(data);
  }).catch((error) => {
    response.status(500).send("cannot find word");
  });
});



// update words
router.patch("/update-word/:id", (request, response) => {
  WordsApi.findByIdAndUpdate(request.params.id, request.body, {
    new: true,
    upsert: true,
  })
    .then((data) => {
      console.log("Update successful!");
      response.send(data);
    })
    .catch(() => {
      console.log("Something went wrong!!");
      response.status(404).send("Word was not found!!");
    });
});


// delete words
router.delete("/delete-word/:id", (request, response) => {
  WordsApi.findByIdAndDelete(request.params.id)
    .then((data) => {
      console.log("Delete successful!");
      response.send(data);
    })
    .catch(() => {
      console.log("Something went wrong!!");
      response.status(404).send("Word was not found!!");
    });
});

module.exports = router;