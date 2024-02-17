const express = require('express')

const router = express.Router()


// GET all workouts
router.get('/', (req, res) => {
    res.json({ mssg: 'get all workout' })
})


// GET a single workout
router.get('/:id', (req, res) => {
    res.json({ mssg: 'get 1 workout' })
})


// POST a new Workout
router.post('/', (req, res) => {
    req.json({ mssg: 'post a workoout' })
})


// DELETE a Workout
router.delete('/:id', (req, res) => {
    req.json({ mssg: 'delete a workoout' })
})


// Update a Workout
router.patch('/:id', (req, res) => {
    req.json({ mssg: 'delete a workoout' })
})

module.exports = router