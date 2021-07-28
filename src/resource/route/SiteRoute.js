const express = require("express");
const router = express.Router();
const siteController = require("../mvc/controllers/SiteController");

router.use("/contact", siteController.contact);
router.use("/", siteController.home);

module.exports = router;
