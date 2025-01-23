import './Parking and Access Control.css'
import { HashLink as Link } from 'react-router-hash-link';
import paymentMachineImage from './Images/parking-machine.jpeg'
import swingArmBarrierImage from './Images/swing-arm-barrier.jpg'
import automaticBarrierImage from './Images/Automatic Barrier.jpg'
import longRangeReaderImage from './Images/long range reader.jpg'
import parkingSystemsImage from './Images/parking-system.jpg'
import ParkingLotBarriersImage from './Images/Parking Lot Barriers.jpg'
import SpeedBumpsImage from './Images/Speed-Bumps.jpg'
import ElectronicParkingSystemImage from './Images/Electronic_Parking_System.jpg'

const ParkingandAccessControl = () =>{

    return(
        <div className='parking-and-access-control-container'>
            <h1>Parking and Access Control </h1>

            <p>CWB Solutions  offers a wide variety of Automatic Car Park Barrier Gates, Intelligent Car Parking Systems, Parking Lot Barriers, Swing Arm Barriers, Personnel or Vehicle Access Identification, Parking Guidance System  e.t.c. for industrial, commercial and residential applications where protection/privacy, reserved space or traffic flow control is required.</p>

            <p>All of our automated vehicular gate system options can be configured to work in concert with other system components that are commonly required with a project. 

            Making your parking and access system safe involves a combination of elements; correct installation that considers geometric layout, correct wiring to code and installing integrated safety systems. Our staff has the experience and proper certifications to ensure that you will be satisfied with your new system from installation and through ongoing support.</p>


            <div className='parking-and-access-control-solutions-container'>
            
                
                <div className='individual-solution-container-in-parking-and-access-control'>
                    <img src={longRangeReaderImage} alt="Long Range Reader for Vehicles Iamge" />
                    <h5>Long Range Reader for Vehicles</h5>
                    <p>Ideal system for vehicle identification.</p>
                    <Link to={"/parking-and-access-control/long-range-reader-for-personnel-or-vehickle-access/"}>Learn More</Link>
                </div>

                <div className='individual-solution-container-in-parking-and-access-control'>
                    <img src={swingArmBarrierImage} alt="Swing Arm Barriers Image" />
                    <h5>Swing Arm Barriers</h5>
                    <p>Cheap and effective swing arm barriers.</p>
                    <Link to={"/car-barrier-systems/#swing-arm-barrier-section"}>Learn More</Link>
                    
                </div>

                <div className='individual-solution-container-in-parking-and-access-control'>
                    <img src={automaticBarrierImage} alt="Automatic Car Barrier Image" />
                    <h5>Automatic Car Barriers</h5>
                    <p>Wide range of automatic car parking gates.</p>
                    <Link to={"/car-barrier-systems/"}>Learn More</Link>
                </div>

                <div className='individual-solution-container-in-parking-and-access-control'>
                    <img src={parkingSystemsImage} alt="Commplete Parking Systems Image" />
                    <h5>Complete Parking System</h5>
                    <p>Automation systems for sliding and swing gates and garage doors</p>
                </div>


                <div className='individual-solution-container-in-parking-and-access-control'>
                    <img src={ParkingLotBarriersImage} alt="Parking Lot Barriers Image" />
                    <h5>Parking Lot Barriers</h5>
                    <p>Wide range of affordable and effective parking space barriers.</p>
                    <Link to={"/car-barrier-systems/#parking-lot-barriers-section"}>Learn More</Link>
                </div>

                <div className='individual-solution-container-in-parking-and-access-control'>
                    <img src={SpeedBumpsImage} alt="Speed Bumps Image"/>
                    <h5>Speed Bumps</h5>
                    <p>Designed to slow traffic in all areas where high speeds can be dangerous.</p>
                </div>

                <div className='individual-solution-container-in-parking-and-access-control'>
                    <img src={ElectronicParkingSystemImage} alt="Electronic Parking Systems Image" />
                    <h5>Electonic Parking Systems</h5>
                    <p>Full, Semi or Vehicle acess EPS systems for convenience of car park operator.</p>
                    <Link to={"/parking-and-access-control/electronic-parking-systems/"}>Learn More</Link>
                </div>  

                <div className='individual-solution-container-in-parking-and-access-control' >
                    <img  src={paymentMachineImage} alt="Parking Payment Machine Image" />
                    <h5>Parking Payment Machine</h5>
                    <p></p>
                </div>
                
            </div>



        </div>
    )
}
export default ParkingandAccessControl;