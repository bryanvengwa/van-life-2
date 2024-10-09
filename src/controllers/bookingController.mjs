import Booking from "../models/bookingModel.mjs";

export async function getAllBookings(req , res){

  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bookings', error });
  }
}

// Get a single booking by ID
export async function getBookingById (req, res) {
    try {
      const booking = await Booking.findById(req.params.id);
      if (!booking) {
        return res.status(404).json({ message: 'Booking not found' });
      }
      res.status(200).json(booking);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch booking', error });
    }
  };
  