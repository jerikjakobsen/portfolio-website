import {
  Stack,
  Container,
  SimpleGrid
} from "@chakra-ui/react";

import {
  ProjectCard
} from "./ProjectCard.js"

import projects from "../../info/Projects.json"

export default function Projects({ color }) {
    
  return (
    <>
      <Container maxW={"4xl"} id="projects" my={20}>

          <SimpleGrid minChildWidth={"325px"} columns={2} px={4} spacing={4} margin={"8px"}>
            {projects.map((project) => (
              
                <ProjectCard 
                project={project}
                color={color} />
              
            ))}
          </SimpleGrid>
      </Container>
    </>
  );
}
