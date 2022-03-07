import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./context/context";
import { GlobalStyles } from "./GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <GlobalStyles />
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
