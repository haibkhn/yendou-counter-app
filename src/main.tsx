import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { CounterProvider } from "./context/CounterContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </ChakraProvider>
  </StrictMode>
);
