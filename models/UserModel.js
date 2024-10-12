const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [2, "Full name must be at least 2 characters long"],
      maxlength: [50, "Full name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: [isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
    },
    cart: {
      type: Array,
      default: [],
    },
    isadmin: {
      type: Boolean,
      default: false,
    },
    orders: {
      type: Array,
      default: [],
    },
    contactnumber: {
      type: Number,
      required: [true, "Contact number is required"],
      validate: {
        validator: function (v) {
          return /\d{10}/.test(v);
        },
        message: (props) => `${props.value} is not a valid 10-digit number!`,
      },
    },
    picture: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);
