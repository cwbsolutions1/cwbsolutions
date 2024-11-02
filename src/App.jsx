import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import NavigationBar from './Common Elements/Navigation Bar/NavgationBar';
import PageFooter from './Common Elements/Page Footer/PageFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Sidebar from './Common Elements/Sidebar/Sidebar';
import Homepage from './Site Pages/Home Page/Homepage';
import ScrollUp from './Common Elements/ScrollUp';
import EngineeringSolutions from './Site Pages/Engineering Solutions/Engineering Solutions/Engineering Solutions';
import PaymentsIntegration from './Site Pages/Engineering Solutions/Payment Modules/Payments Integration/Payments Integration';
import PCB from './Site Pages/Engineering Solutions/PCB/PCB';
import SystemIntegration from './Site Pages/Engineering Solutions/System Integration and Product Design/System Integration and Product Design';
import CustomizedSolutions from './Site Pages/Engineering Solutions/Customized Solutions/Customized Solutions';
import Consultation from './Site Pages/Engineering Solutions/Consultation/Consultation';
import ContactUs from './Site Pages/Contact Us/Contact us';
import AboutUs from './Site Pages/About Us/About us';
import Clients from './Site Pages/Clients/Clients';



function App() {


  return (

    <Router>
      <ScrollUp />
    <div className="app-container">

      <div className='testt'>
        <NavigationBar />
      </div>

      <div className='main-content-container'>

        <div className='main-content-container-left-section'>
            <Sidebar/>
        </div>

        <div className='main-content-container-right-section'>
            <Routes>
              <Route path="cwbsolutions.net/" element={<Homepage />} />
              <Route path='/engineering-solutions' element={<EngineeringSolutions/>} />
              <Route path='/engineering/payment-modules/nets-cashcard-and-flashpay/ez-link-/payments-integration/' element={<PaymentsIntegration/>}></Route>
              <Route path='pcb-boards/' element={<PCB/>}></Route>
              <Route path='engineering-solutions/system-integration-and-product-design/' element={<SystemIntegration/>}></Route>
              <Route path='engineering/customised-solutions/' element={<CustomizedSolutions/>}></Route>
              <Route path='engineering-solutions/consultation-services/' element={<Consultation/>}></Route>
              <Route path='cwbsolutions.net/contact-us/' element={<ContactUs/>}></Route>
              <Route path='cwbsolutions.net/about-us/' element={<AboutUs/>}></Route>
              <Route path='cwbsolutions.net/clients/' element={<Clients/>}></Route>
              
            </Routes>
        </div>

      </div>

      <div>
      <PageFooter />
      </div>
      


    </div>
    
    </Router>
  );
}

export default App
