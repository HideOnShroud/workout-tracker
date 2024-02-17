require('dotenv').config()

const express = require('express')
const workoutRouters = require('./routes/workouts')
const mongoose = require('mongoose')

// express app
const app = express()


// routes
app.use('/api/workouts', workoutRouters)


// db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log("Connected to db and Listening on port 4545")
        })
    })
    .catch((error) => {
        console.log(error)
    })

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


