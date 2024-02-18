import { useEffect, useState } from "react";
import WorkoutComponent from "./WorkoutComponent";
import { Workout } from "../interfaces/WorkoutInterface";



const Workouts = () => {

    const [workouts, setWorkouts] = useState<Workout[]>([]);

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await fetch('http://localhost:4545/api/workouts');
                if (!response.ok) {
                    throw new Error('Failed to fetch workouts');
                }
                const data: Workout[] = await response.json();
                setWorkouts(data);
                console.log("hello")
            } catch (error) {
                console.error(error);
            }
        };

        fetchWorkouts();
    }, [])
    return (
        <ul>
            {workouts.map((workout) => (
                <WorkoutComponent workout={workout} />
            ))}
        </ul>
    );
}

export default Workouts;