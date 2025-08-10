import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from './components/ui/toaster';
import TimeTravel from './components/TimeTravel';
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TimeTravel />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;