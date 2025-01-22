import { useState } from 'react';
import './PageFooter.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Dropdown, Button, Offcanvas } from 'react-bootstrap';

const PageFooter = () =>{

    const [openDropdown, setOpenDropdown]=useState(null)

    return(
        <div className='page-footer-container'>
            <div className='page-footer-upper-section'></div>
            
            <div className='page-footer-middle-section'>
                <div className='page-footer-middle-section-row-1'>
                    <Dropdown 
                    className='page-footer-middle-section-column-in-row-1'
                    onMouseEnter={()=>setOpenDropdown('Home')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Home'}    
                    >
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                                Home
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item>Our Products & Services</Dropdown.Item> 
                                <Dropdown.Item as={Link} to={'/engineering-solutions/'}>Engineering Solutions</Dropdown.Item>
                                <Dropdown.Item>Industy</Dropdown.Item>
                                <Dropdown.Item>Support & Locations</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/clients/'}>Clients</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/contact-us/'}>Contact Us</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/water-dispenser-locations/'}>Water Dispenser Locations</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/perimeter-fencing---gates/'}>Perimeter Fencing & Gates</Dropdown.Item>
                                <Dropdown.Item>Outdoor Umbrellas</Dropdown.Item>
                                <Dropdown.Item>Outdoor Furniture</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/road-humps'}>Road Humps</Dropdown.Item>
                                <Dropdown.Item>Vending Machines</Dropdown.Item>
                                <Dropdown.Item>bd1d5a47bfb6.html</Dropdown.Item>
                                <Dropdown.Item>c</Dropdown.Item>
                                <Dropdown.Item>Personal Protection Equipment & Supplies</Dropdown.Item>
                            </Dropdown.Menu>    
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                    className='page-footer-middle-section-column-in-row-1'
                    onMouseEnter={()=>setOpenDropdown('Our Products and Services ')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Our Products and Services '}>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Our Products and Services   
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item as={Link} to={'/key-and-storage-management-system/'}>Key and Storage Management System</Dropdown.Item>
                                <Dropdown.Item>Self service equipment for petrol stations</Dropdown.Item>
                                <Dropdown.Item>Road Safety Products</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/car-washing-and-car-wash-bays-equipment/our-products/solar-powered-studs/'}>Solar Powered Studs</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/coin-operated-showers'}>Coin Operated Showers</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/replacement-parts-for-vacuums-water-dispensers/'}>Replacement parts</Dropdown.Item>
                                <Dropdown.Item>Coin & Cash Acceptor</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                    className='page-footer-middle-section-column-in-row-1'
                    onMouseEnter={()=>setOpenDropdown('Engineering Solutions')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Engineering Solutions'}
                    >
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Engineering Solutions  
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item as={Link} to={'/engineering/payment-modules/nets-cashcard-and-flashpay/ez-link-/payments-integration/'}>Payments Integration</Dropdown.Item>
                                <Dropdown.Item>Payment Modules</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/car-barrier-systems/'}>Car & Access Barrier Systems</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/pcb-boards/'}>PCB Boards</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/engineering-solutions/system-integration-and-product-design/'}>System Integration and Product Design</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/engineering/customised-solutions/'}>Customised Solutions</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/engineering-solutions/consultation-services/'}>Consultation Services</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                    onMouseEnter={()=>setOpenDropdown('Industy')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Industy'}
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Industy   
                                <Dropdown.Menu id='dropdown-menu-in-footer'>
                                    <Dropdown.Item as={Link}to={'/industy/condominiums/'}>Condominiums</Dropdown.Item>
                                    <Dropdown.Item>HDB MSCP</Dropdown.Item>
                                    <Dropdown.Item>Petrol Stations</Dropdown.Item>
                                    <Dropdown.Item>Grooming Centres</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Toggle>
                        </Dropdown>

                    <Dropdown 
                    onMouseEnter={()=>setOpenDropdown('Support & Locations')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Support & Locations'}
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Support & Locations
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item as={Link} to={'/power-vacuum-locations/'}>Power Vacuum Locations</Dropdown.Item>
                                <Dropdown.Item>Technical Support</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown> 
 

                    <Dropdown 
                    onMouseEnter={()=>setOpenDropdown('Perimeter Fencing & Gates')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Perimeter Fencing & Gates'}
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Perimeter Fencing & Gates
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item as={Link} to={'/perimeter-fencing---gates/'}>BRC WELDFENCE</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/perimeter-fencing---gates/'}>Concertina wires</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/perimeter-fencing---gates/'}>PVC Coated Chain Link Fence</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                    onMouseEnter={()=>setOpenDropdown('Key and Storage Management System')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Key and Storage Management System'}
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Key and Storage Management System
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item as={Link} to={'/our-products/key-and-storage-management-system/iqkeysafe-series/'}>IQ Key Safe series</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/our-products/key-and-storage-management-system/iqwallcabinet-series/'}>IQ Wall Cabinet series</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/our-products/key-and-storage-management-system/iqboxcabinet-series/'}>IQ BoxCabinet series</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                </div>
                
                <div className='page-footer-middle-section-row-2'>

                    <Dropdown 
                    onMouseEnter={()=>setOpenDropdown('Self Service Equipment for Petrol Stations')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Self Service Equipment for Petrol Stations'}
                    className='page-footer-middle-section-column-in-row-1'
                    >
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Self Service Equipment for Petrol Stations
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item as={Link} to={'/news/mini-car-washes/'}>Mini Car Washes</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/car-washing-and-car-wash-bays-equipment/power-vacuums/'}>Powerful Car Vacuums</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/hot-air-dryer/'}>Hot Air Dryer</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/automatic-car-wash/'}>Automatic Car Washes</Dropdown.Item>
                                <Dropdown.Item as={Link} to={'/air-machines/'}>Air Machines</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                    onMouseEnter={()=>setOpenDropdown('Coin Operated Showers')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Coin Operated Showers'}
                    className='page-footer-middle-section-column-in-row-1'
                    >
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Coin Operated Showers
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item as={Link} to={'/coin-operated-shower/swimming-pool-showers/'}>Swimming Pool Showers</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                    onMouseEnter={()=>setOpenDropdown('Coin & Cash Acceptors')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Coin & Cash Acceptors'}
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Coin & Cash Acceptors
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item>Mechanical Coin Acceptor Side Feeder</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown
                    onMouseEnter={()=>setOpenDropdown('Car & Access Barrier Systems')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Car & Access Barrier Systems'} 
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Car & Access Barrier Systems
                            <Dropdown.Menu  id='dropdown-menu-in-footer'>
                                <Dropdown.Item 
                                    as={Link} 
                                    to={'/car-barrier-systems/#automatic-car-park-barrier-gate-section'}
                                    >Automatic Car Park Barrier Gates
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/car-barrier-systems/#intelligent-car-parking-systems'}
                                    >Intelligent Car Parking System
                                </Dropdown.Item>

                                <Dropdown.Item
                                    >Boom Barrier Gates
                                </Dropdown.Item>

                                <Dropdown.Item 
                                    as={Link}
                                    to={'/car-barrier-systems/#swing-arm-barrier-section'}
                                    >Swing Arm Barriers
                                </Dropdown.Item>

                                <Dropdown.Item 
                                    as={Link} 
                                    to={'/car-barrier-systems/#turnstiles'}
                                    >Turnstile
                                </Dropdown.Item>

                                <Dropdown.Item 
                                    as={Link}
                                    to={'/car-barrier-systems/#parking-lot-barriers-section'}
                                    >Parking Lot Barrier
                                </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                    onMouseEnter={()=>setOpenDropdown('Condominiums')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Condominiums'} 
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Condominiums
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item 
                                    as={Link} 
                                    to={'/electric-bbq-pits/'}
                                    >Electric BBQ Pits
                                </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                    onMouseEnter={()=>setOpenDropdown('HDB MSCP')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='HDB MSCP'} 
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            HDB MSCP
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item>Self-service</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                    onMouseEnter={()=>setOpenDropdown('IQ Key Safe Series')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='IQ Key Safe Series'} 
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            IQ Key Safe Series
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item 
                                    as={Link}
                                    to={'/our-products/key-and-storage-management-system/iqkeysafe-series/'}>
                                    IQ Key Safe 40

                                </Dropdown.Item>

                                <Dropdown.Item 
                                    as={Link}
                                    to={'/our-products/key-and-storage-management-system/iqkeysafe-series/'}>
                                    IQ Key Safe 160

                                </Dropdown.Item>

                                <Dropdown.Item 
                                    as={Link}
                                    to={'/our-products/key-and-storage-management-system/iqkeysafe-series/'}>
                                    IQ Key Safe 210r

                                </Dropdown.Item>

                                <Dropdown.Item 
                                    as={Link}
                                    to={'/our-products/key-and-storage-management-system/iqkeysafe-series/'}>
                                    IQ Key Safe 265

                                </Dropdown.Item>

                                <Dropdown.Item 
                                    as={Link}
                                    to={'/our-products/key-and-storage-management-system/iqkeysafe-series/'}>
                                    IQ Key Safe 400

                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>
                </div>

                <div className='page-footer-middle-section-row-2'>

                    <Dropdown 
                    onMouseEnter={()=>setOpenDropdown('IQ Wall Cabinet Series')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='IQ Wall Cabinet Series'} 
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            IQ Wall Cabinet Series
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item
                                    as={Link}
                                    to={'/our-products/key-and-storage-management-system/iqwallcabinet-series/'}
                                    >IQ Wall Cabinet 50
                                </Dropdown.Item>
                                
                                <Dropdown.Item
                                    as={Link}
                                    to={'/our-products/key-and-storage-management-system/iqwallcabinet-series/'}
                                    >IQ Wall Cabinet 80
                                </Dropdown.Item>
                                
                                <Dropdown.Item
                                    as={Link}
                                    to={'/our-products/key-and-storage-management-system/iqwallcabinet-series/'}
                                    >IQ Wall Cabinet 100
                                </Dropdown.Item>
                                
                                <Dropdown.Item
                                    as={Link}
                                    to={'/our-products/key-and-storage-management-system/iqwallcabinet-series/'}
                                    >IQ Wall Cabinet 160
                                </Dropdown.Item>
                                
                                <Dropdown.Item
                                    as={Link}
                                    to={'/our-products/key-and-storage-management-system/iqwallcabinet-series/'}
                                    >IQ Wall Cabinet 200
                                </Dropdown.Item>
                                
                                <Dropdown.Item
                                    as={Link}
                                    to={'/our-products/key-and-storage-management-system/iqwallcabinet-series/'}
                                    >IQ Wall Cabinet 300
                                </Dropdown.Item>
                                
                                <Dropdown.Item
                                    as={Link}
                                    to={'/our-products/key-and-storage-management-system/iqwallcabinet-series/'}
                                    >IQ Wall Cabinet 400
                                </Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                    onMouseEnter={()=>setOpenDropdown('IQ BoxCabinet Series')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='IQ BoxCabinet Series'} 
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            IQ BoxCabinet Series
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item
                                    as={Link}
                                    to={'/our-products/key-and-storage-management-system/iqboxcabinet-series/'}
                                    >IQ Box Cabinet 12
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/our-products/key-and-storage-management-system/iqboxcabinet-series/'}
                                    >IQ Box Cabinet 20
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/our-products/key-and-storage-management-system/iqboxcabinet-series/'}
                                    >IQ Box Cabinet 30
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/our-products/key-and-storage-management-system/iqboxcabinet-series/'}
                                    >IQ Box Cabinet 44
                                </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                    onMouseEnter={()=>setOpenDropdown('Powerful Car Vacuums')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Powerful Car Vacuums'} 
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Powerful Car Vacuums
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item>Commercial vacuums</Dropdown.Item>
                                <Dropdown.Item>Dual Commercial Ultra Power Vacuum with 4 motors</Dropdown.Item>
                                <Dropdown.Item>Ultra Turbonator</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                    onMouseEnter={()=>setOpenDropdown('Automatic Car Park Barrier Gates')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Automatic Car Park Barrier Gates'} 
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Automatic Car Park Barrier Gates
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item
                                    as={Link}
                                    to={'/car-barrier-systems/'}
                                    >Parking and Access Control
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/barrier-systems/automatic-car-park-barrier-gates/automatic-car-park-barrier-gates/'}
                                    >Automatic Car Park Barrier Gates
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/barrier-systems/automatic-car-park-barrier-gates/automatic-traffic-barrier-with-led-signal/'}
                                    >Automatic Traffic barrier with LED signal
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/barrier-systems/automatic-car-park-barrier-gates/came-barrier-gates/'}
                                    >CAME Barrier Gates
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/barrier-systems/automatic-car-park-barrier-gates/nice-wil-parking-barrier-gate/'}
                                    >NICE WIL Parking Barrier Gate
                                </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                    onMouseEnter={()=>setOpenDropdown('Intelligent Car Parking System')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Intelligent Car Parking System'} 
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Intelligent Car Parking System
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item
                                    as={Link}
                                    to={'/barrier-systems/intelligent-car-parking-system/intelligent-car-parking-system-management-/'}
                                    >Intelligent Car Parking System Management
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/barrier-systems/intelligent-car-parking-system/intelligent-car-parking-system-management-with-led-display/'}
                                    >Intelligent Car Parking System Management with LED Display
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/barrier-systems/intelligent-car-parking-system/automated-car-parking-system-for-hotels---residenses--/'}
                                    >Automated car parking system for Hotels & residenses
                                </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                    onMouseEnter={()=>setOpenDropdown('Swing Arm Barriers')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Swing Arm Barriers'} 
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Swing Arm Barriers
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item
                                    as={Link}
                                    to={'/barrier-systems/swing-arm-barriers/smart-swing-security-arm-barrier-for-hotel-community-financial-institutions/'}
                                    >Smart Swing Security Arm Barrier for Hotel Community Financial Institutions
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/barrier-systems/swing-arm-barriers/stainless-steel-automatic-single-arm-swing-gate/'}
                                    >Stainless steel Automatic Single Arm Swing Gate
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/barrier-systems/swing-arm-barriers/access-control-time-attendance-versatile-stainless-steel-flap-swing-arm-barrier/'}
                                    >Access control Time attendance Versatile Stainless Steel Flap Swing Arm Barrier
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/barrier-systems/swing-arm-barriers/waterproof-stainless-steel-lan-sock-pedestrian-barrier-gate-swing-barriers/'}
                                    >Waterproof stainless steel LAN Sock pedestrian barrier gate Swing barriers
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/barrier-systems/swing-arm-barriers/flap-barrier-(speed-gate)/'}
                                    >Flap Barrier (Speed Gate)
                                </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                    onMouseEnter={()=>setOpenDropdown('Turnstile')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Turnstile'} 
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Turnstile
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item
                                    as={Link}
                                    to={'/turnstile/full-height-turnstile/'}
                                    >Full Height Turnstile
                                    </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/tripod-turnstile/'}
                                    >Tripod Turnstile
                                    </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>
                </div>

                <div className='page-footer-middle-section-row-2'>

                    <Dropdown 
                                        onMouseEnter={()=>setOpenDropdown('Parking Lot Barrier')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Parking Lot Barrier'} 
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Parking Lot Barrier
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item
                                    as={Link}
                                    to={'/barrier-systems/parking-space-barrier/remote-control-automatic-smooth-running-parking-space-barriers-/'}
                                    >Remote Control Automatic smooth running Parking Space Barriers
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/barrier-systems/parking-space-barrier/stainless-steel-remote-control-parking-space-barrier'}
                                    >Stainless steel Remote Control Parking Space Barrier
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/barrier-systems/parking-space-barrier/waterproof-parking-lot-protector/'}
                                    >Waterproof Parking Lot Protector
                                </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                                        onMouseEnter={()=>setOpenDropdown('Self-Service')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Self-Service'} 
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Self-Service
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item
                                    as={Link}
                                    to={'/car-washing-and-car-wash-bays-equipment/water-dispensers/'}
                                    >Water Dispensers
                                </Dropdown.Item>
                                <Dropdown.Item
                                    as={Link}
                                    to={''}
                                    >WATER-I-VAC
                                </Dropdown.Item>
                                <Dropdown.Item
                                    as={Link}
                                    to={'/barrier-systems/parking-space-barrier/waterproof-parking-lot-protector/'}
                                    >Waterproof Parking Lot Protector
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                    onMouseEnter={()=>setOpenDropdown('Parking and Access Control')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Parking and Access Control'} 
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Parking and Access Control
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item
                                    as={Link}
                                    to={'/vehicle-license-plate-recognizer/'}
                                    >Vehicle License Plate Recognizer
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={''}
                                    >Long Range Reader for Personnel or Vehicle Access
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/parking-and-access-control/electronic-parking-systems/'}
                                    >Electronic Parking Systems
                                </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                                        onMouseEnter={()=>setOpenDropdown('CAME Barrier Gates')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='CAME Barrier Gates'} 
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            CAME Barrier Gates
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item
                                    as={Link}
                                    to={'/barrier-systems/automatic-car-park-barrier-gates/came-barrier-gates/'}
                                    >CAME GARD
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/barrier-systems/automatic-car-park-barrier-gates/came-barrier-gates/'}
                                    >CAME GARD 4
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/barrier-systems/automatic-car-park-barrier-gates/came-barrier-gates/'}
                                    >CAME GARD 8
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/barrier-systems/automatic-car-park-barrier-gates/came-barrier-gates/'}
                                    >CAME GARD 12
                                </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                                        onMouseEnter={()=>setOpenDropdown('Water Dispensers')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Water Dispensers'} 
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Water Dispensers
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item
                                    as={Link}
                                    to={'/car-washing-and-car-wash-bays-equipment/water-dispensers/'}
                                    >Coin Operated Water Dispenser
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/products/water-dispensers/aqua-save-water-dispenser/'}
                                    >Aqua Save Water Dispenser
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/products/water-dispensers/inwall-coin-operated-water-dispenser/'}
                                    >Inwall Coin Operated Water Dispenser
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/car-washing-and-car-wash-bays-equipment/water-dispensers#Cash-Card-and-Flash-Pay-Combi-Water-Dispenser'}
                                    >Cash Card and Flash Pay Combi Water Dispenser
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={'/car-washing-and-car-wash-bays-equipment/water-dispensers#Cash-Card-and-Flash-Pay-Combi-Water-Dispenser'}
                                    >Cash Card Water Dispenser
                                </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                    onMouseEnter={()=>setOpenDropdown('WATER-I-VAC')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='WATER-I-VAC'} 
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            WATER-I-VAC
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item>Description</Dropdown.Item>
                                <Dropdown.Item>Features</Dropdown.Item>
                                <Dropdown.Item>Specification</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown 
                                        onMouseEnter={()=>setOpenDropdown('Electronic Parking Systems')}
                    onMouseLeave={()=>setOpenDropdown('null')}
                    show={openDropdown==='Electronic Parking Systems'} 
                    className='page-footer-middle-section-column-in-row-1'>
                        <Dropdown.Toggle id='dropdown-toggle-button-in-footer'>
                            Electronic Parking Systems
                            <Dropdown.Menu id='dropdown-menu-in-footer'>
                                <Dropdown.Item 
                                    as={Link}
                                    to={'/parking-and-access-control/electronic-parking-systems/#semi-electronic-parking-system'}
                                    >Semi Electronic Parking System
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link} 
                                    to={'/parking-and-access-control/electronic-parking-systems/#full-electronic-parking-system'}
                                    >Full Electronic Parking System
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link} 
                                    to={'/parking-and-access-control/electronic-parking-systems/#vehicle-access-control-system'}
                                    >Vehicle Access Control System
                                </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>
                </div>

            </div>

            <div className='page-footer-lower-section'>
                All rights reserved by CWB Solutions PTE LTD (2008-2025)
            </div>
        </div>
    );
};
export default PageFooter;