const express = require("express");

const WordsApi = require("../Models/WordsModel");

const router = express.Router();

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

//Get Word by alphabet
router.get("/words/:alphabetName", async (request, response) => {
  console.log("alphabet", request.params.alphabetName);
  try {
    const regExp = new RegExp(`^${request.params.alphabetName}`)
    const findWordsByAlphabet = await WordsApi.find({name: regExp});
    console.log("findwords", findWordsByAlphabet);
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