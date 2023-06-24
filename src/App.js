import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";
import {Flex} from "@chakra-ui/react";

function App(props) {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow
  const {color} = props;
  return (
    <Flex direction="column" h="100vh">
      <Nav color={color} />
      <Outlet color={color} />
      <Footer/>
    </ Flex>
  );
}

export default App;
