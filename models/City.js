const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  post: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
  ],
  description: {
    type: String,
  }
})

const City = mongoose.model('City', citySchema);

module.exports = City;