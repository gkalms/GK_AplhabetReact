const mongoose = require("mongoose");

const alphabetSchema = mongoose.Schema({
    name: String,
});

module.exports = mongoose.model("alphabet", alphabetSchema);