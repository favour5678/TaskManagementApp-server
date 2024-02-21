const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    content: String,
  },
  { timestamps: true }
);

const TaskModel = mongoose.model('Task', taskSchema)

module.exports = TaskModel;