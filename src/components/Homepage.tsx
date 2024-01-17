import { Heading, Skeleton, Stack } from "@chakra-ui/react";

export default function Homepage() {
    return (
        <Stack>
            <Heading>Vocanotes</Heading>
            <Skeleton height='25px' width='500px' />
            <Skeleton height='25px' width='500px' />
            <Skeleton height='25px' width='500px' />
        </Stack>
    )
}