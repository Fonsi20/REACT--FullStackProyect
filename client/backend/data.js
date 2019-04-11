const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    id: Number,
    brand: String,
    model: String,
    color: String,
    fuel_type: String,
    engine_volume: String,
    traction: String,
    price: String
  },
  { timestamps: true },
  { collection: 'cars' }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("cars", DataSchema);