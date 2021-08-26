const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    review: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Purchase', purchaseSchema)
