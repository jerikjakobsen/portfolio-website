import React from "react";
import ReactDOM from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import theme from "./theme";

import About from "./components/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume/Resume";
import { ChakraProvider } from "@chakra-ui/react";
import NotFound from "./components/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const color = "teal";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App color={color} />,
    errorElement: <NotFound color={color} />,
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
      // {
      //   path: "/resume",
      //   element: <Resume />
      // }
    ],
  },
]);

root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <RouterProvider router={router} />
  </ChakraProvider>,
);
