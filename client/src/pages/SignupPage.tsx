import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";
import { useUser } from "../store";


const SignupPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassowrd] = useState("")

    const addUser = useUser((state) => state.addUser)

    const handleSumbit = async (e: any) => {
        e.preventDefault();
        const user = { email, password };

        await addUser(user);
    }
    return (
        <Box pt={"4%"}>

            <Box textAlign={'center'} position={"sticky"} h={5} top={"5%"} w={"80%"} zIndex={200}>
                <Form onSubmit={handleSumbit}>
                    <Input type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Input Excersize Title" />
                    <Input type="text"
                        onChange={(e) => setPassowrd(e.target.value)}
                        value={password}
                        placeholder="Input Excersize Sets" />

                    <Button type="submit">Login</Button>
                </Form>
            </Box>
        </Box>
    );
}


export default SignupPage;