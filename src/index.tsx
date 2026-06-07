import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WoeppelPageDesign } from "./screens/WoeppelPageDesign";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <WoeppelPageDesign />
  </StrictMode>,
);
