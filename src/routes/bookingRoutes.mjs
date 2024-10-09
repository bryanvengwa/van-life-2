import express from "express";
import * as BookingController from '../controllers/bookingController.mjs'

const router = express.Router();

router.get('/bookings', BookingController.getAllBookings);
router.get('/bookings/:id' , BookingController.getBookingById);

export default router ;