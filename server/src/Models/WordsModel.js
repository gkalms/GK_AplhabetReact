const mongoose = require("mongoose");

const wordsSchema = mongoose.Schema({
    name: String,
    alphabetName: {
        type:mongoose.Schema.Types.String,
        ref: "alphabet",
    },
});

module.exports = mongoose.model("word", wordsSchema);