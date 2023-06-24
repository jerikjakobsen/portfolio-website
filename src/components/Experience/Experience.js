import {
  Stack,
  Container,
  Box
} from "@chakra-ui/react";
import experiences from "../../info/Experience.json"
import ExperienceCard from "./ExperienceCard"

export default function Experience({ color }) {

  return (
    <div style={{clear: "both", marginTop: "10px"}}>
      <Container maxW={"3xl"} id="experience">
          <Stack 
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}>
            {experiences
              .map((exp) => (
                  <ExperienceCard
                    experience={exp}
                    color = {color}
                  />
              ))}
          </Stack>
      </Container>
    </ div>
  );
}
