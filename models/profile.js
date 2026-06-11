const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    name: String,
    rollNumber: String,
    class: String,
    department: String,
    teacher: String,
    phoneNumber: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);