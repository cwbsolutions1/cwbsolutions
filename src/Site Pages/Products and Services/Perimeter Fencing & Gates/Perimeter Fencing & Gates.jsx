import { Carousel } from 'react-bootstrap';
import './Perimeter Fencing & Gates.css'
import image1 from './u141c5938715_original_420.png'
import image2 from './u1cf3c612715_original_opt.png'
import galvanizedChainLink from './Chainlink.jpg'
import pvcCoatedChainLink from './PVC-Coated-Chain-Link-Mesh.jpg'
import concertinaRazorBarbedWire from './High-Security-Double-Coil-Concertina-Razor-Barbed-Wire-Bto-22-Cbt-60-Concertina-Razor-Coil.avif'
import ChainLinkFence from './commercial-fence-barb-selvage.jpg'
import BRCFence from './BRC-fence-mp4.png'
import AntiClicmFence from './3-M-High-Security-358-Fence-Anti-Theft-No-Climb-Security-Fence.png'

const PerimeterFencingAndGates = () =>{
    return(
        <div className='perimeter-fencing-and-gates'>
            <h1>Perimeter Fencing & Gates</h1>

            <h6>We Supply, Supply & Install Fencing of PCV coated, BRC Galvanised Fencing, Single & Double leave Gates, Anti Climb Security Fencing & Concertina wires</h6>

            <Carousel id='carousel-perimeter-fencing-and-gates-page'>

                <Carousel.Item interval={2000}>
                    <img src={image1} alt="" />
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img src={image2} alt="" />
                </Carousel.Item>

            </Carousel>


            <div className='perimeter-fencing-and-gates-products-showcase-container'>
                <div className='perimeter-fencing-and-gates-product-box'>
                    <div className='perimeter-fencing-and-gates-product-box-image'>
                        <img src={galvanizedChainLink} alt="Galvanized Chain Link" />
                    </div>
                    <div className='perimeter-fencing-and-gates-product-box-title'>
                        <p>Galvanized Chain Link Fence</p>
                    </div>
                    <div className='perimeter-fencing-and-gates-product-box-descrption'>
                        p1.0m wide by 1.8m or custom high  single/ double leaf PCV Coated  chain link swing gate
                    </div>
                </div>

                <div className='perimeter-fencing-and-gates-product-box'>
                    <div className='perimeter-fencing-and-gates-product-box-image'>
                        <img src={pvcCoatedChainLink} alt="PVC Coated Chain Link" />
                    </div>
                    <div className='perimeter-fencing-and-gates-product-box-title'>
                        <p>PVC Coated Chain Link Fence Gate</p>
                    </div>
                    <div className='perimeter-fencing-and-gates-product-box-descrption'>
                        <p>1.0m wide by 1.8m or custom high  single/ double leaf PCV Coated  chain link swing gate</p>
                    </div>
                </div>

                <div className='perimeter-fencing-and-gates-product-box'>
                    <div className='perimeter-fencing-and-gates-product-box-image'>
                        <img src={ChainLinkFence} alt="Chain Link Fence" />
                    </div>
                    <div className='perimeter-fencing-and-gates-product-box-title'>
                        <p>Chain Link Fence</p>
                    </div>
                    <div className='perimeter-fencing-and-gates-product-box-descrption'>
                        <p>1.8m or custom hight PVC coated chain link fence- Supply only or Supply & Install with or without concrete kerb.</p>
                    </div>
                </div>

                <div className='perimeter-fencing-and-gates-product-box'>
                    <div className='perimeter-fencing-and-gates-product-box-image'>
                        <img src={concertinaRazorBarbedWire} alt="Concertina Razor Barbed Wire" />
                    </div>  
                    <div className='perimeter-fencing-and-gates-product-box-title'>
                        <p>Concertina Razor Barbed Wire BTO/CBT</p>
                    </div>
                    <div className='perimeter-fencing-and-gates-product-box-descrption'>
                        <p>We supply a wide range of Barbed Razor Tape Concertina Coil which are extensively used for Security Fencing Purposes. </p>
                    </div>
                </div>

                <div className='perimeter-fencing-and-gates-product-box'>
                    <div className='perimeter-fencing-and-gates-product-box-image'>
                        <img src={BRCFence} alt="BRC Fence" />
                    </div>
                    <div className='perimeter-fencing-and-gates-product-box-title'>
                        <p>BRC Weld Fence Gate</p>
                    </div>
                    <div className='perimeter-fencing-and-gates-product-box-descrption'>
                        <p>BRC Weldfence is manufactured from high tensile strength steel wires that are welded together to provide accurate panel & mesh dimensions. Standard hot dip Galvanised Weldfence & Polyester Power coated Weldfence available</p>
                    </div>
                </div>

                <div className='perimeter-fencing-and-gates-product-box'>
                    <div className='perimeter-fencing-and-gates-product-box-image'>
                        <img src={AntiClicmFence} alt="Anti Climb Fence" />
                    </div>
                    <div className='perimeter-fencing-and-gates-product-box-title'>
                        <p>Anti Climb Security Fence</p>
                    </div>
                    <div className='perimeter-fencing-and-gates-product-box-descrption'>
                        <p>Anti-Climb fence and related products help to deter and delay breaching and prevent intrusions.</p>
                    </div>
                </div>

            </div>  



        </div>
    )
}
export default PerimeterFencingAndGates;