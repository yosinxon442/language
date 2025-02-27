import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Provider from "./components/context";
import { useState } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
    <Provider>
      <App />
    </Provider>
    </BrowserRouter>
  
);
