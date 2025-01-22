import './Petrol Stations.css'
import airMachineImage from '../Products and Services/Air Machines/Air Machine.jpeg'
import powerVaccumImage from '../Products and Services/Powerful Car Vacuums/Power Vac/power vaccum.jpeg'
import hotAirDryerImage from '../Products and Services/Hot Air Dryers/Hot-Air-Dryer.jpg'
import carWashImage from '../Products and Services/Automatic Car Washes/belanger-freestyler-soft-touch-automatic-system.png'

import { Link } from 'react-router-dom'

const PetrolStations = () =>{
    return(
        <div className='petrol-stations-container'>
            <h1>Petrol Station Equipments</h1>

            <div className='petrol-stations-products-grid-container'>
                <div className='petrol-stations-products-individual-box'>
                    <div><img src={powerVaccumImage} alt="" /></div>
                    <div className='title-in-petrol-stations-products-individual-box'>Power Vaccums</div>
                    <div>This is the world's most powerful industrial grade power Vacuum. 2 & 3 motors models are available.</div>
                    <Link to={'/car-washing-and-car-wash-bays-equipment/power-vacuums/'}>Learn More</Link>
                </div>

                <div className='petrol-stations-products-individual-box'>
                    <div><img src={airMachineImage} alt="" /></div>
                    <div className='title-in-petrol-stations-products-individual-box'>Air Machines</div>
                    <div>We offer a wide range of high quality stainless steel air machines.</div>
                    <Link to={'/air-machines/'}>Learn More</Link>
                </div>

                <div className='petrol-stations-products-individual-box'>
                    <div><img src={hotAirDryerImage} alt="" /></div>
                    <div className='title-in-petrol-stations-products-individual-box'>Hot Air Dryers</div>
                    <div>Cut your manpower cost & increase customer satisfaction on you per car wash speed with a spot free finish with  our powerful heated air dryer.</div>
                    <Link to={'/hot-air-dryer/'}>Learn More</Link>
                </div>

                <div className='petrol-stations-products-individual-box'>
                    <div><img src={carWashImage} alt="" /></div>
                    <div className='title-in-petrol-stations-products-individual-box'>Automatic Car Wash System</div>
                    <div>The unit is dependable and easy to maintain with built in features that save on operating costs.</div>
                    <Link to={'/automatic-car-wash/'}>Learn More</Link>
                </div>
            </div>

        </div>
    )
}
export default PetrolStations;