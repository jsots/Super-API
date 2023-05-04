import mongoose from "mongoose";
import chalk from "chalk";

const MONGODB_URI = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/Characters";

mongoose.set("returnOriginal", false);

let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(MONGODB_URI, mongooseConfig)
  .catch((error) => console.log("error connecting to MongoDB", error.message));

mongoose.connection.on("disconnected", () =>
  console.log(chalk.bold("Disconnected from MongoDB"))
);

mongoose.connection.on("error", (error) =>
  console.error(chalk.red(`mongoDB connection error: ${error}`))
);

export default mongoose.connection;