import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter as Router} from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './theme/Theme'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Router>
    <App />
    </Router>
    </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>
)
