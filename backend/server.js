import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const PORT = 5000;
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});