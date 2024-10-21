import './NavigationBar.css';
import CWBLogo from '../Navigation Bar/CWB Solutions Logo.png'
import { useState } from 'react';
import { Navbar, Nav, NavDropdown,Container } from 'react-bootstrap';




const NavigationBar = () =>{
    const [isExpanded, setExpanded] = useState(false);

    const handleMouseEnter = () => {
        setExpanded(true);
    };

    const handleMouseLeave = () => {
        setExpanded(false);
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
                <NavDropdown title="Engineering Solutions" id="basic-nav-dropdown"  className="custom-dropdown"                                 onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                    <NavDropdown.Item>Payment Integration</NavDropdown.Item>
                    <NavDropdown.Item>Engineering Solutions</NavDropdown.Item>
                    <NavDropdown.Item>PCB Boards</NavDropdown.Item>
                    <NavDropdown.Item>System Integration and Product Design</NavDropdown.Item>
                    <NavDropdown.Item>Customized Solutions</NavDropdown.Item>
                    <NavDropdown.Item>Consultation Services</NavDropdown.Item>
                    <NavDropdown.Item>Engineering Solutions</NavDropdown.Item>
                </NavDropdown>
    
                <NavDropdown title="Products & Services" id="basic-nav-dropdown" className="custom-dropdown " 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                    <NavDropdown.Item href='#'>Vehicle License Plate Recorgnizer</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Electronic Parking System</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Car & Access Barrier Systems</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Perimeter Fencing and Gates</NavDropdown.Item>
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
    
                <NavDropdown title="Support & Locations " className="custom-dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                    <NavDropdown.Item>Water Dispenser Locations</NavDropdown.Item>
                    <NavDropdown.Item>Power Vacuum Locations</NavDropdown.Item>
                    <NavDropdown.Item>Technical Support</NavDropdown.Item>
                </NavDropdown>
    
                <Nav.Link href='#clients'>Clients</Nav.Link>
                <Nav.Link href='#about'>About Us</Nav.Link>
                <Nav.Link href='#about'>Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );

};

export default NavigationBar;
