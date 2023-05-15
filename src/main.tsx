import React from "react";
import ReactDOM from "react-dom/client";
import TBButton from "./TBButton";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TBButton>Use this to run a local development environment of the library for testing</TBButton>
  </React.StrictMode>
);
