import { IDonation } from "@libs/types";
import mongoose, { Document } from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */

type DonationDocument = IDonation & Document;
const DonationSchema = new mongoose.Schema<DonationDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Donation ||
  mongoose.model<DonationDocument>("Donation", DonationSchema);
