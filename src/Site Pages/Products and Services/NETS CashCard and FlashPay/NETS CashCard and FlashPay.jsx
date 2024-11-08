import './NETS CashCard and FlashPay.css'
import image1 from './NFP-exchange.jpg'

const NETSCashCardAndFlashPay = () =>{
    return(
        <div className='nets-cash-card-and-flash-pay-container'>
            <h1>NETS CashCard and FlashPay</h1>

            <img id='nets-flashcard-image' src={image1} alt="" />

            <h3>The Combi Dispenser Module</h3>

            <p>Developed in 2009 in conjunction with NETS with it's the launch of the FLASHPAY card, and Punggol Pasir Ris Town Council, CWB developed the multi functional COMBI DISPENSER.</p>

            <p>The Combi Dispenser accepts:</p>

            <ul type='square'>
                <li>NETS ATM Debit</li>
                <li>Cash-Card</li>
                <li>FlashPay</li>
                <li>and also allows for Top up of Cash-Card, Flashpay and the GB cards.</li>
            </ul>

            <p>The Combi Dispenser also allows controlling dispense and payments functions up to 5 different vending add-on's. <br /><br />
            The initial vending option deployed across all MSCP's Car washing Bays in Punggol Pasir Ris Town Council was for Water and Vacuum. <br /><br />
            We currently have over 130 Combi Dispensers installed in Singapore. If you are a vending machine provider looking for 1 payment module to control multiple vending machines, our Combi Dispenser may be the ideal solution. <br /><br />
            We are also able to custom fit all our components into your Vending Machines or custom make a Kiosk for you. Simply fill the Contact us form with your details and requirements and we'll get back to you with a solution in no time.</p>

        </div>
    )
}
export default NETSCashCardAndFlashPay;