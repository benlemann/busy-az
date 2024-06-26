const express = require("express");
const router = express.Router();
const {
    createUser,
    loginUser,
    updateUser,
    getUser,
    logOutUser
} = require("../controllers/userController");
const { authenticateToken } = require("../middlewares/authMiddleWare");


router.route("/signup")
    .post(createUser);

router.route("/login")
    .post(loginUser);

router.route("/update")
    .put(authenticateToken, updateUser);

router.route("/")
    .get(authenticateToken, getUser);

router.route("/logout")
    .get(logOutUser);

module.exports = { router };