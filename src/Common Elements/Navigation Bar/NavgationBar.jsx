import './NavigationBar.css';
import CWBLogo from '../Navigation Bar/CWB Solutions Logo.png';
import { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const [isExpanded, setExpanded] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);
    const [dropdownOpen, setDropdownOpen] = useState({
        engineeringSolutions: false,
        productsServices: false,
        supportLocations: false,
    });

    // Update isSmallScreen on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 992);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle dropdowns on hover for large screens and click for small screens
    const toggleDropdown = (dropdown) => {
        if (isSmallScreen) {
            setDropdownOpen((prev) => ({ ...prev, [dropdown]: !prev[dropdown] }));
        }
    };

    const handleMouseEnter = (dropdown) => {
        if (!isSmallScreen) {
            setDropdownOpen((prev) => ({ ...prev, [dropdown]: true }));
        }
    };

    const handleMouseLeave = (dropdown) => {
        if (!isSmallScreen) {
            setDropdownOpen((prev) => ({ ...prev, [dropdown]: false }));
        }
    };

    // Function to close dropdowns
    const closeDropdowns = () => {
        setDropdownOpen({
            engineeringSolutions: false,
            productsServices: false,
            supportLocations: false,
        });
        if (isSmallScreen) setExpanded(false); // Only close navbar on small screens
    };

    return (
        <Navbar
            bg="dark"
            variant="dark"
            align="left"
            expand="lg"
            expanded={isSmallScreen ? isExpanded : undefined} // Only set expanded on small screens
            onToggle={() => isSmallScreen && setExpanded(!isExpanded)} // Only toggle on small screens
            className={`custom-navbar fixed-top ${isExpanded ? 'expanded' : 'not-expanded'}`}
        >
            <Container fluid>
                <Navbar.Brand href="#">
                    <Link to="cwbsolutions.net/">
                        <img className={`navigation-bar-cwb-logo ${isExpanded ? 'logo-expand' : ''}`} src={CWBLogo} alt="CWB Solutions Logo" onClick={closeDropdowns} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className="ms-auto custom-toggle-navbar" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '300px' }}
                        navbarScroll
                    >
                        <NavDropdown
                            title="Engineering Solutions"
                            id="basic-nav-dropdown"
                            className={`custom-dropdown ${dropdownOpen.engineeringSolutions ? 'nav-dropdown-active' : ''}`}
                            onMouseEnter={() => handleMouseEnter('engineeringSolutions')}
                            onMouseLeave={() => handleMouseLeave('engineeringSolutions')}
                            onClick={() => toggleDropdown('engineeringSolutions')} // Toggle on click for small screens
                            show={dropdownOpen.engineeringSolutions || (!isSmallScreen && dropdownOpen.engineeringSolutions)}
                        >
                            <NavDropdown.Item>
                                <Link to="/engineering/payment-modules/nets-cashcard-and-flashpay/ez-link-/payments-integration/" onClick={closeDropdowns}>Payment Integration</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/engineering-solutions" onClick={closeDropdowns}>Engineering Solutions</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="pcb-boards/" onClick={closeDropdowns}>PCB Boards</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="engineering-solutions/system-integration-and-product-design/" onClick={closeDropdowns}>System Integration and Product Design</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="engineering/customised-solutions/" onClick={closeDropdowns}>Customized Solutions</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item  ><Link to={"engineering-solutions/consultation-services/"}onClick={closeDropdowns}>Consultation Services</Link></NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title="Products & Services"
                            id="basic-nav-dropdown"
                            className={`custom-dropdown ${dropdownOpen.productsServices ? 'nav-dropdown-active' : ''}`}
                            onMouseEnter={() => handleMouseEnter('productsServices')}
                            onMouseLeave={() => handleMouseLeave('productsServices')}
                            onClick={() => toggleDropdown('productsServices')} // Toggle on click for small screens
                            show={dropdownOpen.productsServices || (!isSmallScreen && dropdownOpen.productsServices)}
                        >
                            <NavDropdown.Item href="#" onClick={closeDropdowns}>Vehicle License Plate Recognizer</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={closeDropdowns}>Electronic Parking Systems</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={closeDropdowns}>Car & Access Barrier Systems</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={closeDropdowns}>Perimeter Fencing & Gates</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={closeDropdowns}>Automatic Car Washes</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={closeDropdowns}>Air Machines</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={closeDropdowns}>Electric BBQ Pits</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={closeDropdowns}>Mini Car Washes</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={closeDropdowns}>Water Dispensers</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={closeDropdowns}>Coin Operated Showers</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={closeDropdowns}>Hot Air Dryers</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={closeDropdowns}>NETS CashCard and FlashPay</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={closeDropdowns}>Powerful Car Vacuums</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={closeDropdowns}>Replacement Parts</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title="Support & Locations"
                            className={`custom-dropdown ${dropdownOpen.supportLocations ? 'nav-dropdown-active' : ''}`}
                            onMouseEnter={() => handleMouseEnter('supportLocations')}
                            onMouseLeave={() => handleMouseLeave('supportLocations')}
                            onClick={() => toggleDropdown('supportLocations')} // Toggle on click for small screens
                            show={dropdownOpen.supportLocations || (!isSmallScreen && dropdownOpen.supportLocations)}
                        >
                            <NavDropdown.Item ><Link to={"cwbsolutions.net/water-dispenser-locations/"} onClick={closeDropdowns}>Water Dispenser Locations</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={"cwbsolutions.net/power-vacuum-locations/"} onClick={closeDropdowns}>Power Vacuum Locations</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={closeDropdowns}>Technical Support</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link onClick={closeDropdowns} id='client' as={Link} to={"cwbsolutions.net/clients/"}>Clients</Nav.Link>
                        <Nav.Link onClick={closeDropdowns} id='contact-us' as={Link} to="cwbsolutions.net/about-us/">About Us</Nav.Link>
                        <Nav.Link onClick={closeDropdowns} id='contact-us' as={Link} to="cwbsolutions.net/contact-us">Contact Us</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
