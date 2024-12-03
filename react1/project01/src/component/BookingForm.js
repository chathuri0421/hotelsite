import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import hotelImage from './hotel.png';
import wifiImage from './wifi.png';
import bufayImage from './bufay.png';
import gymImage from './gym.png';
import roomImage from './room.png';
import poolImage from './pool.png';
import barImage from './bar.png';
import luxurySuiteImage from './luxury.png';
import signatureApartmentImage from './sig1.png';
import BookingForm from './BookingForm';
import './BookingForm.css';

const HotelPage = () => {
  const [bookingData, setBookingData] = useState([]); // State to store fetched data

  // Fetch booking data from backend API
  useEffect(() => {
    axios.get('http://localhost:5000/api/booking')
      .then((response) => {
        console.log('Booking data:', response.data);
        setBookingData(response.data); // Update state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching booking data:', error);
      });
  }, []); // Empty dependency array means this runs only once when component mounts

  return (
    <div className="hotel-container">
      {/* Caption and Image Section */}
      <div className="caption-image">
        <div className="caption">
          <h1>Welcome to Mandara, Where Comfort and Serenity Await.</h1>
        </div>
        <img src={hotelImage} alt="Hotel Pool" className="hotel-image" />
      </div>

      {/* Booking Form Section */}
      <BookingForm />

      {/* Centered Message */}
      <div className="centered-message">
        <p>
          Our hotel offers a variety of amenities to enhance your stay, including 24/7 food service, refreshing drinks,
          luxurious baths, comfortable beds, free Wi-Fi, and convenient pick-up and drop-off services.
        </p>
      </div>

      {/* Booking Data Display Section */}
      <section className="booking-data-section">
        <h2>Booking Information</h2>
        <div>
          {bookingData.length === 0 ? (
            <p>No booking data available.</p>
          ) : (
            bookingData.map((booking, index) => (
              <div key={index} className="booking-item">
                <h3>{booking.roomType}</h3>
                <p>Price: {booking.price}</p>
                <p>Available: {booking.available ? 'Yes' : 'No'}</p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Facilities Section */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-item">
            <a href="/wifi">
              <img src={wifiImage} alt="Free Wi-Fi Icon" />
              <div className="feature-caption">Free Wi-Fi</div>
            </a>
          </div>
          <div className="feature-item">
            <a href="/restaurant">
              <img src={bufayImage} alt="Restaurant Icon" />
              <div className="feature-caption">Restaurant</div>
            </a>
          </div>
          <div className="feature-item">
            <a href="/gym">
              <img src={gymImage} alt="Gym Icon" />
              <div className="feature-caption">Gym</div>
            </a>
          </div>
          <div className="feature-item">
            <a href="/room-service">
              <img src={roomImage} alt="Room Service Icon" />
              <div className="feature-caption">Room Service</div>
            </a>
          </div>
          <div className="feature-item">
            <a href="/pool">
              <img src={poolImage} alt="Pool Icon" />
              <div className="feature-caption">Pool</div>
            </a>
          </div>
          <div className="feature-item">
            <a href="/bar">
              <img src={barImage} alt="Bar Icon" />
              <div className="feature-caption">Bar</div>
            </a>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <div className="rooms-section">
        <h2>Our Rooms</h2>

        {/* Luxury Suite */}
        <div className="room-item">
          <img src={luxurySuiteImage} alt="Luxury Suite" className="room-image" />
          <div className="room-details">
            <h3>Luxury Suite</h3>
            <p>
              Spacious room with a king-size bed, beautiful lake view, free Wi-Fi, and breakfast included.
            </p>
            <p className="price">$220 Per Night</p>
            <div className="button-container">
              <button className="details-btn" onClick={() => alert('View Details Clicked')}>View Details</button>
              <button className="book-btn" onClick={() => alert('Book Now Clicked')}>Book Now</button>
            </div>
          </div>
        </div>

        {/* Signature Apartment */}
        <div className="room-item">
          <img src={signatureApartmentImage} alt="Signature Apartment" className="room-image" />
          <div className="room-details">
            <h3>Signature Apartment</h3>
            <p>
              Features modern decor, a comfortable living area, a king-size bed, a fully equipped kitchen, and
              beautiful city views.
            </p>
            <p className="price">$180 Per Night</p>
            <div className="button-container">
              <button className="details-btn" onClick={() => alert('View Details Clicked')}>View Details</button>
              <button className="book-btn" onClick={() => alert('Book Now Clicked')}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;
