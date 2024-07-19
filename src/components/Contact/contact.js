import React, { useRef, useState } from 'react'
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhone } from "react-icons/fa";

// import Walmart from '../../assets/walmart.png';
// import Adobe from '../../assets/adobe.png';
// import Microsoft from '../../assets/microsoft.png';
// import Facebook from '../../assets/facebook.png';
// import FacebookIcon from '../../assets/facebook-icon.png';
// import TwitterIcon from '../../assets/twitter.png';
// import YoutubeIcon from '../../assets/youtube.png';
// import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
const [message, setMessage] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
        e.preventDefault();
        setMessage(true);
    
        emailjs
          .sendForm('service_wlj0hik', 'template_ropm9mr', form.current, {
            publicKey: 'JoR4LUk4eYdShwdZW',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent !')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
        e.target.reset();
      };
  return (
    <section id='contactPage'>
        <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>olufunmilayoagboola@gmail.com</h5>
            <a href="mailto:olufunmilayoagboola@gmail.com">Send a message</a>
          </article>
        </div>

        <div className="contact__options">
          <article className="contact__option">
            <FaPhone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+2347068343774</h5>
          </article>
        </div>

        </div>
        <div id='contact'>
            <h2 className='contactPageTitle'>Contact Me</h2>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunity</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail} >
                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submitBtn'>Send Message</button>
                {message && <span>Thanks, for Reaching Out, I'll reply soonest :)</span>}
            </form>
        </div>

    </section>
  )
}

export default Contact