import './Clients.css'
import animation from './Animation - 1730525050598.json'
import animation2 from './Animation - 1730524018714.json'
import Lottie from 'lottie-react';

const Clients = () =>{

    return(
        <div className='client-container'>
            <h1>Our Clients</h1>

            <div>
        
            <Lottie
            className="float-animation "
            animationData={animation}
            style={{ width: "380px", height: "380px"}}>
            </Lottie>

            <p>
            Our current client reach are Government agencies such as EM Services, N Parks, Town councils whom we have 5 to 8 years contracts with to Private Condominiums, Petrol stations, Car grooming Centres and Commercial Buildings such as the German Centre and corporations like Sentosa.
            </p>

            <p>
            We have over 400 Car Parks installed with Cash Card, Coin operated water dispensers, Combi Dispensers (Payment Module accepting Cash Card & Flashpay payments for up to 5 products such as water, Vacuum, Hot Air dryer, Vending as well as Electric Vehicle charging station and Barrier systems. The Combi Dispensers also allows for CashCard, Flashpay as well as GB cards Top-Up.) 
            </p>
            <p>We currently hold 5 & 8 Years Contracts with the respective Town Councils in Singapore with Punggol Pasir Ris, Holland Bukit Pangang, Jurong, West Cost as well as Ang Mo Kio Town Council covering most of their car parks. We are currently Installing over 100 Vacuums island wide to our payment dispensers. We also supply to Far East Organisation. We have completed a wide range of custom integration projects such as booking systems, automation equipment, stand alone payment acceptance systems, amusement park systems as well as drying systems. </p>
            </div>

            <div className='client-description'>
                {['Pungool Pasir Ris Town Council', 'Tampines Town Council', 'Sembawang Town Council', 
                'Holland Bukit Panjang Town Council', 'Ang Mo Kio Town Council', 'Aljunied Hougang Town Council',
                'East Coast Town Council', 'West Coast Town Council', 'Jurong Town Council', 'EM Service', 
                'HDB', 'National Parks'].map((client, index) => (
                    <div className="client-box" key={index}>
                        <span className="client-name">{client}</span>
                        <Lottie
                            className="lottie-animation-in-clients"
                            animationData={animation2}
                            style={{ width: "180px", height: "180px", background: 'transparent' }}
                        />
                    </div>
                ))}
            </div>


        </div>
    )
}
export default Clients;