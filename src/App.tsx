import React from "react";
import "./App.css";
import AppProvider from "./context/AppProvider";
import Router from "./route/route";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AppProvider>
        <Router />
      </AppProvider>
    </LocalizationProvider>
  );
}

export default App;
