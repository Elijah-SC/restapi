import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { RatsSchema } from "../models/Rat.js";
import { locationSchema } from "../models/Location.js";
import { MissionSchema } from "../models/Mission.js";

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Rat = mongoose.model(`Rat`, RatsSchema)
  Location = mongoose.model(`Location`, locationSchema)
  Mission = mongoose.model(`Mission`, MissionSchema)
}

export const dbContext = new DbContext()
