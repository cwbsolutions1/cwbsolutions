import './Customized Solutions.css';
import animation from '../Customized Solutions/Animation - 1730456035960.json';
import Lottie from 'lottie-react';
import { useState } from 'react';
import Swal from 'sweetalert2'

const CustomizedSolutions = () => {
    const [formData, setFormData] = useState({
        customerName: '',
        email: '',
        contactNumber: '',
        address: '',
        companyName: '',
        businessField: '',
        requirement: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true); // Start loading

        const dataToSend ={
            ...formData,
            access_key: "74774416-4818-4398-b001-7732cf1ea2be",
        }

        try{
            const res = await fetch("https://api.web3forms.com/submit",{
                method:"POST",
                headers:{
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
                    customerName: '',
                    email: '',
                    contactNumber: '',
                    address: '',
                    companyName: '',
                    businessField: '',
                    requirement: '',
                    message: ''
                });
              } else {
                Swal.fire({
                  icon: "Error",
                  title: "Oops...",
                  text: "Please Try Again!"
                });
              }
        }
        catch (error){
            console.error("Error submitting form:", error);
            setLoading(false); // Stop loading if there's an error
            Swal.fire({
                icon: "Error",
                title: "Oops...",
                text: "Something went wrong!"
              });
        }

    }

    return (
        <div className='customized-solutions-container'>
            <div className='customized-solutions-description'>
                <h1>Customised Solutions</h1>

                <div className="float-animation">
                    <Lottie
                        animationData={animation}
                        background="transparent"
                        speed="1"
                        style={{ width: "400px", height: "400px" }}
                        loop
                        autoplay
                    />
                </div>

                <h3>Engineering solutions for your business</h3>
                <p>We perfectly understand that each problem is unique to each individual and each corporation and in most instances existing solutions are not available or completely fitted to meet your needs.</p>
                <p>That is why we provide engineering solutions customised to our clients requirements.</p>
                <p>Please feel free to contact us by filling the simple form below may you require customised engineering solutions and quotations for your unique business needs.</p>
            </div>

            <div style={{ position: "relative" }}>
                {/* Dimming Overlay */}
                {loading && (
                    <div className="loading-overlay">
                        <div className="spinner"></div>
                    </div>
                )}

                <div className="customized-solutions-form">
                    <form onSubmit={handleSubmit}>
                    <label htmlFor="customerName">
                        Contact Person <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        id="customerName"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        placeholder="Enter Contact Person's Name"
                        required
                    />

                    <label htmlFor="email">
                        Email Address <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Your Email"
                        required
                    />

                    <label htmlFor="contactNumber">
                        Contact Number <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="Enter Your Contact Number"
                        required
                    />

                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter Your Address"
                    />

                    <label htmlFor="companyName">Company Name</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Enter Company Name"
                    />

                    <label htmlFor="businessField">
                        Business Field <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        id="businessField"
                        name="businessField"
                        value={formData.businessField}
                        onChange={handleChange}
                        placeholder="Enter Business Field"
                        required
                    />

                    <label htmlFor="requirement">Requirement</label>
                    <textarea
                        id="requirement"
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                        placeholder="Enter Requirement"
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter Message"
                    />

                    <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default CustomizedSolutions;
