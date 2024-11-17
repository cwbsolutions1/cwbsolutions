import './Road Humps.css'
import thermoplasticRoadHump from './Thermo plastic road hump.png'
import steelRoadHump from './Steel Road Hump.png'

const RoadHumps = () =>{
    return(
        <div className='road-humps-container'>
            <h1>Road Humps</h1>

            <div className='road-humps-products-grid-container'>
                <div className='road-humps-products-individual-box'>
                    <div> <img src={thermoplasticRoadHump} alt="Thermoplastic Road Hump" /></div>
                    <div className='title-in-road-humps-products-individual-box'>Thermoplastic Road Humps</div>
                    <div>Reflective Rubber Road Hump.</div>
                </div>

                <div className='road-humps-products-individual-box'>
                    <div><img src={steelRoadHump} alt="Steel Road Hump" /></div>
                    <div className='title-in-road-humps-products-individual-box'>CWB Steel Heavy Duty Road Humps</div>
                    <div>CWB's Heavy duty steel road humps withstand over 40 Tons of weight bearing ideal for locations where normal rubber humps are not feasible due to the tonnage and heavy usage.</div>
                </div>

            </div>

        </div>
    )
}
export default RoadHumps;