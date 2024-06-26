import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({
  colors: { ...colors, brand: { ...colors.brand, 700: "#030005" } },
  styles: {
    global: (props) => ({
      body: {
        backgroundImage: `url(${props.colorMode === "dark" ? '/darkmode.jpg' : '/lightmode.jpg'})`,
        backgroundSize: "cover",
        transition: "background 0.3s ease-out",
      },
    }),
  },
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
