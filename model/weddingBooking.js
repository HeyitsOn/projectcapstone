import { connection as db } from "../Config/index.js";

class WeddingBooking {
    fetchBooking(req, res) {
        const qry = `
        SELECT booking_id, 
        customer_name,
        customer_email,
        event_date, 
        event_type, 
        guest_count,
        booking_date
        FROM weddingBooking;
        `;
        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    async fetchBooking(req, res) {

        const qry = `SELECT bookingID, 
        customer_name, 
        customer_email,
        event_date, 
        event_type, 
        guest_count,
        booking_date
        FROM weddingBooking
        WHERE booking_id = ${req.params.id}
        `;
        db.query(qry, (err, result) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                result: result[0]
            });
        });
    }

    addBooking(req, res) {
        const qry = `
        INSERT INTO weddingBooking
        SET ?;
        `;
        db.query(qry, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: 'New booking was added'
            });
        });
    }

    updateBooking(req, res) {
        const qry = `
        UPDATE weddingBooking
        SET ?
        WHERE booking_id = ${req.params.id};
        `;
        db.query(qry, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The booking information has been updated."
            });
        });
    }

    deleteBooking(req, res) {
        const qry = `
        DELETE FROM weddingBooking
        WHERE booking_id = ${req.params.id};
        `;
        db.query(qry, (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The booking information has been deleted."
            });
        });
    }
}

export { WeddingBooking };
