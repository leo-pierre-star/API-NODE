const mongoose = require("mongoose");

const Schema = mongoose.Schema;

exports.obj = new Schema({
  libelle: {
    type: String,
    required: "Enter a libelle",
  },
  type: {
    type: String,
    required: "Enter a type please",
  },
  ville: String,
  phone: String, //string car si numero de telephone commence par 0, il ne le compte pas
  created_date: {
    type: Date,
    default: Date.now,
  },
});
