import { Button, Card, CardBody, CardHeader, CardFooter, Text, Box, Spacer, HStack } from "@chakra-ui/react";
import { Workout } from "../interfaces/WorkoutInterface";
import { useWorkout } from "../store";

interface props {
    workout: Workout
}

const WorkoutComponent = ({ workout }: props) => {
    const deleteWorkout = useWorkout((state) => state.deleteWorkout)

    return (
        <>
            <Card align={'center'} m={5} w={"95%"} key={workout._id}>
                <CardHeader fontSize={'1.5rem'}
                    fontWeight={"bold"}>
                    <Text>{workout.title}</Text>
                </CardHeader>
                <CardBody w={"80%"}>
                    <HStack >
                        <Button>
                            <Text textColor={'blue'}>Update</Text>
                        </Button>
                        <Spacer />
                        <Box>

                            <Text>
                                Sets: {workout.sets}
                            </Text>
                            <Text>
                                Reps: {workout.reps}
                            </Text>
                            <Text>
                                Load: {workout.load}
                            </Text>
                        </Box>
                        <Spacer />
                        <Button
                            onClick={async () =>
                                await deleteWorkout(workout._id)
                            }>
                            <Text textColor={'red'}>Delete</Text>
                        </Button>
                    </HStack>
                </CardBody>
                <CardFooter>
                    <Box>

                        <Text>{workout.createdAt}</Text>
                        <Text>{workout.updatedAt}</Text>
                    </Box>
                </CardFooter>
            </Card>
        </>
    );
}

export default WorkoutComponent;