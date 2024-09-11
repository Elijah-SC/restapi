import { Schema } from "mongoose";

export const MissionSchema = new Schema(
  {
    codename: { type: String, minlength: 1, maxlength: 50, required: true },
    objective: { type: String, minlength: 1, maxlength: 10000, required: true },
    year: { type: String, min: 1, max: 4000, required: true },
    completed: { type: Boolean, requiredL: true, default: false },
    ratId: { type: Schema.ObjectId, required: true, ref: `Rat` },
    locationId: { type: Schema.ObjectId, required: true, ref: `Location` },

  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)

MissionSchema.virtual(`rat`, {
  localField: `ratId`,
  foreignField: `_id`,
  ref: `Rat`,
  justOne: true
})

MissionSchema.virtual(`location`, {
  localField: `locationId`,
  foreignField: `_id`,
  ref: `Location`,
  justOne: true
})