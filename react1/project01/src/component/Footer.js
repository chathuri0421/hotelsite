import React from 'react';
import facebookIcon from './facebook.png';  // Correct path for Facebook icon
import instagramIcon from './instagram.png';  // Correct path for Instagram icon


const Footer = () => {
  return (
    <footer className="footer">
      <style>{`
        .footer {
          background-color: #003366; /* Dark blue background */
          color: #f2f2f2; /* Text color */
          padding: 40px 0; /* Increased padding for better spacing */
          font-family: Arial, sans-serif; /* Font family */
        }

        .footer-container {
          display: flex; /* Flexbox for layout */
          justify-content: space-between; /* Space between sections */
          align-items: flex-start; /* Align items to the start */
          max-width: 1200px; /* Maximum width for the footer */
          margin: 0 auto; /* Center the footer */
          padding: 0 20px; /* Padding for the container */
        }

        .footer-section {
          flex: 1; /* Equal width for sections */
          padding: 0 15px; /* Padding between sections */
        }

        .footer-logo {
          font-size: 28px; /* Increased font size for the logo */
          font-weight: bold; /* Bold font for the logo */
          margin-bottom: 10px; /* Spacing below the logo */
        }

        .footer-links {
          list-style-type: none; /* Remove bullet points */
          padding: 0; /* Remove padding */
          margin: 0; /* Remove margin */
        }

        .footer-links li {
          margin-bottom: 10px; /* Space between links */
        }

        .footer-links a {
          color: #f2f2f2; /* Link color */
          text-decoration: none; /* Remove underline */
          transition: color 0.3s; /* Smooth color change on hover */
        }

        .footer-links a:hover {
          color: #ffcc00; /* Hover color */
        }

        .subscribe-button {
         .subscribe-button {
  background-color: #5c94e0; /* Light blue background color for the button */
  color: #f2f2f2; /* Button text color */
  border: none; /* No border */
  padding: 12px 24px; /* Increased padding for the button */
  cursor: pointer; /* Pointer on hover */
  transition: background-color 0.3s; /* Smooth color change on hover */
  margin-top: 15px; /* Space above button */
  border-radius: 5px; /* Rounded corners */
  font-size: 16px; /* Button text size */
}

.subscribe-button:hover {
  background-color: #4a84c7; /* Darker shade for hover effect */
}

        }

        .subscribe-button:hover {
          background-color:#5c94e0; /* Match the footer color on hover */
        }

        .social-icons {
          display: flex; /* Flexbox for social icons */
          margin-top: 15px; /* Space above social icons */
        }

        .social-icon {
          width: 30px; /* Increased size of icons */
          height: 30px; /* Increased size of icons */
          margin-right: 15px; /* Space between icons */
        }

        .footer-bottom {
          text-align: center; /* Center the text in the footer bottom */
          margin-top: 20px; /* Space above footer bottom */
          border-top: 1px solid #444; /* Top border for separation */
          padding-top: 20px; /* Padding for top */
        }

        .footer-bottom-links {
          list-style-type: none; /* Remove bullet points */
          padding: 0; /* Remove padding */
          margin: 0; /* Remove margin */
        }

        .footer-bottom-links li {
          display: inline; /* Display links in a row */
          margin: 0 15px; /* Spacing between bottom links */
        }

        .footer-bottom-links a {
          color: #f2f2f2; /* Link color */
          text-decoration: none; /* Remove underline */
        }

        .footer-bottom-links a:hover {
          color: #ffcc00; /* Change to your desired hover color */
        }

        /* Additional styles for link sections */
        .link-columns {
          display: flex; /* Flexbox for link columns */
          justify-content: space-between; /* Space between columns */
          margin-top: 20px; /* Space above link columns */
        }

        .link-column {
          flex: 1; /* Equal width for link columns */
          margin: 0 10px; /* Space between link columns */
        }
      `}</style>

      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section left">
          <h3 className="footer-logo">Mandara</h3>
          <p>
            Mandara Hotel<br />
            123 Serenity Lane, Lakeside City, Country
          </p>
          <p><i className="fa fa-phone"></i> (+94) 11-2544 544</p>
        </div>

        {/* Middle Section with link columns */}
        <div className="footer-section middle">
          <div className="link-columns">
            <div className="link-column">
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Mandara</a></li>
                <li><a href="#accommodation">Accommodation</a></li>
                <li><a href="#dining">Dining</a></li>
                <li><a href="#weddings">Weddings & Events</a></li>
                <li><a href="#facilities">Facilities & Experiences</a></li>
                <li><a href="#delivery">Online Food Delivery</a></li>
                <li><a href="#gdpr">GDPR Compliance</a></li>
              </ul>
            </div>
            <div className="link-column">
              <ul className="footer-links">
                <li><a href="#location">Location</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#offers">Offers</a></li>
                <li><a href="#agm">AGM & EGM</a></li>
                <li><a href="#policy">Policy Framework</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-section right">
          <button className="subscribe-button">Subscribe to Newsletter</button>
          <div className="social-icons">
            <a href="#"><img src={facebookIcon} alt="Facebook" className="social-icon" /></a>
            <a href="#"><img src={instagramIcon} alt="Instagram" className="social-icon" /></a>
            {/* You can add more social icons like Tripadvisor below if needed */}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <ul className="footer-bottom-links">
          <li><a href="#privacy">Privacy Notice</a></li>
          <li><a href="#terms">Terms</a></li>
          <li><a href="#sitemap">Sitemap</a></li>
          <li><a href="#cookies">Cookie Policy</a></li>
        </ul>
        <p>&copy; {new Date().getFullYear()} Mandara. All Rights Reserved</p>
        <p>Website Designed and Developed by YourCompanyName</p>
      </div>
    </footer>
  );
};

export default Footer;
