// Todo Schema
const mongoose = require("mongoose");
const todoTaskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    require: true,
  },
});

module.exports = mongoose.model("TodoTask", todoTaskSchema);
