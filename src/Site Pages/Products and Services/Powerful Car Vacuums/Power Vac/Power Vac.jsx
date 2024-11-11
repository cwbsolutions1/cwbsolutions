import './Power Vac.css'

const PowerVac = () =>{
    return(
        <div className='power-vac-container'>
            <h1>Commercial Vacuums</h1>

            <h6>Power vacuum with $1 coin acceptor / (*+Water add-on)</h6>

            <div className='common-buy-now-section-for-power-vaccums'>
                    <div className='common-buy-now-left-block'>
                        
                    </div>
                    <div className='common-buy-now-right-block'>
                        <h6>Commercial Power Vacuums</h6>
                        <p>This coin operated model is ideal for commercial car washes & grooming centers where you can earn extra self service vacuum profits after operating hours. Also ideal for HDB multistory car park & condominiums car washing bays and also comes with a water dispense add-on option where you may also add a water hose for your residents ultimate convenience and satisfaction.
                        Comes with same specifications as the stand-alone model.</p>

                        <p>Coin acceptor comes with seconds count down display LED and last minute alert buzzer sound.</p>

                        <span>
                        <select className='buy-now-configuration-select'>
                            <option value="option1">Commercial Power Vaccum- Standalone 0.00S$</option>
                            <option value="option2">Commercial Power Vaccum- Coin Operated 0.00S$</option>
                            <option value="option3">Commercial Power Vaccum & Water - Coin Operated 0.00S$</option>
                        </select>
                        </span>
                        <span className='price-button'>Price : 0.00$</span>
                        <span className='checkout-button'> Checkout</span>

                    </div>
                </div>


                <div className='common-features-section-for-water-dispenser'>
                    <h3>Features</h3>
                    <ul type='square'>
                        <li>J E Adams world renown brand.</li>
                        <li>Most powerful and maintenance free car commercial Vacuums in the world</li>
                        <li>2 Powerful motors up to 4H.P. each</li>
                        <li>Suction(mm/H2O) up to 2567</li>
                        <li>1073 Input Watts per motor</li>
                        <li>Polynomial Peak Airwatts 326.28</li>
                        <li>Hose: 1” x 15’, swivel cuff and nozzle included(15’, 25’, and 50’ available in 1 1/2” or 2”)</li>
                        <li>Internal vacuum hose threading system</li>
                        <li>Double service doors offer easy access to clean out compartment and 4 filter bag system .</li>
                        <li><b>Vacuum only with coin configuration</b> option comes with a $1 coin acceptor for 3-7 minute easy user settable usage option.
                        </li>
                        <li><b>Vacuum + Water coin configuration</b> option comes with 2 coin acceptors side by side on the coin acceptor faceplate that also holds the water tap outlet on it's bottom side. A $1 coin acceptor for Vacuum & a 20 cent coin acceptor for water. Water dispense is at 20 cents for 18 liters/1 min for coin acceptance.</li>
                        <li>While the unit is not in use no power is used.</li>
                        <li>Water hose/retractable options are also a able add-on functions.</li>
                        <li>Body Dimensions : Diameter 505mm X Hight 1320 mm</li>
                    </ul>
                </div>

        </div>
    )
}
export default PowerVac;