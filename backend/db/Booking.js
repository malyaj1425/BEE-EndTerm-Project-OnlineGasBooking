const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: true,
  },
  address: {
    type: String,
    required: [true, "Please provide a name"],
    unique: true,
  },
  payment:{
    type:String,
    required: [true, "Please provide a payment option"]
  }
});

module.exports=mongoose.model.Booking||mongoose.model("Bookings",BookingSchema);