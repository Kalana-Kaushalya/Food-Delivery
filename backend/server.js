import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routs/foodRout.js";
import userRouter from "./routs/userRoute.js";
import cartRouter from "./routs/cartRoute.js";

//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//db conection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);

app.get("/test", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});

//mongodb+srv://kalanakaushalya01:<db_password>@cluster0.hxpj3uh.mongodb.net/?

//mongodb+srv://kalanakaushalya01:<db_password>@cluster0.hxpj3uh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
