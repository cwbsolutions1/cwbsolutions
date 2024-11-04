import './Came Gard.css'
import CameGuardImage from './parking.png'

const CameGard = () =>{
    return(
        <div className='came-gard-container'>
            <h1>CAME Barrier Gates</h1>

            <div className='came-gard-products-container'>
                <div className='came-gard-product-box'>
                    <div className='came-gard-product-box-upper-section'>
                        <div> <img src={CameGuardImage} alt="" /></div>
                        <div>
                            <h3>CAME GARD</h3>
                            <p><i>For passages of up to 2.5m and 4m</i></p>
                            <p>The fast automatic barriers are the ideal solution when you need to control and select roads and parking areas in residential and collective settings. They are available with both 230V and 24V motors and also in the special inox steel (rust proof) cabinet version. Ideal for application near the sea or in high traffic areas.</p>
                        </div>
                    </div>
                    <div className='came-gard-product-box-lower-section'>
                        Specifications
                        <ul type='square'>
                            <li>Spec 1</li>
                            <li>spec 2</li>
                        </ul>
                    </div>
                    
                </div>

                <div className='came-gard-product-box'>
                <div className='came-gard-product-box-upper-section'>
                        <div> <img src={CameGuardImage} alt="" /></div>
                        <div>
                            <h3>CAME GARD 4</h3>
                            <p><i>For passages of up to 3.75m</i></p>
                            <p>Gard 4 is the new, automatic street barrier designed for regular vehicular flows in both residential as well as multi-user settings. It features soft profiles, rounded edges to offset the sail-effect, and innovative shapes all included in a barrier which fits harmoniously in all environments</p>
                        </div>
                    </div>
                    <div className='came-gard-product-box-lower-section'>
                        Specifications
                        <ul type='square'>
                            <li>Spec 1</li>
                            <li>spec 2</li>
                        </ul>
                    </div>
                </div>

                <div className='came-gard-product-box'>
                    <div className='came-gard-product-box-upper-section'>
                        <div><img src={CameGuardImage} alt="" /></div>
                        <div>
                            <h3>CAME GARD 8</h3>
                            <p><i>For passages of up to 7.6m</i></p>
                            <p>Gard 8 features innovative design features and is the latest in the line of automatic road barriers. It is the ideal solution to control roads and parking areas in industrial and collective settings. It comes in both the 230V and 24V versions.</p>
                        </div>
                    </div>
                    <div className='came-gard-product-box-lower-section'>
                        Specifications
                        <ul type='square'>
                            <li>Spec 1</li>
                            <li>spec 2</li>
                        </ul>
                    </div>
                </div>

                <div className='came-gard-product-box'>
                    <div className='came-gard-product-box-upper-section'>
                        <div><img src={CameGuardImage} alt="" /></div>
                        <div>
                            <h3>CAME GARD 12</h3>
                            <p><i>For passages of up to 12m</i></p>
                            <p>Specifically designed for large industrial passages, Gard12 is an out-of-the-ordinary operator. This is an exceptional product which is unmatched when it comes to reliability and power. It only comes in the 24V version</p>
                        </div>
                    </div>
                    <div className='came-gard-product-box-lower-section'>
                        Specifications
                        <ul type='square'>
                            <li>Spec 1</li>
                            <li>spec 2</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}
export default CameGard;