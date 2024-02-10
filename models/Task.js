const mongoose = require('mongoose');

const taskSchema = new  mongoose.Schema({
    content: String,
})

const Task = mongoose.model('Task', taskSchema)