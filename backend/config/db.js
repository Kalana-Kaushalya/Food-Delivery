import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://kalanakaushalya01:0772793886@cluster0.hxpj3uh.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Conected"));
};
