require('dotenv').config()

const express = require('express')
const workoutRouters = require('./routes/workouts')

// express app
const app = express()


// routes
app.use('/api/workouts', workoutRouters)


// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// listen for requests

app.listen(process.env.PORT, () => {
    console.log("Listening on port 4545")
})