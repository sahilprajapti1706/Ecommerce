import express from 'express';
const cartRouter = express.Router();
import { addToCart, updateCart, getUserCart } from '../controllers/cartController.js'
import authUser from '../middleware/auth.js';

cartRouter.post("/get", authUser, getUserCart);
cartRouter.post("/add", authUser, addToCart);
cartRouter.post("/update", authUser, updateCart);

export default cartRouter;