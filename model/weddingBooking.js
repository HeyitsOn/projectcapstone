 import { connection as db } from "../Config/index.js";

class WeddingBooking {
  async fetchBookings(req, res) {
    const qry = `
        SELECT
          booking_id, 
          customer_name, 
          customer_email, 
          event_date, 
          event_type, 
          guest_count, 
          booking_date
          FROM weddingBooking;
        `;
    const [results] = await db.promise().query(qry);
    res.json({
      status: res.statusCode,
      results
    });
  }

  async fetchBooking(req, res) {
    if (!req.params.id) {
      throw new Error("Missing required 'id' parameter.");
    }

    const qry = `
        SELECT 
          booking_id, 
          customer_name, 
          customer_email, 
          event_date, 
          event_type, 
          guest_count, 
          booking_date
        FROM weddingBooking
        WHERE booking_id = ${req.params.id}
        `;

    const [result] = await db.promise().query(qry);
    res.json({
      status: res.statusCode,
      result: result[0]
    });
  }

  async addBooking(req, res) {
    const qry = `
        INSERT INTO weddingBooking
SET ?;
        `;
    await db.promise().query(qry, [req.body]);
    res.json({
      status: res.statusCode,
      msg: "New booking was added"
    });
  }

  async updateBooking(req, res) {
    if (!req.params.id) {
      throw new Error("Missing required 'id' parameter.");
    }

    const qry = `
        UPDATE weddingBooking
        SET ?
        WHERE booking_id = ${req.params.id};
        `;
    await db.promise().query(qry, [req.body]);
    res.json({
      status: res.statusCode,
      msg: "The booking information has been updated."
    });
  }

  async deleteBooking(req, res) {
    if (!req.params.id) {
      throw new Error("Missing required 'id' parameter.");
    }

    const qry = `
        DELETE FROM weddingBooking
        WHERE booking_id = ${req.params.id};
        `;
    await db.promise().query(qry);
    res.json({
      status: res.statusCode,
      msg: "The booking information has been deleted."
    });
  }
}

export { WeddingBooking };