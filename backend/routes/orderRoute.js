import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder, verify, userOrders, listOrders } from "../controller/orderController.js";


const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware, placeOrder);
orderRouter.post("/verify", verify)
orderRouter.post("/userorders", authMiddleware, userOrders)
orderRouter.get("/list", listOrders)

export default orderRouter;