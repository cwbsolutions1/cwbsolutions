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
import PowerVaccumLocations from './Site Pages/Support & Locations/Power Vaccum Locations/Power Vaccum Locations';
import WaterDispenserLocations from './Site Pages/Support & Locations/Water Dispenser Locations/Water Dispenser Locations';
import VehicleLicensePlateRecognizer from './Site Pages/Products and Services/Vehicle License Plate Recognizer/Vehicle License Plate Recognizer';
import ElectronicParkingSystems from './Site Pages/Products and Services/Electronic Parking Systems/Electronic Parking Systems';
import AirMachines from './Site Pages/Products and Services/Air Machines/Air Machines';
import AutomaticCarWashes from './Site Pages/Products and Services/Automatic Car Washes/Automatic Car Washes';
import CarAndAccessBarrierSystems from './Site Pages/Products and Services/Car & Access Barrier Systems/Car & Access Barrier Systems';
import CoinOperatedShowers from './Site Pages/Products and Services/Coin Operated Showers/Coin Operated Showers';
import ElectricBBQPits from './Site Pages/Products and Services/Electric BBQ Pits/Electric BBQ Pits';
import HotAirDryers from './Site Pages/Products and Services/Hot Air Dryers/Hot Air Dryers';
import MiniCarWashes from './Site Pages/Products and Services/Mini Car Washes/Mini Car Washes';
import NETSCashCardAndFlashPay from './Site Pages/Products and Services/NETS CashCard and FlashPay/NETS CashCard and FlashPay';
import PerimeterFencingAndGates from './Site Pages/Products and Services/Perimeter Fencing & Gates/Perimeter Fencing & Gates';
import PowerfulCarVaccums from './Site Pages/Products and Services/Powerful Car Vacuums/Powerful Car Vaccums';
import ReplacementParts from './Site Pages/Products and Services/Replacement Parts/Replacement Parts';
import WaterDispensers from './Site Pages/Products and Services/Water Dispensers/Water Dispensers';



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
              <Route path='cwbsolutions.net/power-vacuum-locations/' element={<PowerVaccumLocations/>}></Route>
              <Route path='cwbsolutions.net/water-dispenser-locations/' element={<WaterDispenserLocations/>}></Route>
              <Route path='cwbsolutions.net/vehicle-license-plate-recognizer/' element={<VehicleLicensePlateRecognizer/>}></Route>
              <Route path='cwbsolutions.net/parking-and-access-control/electronic-parking-systems/' element={<ElectronicParkingSystems/>}></Route>
              <Route path='cwbsolutions.net/air-machines/' element={<AirMachines/>}></Route>
              <Route path='cwbsolutions.net/automatic-car-wash/' element={<AutomaticCarWashes/>}></Route>
              <Route path='cwbsolutions.net/car-barrier-systems/' element={<CarAndAccessBarrierSystems/>}></Route>
              <Route path='cwbsolutions.net/coin-operated-showers' element={<CoinOperatedShowers/>}></Route>
              <Route path='cwbsolutions.net/electric-bbq-pits/' element={<ElectricBBQPits/>}></Route>
              <Route path='cwbsolutions.net/hot-air-dryer/'element={<HotAirDryers/>}></Route>
              <Route path='cwbsolutions.net/news/mini-car-washes/' element={<MiniCarWashes/>}></Route>
              <Route path='cwbsolutions.net/engineering/payment-modules/nets-cashcard-and-flashpay/' element={<NETSCashCardAndFlashPay/>}></Route>
              <Route path='cwbsolutions.net/perimeter-fencing---gates/' element={<PerimeterFencingAndGates/>}></Route>
              <Route path='cwbsolutions.net/car-washing-and-car-wash-bays-equipment/power-vacuums/' element={<PowerfulCarVaccums/>}></Route>
              <Route path='cwbsolutions.net/replacement-parts-for-vacuums-water-dispensers/' element={<ReplacementParts/>}></Route>
              <Route path='cwbsolutions.net/car-washing-and-car-wash-bays-equipment/water-dispensers/' element={<WaterDispensers/>}></Route>
              
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
