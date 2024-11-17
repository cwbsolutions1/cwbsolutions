import './IQ Key Safe Series.css'
import IqKeySafeImage from './IQ Safe Cabinet.jpg'

const IqKeySafeSeries = () =>{
    return(
        <div className='iq-key-safe-series-container'>
            <h1>IQ Key Safe Series</h1>

            {/*Below classes are duplicated from IQ Box Cabinet Series */}

            <img className='main-image-key-and-storage-management-sub-page' src={IqKeySafeImage} alt="" />

            <div className='key-and-storage-management-product-variants-container'>
                <div >
                    <h5>IQ Key Safe 40</h5>
                </div>

                <div>
                    <h5>IQ Key Safe 160</h5>
                </div>

                <div>
                    <h5>IQ Key Safe 210</h5>
                </div>

                <div>
                    <h5>IQ Key Safe 400</h5>
                </div>
            </div>
        </div>
    )
}
export default IqKeySafeSeries;