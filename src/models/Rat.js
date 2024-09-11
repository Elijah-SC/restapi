import { Schema } from "mongoose";

export const RatsSchema = new Schema(
  {
    name: { type: String, minlength: 2, maxlength: 50, required: true },
    callsign: { type: String, minlength: 1, maxlength: 50, required: true },
    picture: { type: String, minlength: 1, maxlength: 500, required: true },
    specialties: [{ type: String, maxlength: 100 }]

  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)