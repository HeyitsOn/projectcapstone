import express from 'express';
import bodyParser from 'body-parser';
import {
  fetchBookings,
  fetchBooking,
  addBooking,
  updateBooking,
  deleteBooking,
} from '../model/index.js'; // Assuming the correct path for weddingBooking model

const BookingRouter = express.Router();

// Fetch all bookings
BookingRouter.get('/', async (req, res) => {
  try {
    const bookings = await fetchBookings();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to retrieve bookings' });
  }
});

// Fetch a specific booking by ID
BookingRouter.get('/:id', async (req, res) => {
  try {
    const booking = await fetchBooking(req.params.id);
    res.json(booking);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to retrieve a booking' });
  }
});

// Add a new booking
BookingRouter.post('/addBooking', bodyParser.json(), async (req, res) => {
  try {
    const newBooking = await addBooking(req.body);
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to add a booking' });
  }
});

// Update a booking by ID
BookingRouter.patch('/update/:id', bodyParser.json(), async (req, res) => {
  try {
    await updateBooking(req.params.id, req.body);
    res.json({ msg: 'Booking updated successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to update bookings' });
  }
});

// Delete a booking by ID
BookingRouter.delete('/delete/:id', async (req, res) => {
  try {
    await deleteBooking(req.params.id);
    res.json({ msg: 'Booking deleted successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to delete bookings' });
  }
});

export { BookingRouter };