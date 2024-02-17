require('dotenv').config()

const express = require('express')

// express app
const app = express()


// routes
app.get('/', (req, res) => {
    res.json({ mssg: "welcome" })
})


// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// listen for requests

app.listen(process.env.PORT, () => {
    console.log("Listening on port 4545")
})