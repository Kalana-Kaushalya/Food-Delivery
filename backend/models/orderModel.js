import mongoose, { Types } from "mongoose";

const orderSchema = new mongoose.Shema({
  userId: { Type: String, required: true },
  items: { Type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, default: "Food Processing" },
  date: { type: date, default: Date.now() },
  payment: { type: Boolean, default: false },
});

const orderModel =
  mongoose.models.order || mongoose.model("order", orderSchema);
export default orderModel;
