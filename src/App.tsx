import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './configs/theme';
import './App.css';
import { NavBar } from './layouts/drawer';
import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <NavBar/> */}
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
