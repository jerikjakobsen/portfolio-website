import {
  Stack,
  Text,
  HStack,
  VStack,
  Heading,
  Center,
  Flex
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ContactJson from "../info/Contact.json";

export default function Contact({ color }) {
  
  return (
    <>
      <Flex
      id="contact"
      spacing={{ base: 8, md: 14 }} 
      pb={{ base: 20, md: 36 }}
      height="100%"
      alignItems="center"
      justifyContent="center"
      >
        <Stack 
        spacing={4} 
        maxW={"3xl"} 
        textAlign={"center"}
        >
          <Heading fontSize={"3xl"}>Contact Me Here</Heading>
          <VStack>
          {ContactJson.emails.map(email => (
            <Text color={`${color}.500`} fontWeight={600} fontSize={"lg"} px={4}>
            <a href={`mailto:${email}`} target="_blank">{email}</a>
          </Text>
          ))}
          </VStack>
          <Center>
            <HStack pt={4} spacing={4}>
              <a href={ContactJson.linkedin} target="_blank">
                <FaLinkedin size={28} />
              </a>
              <a href={ContactJson.github} target="_blank">
                <FaGithub size={28} />
              </a>
            </HStack>
          </Center>
        </Stack>
      </Flex>
    </>
  );
}

