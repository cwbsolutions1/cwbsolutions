import React, { useState, useEffect } from 'react';
import { Dropdown, Button, Offcanvas } from 'react-bootstrap';
import './Sidebar.css'

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

  // Extracted dropdowns to a function to avoid redundancy
  const renderDropdowns = () => (
    <>
        <Dropdown  align="left">

            <Dropdown.Toggle className="custom-sidebar-button" >
                Equipment For
            </Dropdown.Toggle>

            <Dropdown.Menu id='sidebar-dropdown-menu'>
                <Dropdown.Item className='dropdown-item-in-sidebar' href="">Condominiums</Dropdown.Item>
                <Dropdown.Item className='dropdown-item-in-sidebar' href="">Petrol Stations</Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>

        <Dropdown>

            <Dropdown.Toggle className="custom-sidebar-button">
                Our Products and Services
            </Dropdown.Toggle>

            <Dropdown.Menu id='sidebar-dropdown-menu'>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> Car washing and car wash bays equipment </Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>

        <Dropdown>

            <Dropdown.Toggle className="custom-sidebar-button">
                Barrier and Access Control
            </Dropdown.Toggle>

            <Dropdown.Menu id='sidebar-dropdown-menu'>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> Vehicle Liecese Plate Recorgnizer </Dropdown.Item>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> Car & AccessBarrier Systems </Dropdown.Item>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> Parking and Access Control</Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>

        <Dropdown>

            <Dropdown.Toggle className="custom-sidebar-button">
                Key and Storage Management system
            </Dropdown.Toggle>

            <Dropdown.Menu id='sidebar-dropdown-menu'>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> IQ Key Safe series </Dropdown.Item>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> IQ Wall Cabinet series </Dropdown.Item>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> IQ BoxCabinet series</Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>    

        <Dropdown>

            <Dropdown.Toggle className="custom-sidebar-button">
                Road Safety Products
            </Dropdown.Toggle>

            <Dropdown.Menu id='sidebar-dropdown-menu'>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> Road Humps </Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>       

        <Dropdown>

            <Dropdown.Toggle className="custom-sidebar-button">
                Road Accessories
            </Dropdown.Toggle>

            <Dropdown.Menu id='sidebar-dropdown-menu'>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> Solar Powered Studs </Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>    

        <Dropdown>

            <Dropdown.Toggle className="custom-sidebar-button">
                Perimeter Fencing & Gates
            </Dropdown.Toggle>

            <Dropdown.Menu id='sidebar-dropdown-menu'>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> BRC WELDFENCE </Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>  

        <Dropdown>

            <Dropdown.Toggle className="custom-sidebar-button">
                    Vehicular Self-Service Care products
            </Dropdown.Toggle>

            <Dropdown.Menu id='sidebar-dropdown-menu'>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> Automatic Car Washes </Dropdown.Item>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> Vending Machines </Dropdown.Item>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> Vending Machines </Dropdown.Item>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> Powerful Car Vacuums </Dropdown.Item>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> Air Machines </Dropdown.Item>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> Hot Air Dryer </Dropdown.Item>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> Water Dispensers </Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>  

        <Dropdown>

            <Dropdown.Toggle className="custom-sidebar-button">
                Electronic & Engineering Products & Services
            </Dropdown.Toggle>

            <Dropdown.Menu id='sidebar-dropdown-menu'>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> Coin & Cash Acceptors </Dropdown.Item>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> PCB Boards </Dropdown.Item>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> Coin Operated Showers </Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>  

        <Dropdown>

            <Dropdown.Toggle className="custom-sidebar-button">
                Parks & Outdoor Furniture
            </Dropdown.Toggle>

            <Dropdown.Menu id='sidebar-dropdown-menu'>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> Electric BBQ Pits </Dropdown.Item>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> Outdoor Furniture </Dropdown.Item>
                <Dropdown.Item className='dropdown-item-in-sidebar' href='#'> Outdoor Umbrella </Dropdown.Item>
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
