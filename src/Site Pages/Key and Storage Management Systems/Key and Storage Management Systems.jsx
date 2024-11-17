import { Carousel } from 'react-bootstrap';
import './Key and Storage Management Systems.css'
import keyAndStorageManagementImage from './Key and Storage Management.jpg'
import iqBoxStorageCabinetImage from './IQ Box Cabinet Series/iq-box-storage-cabinet.jpg'
import iqKeySafeSeriesImage from './IQ Key Safe Series/IQ Safe Cabinet.jpg'
import iqWallCabinet from './IQ Wall Cabinet Series/IQ Wall Cabinet.jpg'
import { Link } from 'react-router-dom';

const KeyAndStorageManagementSystems = () =>{
    return(
        <div className='key-and-storage-management-systems-container'>
            <h1>Key and Storage Management system</h1>

            <Carousel id='carousel-item-in-key-and-storage-managemen-systems'>
                <Carousel.Item interval={2500} >
                    <img className='carousle-item' src={keyAndStorageManagementImage} alt="" />
                </Carousel.Item>

                <Carousel.Item interval={2500}>
                    <img className='carousle-item' src={iqBoxStorageCabinetImage} alt="" />
                </Carousel.Item>

                <Carousel.Item interval={2500}>
                    <img className='carousle-item' src={iqKeySafeSeriesImage} alt="" />
                </Carousel.Item>

                <Carousel.Item interval={2500}>
                    <img className='carousle-item' src={iqWallCabinet} alt="" />
                </Carousel.Item>

            </Carousel>

            <h3>Why key and storage management system needed?</h3>
            <p>If you are dealing with storing keys or personal stuff of big group of people, it's obvious that your keys should be stored in a safe place and used by right person. It's important to control keys and users, track key usage and always have up-to-date information about keys.</p>

            <div className='key-and-storage-management-products-container'>
                <Link to={'/cwbsolutions.net/our-products/key-and-storage-management-system/iqkeysafe-series/'}>IQ Safe Series</Link>
                <Link to={'/cwbsolutions.net/our-products/key-and-storage-management-system/iqwallcabinet-series/'}>IQ Wall Cabinet Series</Link>
                <Link to={'/cwbsolutions.net/our-products/key-and-storage-management-system/iqboxcabinet-series/'}>IQ Box Cabinet Series</Link>
                {/*<Link>IQ Storage Cabinet Series</Link> */}
            </div>

            <br />

            <div>
                <h4>What can key and storage management system do</h4>
                <ul>
                    <li>You know exactly where your keys are</li>
                    <li>You know who is using the key</li>
                    <li>Keep track of usages</li>
                    <li>Define rights for users</li>
                    <li>Add/remove users, cards and keys</li>
                    <li>Users will access the keys only with permission</li>
                    <li>View reports</li>
                    <li>Manage keys in the several buildings from a central office</li>
                </ul>
            </div>

            <br />
            <div>
                <h4>Advantages</h4>
                <ul>
                    <li>Real time transactions</li>
                    <li>Control access to all cabimets, keys and boxes</li>
                    <li>Scalability - you can select number of key positions you need and extend it upon demand</li>
                    <li>Combine key positions with safety boxes within one system</li>
                    <li>Access is fully monitorable</li>
                    <li>Improves efficiency</li>
                    <li>Helps reducing costs and increase security - less lost keys lead to lower expences and higher level of security</li>
                </ul>
            </div>

        </div>
        
    )
}

export default KeyAndStorageManagementSystems;