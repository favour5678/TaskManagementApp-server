require('dotenv').config();

const express = require('express');
const cors = require('cors');
const taskRoute = require('./routes/taskRoute')

const app = express()
const port = 4000;

app.use(cors())
app.use(express.json())


const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

let db = mongoose.connection;
db.once("open", function () {
  console.log("DATABASE CONNECTED");
});

db.on("error", function (err) {
    console.error("Error connecting to MongoDB:", err);
});

app.use('/tasks', taskRoute)

app.listen(port, () => console.log(`Server running on port ${port}`))