import {
  Stack,
  Container,
  Box
} from "@chakra-ui/react";
import experiences from "../../info/Experience.json"
import ExperienceCard from "./ExperienceCard"

export default function Experience({ color }) {

  return (
    <div style={{clear: "both",}}>
      <Container maxW={"3xl"} id="experience">
          <Stack 
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            my={20}>
            {experiences
              .flatMap((exp, i) => {
                var group = [
                  (<ExperienceCard
                    experience={exp}
                    color = {color}
                  />)
                ]

                if (i !== experiences.length - 1) {
                  group.push((<div style={{height: "80px", borderLeft: "3px solid rgba(47,55,71)", width: "50%", alignSelf: "flex-end"}} />));
                }
                return group;
              })}
          </Stack>
      </Container>
    </ div>
  );
}
