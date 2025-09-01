import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

const port = process.env.PORT || 7000;

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on(`error`, (error) => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed: ", err);
  });

/*
const app = express()

(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
})(); */
