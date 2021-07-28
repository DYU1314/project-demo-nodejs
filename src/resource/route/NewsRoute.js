const express = require("express");
const router = express.Router();
const newsController = require("../mvc/controllers/NewsController");

router.use("/:slug", newsController.show);
router.use("/", newsController.index);

module.exports = router;
