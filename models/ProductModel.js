const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  image: {
    type: String,
    required: [true, "Image URL is required"],
    validate: {
      validator: function (v) {
        return /^(http|https):\/\/[^ "]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid image URL!`,
    },
  },
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters long"],
    maxlength: [100, "Name cannot exceed 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
  },
  discount: {
    type: Number,
    min: [0, "Discount cannot be negative"],
    max: [100, "Discount cannot exceed 100%"],
    default: 0,
  },
  bgcolor: {
    type: String,
    validate: {
      validator: function (v) {
        return /^#([0-9A-F]{3}){1,2}$/i.test(v);
      },
      message: (props) => `${props.value} is not a valid hex color code!`,
    },
  },
  panelcolor: {
    type: String,
    validate: {
      validator: function (v) {
        return /^#([0-9A-F]{3}){1,2}$/i.test(v);
      },
      message: (props) => `${props.value} is not a valid hex color code!`,
    },
  },
  textcolor: {
    type: String,
    validate: {
      validator: function (v) {
        return /^#([0-9A-F]{3}){1,2}$/i.test(v);
      },
      message: (props) => `${props.value} is not a valid hex color code!`,
    },
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
