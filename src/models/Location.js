import { Schema } from "mongoose";

export const locationSchema = new Schema(
  {
    country: { type: String, minlength: 1, maxlength: 100, required: true },
    area: { type: String, minlength: 1, maxlength: 100, required: true },
    specialties: [{ type: String, maxlength: 100 }]

  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)