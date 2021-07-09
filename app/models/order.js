const mongoose = require('mongoose');
const Schema = mongoose.Schema

const orderSchema = new Schema({
         customerId: {
                  type: mongoose.Schema.Types.ObjectId
         },
         items: {
                  type: Object, required: true
         },
         phone: {
                  type: String, required: true
         },
         address: {
                  type: String, required: true
         },
         paymentType: {
                  type: String, default: 'COD'
                  },
                  status: {
                           type: String, default: 'Order_Placed'
                           },
                  }, {
                           timestamps: true
                  })

         module.exports = mongoose.model('order', orderSchema)