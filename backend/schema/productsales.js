const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SalesDB = new Schema({
  product_name: {
    type: String,
  },
  date : {
    type: Date,
  },
  quantity : {
    type : Number
  }
});

module.exports = mongoose.model('Sale', SalesDB );