import './IQ Box Cabinet Series.css'
import boxCabinetImage from './iq-box-storage-cabinet.jpg'


const IqBoxCabinetSeries = () =>{
    return(
        <div className='iq-box-cabinet-series-container'>
            <h1>IQ Box Cabinet Series</h1>

            <img className='main-image-key-and-storage-management-sub-page' src={boxCabinetImage} alt="" />

            <div className='key-and-storage-management-product-variants-container'>
                <div >
                    <h5>IQ Box Cabinet 12</h5>
                </div>

                <div>
                    <h5>IQ Box Cabinet 20</h5>
                </div>

                <div>
                    <h5>IQ Box Cabinet 30</h5>
                </div>

                <div>
                    <h5>IQ Box Cabinet 44</h5>
                </div>
            </div>
        </div>
    )
}
export default IqBoxCabinetSeries;