import './Payments Integration.css'
import animation from '../Payments Integration/Animation - 1730439905389.json'
import testAnime from '../Payments Integration/design-software.png'
import Lottie from 'lottie-react'

const PaymentsIntegration = () =>{

    return(
        <div className="payments-integration-container">
            <h2>Payment Integration</h2>

            <h4>Payment's System Integration</h4>

            <div className="float-animation" id='animation-payments-integration'>
                <Lottie
                animationData={animation}
                background="transparent"
                speed="1"
                style={{ width: "300px", height: "300px" }}
                loop
                autoplay>
                </Lottie>
            </div>
                <p>As the payments market experiences continued innovation and consolidation, and as complexity multiplies, there is     increasing demand for flexible payments integration appliances.</p>

                <p>Financial institutions also need to integrate disparate internal payment-related systems and to enable existing  systems to support new payment channels. </p>

                <p>Automate your businesses & Enable electronic payments to increase your profitability, productivity, and efficiency.</p>

                <p>We provide payment's integration with following card issuing systems</p>

            <div className='payments-integration-category'>

                <div>
                    <img src={testAnime} alt="NETS SYSTEM INTEGRATION" />
                    <div>
                        <h3>NETS SYSTEM INTEGRATION</h3>
                        <p>On-Line & Off-Line Terminals available suited to your application.</p>
                        <ul type='none'>
                            <li>CASHCARD</li>
                            <li>FLASHPAY</li>
                            <li>NETS DEBIT</li>
                            <li>TOP-UP</li>
                        </ul>
                    </div>

                </div>
                    
                <div>
                    <img src={testAnime} alt="NETS SYSTEM INTEGRATION" />
                    <div>
                        <h3>EZ LINK SYSTEM INTEGRATION</h3>
                        <p>Ideal for public transportation market focus deployment.</p>
                    </div>

                </div>

                <div>
                    <img src={testAnime} alt="NETS SYSTEM INTEGRATION" />
                    <div>
                        <h3>CREDIT CARD SYSTEM INTEGRATION</h3>
                        <p>NERA terminals are wireless GPRS enabled and support contact less functions for FLASHPAY & EZ LINK as well as for Credit Card Payment acceptance.</p>
                    </div>
                </div>

            </div>


        </div>
    )
}
export default PaymentsIntegration