import './Solar Powered Studs.css'
import solarPoweredStudImage from './solar-studs.jpg'

const SolarPoweredStuds = () =>{
    return(
        <div className='solar-powered-studs-container'>
            <h1>Solar Powered Studs</h1>

            <div className='product-image-in-solar-powered-studs-container'>
                <img src={solarPoweredStudImage} alt="Solar Powered Stud" />
            </div>

            <p>Solar road studs are flashing solar cell powered LED maintenance-free lighting devices used in road construction to delineate road edges and centrelines. Embedded in the road surface, they are an electronic improvement on the traditional cat's eyes in that they may give drivers more than a thirty-second reaction window compared with about 3 seconds for conventional reflective devices. The intense brightness of the LEDs makes them easily visible at distances of about 900m under favourable conditions.</p>

            <p>Averaging about 100mm square or 100mm diameter and about 40mm thick, units are extremely robust to avoid damage by passing vehicles, and are normally constructed of engineering plastics and polycarbonates. Use of solar road studs reduces the necessity of headlight main beams and the accompanying hazard of dazzling oncoming drivers.</p>

            <p>They are also more visible in rain and fog conditions where the old type retroreflectors and road markings are problematic. The solar cells charge batteries or capacitors during sunlit hours, over which period the flashing LEDs are turned off by a photo switch.</p>
        </div>
    )
}
export default SolarPoweredStuds;