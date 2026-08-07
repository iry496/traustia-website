import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TraustiaSite } from "./components/TraustiaSite";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TraustiaSite />
  </StrictMode>,
);
