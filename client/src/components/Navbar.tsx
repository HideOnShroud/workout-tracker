import { Button, HStack, Heading, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <HStack pl={"1vw"} pr={"1vw"}
                position={"fixed"} zIndex={150} w={'100%'}
                bg={"#f9f9f9"}>

                <Heading>
                    Workout Tracker
                </Heading>
                <Spacer />
                <HStack>
                    <Button><Text>Login</Text></Button>
                    <Button><Text>Register</Text></Button>

                </HStack>
            </HStack>
        </>
    );
}

export default Navbar;