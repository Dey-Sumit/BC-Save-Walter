import database from "@middlewares/database";
import Quote from "@models/Quote";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

const handler = nextConnect();

handler.use(database);
handler.get(async (_1: NextApiRequest, res: NextApiResponse) => {
  try {
    const quotes = await Quote.find({}, "-_id");
    res.status(200).json(quotes);
  } catch (error) {
    console.log(error.message);

    res.status(500).json({ message: "Server Error" });
  }
});

export default handler;
