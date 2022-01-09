import React from 'react';
// import {useState } from "react";
import "./contact.css";
import Phone from "./../../img/phone.png"
import Email from "./../../img/email.png"
import Address from "./../../img/address.png"
// import emailjs from "emailjs-com";
// import { ThemeContext } from "../../context";


const Contact = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        // emailjs
        // .sendForm(
        //   "service_ixn1itp",
        //   "template_lchoizv",
        //   formRef.current,
        //   "user_Gg49d7CANuuvobHt5eJwl"
        // )
        // .then(
        //   (result) => {
        //     console.log(result.text);
        //     setDone(true)
        //   },
        //   (error) => {
        //     console.log(error.text);
        //   }
        // );
    };   
    return(
    <div className="contact" id='contact'>
        <div className="c-left">
          <p className="c-desc">
            <b> What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form className='formContact' onClick={handleSubmit}>
            <input  className='formInput'
                    type="text" 
                    placeholder="Your Name" 
                    name="user_name" />
            <input  className='formInput'  
                    type="text" 
                    placeholder="Subject" 
                    name="user_subject" />
            <input  className='formInput'   
                    type="text" 
                    placeholder="Your Email" 
                    name="user_email" />
            <textarea className='formTextArea'
                      rows="5" 
                      placeholder="Write a Message" 
                      name="message" />
            <button className='btnSend'>Submit</button>
          </form>
        </div>                                              {/* fin div-left */}
        <div className="c-right">
            <h1 className="c-title">Get In Touch</h1>
            <div className="c-info">
                <div className="c-info-item">
                    <img src={Phone} alt="" className="c-icon" />
                    +33 7 81 60 75 57
                </div>
                <div className="c-info-item">
                    <img className="c-icon" src={Email} alt="" />
                    rjhb1985@gmail.com
                </div>
                <div className="c-info-item">
                    <img className="c-icon" src={Address} alt="" />
                    Chemin du mas rouge, Domaine de Fitzgerald, 34970 Lattes-France
                </div>
            </div>
        </div>                                              {/* fin div-right*/}
        
    </div>
    )
};

export default Contact;





