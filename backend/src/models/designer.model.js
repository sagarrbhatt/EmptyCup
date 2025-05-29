import mongoose from "mongoose";


const designerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    projects: {
      type: Number,
      required: true,
    },
    years: {
      type: Number,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    phone1: {
      type: String,
      required: true,
    },
    phone2: {
      type: String,
      required: true,
    },
    shortlisted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Designer = mongoose.model("Designer", designerSchema);

export default Designer;
