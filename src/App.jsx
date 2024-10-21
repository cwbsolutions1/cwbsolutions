import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css'
import NavigationBar from './Common Elements/Navigation Bar/NavgationBar';
import PageFooter from './Common Elements/Page Footer/PageFooter';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="app-container">

      <NavigationBar />

      <div className="main-content">
        
      </div>

      <PageFooter />

    </div>
  );
}

export default App
