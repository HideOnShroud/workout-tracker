import { create } from 'zustand'
import { Workout } from './interfaces/WorkoutInterface'
import { UserInterface } from './interfaces/UserInterface'


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

interface UserStore {
    user: UserInterface,
    addUser: (user: { email: string, password: string }) => Promise<void>
    getUser: (user: { email: string, password: string }) => Promise<void>
}

const useUser = create<UserStore>((set) => ({
    user: {
        email: JSON.parse(localStorage.getItem('user') || '{"email":"", "token":""}').email,
        token: JSON.parse(localStorage.getItem('user') || '{"email":"", "token":""}').token
    },
    addUser: async (user: { email: string, password: string }) => {
        try {
            const response = await fetch('http://localhost:4545/api/user/signup', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user') || '{"email":"", "token":""}').token}`

                }
            });
            if (!response.ok) {
                throw new Error('Failed to add user');
            }
            const data: UserInterface = await response.json();
            set({ user: data })
            localStorage.setItem("user", JSON.stringify(data))

            console.log("done")
        } catch (error) {
            console.error(error);
        }
    },
    getUser: async (user: { email: string, password: string }) => {
        try {
            const response = await fetch('http://localhost:4545/api/user/login', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to add user');
            }
            const data: UserInterface = await response.json();
            set({ user: data })
            localStorage.setItem("user", JSON.stringify(data))
            console.log("done")
        } catch (error) {
            console.error(error);
        }
    },

}))


const useWorkout = create<WorkoutStore>((set) => ({
    workout: [],
    getWorkout: async () => {
        try {
            const response = await fetch('http://localhost:4545/api/workouts', {
                headers: {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user') || '{"email":"", "token":""}').token}`
                }
            });
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
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user') || '{"email":"", "token":""}').token}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to add workout');
            }
            await useWorkout.getState().getWorkout();
        } catch (error) {
            console.error(error);
        }
    },
    deleteWorkout: async (id: string) => {
        const response = await fetch('http://localhost:4545/api/workouts/' + id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user') || '{"email":"", "token":""}').token}`
            }
        })
        const json = await response.json()
        if (response.ok) {
            await useWorkout.getState().deleteWorkout(json)
            await useWorkout.getState().getWorkout()
        }
    }



}))

export { useWorkout, useUser }