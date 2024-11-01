import './PCB.css'
import testAnime from '../PCB/motherboard (1).png'


const PCB = () =>{

    return(
        <div className="pcb-container">
            <h2>CWB PCB Boards</h2>

            <h4>Printed Circuit Boards (PCB) </h4>


                <p>CWB designs and develops their own proprietary PCB boards & offer rapid prototyping services. 
                Please fill your contact details and requirements in the Contact us form may you require any of our ready programmable PCB boards or our customisation rapid prototyping services.</p>


            <div className='pcb-category'>

                <div>
                    <img src={testAnime} alt="PCB" />
                    <div>
                        <h3>CWB SOLUTIONS - Combi CCUS Ver 1.05</h3>
                        <p>Developed in 2009, Ver 1.05 was an upgrade of CCUS Ver 1.00 and has</p>

                    </div>
                    <div>
                    <ul type='none'>
                            <li> 5 functions relay</li>
                            <li>5 buttons input</li>
                            <li>3 LCD/Touchscreen screen ports with backlight</li>
                            <li>4 sensor inputs</li>
                            <li>4 LED outputs</li>
                            <li>on-board battery</li>
                            <li>on-board Real Time Clock</li>
                            <li>1 Printer port</li>
                            <li>1 buzzer port</li>
                            <li>4 RJ 45 ports</li>
                            <li>1 back up 12V battery port to support power shortages</li>
                            <li>32 bit Freescale controller that supports either of both NETS Cash-Card off-line & NETS online UP05 Terminal that enables Top-up functions.</li>
                            <li>In addition this board also has it's own dial up modem with 2 phone line in/out ports able to connect to a remote server for an audit trail.</li>

                        </ul>
                    </div>

                </div>

                <div>
                    <img src={testAnime} alt="PCB" />
                    <div>
                        <h3>CWB SOLUTIONS CCUS Ver1.00</h3>
                        <p>Developed in 2008, CCUS Ver1.00</p>

                    </div>
                    <div>
                    <ul type='none'>
                            <li>4 function relay</li>
                            <li>4 buttons input</li>
                            <li>1 LCD screen port with backlight </li>
                            <li>1 back up 12V battery port to support power shortages</li>
                            <li>on board battery</li>
                            <li>on board Real Time Clock</li>
                            <li>1 Printer port</li>
                            <li>1 buzzer port</li>
                            <li>4 RJ 45 ports</li>
                            <li>32 bit Freescale controller that supports either of both NETS Cash-Card Off-line Merchant terminal as well as NETS online UP05 Terminal that enables Top up functions.</li>
                        </ul>
                    </div>

                </div>




                    
                <div>
                    <img src={testAnime} alt="PCB" />
                    <div>
                        <h3>CWB -Water Dispenser V1.06 STANDALONE</h3>
                        <p>Developed in 2007 for EM Services</p>

                    </div>
                    <div>
                    <ul type='none'>
                            <li>V1.06 is a single function relay</li>
                            <li>8 bit Microchip controller that supports NETS Cash-Card Merchant Off-line terminal and a 16 by 2 line LCD Screen. </li>
                        </ul>
                    </div>

                </div>

            </div>


        </div>
    )
}
export default PCB