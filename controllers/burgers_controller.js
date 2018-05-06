const express = require("express");
const router = express.Router();

var burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.getAllBurgers(data)
});

module.exports = router;