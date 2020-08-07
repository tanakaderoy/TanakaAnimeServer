import HomePageController = require("../controllers/home-page-controller");
import express from "express";
const router = express.Router();

//define routes
router.get("/home",HomePageController.getHomePageShows);

module.exports = router
