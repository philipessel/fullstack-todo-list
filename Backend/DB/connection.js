//============ Modified MongoDB Connection Code

import mongoose from "mongoose";

// Use MONGO_URL environment variable or fallback to localhost for development
const db = process.env.MONGO_URL || "mongodb://localhost:27017/todo-list";

const connectDb = () => {
  return mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
};

export default connectDb;

//============ Original MongoDB Connection Code

/*
import mongoose from "mongoose";

// var db = "mongodb://localhost:27017/Main?authMechanism=DEFAULT&authSource=admin";
var db = "mongodb://localhost:27017";

const connectDb = () => {
  return mongoose
    //.connect(`${process.env.DB}`)
    // .connect(`${db}`)
    .connect(`mongodb://mongo-shared-dev:fikTpih4U2!@20.218.241.192:27017/?directConnection=true&appName=mongosh+1.8.2&authMechanism=DEFAULT`)
    .then(() => {
      console.log("connected");
    })
    .catch((err) => {
      console.log("catch error", err);
    });
};

export default connectDb;
*/