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
import CameGard from './Site Pages/Products and Services/Car & Access Barrier Systems/Came Gard/Came Gard';
import NiceWilParkingBarrierGate from './Site Pages/Products and Services/Car & Access Barrier Systems/NICE WIL Parking Barrier Gate/NICE WIL Parking Barrier Gate';
import AutomaticCarParkBarrierGates from './Site Pages/Products and Services/Car & Access Barrier Systems/Automatic Car Park Barrier Gates/Automatic Car Park Barrier Gates';
import AutomaticTrafficBarrieWithLedSignal from './Site Pages/Products and Services/Car & Access Barrier Systems/Automatic Traffic barrier with LED signal/Automatic Traffic barrier with LED signal';
import IntelligentCarParkingSystemManagement from './Site Pages/Products and Services/Car & Access Barrier Systems/Intelligent Car Parking System/Intelligent Car Parking System Management/Intelligent Car Parking System Management';
import IntelligentCarParkingSystemManagementWithLedDisplay from './Site Pages/Products and Services/Car & Access Barrier Systems/Intelligent Car Parking System/Intelligent Car Parking System Management with LED Display/Intelligent Car Parking System Management with LED Display';
import AutomatedCarParkingSystemForHotelsAndResidencies from './Site Pages/Products and Services/Car & Access Barrier Systems/Intelligent Car Parking System/Automated car parking system for Hotels & residenses/Automated car parking system for Hotels & residenses';
import StainlessSteelAutomaticSingleArmSwingGate from './Site Pages/Products and Services/Car & Access Barrier Systems/Swing Arm Barriers/Stainless steel Automatic Single Arm Swing Gate/Stainless steel Automatic Single Arm Swing Gate';
import SmartSwingSecurityArmBarrierForHotelCommunityFinancialInstitutions from './Site Pages/Products and Services/Car & Access Barrier Systems/Swing Arm Barriers/Smart Swing Security Arm Barrier for Hotel Community Financial Institutions/Smart Swing Security Arm Barrier for Hotel Community Financial Institutions';
import AccessControlTimeAttendanceVersatileStainlessSteelFlapSwingArmBarrier from './Site Pages/Products and Services/Car & Access Barrier Systems/Swing Arm Barriers/Access control Time attendance Versatile Stainless Steel Flap Swing Arm Barrier/Access control Time attendance Versatile Stainless Steel Flap Swing Arm Barrier';
import WaterproofStainlessSteelLanSockPedestrianBarrierGateSwingBarriers from './Site Pages/Products and Services/Car & Access Barrier Systems/Swing Arm Barriers/Waterproof stainless steel LAN Sock pedestrian barrier gate Swing barriers/Waterproof stainless steel LAN Sock pedestrian barrier gate Swing barriers';
import FlapBarrier from './Site Pages/Products and Services/Car & Access Barrier Systems/Swing Arm Barriers/Flap Barrier (Speed Gate)/Flap Barrier';
import RemoteControlAutomaticSmoothRunningParkingSpaceBarriers from './Site Pages/Products and Services/Car & Access Barrier Systems/Parking Lot Barriers/Remote Control Automatic smooth running Parking Space Barriers/Remote Control Automatic smooth running Parking Space Barriers';
import StainlessSteelRemoteControlParkingSpaceBarrier from './Site Pages/Products and Services/Car & Access Barrier Systems/Parking Lot Barriers/Stainless steel Remote Control Parking Space Barrier/Stainless steel Remote Control Parking Space Barrier';
import WaterproofParkingLotProtector from './Site Pages/Products and Services/Car & Access Barrier Systems/Parking Lot Barriers/Waterproof Parking Lot Protector/Waterproof Parking Lot Protector';
import FullHeightTurnstile from './Site Pages/Products and Services/Car & Access Barrier Systems/Turnstile/Full Height Turnstile/Full Height Turnstile';
import TripodTurnstile from './Site Pages/Products and Services/Car & Access Barrier Systems/Turnstile/Tripod Turnstile/Tripod Turnstile';
import SwimmingPoolShowers from './Site Pages/Products and Services/Coin Operated Showers/Swimming Pool Showers/Swimming Pool Showers';



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
              
              <Route path="/CWB-Solutions-Pte-Ltd/*" element={<Navigate to="/cwbsolutions.net/" replace />} />

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
              <Route path='/cwbsolutions.net/barrier-systems/automatic-car-park-barrier-gates/came-barrier-gates/' element={<CameGard/>}> </Route>
              <Route path='/cwbsolutions.net/barrier-systems/automatic-car-park-barrier-gates/nice-wil-parking-barrier-gate/' element={<NiceWilParkingBarrierGate/>}></Route>
              <Route path='/cwbsolutions.net/barrier-systems/automatic-car-park-barrier-gates/automatic-car-park-barrier-gates/' element={<AutomaticCarParkBarrierGates/>}></Route>
              <Route path='cwbsolutions.net/barrier-systems/automatic-car-park-barrier-gates/automatic-traffic-barrier-with-led-signal/'element={<AutomaticTrafficBarrieWithLedSignal/>}></Route>
              <Route path='cwbsolutions.net/barrier-systems/intelligent-car-parking-system/intelligent-car-parking-system-management-/'element={<IntelligentCarParkingSystemManagement/>}></Route>
              <Route path='cwbsolutions.net/barrier-systems/intelligent-car-parking-system/intelligent-car-parking-system-management-with-led-display/' element={<IntelligentCarParkingSystemManagementWithLedDisplay/>}></Route>
              <Route path='cwbsolutions.net/barrier-systems/intelligent-car-parking-system/automated-car-parking-system-for-hotels---residenses--/' element={<AutomatedCarParkingSystemForHotelsAndResidencies/>}></Route>
              <Route path='cwbsolutions.net/barrier-systems/swing-arm-barriers/stainless-steel-automatic-single-arm-swing-gate/' element={<StainlessSteelAutomaticSingleArmSwingGate/>}></Route>
              <Route path='cwbsolutions.net/barrier-systems/swing-arm-barriers/smart-swing-security-arm-barrier-for-hotel-community-financial-institutions/' element={<SmartSwingSecurityArmBarrierForHotelCommunityFinancialInstitutions/>}></Route>
              <Route path='cwbsolutions.net/barrier-systems/swing-arm-barriers/access-control-time-attendance-versatile-stainless-steel-flap-swing-arm-barrier/' element={<AccessControlTimeAttendanceVersatileStainlessSteelFlapSwingArmBarrier></AccessControlTimeAttendanceVersatileStainlessSteelFlapSwingArmBarrier>}></Route>
              <Route path='cwbsolutions.net/barrier-systems/swing-arm-barriers/waterproof-stainless-steel-lan-sock-pedestrian-barrier-gate-swing-barriers/' element={<WaterproofStainlessSteelLanSockPedestrianBarrierGateSwingBarriers/>}></Route>
              <Route path='cwbsolutions.net/barrier-systems/swing-arm-barriers/flap-barrier-(speed-gate)/' element={<FlapBarrier/>}></Route>
              <Route path='cwbsolutions.net/barrier-systems/parking-space-barrier/remote-control-automatic-smooth-running-parking-space-barriers-/' element={<RemoteControlAutomaticSmoothRunningParkingSpaceBarriers/>}></Route>
              <Route path='www.cwbsolutions.net/barrier-systems/parking-space-barrier/stainless-steel-remote-control-parking-space-barrier' element={<StainlessSteelRemoteControlParkingSpaceBarrier/>}></Route>
              <Route path='cwbsolutions.net/barrier-systems/parking-space-barrier/waterproof-parking-lot-protector/' element={<WaterproofParkingLotProtector/>}></Route>
              <Route path='cwbsolutions.net/turnstile/full-height-turnstile/' element={<FullHeightTurnstile/>}></Route>
              <Route path='cwbsolutions.net/tripod-turnstile/' element={<TripodTurnstile/>}></Route>
              <Route path='cwbsolutions.net/coin-operated-shower/swimming-pool-showers/' element={<SwimmingPoolShowers/>}></Route>

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
