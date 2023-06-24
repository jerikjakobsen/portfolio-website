import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Image,
  Heading,
  SimpleGrid,
  Badge,
  Link,
  Center,
} from "@chakra-ui/react";

import {
  ProjectCard
} from "./ProjectCard.js"

import { Fade } from "react-reveal";
import { useState } from "react";
import projects from "../../info/Projects.json"

export default function Projects({ color }) {
    const [selected, setSelected] = useState("All");
    const handleSelected = (value) => {
      setSelected(value);
    };
    
  return (
    <>
      <Container maxW={"3xl"} id="projects">

          <Stack px={4} spacing={4} margin={"8px"}>
            {projects.map((project) => (
              <Fade bottom>
                <ProjectCard 
                title = {project.title}
                img = {project.img}
                description = {project.description}
                link = {project.link} />
              </Fade>
            ))}
          </Stack>
      </Container>
    </>
  );
}
