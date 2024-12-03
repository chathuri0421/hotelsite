import React from 'react';

const Location = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh', // Full height
      backgroundImage: 'url("./path/to/your/background-image.jpg")', // Add your background image
      backgroundSize: 'cover', // Cover the entire container
      backgroundPosition: 'center', // Center the image
      color: '#fff', // Text color
      textAlign: 'center', // Center text
      padding: '20px',
      position: 'relative', // For overlay
    },
    overlay: {
      position: 'absolute', // Position overlay over the background
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for contrast
      zIndex: 1, // Ensure overlay is above background
    },
    details: {
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      position: 'relative', // For z-index stacking
      zIndex: 2, // Ensure details are above overlay
      color: '#333', // Change text color for details
    },
    heading: {
      marginBottom: '10px',
      fontSize: '2em', // Larger font size for the heading
    },
    paragraph: {
      margin: '5px 0',
      fontSize: '1.1em', // Slightly larger font size for paragraphs
    },
    mapContainer: {
      margin: '20px 0',
    },
    directionsLink: {
      marginTop: '15px',
      color: '#e74c3c', // Highlight color for the link
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  };

  // Replace with your actual address
  const address = '123 Mandara St, Your City, Your Country';

  // Create a URL for Google Maps directions
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div> {/* Overlay for dark effect */}
      <div style={styles.details}>
        <h1 style={styles.heading}>Our Location</h1>
        <p style={styles.paragraph}>
          We are located in the heart of the city, providing easy access to all major attractions.
        </p>
        <p style={styles.paragraph}>
          Address: {address}
        </p>
        <p style={styles.paragraph}>
          Phone: (123) 456-7890
        </p>
        <a href={directionsUrl} target="_blank" rel="noopener noreferrer" style={styles.directionsLink}>
          Get Directions
        </a>
      </div>
      <div style={styles.mapContainer}>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.080315924151!2d-122.41941518467868!3d37.774929279759864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c3ef3e2e5%3A0xd870e7f5a7fba6a6!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1633595264907!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
