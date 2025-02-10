import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Correct import
import "./index.css";
import App from "./App.jsx";
import { RecoilRoot } from "recoil";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>
);
