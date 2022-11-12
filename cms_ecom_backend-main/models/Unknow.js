const mongoose = require("mongoose");
const unknowSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/silenceiv/image/upload/q_auto:eco/v1617358367/defaultAvatar_wnoogh.png",
  },
  recentViewed: [
    {
      type: String 
    },
  ],
  type: {
    type: String,
  },
  ip: { type: String, unique: true, required: ["ip is required"] },
  city: { type: String },
  country_name: { type: String },
});

module.exports = mongoose.model("Unknows", unknowSchema);
