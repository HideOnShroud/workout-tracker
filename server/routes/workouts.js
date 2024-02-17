const express = require('express')
const Workout = require('../models/workoutModel')
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
router.post('/', async (req, res) => {
    const { title, sets, reps, load } = req.body

    try {
        const workout = await Workout.create({ title, sets, reps, load })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

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