import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Assuming your CSS file is correctly linked
import Swal from 'sweetalert2'; // Import Swal for alerts

const Navbar = () => {
  const handleContactUsClick = (event) => {
    event.preventDefault(); // Prevent the default behavior of the link
    Swal.fire({
      title: 'Contact Us',
      html: `
        <p>If you have any questions, feel free to reach out!</p>
        <p><strong>Email:</strong> info@mandarahotel.com</p>
        <p><strong>Phone:</strong> <a href="tel:+1234567890">+123-456-7890</a></p>
        <p style="color: green; font-weight: bold;">✔️ We're here to help you!</p> <!-- Checkmark message -->
      `,
      icon: 'info', // Changed to info to match the checkmark context
      showCancelButton: true,
      confirmButtonText: 'Close',
      cancelButtonText: 'Call Us',
    }).then((result) => {
      if (result.isDismissed) {
        window.location.href = 'tel:+1234567890'; // Redirect to phone dialer
      }
    });
  };

  return (
    <nav className="navbar">
      <div className="logo">Hotel</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/location">Location</Link></li>
        <li onClick={handleContactUsClick} style={{ cursor: 'pointer' }}>Contact Us</li> {/* Updated to trigger alert */}
      </ul>
    </nav>
  );
};

export default Navbar;
