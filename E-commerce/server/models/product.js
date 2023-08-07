const mongoose = require("mongoose");
const { Schema } = mongoose;

const ratingSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
  },
  { _id: false } // _id field is not needed for this sub-document
);

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["clothing", "shoes", "accessories"], // Adjust this array according to your needs
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    ratings: [ratingSchema],
    stock: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } // this will automatically add createdAt and updatedAt fields
);

const productModel = mongoose.model("products", productSchema);
module.exports = productModel;
