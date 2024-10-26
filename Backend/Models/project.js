const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // This option will add createdAt and updatedAt fields
  }
);

module.exports = mongoose.model('Project', projectSchema);
