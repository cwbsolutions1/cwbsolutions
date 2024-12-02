import React, { useState, useEffect} from 'react';
import { Dropdown, Button, Offcanvas } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './Sidebar.css';
import Swal from 'sweetalert2'


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
          <Dropdown.Item 
            as={Link} 
            to='/cwbsolutions.net/industy/condominiums/' 
            className='dropdown-item-in-sidebar'
            onClick={handleClose} 
            >Condominiums
          </Dropdown.Item>
          <Dropdown.Item 
            as={Link} 
            to={'/cwbsolutions.net/industy/equipment-for-petrol-stations/'} 
            className='dropdown-item-in-sidebar'
            onClick={handleClose} 
            >Petrol Stations
          </Dropdown.Item>
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
          <Dropdown.Item 
            as={Link} 
            to={'/cwbsolutions.net/our-products-and-services/'} 
            className='dropdown-item-in-sidebar'
            onClick={handleClose}
            >Car Washing and Car Wash Bays Equipment
          </Dropdown.Item>
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
          <Dropdown.Item 
            as={Link} 
            to={'/cwbsolutions.net/vehicle-license-plate-recognizer/'} 
            className='dropdown-item-in-sidebar'
            onClick={handleClose} 
            >Vehicle License Plate Recognizer
          </Dropdown.Item>
          <Dropdown.Item 
            as={Link} 
            to={'/cwbsolutions.net/car-barrier-systems/'} 
            className='dropdown-item-in-sidebar'
            onClick={handleClose}
            >Car & Access Barrier Systems
          </Dropdown.Item>
          <Dropdown.Item 
            as={Link} 
            to={'/cwbsolutions.net/car-barrier-systems/'} 
            className='dropdown-item-in-sidebar'
            onClick={handleClose}>Parking and Access Control
          </Dropdown.Item>
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
          <Dropdown.Item 
            as={Link} 
            to={'/cwbsolutions.net/our-products/key-and-storage-management-system/iqkeysafe-series/'} 
            className='dropdown-item-in-sidebar'
            onClick={handleClose}
            >IQ Key Safe Series
          </Dropdown.Item>
          <Dropdown.Item 
            as={Link} 
            to={'/cwbsolutions.net/our-products/key-and-storage-management-system/iqwallcabinet-series/'} 
            className='dropdown-item-in-sidebar'
            onClick={handleClose}
            >IQ Wall Cabinet Series
          </Dropdown.Item>
          <Dropdown.Item 
            as={Link} 
            to={'/cwbsolutions.net/our-products/key-and-storage-management-system/iqboxcabinet-series/'} 
            className='dropdown-item-in-sidebar'
            onClick={handleClose}
            >IQ Box Cabinet Series
          </Dropdown.Item>
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
          <Dropdown.Item 
          as={Link} to={'/cwbsolutions.net/road-humps'} 
          className='dropdown-item-in-sidebar'
          onClick={handleClose} 
          >Road Humps
          </Dropdown.Item>
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
          <Dropdown.Item 
          as={Link} 
          to={'/cwbsolutions.net/car-washing-and-car-wash-bays-equipment/our-products/solar-powered-studs/'} className='dropdown-item-in-sidebar'
          onClick={handleClose} 
          >Solar Powered Studs
          </Dropdown.Item>
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
          <Dropdown.Item 
          as={Link} 
          to={'/cwbsolutions.net/perimeter-fencing---gates/'} 
          className='dropdown-item-in-sidebar'
          onClick={handleClose} 
          >BRC Weld Fence
          </Dropdown.Item>
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
          <Dropdown.Item 
            as={Link} 
            to={'/cwbsolutions.net/automatic-car-wash/'} 
            className='dropdown-item-in-sidebar'
            onClick={handleClose} 
            >Automatic Car Washes
          </Dropdown.Item>
          <Dropdown.Item 
            as={Link} 
            to={'#'} 
            className='dropdown-item-in-sidebar'
            onClick={handleClose}
            >Vending Machines
          </Dropdown.Item>
          <Dropdown.Item 
            as={Link} 
            to={'/cwbsolutions.net/car-washing-and-car-wash-bays-equipment/power-vacuums/'} 
            className='dropdown-item-in-sidebar'
            onClick={handleClose}
            >Powerful Car Vacuums
          </Dropdown.Item>
          <Dropdown.Item 
            as={Link} 
            to={'/cwbsolutions.net/air-machines/'} 
            className='dropdown-item-in-sidebar'
            onClick={handleClose}
            >Air Machines
          </Dropdown.Item>
          <Dropdown.Item 
            as={Link} 
            to={'/cwbsolutions.net/hot-air-dryer/'} 
            className='dropdown-item-in-sidebar'
            onClick={handleClose}
            >Hot Air Dryer
          </Dropdown.Item>
          <Dropdown.Item 
            as={Link} 
            to={'/cwbsolutions.net/car-washing-and-car-wash-bays-equipment/water-dispensers/'} 
            className='dropdown-item-in-sidebar'
            onClick={handleClose}
            >Water Dispensers
          </Dropdown.Item>
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
          <Dropdown.Item 
            className='dropdown-item-in-sidebar'
            onClick={handleClose} 
            href='#'
            >Coin & Cash Acceptors
          </Dropdown.Item>
          <Dropdown.Item 
            as={Link} to={'/cwbsolutions.net/pcb-boards/'} 
            className='dropdown-item-in-sidebar'
            onClick={handleClose}
            >PCB Boards
          </Dropdown.Item>
          <Dropdown.Item 
            as={Link} to={'/cwbsolutions.net/coin-operated-showers'} 
            className='dropdown-item-in-sidebar'
            onClick={handleClose}
            >Coin Operated Showers
          </Dropdown.Item>
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
          <Dropdown.Item 
            as={Link} to={'/cwbsolutions.net/electric-bbq-pits/'} 
            className='dropdown-item-in-sidebar'
            onClick={handleClose} 
            >Electric BBQ Pits
          </Dropdown.Item>
          <Dropdown.Item 
            className='dropdown-item-in-sidebar'
            onClick={handleClose} 
            href='#'
            >Outdoor Furniture
          </Dropdown.Item>
          <Dropdown.Item 
            className='dropdown-item-in-sidebar'
            onClick={handleClose} 
            href='#'
            >Outdoor Umbrella
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>  

      <Dropdown 
        onMouseEnter={() => setOpenDropdown('home')} 
        onMouseLeave={() => setOpenDropdown(null)}
        show={openDropdown === 'home'}
      >
        <Dropdown.Toggle className="custom-sidebar-button">
          Home
        </Dropdown.Toggle>
        <Dropdown.Menu id='sidebar-dropdown-menu'>
          <Dropdown.Item 
            className='dropdown-item-in-sidebar'
            onClick={handleClose} 
            href='#'
            >TEN FALCONS- Furniture & Furnishings
          </Dropdown.Item>
          <Dropdown.Item 
            className='dropdown-item-in-sidebar'
            onClick={handleClose} 
            href='#'
            >TEN BEARS- Consumer Lifestyle Trend Store
          </Dropdown.Item>
          <Dropdown.Item 
            className='dropdown-item-in-sidebar'
            onClick={handleClose} 
            href='#'
            >RHINE CONSULTANTS- Marketing, Desgining & IT 
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> 

      
    </>
  );

  const maintenanceReportingForm = () =>{

    const [formData,setFormData] = useState ({
        customerName:'',
        companyName:'',
        email:'',
        contactNumber:'',
        description:''
    })

    const handleChange = (e) =>{
        const {name, value} =e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value,
        }));
    }

    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true); // Start loading
      
  
      // Prepare the data for API submission
      const dataToSend = {
        ...formData,
        access_key: "0690b938-867b-496a-84a2-4439df31fde8", // Replace with your actual access key
      };
  
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(dataToSend),
        });
        const result = await res.json();
        setLoading(false); // Stop loading after response
        
        if (result.success) {
          Swal.fire({
            title: "Done!",
            text: "Successfully Submitted!",
            icon: "success"
          });
          setFormData({
            customerName: "",
            companyName: "",
            email: "",
            contactNumber: "",
            description: "",
          });

        } else {
          Swal.fire({
            icon: "Error",
            title: "Oops...",
            text: "Please Try Again!"
          });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setLoading(false); // Stop loading after response
        Swal.fire({
          icon: "Error",
          title: "Oops...",
          text: "Something went wrong!"
        });
      }
    };


    return (
      <div style={{ position: "relative" }}>
        {/* Dimming Overlay */}
        {loading && (
          <div className="loading-overlay">
              <div className="spinner"></div>
          </div>
        )}

        <form className='maintenence-reporting-form' onSubmit={handleSubmit} action="">
          <h5>Maintainance Reporting</h5>
          <label htmlFor="customerName">Contact Name <span style={{color:'red'}}> *</span></label>
          <input 
          type="text"
          name='customerName'
          id='customerName' 
          value={formData.customerName}
          onChange={handleChange}
          required
          placeholder='Enter Your Name' />

          <label htmlFor="Companyname">Company Name</label>
          <input type="text" 
          name='companyName'
          id='companyName'
          value={formData.companyName}
          onChange={handleChange}
          placeholder='Enter Company Name' />

          <label htmlFor="email">Email<span style={{color:'red'}}> *</span></label>
          <input 
          type="email"
          name='email'
          id='email'
          value={formData.email} 
          onChange={handleChange}
          required
          placeholder='Enter Your Email' />

          <label htmlFor="contactNumber">Contact Number<span style={{color:'red'}}> *</span></label>
          <input type="text" 
          name="contactNumber" 
          id="contactNumber" 
          value={formData.contactNumber}
          onChange={handleChange}
          required
          placeholder='Enter Your Contact Number'/>

          <label htmlFor="description">Description<span style={{color:'red'}}> *</span></label>
          <textarea 
          name="description" 
          id="description" 
          value={formData.description}
          onChange={handleChange}
          required
          placeholder='Enter Description'></textarea>

          <div>
          Simply fill out the contact form above and we will get back to you as soon as we can.
          </div>

          <button
          type='submit' onClick={handleClose} className='submit-button-in-sidebar'>
              Submit
          </button>
        </form>
      </div>
    )
  }

  return (
    <div>
        {/* Show the button only on small screens */}
        {!isLargeScreen && (
            <Button onClick={handleShow} className="d-lg-none offcanvas-button sidebar-offcanvas-button" >
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M480-406.67 40.67-643.33 480-880l440 236.67-440 236.66Zm0 163.34L64.33-467l70-38L480-319l346.33-186 70 38L480-243.33ZM480-80 64.33-303.67l70-38 345.67 186 346.33-186 70 38L480-80Zm0-403 301-160.33-301-160.34-300.33 160.34L480-483Zm.67-160.33Z"/></svg>
            </Button>
        )}

        {/* Offcanvas sidebar for small screens */}
        <Offcanvas show={show} onHide={handleClose}>

            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Quick Links</Offcanvas.Title>
                <ToastContainer/>
            </Offcanvas.Header>

        <Offcanvas.Body>
          {renderDropdowns()} {/* Render dropdowns */}
          {maintenanceReportingForm()}
        </Offcanvas.Body>

      </Offcanvas>

      {/* Sidebar for large screens */}
      {isLargeScreen && (
        <div className="d-none d-lg-block sidebar">
          {renderDropdowns()} {/* Render dropdowns */}
          {maintenanceReportingForm()}
          <ToastContainer/>
        </div>
      )}

      

    </div>
  );
};

export default Sidebar;
