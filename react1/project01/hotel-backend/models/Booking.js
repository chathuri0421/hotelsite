const mongoose = require('mongoose');

// Booking schema
const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    checkInDate: {
      type: Date,
      required: true,
    },
    checkOutDate: {
      type: Date,
      required: true,
    },
    roomType: {
      type: String,
      required: true,
    },
    guests: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

// Create the model
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
