const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
   password: {
    type:String,
    required: true,
   }
  },
  {
    timestamps: true, // This option will add createdAt and updatedAt fields
  }
);

module.exports = mongoose.model('Users', userSchema);
