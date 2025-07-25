import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound({ color }) {
  return (
    <>
      <Heading>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Heading>

      <Container maxW={"3xl"} id="hero">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
          pt={{ base: 36, md: 52 }}
        >
          <Heading
            fontWeight={200}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Something went wrong!
            <br />
            <Text as={"span"} color={`${color}.400`}>
              <Link to="/">Come back home</Link>
            </Text>
          </Heading>
        </Stack>
      </Container>
    </>
  );
}
