
import { Box, Grid, HStack, SimpleGrid } from '@chakra-ui/react';
import Workouts from '../components/Workouts';
import NewWorkout from '../components/NewWorkout';


const HomePage = () => {


    return (
        <>
            <Box pt={"2%"}>

                <SimpleGrid columns={2}>
                    <Workouts />
                    <NewWorkout />
                </SimpleGrid>
            </Box >
        </>
    );
};

export default HomePage;
