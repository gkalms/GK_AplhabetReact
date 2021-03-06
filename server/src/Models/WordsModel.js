const mongoose = require("mongoose");

const wordsSchema = mongoose.Schema({
    name: String,
    alphabetName: String,
});

module.exports = mongoose.model("word", wordsSchema);