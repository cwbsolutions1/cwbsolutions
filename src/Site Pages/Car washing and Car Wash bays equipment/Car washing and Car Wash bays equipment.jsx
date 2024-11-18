import { Link } from 'react-router-dom';
import './Car washing and Car Wash bays equipment.css'

const CarWashingAndCarWashBaysEquipment = () =>{
    return(
        <div className='car-washing-and-car-wash-bays-equipment-container'>
            <h1>Car Washing and Car Wash Bays Equipment</h1>
            
            <p>Today Singapore is one of the leading countries in the world with regards to spurring innovations and driving automation. At the same time car prices and cost of car maintenance in Singapore is sky rocketing. That's why it's so important to provide motorists with best automatic equipment, which will increase your business revenue & customers satisfaction and at the same time cut costs on manpower.</p>

            <p>CWB Solutions Pte Ltd provides a wide range of equipment for car related businesses as car washes & car grooming companies, petrol stations, car washing bays, multi storeys car parks etc.</p>

            <div className='products-in-car-washing-and-car-wash-bays-equipment'>
                <Link to={'/cwbsolutions.net/car-washing-and-car-wash-bays-equipment/water-dispensers/'}>Water Dispensers</Link>
                <Link to={'/cwbsolutions.net/coin-operated-showers'}>Coin Operated Showers</Link>
                <Link to={'/cwbsolutions.net/car-washing-and-car-wash-bays-equipment/power-vacuums/'}>Power Vacuums</Link>
                <Link to={'/cwbsolutions.net/hot-air-dryer/'}>Hot Air Dryer</Link>
                <Link to={'/cwbsolutions.net/air-machines/'}>Air Machines</Link>
                <Link to={'/cwbsolutions.net/news/mini-car-washes/'}>All in one mini car wash</Link>
                <Link to={'/cwbsolutions.net/automatic-car-wash/'}>Automatic Car Wash</Link>
                <Link to={'/cwbsolutions.net/engineering/payment-modules/nets-cashcard-and-flashpay/'}>Payment Modules</Link>
            </div>
        </div>
    )
}
export default CarWashingAndCarWashBaysEquipment;