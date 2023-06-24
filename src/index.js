import React from 'react';
import ReactDOM from 'react-dom/client';
import { ColorModeScript } from "@chakra-ui/react";
import './index.css';
import App from './App';
import theme from "./theme";
import About from './components/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact';
import { ChakraProvider } from "@chakra-ui/react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const color = "teal";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App color={color} />,
    children: [
      {
        path: "/",
        element: <About index color={color} />,
      },
      {
        path: "/experience",
        element: <Experience color={color} />,
      },
      {
        path: "/projects",
        element: <Projects color={color} />,
      },
      {
        path: "/contact",
        element: <Contact color={color} />,
      },
    ]
  },
]);

root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </React.StrictMode>
  </ChakraProvider>
);
