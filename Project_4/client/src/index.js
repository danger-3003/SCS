import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThmemProvider} from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import {theme} from "./theme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThmemProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThmemProvider>
  </React.StrictMode>
);