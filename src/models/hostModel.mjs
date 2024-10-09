import mongoose from "mongoose";

const hostSchema = new mongoose.Schema({
  // review schema
  rating: Number,
  comment: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  vanId: { type: mongoose.Schema.Types.ObjectId, ref: "Van", required: true },
  hostId: { type: mongoose.Schema.Types.ObjectId, ref: "Host", required: true },
  bookingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 30 * 24 * 60 * 60 * 1000, // 30 days
  },
});

export default mongoose.model("Host", hostSchema);
