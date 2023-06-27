import {
    Stack,
    Text,
    HStack,
    Heading,
    Center,
    Flex
  } from "@chakra-ui/react";

  import { Document, Page } from 'react-pdf';
  
  export default function Resume({ color }) {
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
          <Document file="https://jerikjakobsen-resume-bucket.s3.amazonaws.com/resume.pdf"
          onLoadError={console.error}>
            <Page pageNumber={1} />
          </Document>
        </Flex>
      </>
    );
  }
  
  