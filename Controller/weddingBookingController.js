import express from 'express';
import bodyParser from 'body-parser';
import { weddingBooking } from '../model/index.js';  // Assuming the correct path for weddingBooking model

const BookingRouter = express.Router();

// Fetch all bookings
BookingRouter.get('/', async (req, res) => {
    try {
        const bookings = await weddingBooking.fetchBookings(req, res);  // Updated to use fetchBookings method
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Fetch a specific booking by ID
BookingRouter.get('/:id', async (req, res) => {
    try {
        const booking = await weddingBooking.fetchBooking(req.params.id);  // Updated to use fetchBooking method
        res.json(booking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new booking
BookingRouter.post('/addBooking', bodyParser.json(), async (req, res) => {
    try {
        const newBooking = await weddingBooking.addBooking(req.body);  // Updated to use addBooking method
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a booking by ID
BookingRouter.patch('/update/:id', bodyParser.json(), async (req, res) => {
    try {
        const updatedBooking = await weddingBooking.updateBooking(req.params.id, req.body);  // Updated to use updateBooking method
        res.json(updatedBooking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a booking by ID
BookingRouter.delete('/delete/:id', async (req, res) => {
    try {
        await weddingBooking.deleteBooking(req.params.id);  // Updated to use deleteBooking method
        res.json({ message: 'Booking deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export { BookingRouter };
