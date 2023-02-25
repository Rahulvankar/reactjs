import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className='p__opensans'>9 W 53rd St, Ahmedabad</p>
        <p className='p__opensans'>+6589123451</p>
        <p className='p__opensans'>+4986632645</p>
      </div>
      <div className="app__footer-links_logo">
        <h2>Restaurant</h2>
        <p className='p__opensans'>"The best way to find yourself is to lose yourself
        in the service of others."</p>
        <img src={images.spoon} alt="" className='spoon__img' style={{marginTop: 15}} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>08:00 Am - 12:00 Am</p>
        <p className='p__opensans'>Saturday-Sunday:</p> 
        <p className='p__opensans'>07:00 Am - 11:00 Pm </p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">Restaurant. All Right Reserved.</p>
    </div>
  </div>
);

export default Footer;
