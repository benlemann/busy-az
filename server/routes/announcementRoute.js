const express = require("express");
const router = express.Router();
const {
    announcementPage
} = require("../controllers/announcementController");
const { authenticateToken } = require("../middlewares/authMiddleWare");

router.route("/")
    .get(authenticateToken, announcementPage);

router.route("/employer").post(authenticateToken, )

module.exports = { router };