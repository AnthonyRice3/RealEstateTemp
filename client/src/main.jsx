import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react"
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
    <Auth0Provider 
    domain="dev-586xby1ivedfsalf.us.auth0.com"
    clientId="GdSAaOOMM3nuSM0dl8jcT3XdQLUc7Uso"
    authorizationParams={{
      redirect_uri: "http://localhost:5173/"
    }}
    audience="http://localhost:8000"
    scope="openid profile email"
    >
      <App />
    </Auth0Provider>
    </MantineProvider>
  </React.StrictMode>
);
