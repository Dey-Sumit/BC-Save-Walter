import mongoose from "mongoose";

async function dbConnect() {
  // check if we have a connection to the database or if it's currently
  // connecting or disconnecting (readyState 1, 2 and 3)
  if (mongoose.connection.readyState >= 1) {
    // already connected
    return;
  }
  //   mongoose.connection.on("connected", () => {
  //     console.log("connected to mongo db");
  //   });
  //   mongoose.connection.on("error", (err) => {
  //     console.log(`db connection problem`, err);
  //   });
  return mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
}

export default dbConnect;
