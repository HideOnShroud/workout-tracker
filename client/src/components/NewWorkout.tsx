import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";
import { useWorkout } from "../store";

const NewWorkout = () => {
    const [title, setTitle] = useState('')
    const [sets, setSets] = useState("")
    const [reps, setReps] = useState("")
    const [load, setLoad] = useState("")
    const [error, setError] = useState("")
    const addWorkout = useWorkout((state) => state.addWorkout)

    const handleSumbit = async (e: any) => {
        e.preventDefault();
        const workout = { title, sets: parseInt(sets), reps: parseInt(reps), load: parseInt(load) };

        await addWorkout(workout);

        setTitle('')
        setReps('')
        setSets('')
        setLoad('')
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