import './Vehicle License Plate Recognizer.css'
import animation from './Animation - 1730568269901.json'
import Lottie from 'lottie-react';


const VehicleLicensePlateRecognizer = () =>{

    return(
        <div className='vehicle-license-plate-recognizer-container'>
            <h1>Vehicle License Plate Recognizer</h1>
            
            <div className='vehicle-license-plate-recognizer-products-container'>

                <div className='vehicle-license-plate-recognizer-product'>
                    <div>
                        <Lottie
                        id='lottie-animation-in-vehicle-license-plate-recognizer'
                        animationData={animation}
                        style={{background:"transparent", width: "300px", height: "300px"}}>
                        </Lottie>
                    </div>
                    <div>
                        <h5>ANPR BUSINESS SOFTWARE</h5>
                        <p>1,2 & 4 Channel Vehicle License Plate Recogniser</p>
                    </div>
                </div>


                <div className='vehicle-license-plate-recognizer-product'>
                    <div>
                        <Lottie
                            id='lottie-animation-in-vehicle-license-plate-recognizer'
                            animationData={animation}
                            style={{background:"transparent", width: "300px", height: "300px"}}>

                        </Lottie>
                    </div>
                    <div>
                        <h5>Barbos Controller with Alarm & relay out put</h5>
                        <p>This module in addition is required if require to open a barrier or gate via the vehicle license plate recognition software after verification from database</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default VehicleLicensePlateRecognizer;