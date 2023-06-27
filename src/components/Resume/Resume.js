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

  import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
  import 'react-pdf/dist/esm/Page/TextLayer.css';

  import { Document, Page, pdfjs} from 'react-pdf';
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  
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
        >
            <Document file="https://jerikjakobsen-resume-bucket.s3.amazonaws.com/resume.pdf"
            style={{maxWidth: "500px"}}
            >
                <Page pageNumber={1} />
            </Document>
            <Link href="https://jerikjakobsen-resume-bucket.s3.amazonaws.com/resume.pdf" isExternal>
                <Image src="./assets/download-pdf.png" w="80px" h="80px" my="20px"/>
            </Link>
        </Stack>
      </>
    );
  }
  
  