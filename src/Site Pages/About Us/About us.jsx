import Lottie from 'lottie-react'
import './About us.css'
import animation from './Animation - 1730483031977.json'
import animation2 from './Animation - 1730486348445.json'
import animation3 from './Animation - 1730485978662.json'
import animation4 from './Animation - 1730486971140.json'
import CWBLogo from './CWB Solutions Logo.png'

const AboutUs =  () =>{
    return(
        <div className='about-us-container'>
            
            <h1>About Us</h1>

            <div>
                <div>
                    <img id='CWB-logo-in-about-us' src={CWBLogo} alt="CWB Logo" />
                    <p>CWB is a fledging system integration engineering firm providing a wide range of products and solutions for the car related and automation industries as car washes & car grooming companies, car washing bays, petrol stations, multi storey car parks etc. Our engineering practice integrates in-depth knowledge of technology platforms and profound understanding of business needs for automobile industry: washing bays, carparks, car washes, petrol stations etc.</p>

                    <p>We are also the Sole Distributors of reknown brand JE Adams and Jim Colman's industrial quality line of commercial car care products that range from Power Vacuums and combination machines, self service car wash stations to full service touch-less automatic car wash systems.</p>

                    <p>From ideas to concepts, our processes start at the drawing board with Design turning them into solutions with the right mix of technology and consultation, customizing into reality by implementation followed by comprehensive support.</p>
                </div>

                <div className='company-objective-in-about-us'>
                    <div id='main-horizontal-section'>
                        <div>BUSINESS PHILOSOPHY
                        <div  id='float-animation-in-about-us'>
                            <Lottie
                            animationData={animation2}
                            background="transparent"
                            speed="1"
                            style={{ width: "150px", height: "150px" }}
                            loop
                            autoplay>
                            </Lottie>
                        </div>
                        </div>
                        <div>Innovation is the core of Human Progress. Technology is it's Key. We Innovate! </div>
                    </div>
                    <div id='main-horizontal-section'>
                        <div>OUR MISSION
                        <div  id='float-animation-in-about-us'>
                            <Lottie
                            animationData={animation}
                            background="transparent"
                            speed="1"
                            style={{ width: "150px", height: "150px" }}
                            loop
                            autoplay>
                            </Lottie>
                        </div>
                        </div>
                        <div>Our objective is to innovate and system integrate the best engineering solutions and turn them into reality both for our clients and their customers.  </div>
                    </div>
                    <div id='main-horizontal-section'>
                        <div>OUR PROMISE
                        <div  id='float-animation-in-about-us'>
                            <Lottie
                            animationData={animation3}
                            background="transparent"
                            speed="1"
                            style={{ width: "150px", height: "150px" }}
                            loop
                            autoplay>
                            </Lottie>
                        </div>
                        </div>
                        <div>CWB prides itself on esceptional customer service and is committed to its promise to deliver quality on site, on time.</div>
                    </div>
                    <div id='main-horizontal-section'>
                        <div>OUR MOTTO
                        <div  id='float-animation-in-about-us'>
                            <Lottie
                            animationData={animation4}
                            background="transparent"
                            speed="1"
                            style={{ width: "150px", height: "150px" }}
                            loop
                            autoplay>
                            </Lottie>
                        </div>
                        </div>
                        <div>CWB'S competitive processes that is fair, open and effective in obtaining the best value. We seek to strike a balance between cost and quality that provides the best overall value.</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default AboutUs