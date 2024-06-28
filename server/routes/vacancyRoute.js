const express = require("express");
const router = express.Router();
const {
    getVacancy,
    deleteVacancy,
    lookVacancy,
    getLooks,
    getVacancies,
    createVacancy
} = require("../controllers/vacancyController");
const { authenticateToken } = require("../middlewares/authMiddleWare");

router.route("/:id")
    .get(getVacancy)
    .delete(deleteVacancy);

router.route("/look/:id")
    .put(authenticateToken, lookVacancy);

router.route("/looks")
    .get(authenticateToken, getLooks);

router.route("/")
    .get(getVacancies)
    .post(authenticateToken, createVacancy);

module.exports = { router };