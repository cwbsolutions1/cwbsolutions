import './System Integration and Product Design.css'
import animation from '../System Integration and Product Design/Animation - 1730455907988.json'
import Lottie from 'lottie-react';

const SystemIntegration =() =>{
    return(
        <div className='system-integration-container'>
            <h1>System Integration and Product Design</h1>

            <h3>Let us bring you your Solutions...</h3>



            <div className='system-integration-description'>
                <p>As business leaders set the strategic direction, IT is expected to quickly develop new integrated processes, applications, and information systems that provide a differentiated capability, or re-purpose existing technologies to cut maintenance costs, achieve performance improvements, improve decision making, and meet business goals.</p>

                <div className="float-animation" id='float-animation-in-system-integration'>
                <Lottie
                animationData={animation}
                background="transparent"
                speed="1"
                style={{ width: "350px", height: "350px" }}
                loop
                autoplay>
                </Lottie>

            </div>

                <p>Unfortunately IT environments are often a complicated tangle of systems, platforms and applications, with siloed or overlapping functionality and designed with varying standards. Efforts to connect them or align them with a business process can be costly, time-consuming and risky endeavors.</p>

                <p>CWB Solutions can help you sort through this complexity to quickly and effectively transform your requirements and your existing applications and information systems into tailored business- and technology-aligned solutions to accelerate the achievement of business results and achieve business advantage.</p>

                <p>We bring together approaches such as SOA and business process management (BPM) to help enhance IT’s responsiveness and business performance through modern integration technologies. We help you streamline business processes and provide real-time visibility into their performance. We help you reduce development cycles and maintenance costs while improving quality. And through the creation of centers of excellence, we help you institutionalize knowledge and methods to support continuous improvement, performance gains and consistency.</p>
            </div>





        </div>
    )
}
export default SystemIntegration;