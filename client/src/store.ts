import { create } from 'zustand'
import { Workout } from './interfaces/WorkoutInterface'


interface newWorkout {
    title: string
    sets: number
    reps: number
    load: number
}


interface WorkoutStore {
    workout: Workout[]
    getWorkout: () => Promise<void>
    addWorkout: (workout: newWorkout) => Promise<void>
    deleteWorkout: (id: string) => Promise<void>

}

const useWorkout = create<WorkoutStore>((set) => ({
    workout: [],
    getWorkout: async () => {
        try {
            const response = await fetch('http://localhost:4545/api/workouts');
            if (!response.ok) {
                throw new Error('Failed to fetch workouts');
            }
            const data: Workout[] = await response.json();
            set({ workout: data })
            console.log("hello")
        } catch (error) {
            console.error(error);
        }
    },
    addWorkout: async (workout: newWorkout) => {
        try {
            const response = await fetch('http://localhost:4545/api/workouts', {
                method: 'POST',
                body: JSON.stringify(workout),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to add workout');
            }
            // Assuming you want to refresh the list of workouts after adding a new one
            await useWorkout.getState().getWorkout();
        } catch (error) {
            console.error(error);
        }
    },
    deleteWorkout: async (id: string) => {
        const response = await fetch('http://localhost:4545/api/workouts/' + id, {
            method: 'DELETE'
        })
        const json = await response.json()
        if (response.ok) {
            await useWorkout.getState().deleteWorkout(json)
            await useWorkout.getState().getWorkout()
        }
    }



}))

export default useWorkout