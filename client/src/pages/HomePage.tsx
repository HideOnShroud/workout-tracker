// src/components/HomePage.tsx

import React, { useState, useEffect } from 'react';
// src/types.ts

export interface Workout {
    _id: string;
    title: string;
    sets: number;
    reps: number;
    load: number;
    createdAt: string; // Include createdAt field
    updatedAt: string; // Include updatedAt field
}


const HomePage = () => {
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
    }, []);

    return (
        <>
            {/* <Navbar /> */}
            <div>
                <h1>Workouts</h1>
                <ul>
                    {workouts.map((workout) => (
                        <li key={workout._id}>
                            <p>Title: {workout.title}</p>
                            <p>Sets: {workout.sets}</p>
                            <p>Reps: {workout.reps}</p>
                            <p>Load: {workout.load}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default HomePage;
