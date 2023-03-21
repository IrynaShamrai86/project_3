import '../../dist/css/contacts.css';
import Frame from 'react-frame-component';
import React from "react";
import {FaLocationArrow} from "react-icons/fa";
import {FaPhoneAlt} from "react-icons/fa";
import {FaMailBulk} from "react-icons/fa";
import {FaUserClock} from "react-icons/fa";
import background from "../../dist/img/movie-background.webp";


const Contacts = () => {
    return (
        <div className="container-contacts" style={{backgroundImage: `url(${background})`}}>
            <div className='container'>
                <div className="contact-form">
                    <span className="vertical-border"></span>

                    <div className="contact-form-input">
                        <h2>GET IN TOUCH</h2>
                        <div className="column-info">
                            <span className="geolocation"><span className="icon"><FaLocationArrow/></span>91 Nolan Extensions Suite 670</span>
                            <span className="phone-number"><span className="icon"><FaPhoneAlt/></span>+001 356-868-2454</span>
                            <span className="mail"><span
                                className="icon"><FaMailBulk/></span>muvimox&#64;service.com</span>
                            <span className="clock"><span className="icon"><FaUserClock/></span>From 07:05AM to 19:30PM</span>
                        </div>
                    </div>
                    <div className="form">
                        <form className="subscribe-form">
                            <label htmlFor="name">
                                <input type="text" id="name" required/>
                                <span>Name</span>
                            </label>
                            <label htmlFor="email">
                                <input type="email" id="email" required/>
                                <span>Email</span>
                            </label>
                            <button className="btn submit" type="submit">SUBMIT</button>
                        </form>
                    </div>
                </div>
                {/*<Frame>*/}
                {/*    <iframe src="https://snazzymaps.com/embed/458259" width="100%" height="700px" style="border:none;"></iframe>*/}
                {/*</Frame>*/}
            </div>
        </div>
    );
};

export default Contacts;