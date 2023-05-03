import mongoose from "mongoose";
import chalk from "chalk";

let MONGODB_URI = "mongodb+srv://characters:characters@cluster0.xdbncpu.mongodb.net/mydatabase"

if (!MONGODB_URI) {
  MONGODB_URI = 'mongodb://localhost:27017/Characters';
}

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// This is for Model.findByIdAndUpdate method, specifically so that {new: true} is the default
mongoose.set("returnOriginal", false);

mongoose.connection.on("disconnected", () =>
  console.log(chalk.bold("Disconnected from MongoDB!"))
);

mongoose.connection.on("error", (error) =>
  console.error(chalk.red(`MongoDB connection error: ${error}`))
);

export default mongoose.connection;
