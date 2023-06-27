import {
    Stack,
    Text,
    HStack,
    Heading,
    Center,
    Flex,
    Image,
    Link,
    Box
  } from "@chakra-ui/react";

import PDFContainer from "./PDFContainer"

export default function Resume({ color }) {

  return (
    <>
      <Stack
      id="resume"
      as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          m={20}
          maxW="3xl"
          alignItems="center"
          width="100%"
          alignSelf="center"
      >
        <PDFContainer />
        <Link href="https://jerikjakobsen-resume-bucket.s3.amazonaws.com/resume.pdf" isExternal>
            <Image src="./assets/download-pdf.png" w="80px" h="80px" my="20px"/>
        </Link>
      </Stack>
    </>
  );
}

