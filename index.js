const express = require('express');
const cors = require('cors');
const Task = require('./models/Task')

const app = express()
const port = 4000;

app.use(cors())
app.use(express.json())


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://favour_ayomikun:tewq72w4vud2acwq@cluster0.p2fdrqz.mongodb.net/');
let db = mongoose.connection;
db.once("open", function () {
  console.log("DATABASE CONNECTED");
});

db.on("error", function (err) {
    console.error("Error connecting to MongoDB:", err);
  });

app.get('/', (req, res) => {
    res.send('Hello Favour, welcome to express.js')
})


app.listen(port, () => console.log(`Server running on port ${port}`))

// tewq72w4vud2acwq