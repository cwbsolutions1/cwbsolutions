import './Replacement Parts.css'
import vaccumPump from './1ElectricVacuumPump.png'
import carWashHorse from './car-washing-hose.png'
import weepGun from './Weep_1024_1200x.png'
import filterBag from './filter.jpeg'

const ReplacementParts =() =>{
    return(
        <div className='replacement-parts-container'>
            <h1>Replacement Parts</h1>


            <div className='replacement-parts-grid-container'>

                <div className='replacement-part-box'>

                    <div><img src={vaccumPump} alt="" /></div>
                    <div className='replacemet-part-box-title'>Vacuum Motors</div>
                    <div>Motors are the life of your vacuum. If you see a decrease in suctioning power the first thing to check is whether all of your motors are functioning properly. A non-functioning motor will dramatically affect the vacuums performance. It is highly recommended that if you are replacing 1 motor you should replace all of the motors so they wear evenly</div>

                </div>

                <div className='replacement-part-box'>

                    <div><img src={weepGun} alt="" /></div>
                    <div className='replacemet-part-box-title'>Weep Trigger Gun</div>
                    <div>
                    You need the water gun for your car wash or decided to provide your residents with extra car wash facility? We can suggest you our high effective weep trigger guns, which  specially designed to prevent freezing in your gun by allowing water to continually drip through the gun

                    <br /> <br />
                    <p>Applications</p>
                    <ul>
                        <li>Car Wash</li>
                        <li>Car Parks with water dispensers</li>
                    </ul>

                    </div>

                </div>

                <div className='replacement-part-box'>

                    <div><img src={carWashHorse} alt="" /></div>
                    <div className='replacemet-part-box-title'>Car Wash Hoses</div>
                    <div>
                    You want to increase the usage of your water dispensers or just need to replace the howe for your power vacuum? We can provide you with vacuum and water dispenser hoses and accessories. Different colours and sizes available
                    </div>

                    <br />
                    <p>Applications</p>
                    <ul>
                        <li>Car Wash</li>
                        <li>Water Dispensers</li>
                        <li>Power Vacuums</li>
                    </ul>

                    <p>Features</p>
                    <ul>
                        <li>Claw nozzle for 2" diameter hose</li>
                        <li>Swivel cuff for 2" diameter hose </li>
                    </ul>

                </div>

                <div className='replacement-part-box'>

                    <div><img src={filterBag} alt="" /></div>
                    <div className='replacemet-part-box-title'>Filter Bags</div>
                    <div>Filter bags are designed to keep dirt out of your motors. Cleaning and maintaining your filter bags will increase the life of your motors</div>

                </div>

            </div>


        </div>
    )
}
export default ReplacementParts;