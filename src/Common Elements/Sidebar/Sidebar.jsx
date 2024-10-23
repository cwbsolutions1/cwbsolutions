import React, { useState, useEffect } from 'react';
import { Dropdown, Button, Offcanvas } from 'react-bootstrap';
import './Sidebar.css';

const Sidebar = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);
  
  // Check the screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992); // lg breakpoint (992px and above)
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // State for dropdown visibility
  const [openDropdown, setOpenDropdown] = useState(null);

  const renderDropdowns = () => (
    <>
      <Dropdown 
        align="left" 
        onMouseEnter={() => setOpenDropdown('equipmentFor')} 
        onMouseLeave={() => setOpenDropdown(null)}
        show={openDropdown === 'equipmentFor'}
      >
        <Dropdown.Toggle className="custom-sidebar-button">
          Equipment For
        </Dropdown.Toggle>
        <Dropdown.Menu id='sidebar-dropdown-menu'>
          <Dropdown.Item className='dropdown-item-in-sidebar' href="">Condominiums</Dropdown.Item>
          <Dropdown.Item className='dropdown-item-in-sidebar' href="">Petrol Stations</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown 
        onMouseEnter={() => setOpenDropdown('productsAndServices')} 
        onMouseLeave={() => setOpenDropdown(null)}
        show={openDropdown === 'productsAndServices'}
      >
        <Dropdown.Toggle className="custom-sidebar-button">
          Our Products and Services
        </Dropdown.Toggle>
        <Dropdown.Menu id='sidebar-dropdown-menu'>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>Car washing and car wash bays equipment</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown 
        onMouseEnter={() => setOpenDropdown('barrierAccess')} 
        onMouseLeave={() => setOpenDropdown(null)}
        show={openDropdown === 'barrierAccess'}
      >
        <Dropdown.Toggle className="custom-sidebar-button">
          Barrier and Access Control
        </Dropdown.Toggle>
        <Dropdown.Menu id='sidebar-dropdown-menu'>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>Vehicle License Plate Recognizer</Dropdown.Item>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>Car & Access Barrier Systems</Dropdown.Item>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>Parking and Access Control</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown 
        onMouseEnter={() => setOpenDropdown('keyStorage')} 
        onMouseLeave={() => setOpenDropdown(null)}
        show={openDropdown === 'keyStorage'}
      >
        <Dropdown.Toggle className="custom-sidebar-button">
          Key and Storage Management System
        </Dropdown.Toggle>
        <Dropdown.Menu id='sidebar-dropdown-menu'>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>IQ Key Safe Series</Dropdown.Item>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>IQ Wall Cabinet Series</Dropdown.Item>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>IQ Box Cabinet Series</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>    

      <Dropdown 
        onMouseEnter={() => setOpenDropdown('roadSafety')} 
        onMouseLeave={() => setOpenDropdown(null)}
        show={openDropdown === 'roadSafety'}
      >
        <Dropdown.Toggle className="custom-sidebar-button">
          Road Safety Products
        </Dropdown.Toggle>
        <Dropdown.Menu id='sidebar-dropdown-menu'>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>Road Humps</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>       

      <Dropdown 
        onMouseEnter={() => setOpenDropdown('roadAccessories')} 
        onMouseLeave={() => setOpenDropdown(null)}
        show={openDropdown === 'roadAccessories'}
      >
        <Dropdown.Toggle className="custom-sidebar-button">
          Road Accessories
        </Dropdown.Toggle>
        <Dropdown.Menu id='sidebar-dropdown-menu'>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>Solar Powered Studs</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>    

      <Dropdown 
        onMouseEnter={() => setOpenDropdown('perimeterFencing')} 
        onMouseLeave={() => setOpenDropdown(null)}
        show={openDropdown === 'perimeterFencing'}
      >
        <Dropdown.Toggle className="custom-sidebar-button">
          Perimeter Fencing & Gates
        </Dropdown.Toggle>
        <Dropdown.Menu id='sidebar-dropdown-menu'>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>BRC Weld Fence</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>  

      <Dropdown 
        onMouseEnter={() => setOpenDropdown('vehicularCare')} 
        onMouseLeave={() => setOpenDropdown(null)}
        show={openDropdown === 'vehicularCare'}
      >
        <Dropdown.Toggle className="custom-sidebar-button">
          Vehicular Self-Service Care Products
        </Dropdown.Toggle>
        <Dropdown.Menu id='sidebar-dropdown-menu'>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>Automatic Car Washes</Dropdown.Item>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>Vending Machines</Dropdown.Item>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>Powerful Car Vacuums</Dropdown.Item>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>Air Machines</Dropdown.Item>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>Hot Air Dryer</Dropdown.Item>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>Water Dispensers</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>  

      <Dropdown 
        onMouseEnter={() => setOpenDropdown('electronicEngineering')} 
        onMouseLeave={() => setOpenDropdown(null)}
        show={openDropdown === 'electronicEngineering'}
      >
        <Dropdown.Toggle className="custom-sidebar-button">
          Electronic & Engineering Products & Services
        </Dropdown.Toggle>
        <Dropdown.Menu id='sidebar-dropdown-menu'>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>Coin & Cash Acceptors</Dropdown.Item>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>PCB Boards</Dropdown.Item>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>Coin Operated Showers</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>  

      <Dropdown 
        onMouseEnter={() => setOpenDropdown('parksFurniture')} 
        onMouseLeave={() => setOpenDropdown(null)}
        show={openDropdown === 'parksFurniture'}
      >
        <Dropdown.Toggle className="custom-sidebar-button">
          Parks & Outdoor Furniture
        </Dropdown.Toggle>
        <Dropdown.Menu id='sidebar-dropdown-menu'>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>Electric BBQ Pits</Dropdown.Item>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>Outdoor Furniture</Dropdown.Item>
          <Dropdown.Item className='dropdown-item-in-sidebar' href='#'>Outdoor Umbrella</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>  
    </>
  );

  return (
    <div>
        {/* Show the button only on small screens */}
        {!isLargeScreen && (
            <Button onClick={handleShow} className="d-lg-none offcanvas-button">
                Menu
            </Button>
        )}

        {/* Offcanvas sidebar for small screens */}
        <Offcanvas show={show} onHide={handleClose}>

            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Quick Links</Offcanvas.Title>
            </Offcanvas.Header>

        <Offcanvas.Body>
          {renderDropdowns()} {/* Render dropdowns */}
        </Offcanvas.Body>

      </Offcanvas>

      {/* Sidebar for large screens */}
      {isLargeScreen && (
        <div className="d-none d-lg-block sidebar">
          {renderDropdowns()} {/* Render dropdowns */}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
