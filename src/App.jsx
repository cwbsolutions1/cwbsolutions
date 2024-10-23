import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import NavigationBar from './Common Elements/Navigation Bar/NavgationBar';
import PageFooter from './Common Elements/Page Footer/PageFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Sidebar from './Common Elements/Sidebar/Sidebar';


function App() {
  return (
    <div className="app-container">

      <div className='testt'>
        <NavigationBar />
      </div>

      <div className='main-content-container'>

        <div className='main-content-container-left-section'>
            <Sidebar/>
        </div>

        <div className='main-content-container-right-section'>
            <h1>Right Section</h1>
        </div>

      </div>

      <div>
      <PageFooter />
      </div>


    </div>
  );
}

export default App
