import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ansh:9838698121@cluster0.1pzbu.mongodb.net/food-del').then(()=>console.log("DB connected"));
}