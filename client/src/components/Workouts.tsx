import { useEffect, useState } from "react";
import WorkoutComponent from "./WorkoutComponent";
import { Workout } from "../interfaces/WorkoutInterface";
import { useWorkout } from "../store";


const Workouts = () => {
    const workouts = useWorkout((state) => state.workout)
    const getWorkouts = useWorkout((state) => state.getWorkout)


    useEffect(() => {
        getWorkouts()
    }, [getWorkouts])


    return (
        <ul>
            {workouts.map((workout) => (
                <WorkoutComponent workout={workout} />
            ))}
        </ul>
    );
}

export default Workouts;