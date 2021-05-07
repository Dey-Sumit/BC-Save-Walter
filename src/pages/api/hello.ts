// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "@libs/connectDB";

export default async (req, res) => {
  try {
    await dbConnect();
    return res.status(200).json({ msg: "Connected" });
  } catch (error) {
    return res.status(500).json({ msg: "Connection Failed" });
  }
};
