import './IQ Wall Cabinet Series.css'
import wallCabinetImage from './IQ Wall Cabinet.jpg'

const IqWallCabinetSeries =()=>{
    return(
        <div className='iq-wall-cabinet-series-container'>
            <h1>IQ Wall Cabinet Series</h1>

            {/*Below classes are duplicated from IQ Box Cabinet Series */}  

            <img className='main-image-key-and-storage-management-sub-page' src={wallCabinetImage} alt="" />

            <div className='key-and-storage-management-product-variants-container'>
                <div >
                    <h5>IQ Wall Cabinet 50</h5>
                </div>

                <div>
                    <h5>IQ Wall Cabinet 80</h5>
                </div>

                <div>
                    <h5>IQ Wall Cabinet 100</h5>
                </div>

                <div>
                    <h5>IQ Wall Cabinet 200</h5>
                </div>

                <div>
                    <h5>IQ Wall Cabinet 300</h5>
                </div>

                <div>
                    <h5>IQ Wall Cabinet 400</h5>
                </div>
            </div>
        </div>
    )
}
export default IqWallCabinetSeries;