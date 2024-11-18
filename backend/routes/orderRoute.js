import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder, verify } from "../controller/orderController.js";


const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware, placeOrder);
orderRouter.post("/verify", verify)

export default orderRouter;