const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })

    res.status(200).json(workouts)
}


// get a workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No Workout" })

    }

    const workout = await Workout.findById(id)


    if (!workout) {
        return res.status(404).json({ error: "No Workout" })
    }
    res.status(200).json(workout)
}



// create new workout
const createWorkout = async (req, res) => {
    const { title, sets, reps, load } = req.body

    try {
        const workout = await Workout.create({ title, sets, reps, load })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No Workout" })

    }

    const workout = await Workout.findOneAndDelete({ _id: id })

    if (!workout) {
        return res.status(404).json({ error: "No Workout" })
    }
    res.status(200).json(workout)
}


// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No Workout" })

    }

    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!workout) {
        return res.status(404).json({ error: "No Workout" })
    }
    res.status(200).json(workout)
}



module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}