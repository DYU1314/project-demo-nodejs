const express = require("express");
const router = express.Router();
const siteController = require("../mvc/controllers/SiteController");

router.get("/contact", siteController.contact);
router.get("/", siteController.home);

module.exports = router;
