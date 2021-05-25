import database from "@middlewares/database";
import Donation from "@models/Donation";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

const handler = nextConnect();

handler.use(database);
handler
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const donations = await Donation.find({}).sort("-createdAt").limit(5);
      res.status(200).json(donations);
    } catch (error) {
      console.log(error.message);

      res.status(500).json({ message: "Server Error" });
    }
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      console.log(req.body);

      const donation = new Donation(JSON.parse(req.body));
      await donation.save();
      res.status(201).json(donation);
    } catch (error) {
      console.log(error.message);

      res.status(500).json({ message: "Server Error" });
    }
  });

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   const { method } = req;

//   await dbConnect();

//   switch (method) {
//     case "GET":
//       console.log("GOT GET REQ");

//       break;

//     case "POST":
//       console.log("GOT POST REQ");

//       try {
//         const donation = new Donation(req.body);
//         await donation.save();
//         res.status(201).json(donation);
//       } catch (error) {
//         console.log(error.message);

//         res.status(500).json({ message: "Server Error" });
//       }
//       break;

//     default:
//       res.status(400).json({ message: "Not Found" });
//   }
// };

export default handler;
