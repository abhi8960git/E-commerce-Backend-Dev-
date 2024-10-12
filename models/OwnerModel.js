const mongoose = require("mongoose");
const { isEmail } = require("validator");

const OwnerSchema = new mongoose.Schema(
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
    isadmin: {
      type: Boolean,
      default: false,
    },
    products: {
      type: Array,
      default: [],
    },
    picture: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true },
);

const Owner = mongoose.model("Owner", OwnerSchema);
