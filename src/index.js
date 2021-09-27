import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ShortenUrlProvider } from 'react-shorten-url';

ReactDOM.render(
  <React.StrictMode>
    <ShortenUrlProvider config={{ accessToken: "7d3101061cf003c0775162357e39a3bbd7cbfd20" }}>
      <App />
    </ShortenUrlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
