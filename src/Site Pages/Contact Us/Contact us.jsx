import Lottie from 'lottie-react';
import animation from '../Contact Us/Animation - 1730478173174.json'
import './Contact us.css'
import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect } from 'react';

const ContactUs = () =>{

    const handleSubmit = (e) =>{
        e.preventDefault();


        toast.success("Successfully Saved ", {
            position: "top-right",
            autoClose: 4500, // Auto close after 3 seconds
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,

        });

        setFormData({
            customerName:'',
            companyName:'',
            email:'',
            contactNumber:'',
            description:''
        })
    }
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




    return(
        <div className=' contact-us-container'>
            <ToastContainer/>
            <h1>Contact Us</h1>

            <div className="float-animation " id='float-animation-in-contact-us'>
                <Lottie
                animationData={animation}
                background="transparent"
                speed="1"
                style={{ width: "400px", height: "400px" }}
                loop
                autoplay>
                </Lottie>

            </div>

            <div className='contact-us-information'>
                <span>Address</span>
                <p>5 CHUAN HOE AVE, SINGAPORE 549817</p>
                <span>TEL</span>
                <p><a href="tel:+6565423745">(+65) 6542 3745</a></p>
                <span>24/7 Technical Support</span>
                <p><a href="tel:+6591110311">(+65) 9111 0311</a></p>
                <span>E-Mail</span>
                <p><a href="mailto:info@cwbsolutions.net">info@cwbsolutions.net</a></p>
            </div>

            <h5>Or you can fill out the form below and we will get back to you as soon as we can</h5>

            <form className='maintenence-reporting-form ' id='contact-us-form' onSubmit={handleSubmit} action="">
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

            <button
            type='submit' className='submit-button-in-sidebar'>
                Submit
            </button>
        </form>


        </div>
    )
}
export default ContactUs;