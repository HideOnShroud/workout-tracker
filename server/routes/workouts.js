const express = require('express')
const router = express.Router()
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth')


router.use(requireAuth)


// GET all workouts
router.get('/', getWorkouts)


// GET a single workout
router.get('/:id', getWorkout)


// POST a new Workout
router.post('/', createWorkout)


// DELETE a Workout
router.delete('/:id', deleteWorkout)


// Update a Workout
router.patch('/:id', updateWorkout)

module.exports = router