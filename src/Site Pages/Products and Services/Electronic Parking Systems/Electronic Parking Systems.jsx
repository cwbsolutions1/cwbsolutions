import './Electronic Parking Systems.css';

const ElectronicParkingSystems = () => {

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='electronic-parking-systems-container'>
            <h1>Electronic Parking Systems</h1>

            <div className='parking-system-types-headings-container'>
                <div onClick={() => scrollToSection('full-electronic-parking-system')}>Full Electronic Parking System</div>
                <div onClick={() => scrollToSection('semi-electronic-parking-system')}>Semi Electronic Parking System</div>
                <div onClick={() => scrollToSection('vehicle-access-control-system')}>Vehicle Access Control System</div>
            </div>

            <div className='parking-system-types-details-container'>
                <div className="parking-system-types-details-box" id='full-electronic-parking-system'>
                    <h5>Full Electronic Parking System</h5>
                    <p>Electronic Parking System (EPS) is a cashless system that uses EPS antenna to read the number of ERP In-Vehicle Unit (IU) at the entry and exit of the carpark. Upon exit, parking fee is deducted from the Cash Card/Ez-link card from the IU of the vehicle, without the hassle of rhe driver to manually insert the Cash Card or tap the CEPAS II card onto the payment kiosk.</p>
                    <h6>Entry and Exit Operation</h6>
                    <p>Motorist drives the vehicle to the Entry point, the EPS Antenna will pick up the IU number and record it together with the entry date and time. Barrier witll then lift for the vehicle to enter. At the Exit, the EPS Antenna again will pick up the IU number and compare with the database, calculate the parking charges, display onto the Exit Terminal and send signal for the IU to make the relevant deduction. After money deducted, the barrier witll be lifted.</p>
                </div>

                <div className="parking-system-types-details-box" id='semi-electronic-parking-system'>
                    <h5>Semi Electronic Parking System</h5>
                    <p>Electronic Parking System (EPS) is a cashless system that uses EPS antenna to read the number of ERP In-Vehicle Unit (IU) at the entry and exit of the carpark. Upon exit, Drivers have to insert their cash car d or flash their Flashpay card(where applicable) and parking fee is deducted from the Cash Card/ Flashpay. Ez-link or cards in the IU of the vehicle will not be deducted automatically .  This hassle of the driver to manually insert the Cash Card or tap the CEPAS II card onto the payment kiosk allows the entirety implementing the system to save more then half the cost of a Full EPS as the Semi EPS is an estimated $70,000 cheaper then the Full EPS as this does not require the costly Charging Station.</p>
                    <h6>Entry and Exit Operation</h6>
                    <p>Motorist drives the vehicle to the Entry point, the EPS Antenna will pick up the IU number and record it together with the entry date and time. Barrier witll then lift for the vehicle to enter. At the Exit, the EPS Antenna again will pick up the IU number and compare with the database, calculate the parking charges, display onto the Exit Terminal and send instructions for the motorist to make the relevant deduction by manually insetting the cash card  After money deducted, the barrier witll be lifted.</p>
            </div>

            <div className="parking-system-types-details-box" id='vehicle-access-control-system'>
                <h5>Vehicle Access Control System</h5>
                <h6>CWB Season Parking System EPS</h6>
                <p>CWB Season Parking System EPS employs the use of the EPS antenna (based on ERP technology) to read the vehicle's IN-Vehicle Unit (IU) as an identification. This unique IU number is input into the computer system along with the motorists' particulars as a season vehicle. Registered vehicle will be authenticated at the Entry via the EPS antenna. Unregistered vehicle will not be allowed to enter, till intervention by the security.</p>

                <div>

                    <div className='parking-system-types-details-sub-box'>

                        <div className='parking-system-types-details-sub-box-headings'>
                            <span onClick={()=> scrollToSection('benefits-in-parking-system-types-details-sub-box')}>Benefits</span>
                            <span onClick={()=> scrollToSection('barrier-systems-in-parking-system-types-details-sub-box')}>Barrier Systems</span>
                            <span onClick={()=>scrollToSection('electronic-parking-systems-in-parking-system-types-details-sub-box')}>Electronic Parking Systems</span>
                        </div>

                        <p id='benefits-in-parking-system-types-details-sub-box'>Benefits</p>
                        <div>
                            <b>Security</b>
                            <ul type='square'>
                                <li>Overnight parking control for visitors</li>
                                <li>Manual Barrier open control & report</li>
                                <li>only authorized vehicles are allowed to access</li>
                                <li>Constant tracking of vehicle entering the premises</li>
                            </ul>
                        </div>
                        <div>
                        <b>Convenient to Residents</b>
                            <ul type='square'>
                                <li>Resident not subjected to security check, allow faster access</li>
                                <li>Hand Free System</li>
                            </ul>
                        </div>
                        <div>
                            <b>Operation Benefits</b>
                            <ul type='square'>
                                <li>24hrs operation</li>
                                <li>Reducing guard attention on traffic control</li>
                                <li>Less manpower required at the main gate</li>
                            </ul>
                        </div>
                        <div>
                            <b>Maintenance</b>
                            <ul type='square'>
                                <li>Ease of use</li>
                                <li>Minimal Maintenance</li>
                                <li>Suitable for surface or basement car parks.</li>
                            </ul>
                        </div>
                        <div>
                            <b>Image</b>
                            <ul type='square'>
                                <li>Enhance image of the property by having latest technology in the market</li>
                                <li>Leads to higher property rental & re-sales value</li>
                            </ul>
                        </div>
                    </div>

                    <div className='parking-system-types-details-sub-box'>
                        <p id='barrier-systems-in-parking-system-types-details-sub-box'>Barrier Systems</p>
                        <h4>CAME G4000 Barrier</h4>
                        <span>High quality Italian barrier arm and motor unit with built in contrl panel and accessories fully assembled. suitable for passages up to 4m.</span>

                        
                        <ul type='square'>
                            <li>Elecrtomechanical gear motor: does not require periodic maintenance</li>
                            <li>Self-locking gear motor positively locks the barrier int he closed position.</li>
                            <li>Built in contrl panel: supplies 24V DC to the motor</li>
                            <li>Built in release system: with key. The lock can easily be changed and unified with other CAME units</li>
                            <li>Configured for easy installation of contrl and safety accessories</li>
                            <li>Configured for installation and connection of an emergency battery: supplies power to the system in case of power failture</li>
                        </ul>

                        <h4>CAME G4000 Barrier (With Folding Arm)</h4>
                        <span>Highly durable filled with low celling folding arm articulation inside building. Italian 4 meter barrier arm and motor unit with build in contrl panel & accessories fully assembled.</span>

                    </div>

                    <div className='parking-system-types-details-sub-box'>
                        <p id='electronic-parking-systems-in-parking-system-types-details-sub-box'>Electronic Parking Systems</p>
                        <h4>CWB EPS Season Controller</h4>
                        <span>High quality stand alone CWB proprietary 16 bit PCB contrller with onboard memory and back up battery. Four spare relays for ease of maintenance, loaded with season EPS embedded protocol housed in a compact waterproof PVC enclosure with host port connection to PC software.</span>

                        <ul type='square'>
                            <li>Microprocessor based</li>
                            <li>Power supply unit</li>
                            <li>Comes with surge arrestor</li>
                            <li>Independent system, system still can function even if management station is down or shut off
                            </li>
                        </ul>

                        <h4>MHI EPS Antenna</h4>
                        <ul type='square'>
                            <li>Read the unique vehicle IU</li>
                            <li>Highly reliable and accurate</li>
                            <li>Using high RF of 2.4GHz</li>
                            <li>Signal not affected by other RF signals or other electrical or electronic interference</li>
                        </ul>

                        <h4>CWB Parking Management Station</h4>
                        <ul type='square'>
                            <li>Window based system</li>
                            <li>Season parking software</li>
                            <li>Using high RF of 2.4GHz</li>
                            <li>Can store unlimited number of season holders</li>
                            <li>Generating of reports</li>
                        </ul>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default ElectronicParkingSystems;
