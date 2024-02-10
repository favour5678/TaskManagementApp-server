const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello Favour, welcome to express.js')
})


app.listen(port, () => console.log(`Server running on port ${port}`))