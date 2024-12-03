const express = require('express');
const Booking = require('../models/Booking');

const router = express.Router();

// Route to create a new booking
router.post('/', async (req, res) => {
  try {
    const { email, checkInDate, roomType } = req.body;

    // Check if booking already exists
    const existingBooking = await Booking.findOne({ email, checkInDate, roomType });

    if (existingBooking) {
      return res.status(400).json({
        message: 'A booking already exists for this email, date, and room type.',
      });
    }

    // Create a new booking
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();

    res.status(201).json(savedBooking);
  } catch (error) {
    console.error('Error saving booking:', error.message);
    res.status(500).json({ message: 'Internal server error while saving booking' });
  }
});

// Route to fetch all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error.message);
    res.status(500).json({ message: 'Internal server error while fetching bookings' });
  }
});

// Route to update a booking
router.put('/:id', async (req, res) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json(updatedBooking);
  } catch (error) {
    console.error('Error updating booking:', error.message);
    res.status(500).json({ message: 'Internal server error while updating booking' });
  }
});

// Route to delete a booking
router.delete('/:id', async (req, res) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);

    if (!deletedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({ message: 'Booking successfully deleted' });
  } catch (error) {
    console.error('Error deleting booking:', error.message);
    res.status(500).json({ message: 'Internal server error while deleting booking' });
  }
});

module.exports = router;
