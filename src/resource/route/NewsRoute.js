const express = require("express");
const router = express.Router();
const newsController = require("../mvc/controllers/NewsController");

router.get("/:slug", newsController.show);
router.get("/", newsController.index);

module.exports = router;
