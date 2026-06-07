import { Router } from "express";
import { menu, restaurantInfo } from "../data/menu.js";

const router = Router();

router.get("/menu", (req, res) => {
  res.json(menu);
});

router.get("/restaurant-info", (req, res) => {
  res.json(restaurantInfo);
});

export default router;
