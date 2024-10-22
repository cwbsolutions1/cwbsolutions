import './NavigationBar.css';
import CWBLogo from '../Navigation Bar/CWB Solutions Logo.png'
import { useState } from 'react';
import { Navbar, Nav, NavDropdown,Container } from 'react-bootstrap';




const NavigationBar = () =>{
    const [isExpanded, setExpanded] = useState(false);

    const [dropdownOpen, setDropdownOpen] = useState({
        engineeringSolutions: false,
        productsServices: false,
        supportLocations: false,
    });
    
    // Handle mouse enter for dropdowns
    const handleMouseEnter = (dropdown) => {
        setExpanded(true);
        setDropdownOpen((prev) => ({ ...prev, [dropdown]: true }));
    };
    
    // Handle mouse leave for dropdowns
    const handleMouseLeave = (dropdown) => {
        setExpanded(false);
        setDropdownOpen((prev) => ({ ...prev, [dropdown]: false }));
    };

    return (
        <Navbar 
        bg="dark"
        variant="dark"
        align="left"
        expand="lg"
        className={`custom-navbar fixed-top ${isExpanded ? 'expanded' : 'not-expanded'}`}
        
        >
    
        <Container fluid>
          <Navbar.Brand href="#">
            <img className={`navigation-bar-cwb-logo ${isExpanded ? 'logo-expand' : ''}`} src={CWBLogo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" className="ms-auto custom-toggle-navbar" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"  // Changed from ml-auto to ms-auto for right alignment in Bootstrap 5
                style={{ maxHeight: '300px' }}
                navbarScroll
              >
                <NavDropdown 
                title="Engineering Solutions" 
                id="basic-nav-dropdown" 
                className={`custom-dropdown ${dropdownOpen.engineeringSolutions ? 'nav-dropdown-active' : ''}`}
                onMouseEnter={() => handleMouseEnter('engineeringSolutions')}
                onMouseLeave={() => handleMouseLeave('engineeringSolutions')}
                show={dropdownOpen.engineeringSolutions}
                >
                    <NavDropdown.Item href='#'>Payment Integration</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Engineering Solutions</NavDropdown.Item>
                    <NavDropdown.Item href='#'>PCB Boards</NavDropdown.Item>
                    <NavDropdown.Item href='#'>System Integration and Product Design</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Customized Solutions</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Consultation Services</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Engineering Solutions</NavDropdown.Item>
                </NavDropdown>
    
                <NavDropdown title="Products & Services" id="basic-nav-dropdown" className={`custom-dropdown ${dropdownOpen.productsServices ? 'nav-dropdown-active' : ''}`} 
                onMouseEnter={() => handleMouseEnter('productsServices')}
                onMouseLeave={() => handleMouseLeave('productsServices')}
                show={dropdownOpen.productsServices} // Show dropdown based on state
                >
                    <NavDropdown.Item href='#'>Vehicle License Plate Recorgnizer</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Electronic Parking Systems</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Car & Access Barrier Systems</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Perimeter Fencing & Gates</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Automatic Car Washes</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Air Machines</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Electric BBQ Pits</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Mini Car Washes</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Water Dispensers</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Coin Operated Showers</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Hot Air Dryers</NavDropdown.Item>
                    <NavDropdown.Item href='#'>NETS CashCard and FlashPay</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Powerful Car Vacuums</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Replacement Parts</NavDropdown.Item>
                </NavDropdown>
    
                <NavDropdown title="Support & Locations " className={`custom-dropdown ${dropdownOpen.supportLocations ? 'nav-dropdown-active' : ''}`}
                onMouseEnter={() => handleMouseEnter('supportLocations')}
                onMouseLeave={() => handleMouseLeave('supportLocations')}
                show={dropdownOpen.supportLocations}
                >
                    <NavDropdown.Item href='#'>Water Dispenser Locations</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Power Vacuum Locations</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Technical Support</NavDropdown.Item>
                </NavDropdown>
    
                <Nav.Link href='#clients'>Clients</Nav.Link>
                <Nav.Link href='#about'>About Us</Nav.Link>
                <Nav.Link href='#contact'>Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );

};

export default NavigationBar;
