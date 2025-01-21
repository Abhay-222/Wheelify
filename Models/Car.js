import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  ownershipProof: {
    type: String,
    required: true,
  },
  Owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Owner",
  },
  Renter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Renter",
  },
  img: {
    type: String,
    required: true,
  },
  rating: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RatingAndReview",
    },
  ],
  rentAmount: {
    type: Number,
  },
  availableTimeFrom: {
    type: String, // Format: HH:mm (e.g., "09:00")
    required: true,
  },
  availableTimeTill: {
    type: String, // Format: HH:mm (e.g., "18:00")
    required: true,
  },
  availableDateFrom: {
    type: Date,
    required: true,
  },
  availableDateTill: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Car = mongoose.model("Car", carSchema);
export default Car;
