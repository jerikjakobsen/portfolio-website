import {
  Stack,
  Container,
} from "@chakra-ui/react";

import {
  ProjectCard
} from "./ProjectCard.js"

import projects from "../../info/Projects.json"

export default function Projects({ color }) {
    
  return (
    <>
      <Container maxW={"3xl"} id="projects">

          <Stack px={4} spacing={4} margin={"8px"}>
            {projects.map((project) => (
              
                <ProjectCard 
                project={project}
                color={color} />
              
            ))}
          </Stack>
      </Container>
    </>
  );
}
