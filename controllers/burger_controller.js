const express = require("express");
const router = express.Router();

var burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.getAllBurgers(result => {
        let handlebarsObj = {
            burgers: result
        };
        console.log(result);
        // res.json(handlebarsObj);
        res.render("index", handlebarsObj);
    });
});

router.post("/api/create", (req, res) => {

    let burger = req.body;

    burger.createBurger(burger, (result) => {
        let handlebarsObj = {
            burgers: result
        };
        console.log("New burger: " + burger);
        res.end();
    });
});

module.exports = router;