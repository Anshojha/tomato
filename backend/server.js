import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import dotenv from 'dotenv';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app- config
const app = express();
const port = 4000;  

// middleware
app.use(express.json());
app.use(cors());
dotenv.config();


// db connection
connectDB();

// API endpoints

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order", orderRouter);

app.get("/", () => {
  res.send("API is working");
});

app.listen(port, () => {
  console.log(`Server is working on the http://localhost:${port}`);
});

// mongodb+srv://ansh:9838698121@cluster0.1pzbu.mongodb.net/?
