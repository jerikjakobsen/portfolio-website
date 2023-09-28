import {
    Stack,
    Text,
    HStack,
    Heading,
    Center,
    Flex,
    Image,
    Link,
    Box,
    Select
  } from "@chakra-ui/react";

import {useState, useEffect} from 'react'

import PDFContainer from "./PDFContainer"
import axios from 'axios'

export default function Resume({ color }) {
  const [branches, setBranches] = useState([])
  const [selectedBranch, setSelectedBranch] = useState("main")
  useEffect(() => {
    axios.get("https://api.github.com/repos/jerikjakobsen/regit/branches")
    .then(res => {
      let pulledBranches = res.data.map(item => item.name)
      if (pulledBranches.includes("main")) {
        pulledBranches = pulledBranches.filter(elem => elem !== "main")
        pulledBranches.unshift("main")
      }
      setBranches(pulledBranches)
      console.log(branches)
    })
  }, [])
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
        <Select onChange={(ev) => setSelectedBranch(ev.target.value)}>
          {branches.map(branch => (<option value={branch}>{branch}</option>))}
        </Select>
        <PDFContainer branch={selectedBranch}/>
        <Link href={`https://jerikjakobsen-resume-bucket.s3.amazonaws.com/${selectedBranch}/resume.pdf`} isExternal>
            <Image src="./assets/download-pdf.png" w="80px" h="80px" my="20px"/>
        </Link>
      </Stack>
    </>
  );
}

