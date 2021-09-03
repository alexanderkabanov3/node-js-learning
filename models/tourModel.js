const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  price: {
    type: Number,
    default: 4.5,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
