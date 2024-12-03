import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import BookingForm from "./component/BookingForm";
import Gallery from "./component/Gallery"; 
import Footer from "./component/Footer";
import MyComponent from "./component/MyComponent"; 
import Location from "./component/Location"; 
import './App.css';
import { MyContextProvider } from "./context/MyContext";
import hotelImage from './component/hotel.png';

function App() {
  useEffect(() => {
    console.log("App component mounted!");
    Swal.fire({
      title: 'Welcome to Mandara Hotel!',
      text: 'We are delighted to have you here. Enjoy your stay with us!',
      icon: 'info',
      confirmButtonText: 'Got it!',
    });
  }, []);

  return (
    <MyContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<BookingForm />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/my-component" element={<MyComponent />} />
            <Route path="/location" element={<Location />} />
            <Route path="/wifi" element={<h1>Free Wi-Fi</h1>} />
            <Route path="/restaurant" element={<h1>Restaurant</h1>} />
            {/* Remove Contact Us route */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </MyContextProvider>
  );
}

export default App;
