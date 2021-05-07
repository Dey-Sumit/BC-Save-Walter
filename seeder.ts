import { quotes } from "./libs/data";
import Quote from "./models/Quote";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: __dirname + "/.env.local" });
// console.log(process.env.MONGODB_URI);

mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log("DB Connection Failed", error.message));

const importData = async () => {
  try {
    // delete previous data | avoid duplication
    await Quote.deleteMany();

    await Quote.insertMany(quotes);

    console.log("Data imported");

    // 0 is a success code and 1 (or another number) can be a failure code.
    process.exit();
  } catch (error) {
    console.log("Data not imported", error.message);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Quote.deleteMany();

    console.log("Data destroyed");
    process.exit();
  } catch (error) {
    console.log("Data not destroyed");
    process.exit(1);
  }
};
// console.log(process.argv);

if (process.argv[2] == "-d") {
  destroyData();
} else {
  importData();
}
