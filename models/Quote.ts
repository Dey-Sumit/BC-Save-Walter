import { IQuote } from "@libs/types";
import mongoose, { Document } from "mongoose";

type QuoteDocument = IQuote & Document;
const QuoteSchema = new mongoose.Schema<QuoteDocument>({
  name: {
    type: String,
    required: true,
  },
  pictureURL: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

export default (mongoose.models.Quote as mongoose.Model<QuoteDocument>) ||
  mongoose.model<QuoteDocument>("Quote", QuoteSchema);
