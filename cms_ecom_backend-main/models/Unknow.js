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
      type: mongoose.Schema.Types.ObjectId,
      ref: "RecentViewed",
    },
  ],
  type: {
    type: String,
  },
  network: { type: String },
  ip: { type: String },
  city: { type: String },
  region: { type: String },
  country_name: { type: String },
  country_code: { type: String },
  postal: { type: String },
  latitude: { type: String },
  logitude: { type: String },
  currency_name: { type: String },
  country_area: { type: Number },
});

module.exports = mongoose.model("Unknows", unknowSchema);
