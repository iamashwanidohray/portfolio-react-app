import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import locationImage from '../images/location.png';
import callImage from '../images/call.png';
import mailImage from '../images/mail.png';

function Contact() {

    const [mailData,setMailData] = useState({
        name : '',
        email : '',
        subject : '',
        message : ''
    });

    const history = useHistory();


    const onChangeMailData = (event) => {
        const {name,value} = event.target;

        setMailData((prevDate) => {
            return {
                ...prevDate,
                [name]: value
            }
        })
    }

    const onSubmitMailData = (event) => {
        event.preventDefault();
        history.push('/regards');
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <section className="mb-4">
                            <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                            <p className="text-center w-responsive mx-auto mb-5">
                                Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
                                </p>
                            <div className="row">
                                <div className="col-md-8 mb-md-0 mb-10  contact-form">
                                    <form id="contact-form" name="contact-form" onSubmit={ (event) => onSubmitMailData(event)}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="md-form mb-4">
                                                    <input 
                                                        type="text" 
                                                        id="name" 
                                                        name="name" 
                                                        className="form-control" 
                                                        placeholder="Name"
                                                        onChange={onChangeMailData}
                                                        value={mailData.name} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="md-form mb-4">
                                                    <input 
                                                        type="text" 
                                                        id="email" 
                                                        name="email" 
                                                        className="form-control" 
                                                        placeholder="Email" 
                                                        onChange={onChangeMailData} 
                                                        value={mailData.email} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="md-form mb-4">
                                                    <input 
                                                        type="text" 
                                                        id="subject" 
                                                        name="subject" 
                                                        className="form-control" 
                                                        placeholder="Subject" 
                                                        onChange={onChangeMailData} 
                                                        value={mailData.subject} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="md-form mb-4">
                                                    <textarea 
                                                        type="text" 
                                                        id="message" 
                                                        name="message" 
                                                        rows="2" 
                                                        className="form-control md-textarea" 
                                                        placeholder="Message" 
                                                        onChange={onChangeMailData}
                                                        value={mailData.message}
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="md-form">
                                                    <button 
                                                        className="btn btn-get-started" 
                                                        type="submit" 
                                                        >Send</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <div className="status"></div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <ul className="list-unstyled mt-6">
                                        <li><img alt="icon" src={locationImage} className="fas fa-map-marker-alt fa-2x" />
                                            <p>Bhindi Bazzar, Mumbai 201301, INDIA</p>
                                        </li>
                                        <li><img alt="icon" src={callImage} className="fas fa-map-marker-alt fa-2x" />
                                            <p>+ 01 234 567 89 </p>
                                        </li>
                                        <li><img alt="icon" src={mailImage} className="fas fa-map-marker-alt fa-2x" />
                                            <p>dohrayashwani@gmail.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
