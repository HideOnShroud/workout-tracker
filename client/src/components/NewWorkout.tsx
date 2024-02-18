import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";

const NewWorkout = () => {
    const [title, setTitle] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [load, setLoad] = useState('')
    const [error, setError] = useState('')

    const handleSumbit = async (e: any) => {
        e.preventDefault()
        const workout = { title, sets, reps, load }

        const response = await fetch('http://localhost:4545/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        }
        else {
            setError('')
        }
    }
    return (
        <Box textAlign={'center'} position={"sticky"} h={5} top={"5%"} w={"80%"} zIndex={200}>
            <Form onSubmit={handleSumbit}>
                <Input type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Input Excersize Title" />
                <Input type="text"
                    onChange={(e) => setSets(e.target.value)}
                    value={sets}
                    placeholder="Input Excersize Sets" />
                <Input type="number"
                    onChange={(e) => setReps(e.target.value)}
                    value={reps}
                    placeholder="Input Excersize Reps" />
                <Input type="number"
                    onChange={(e) => setLoad(e.target.value)}
                    value={load}
                    placeholder="Input Excersize Load In KG" />
                <Button type="submit">Save</Button>
            </Form>
        </Box>
    );
}

export default NewWorkout;