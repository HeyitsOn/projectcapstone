import express from 'express';
import bodyParser from 'body-parser';
import { weddingBooking } from '../model/index.js';  // Assuming the correct path for weddingBooking model

const BookingRouter = express.Router();

// Fetch all bookings
BookingRouter.get('/', async (req, res) => {
    try {
         weddingBooking.fetchBookings(req, res);  // Updated to use fetchBookings method
        // res.json(bookings);
    } catch (err) {
        res.json({
            status: res.sendStatus,
            msg:'Failed to retrieve bookings'
        })
        // json({ message: err.message });
    }
});

// Fetch a specific booking by ID
BookingRouter.get('/:id', async (req, res) => {
    try {
         weddingBooking.fetchBooking(req, res);  // Updated to use fetchBooking method
        // res.json(booking);
    }catch (err) {
        res.json({
            status: res.sendStatus,
            msg:'Failed to retrieve A booking'
        })
        // json({ message: err.message });
    }
});

// Add a new booking
BookingRouter.post('/addBooking', bodyParser.json(), async (req, res) => {
    try {
     weddingBooking.addBooking(req.body);  // Updated to use addBooking method
        // res.status(201).json(newBooking);
    }catch (err) {
        res.json({
            status: res.sendStatus,
            msg:'Failed to add a booking'
        })
        // json({ message: err.message });
    }
});
// Update a booking by ID
BookingRouter.patch('/update/:id', bodyParser.json(), async (req, res) => {
    try {
     weddingBooking.updateBooking(req.params.id, req.body);  // Updated to use updateBooking method
        // res.json(updatedBooking);
    } catch (err) {
        res.json({
            status: res.sendStatus,
            msg:'Failed to update bookings'
        })
        // json({ message: err.message });
    }
});

// Delete a booking by ID
BookingRouter.delete('/delete/:id', async (req, res) => {
    try {
         weddingBooking.deleteBooking(req, res);  // Updated to use deleteBooking method
        // res.json({ message: 'Booking deleted successfully' });
    }  catch (err) {
        res.json({
            status: res.sendStatus,
            msg:'Failed to delete bookings'
        })
        // json({ message: err.message });
    }
});

export { BookingRouter };
