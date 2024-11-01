import './Consultation.css'
import handshake from '../Consultation/job.png'
import animation2 from '../Consultation/Animation - 1730455765857.json'
import Lottie from 'lottie-react';
import checkedImage from '../Consultation/checked.png'


const Consultation =() =>{

    return(
        <div className='consultation-container'>
            <h1>Consultation Services</h1>
            <h3>Our Rite of Passage with you</h3>


            <div className='consultation-description'>

                <div className='consultation-description-sub-container'>
                    <div>
                        <div id='checked-icon-section'>
                            <div><img id='checked-icon' src={checkedImage} alt="" /></div>
                            <div>We listen hard to your problems</div>
                        </div>
                        <div id='checked-icon-section'>
                            <div><img id='checked-icon' src={checkedImage} alt="" /></div>
                            <div>We then feel your requirements and specification</div>
                        </div>
                        <div id='checked-icon-section'>
                            <div><img id='checked-icon' src={checkedImage} alt="" /></div>
                            <div>We then brainstorm you an innovation of  solutions</div>
                        </div>
                    </div>

                    <div>
                        <img id='handshake-animated-image' src={handshake} alt="" />
                    </div>

                </div>


            <div>
            Following your ideas onto a drawing board we then realise your dreams. And we make sure that dream never fades by continuous support. All the way holding your hand. Let us by your Partner in Business and Life. Simply start with your contact details on your left now!
            </div>

            


            </div>
        </div>
        
    )
}
export default Consultation;