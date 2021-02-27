const express = require("express");

const WordsApi = require("../Models/WordsModel");
const AlphabetApi = require("../Models/AlphabetModel");

const router = express.Router();


//Create alphabet list
router.post("/alphabet", async (request, response) => {
  try {
    const createAlphabet = await AlphabetApi.create(request.body);
    response.json({
      status: {
        code: 201,
        message: "Succesfully created"
      },
      data: createAlphabet
    });
  } catch (err) {
    response.send(err);
  }
});

//Get alphabet list
router.get("/alphabet/all", async (request, response, next) => {
  try {
    const getAlphabet = await AlphabetApi.find();
    response.json({
      status: {
        code: 200,
        message: "Success"
      },
      data: getAlphabet
    });
  } catch (err) {
    response.send(err);
  }
});

// Create words
router.post("/words", async (request, response) => {
  try {
    const createWords = await WordsApi.create(request.body);
    response.json({
      status: {
        code: 201,
        message: "Successully created"
      },
      data: createWords
    });
  } catch (err) {
    response.send(err);
  }
});

//Get words
router.get("/words/all", async (request, response) => {
  try {
    const words = await WordsApi.find();
    response.json({
      status: {
        code: 200,
        message: "Success"
      },
      data: words
    });
  } catch (err) {
    response.send(err);
  }
});



//Get words by alphabet ID
router.get("/words/:alphabetId", async (request, response) => {
  try {
    const findWordsByAlphabetId = await WordsApi.find({alphabetId: request.params.alphabetId});
    response.json({
      status: {
        code: 200,
        message: "Success"
      },
      data: findWordsByAlphabetId
    });
  } catch (err) {
    response.send(err);
  }
});

//Get Word by alphabet
router.get("/words/:alphabetName", async (request, response) => {
  try {
    const findWordsByAlphabet = await WordsApi.find(request.params.alphabetName);
    response.json({
      status: {
        code: 200,
        message: "Success"
      },
      data: findWordsByAlphabet
    });
  } catch (err) {
    response.send(err);
  }
});

//Get targetted word 
router.get("/words/:name", async (request, response) => {
  try {
    const getwords = await WordsApi.find(request.params.name);
    response.json({
      status: {
        code: 200,
        message: "Success"
      },
      data: getwords
    });
  } catch (err) {
    response.send(err);
  }
});



// Update words
router.patch("/update-word/:id", async (request, response) => {
  try {
    const editWords = await WordsApi.findByIdAndUpdate(request.params.id, request.body, { new: true });
    response.json({
      status: {
        code: 201,
        message: "Successfully updated"
      },
      data: editWords
    });
  } catch (err) {
    response.send(err);
  }
});


// Delete words
router.delete("/delete-word/:id", async(request, response) => {
  try {
  const deleteWords = await WordsApi.findByIdAndDelete(request.params.id);
  response.json({
    status: {
      code: 201,
      message: "Successfully deleted"
    },
    data: deleteWords
  });
} catch (err) {
  response.send(err);
}
});

module.exports = router;