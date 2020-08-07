const TrendingController = require("../controllers/trending-controller");
import express from "express";
const router = express.Router();

//define routes
router.get("",TrendingController);

module.exports = router
