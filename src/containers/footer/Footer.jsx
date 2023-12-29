import React from "react";
import gpt3Logo from "../../assets/logo.jpg";
import "./footer.css";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMale,
  FaMobileAlt,
  FaTwitter,
  FaVoicemail,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => (
  <div className="gpt3__footer section__padding">
    {/* <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src="logo.jpg" alt="gpt3_logo" />
        <p>
          <b>IT Infra Solutions </b>is a pioneering force since inception,
          specializing in L.T. Solutions & Services. Renowned for offering ERP
          Solutions, Firewall, Remote Software, VPN Product, Server Hardware,
          Mailing, Cloud Server, and APP Server on the cloud. Partnering with
          industry giants like IBM, HP, and WIPRO ensures top-notch quality. Our
          expertise in firewall software, including ZYXEL, SONICWALL, and
          JUPITOR, provides comprehensive network security. Dedicated to
          excellence, we guarantee certainty and add significant business value
          to organizations through qualitative services and products.
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <FaLocationArrow />
        <p>
          A- 48/2, Mahavir Enclave, Near Dwarka puri bus stand NewDelhi-110059
        </p>
        <FaMobileAlt />
        <p>+919015739026,+918468839026</p>
        <FaEnvelope />
        <p>sk@itinfrasolutions.co.in</p>
      </div>
      <div>
      <div className="gpt3__footer-links_div">
      <h4 >Follows Us</h4>
      </div>
      <div className="gpt3__footer-links_social">
        
              <a href="https://www.google.com/" target="_blank">
                <FaInstagram className="text-3xl instagram" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl facebook" />
              </a>
              <a href="https://www.linkedin.com/in/abhi302/" target="_blank">
                <FaLinkedin className="text-3xl linkedin" />
              </a>
              <a href="#">
                <FaTwitter className="text-3xl twitter" />
              </a>
              <a href="#">
                <FaYoutube className="text-3xl youtube " />
              </a>
            </div>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>IT INFRA SOLUTIONS. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
