import {
    Stack,
    Text,
    Card,
    CardBody,
    Heading,
    Link,
    HStack,
    VStack
  } from "@chakra-ui/react";

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import {FaGithub} from "react-icons/fa";

import './Project.css'

export function ProjectCard(props) {
    const {title, description, links, date} = props.project;
    return (
    <Card
        key={title}
        direction={{
          base: "column",
        }}
        overflow="hidden"
      >
        <CardBody align="left">
          <Stack spacing="10px">
            <Heading size="md">{title}</Heading>
            <Heading size="sm">{date}</Heading>
            <ReactMarkdown  children={description} remarkPlugins={[remarkGfm]} />
            <VStack spacing='10px' align='left' >
              {links.map(link => (
                <Link isExternal  href={link.href}><HStack><FaGithub size={28} /><Text color="cyan">{link.title}</Text></HStack></Link>
              ))}
            </VStack>
          </Stack>
        </CardBody>
      </Card>
      )
}