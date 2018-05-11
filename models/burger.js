// Import ORM dependencies for database interaction
const orm = require("../config/orm");

const burger = {
    getAllBurgers: function (cb) {
        orm.getAllBurgers("burgers", "*", "devoured=0", function (result) {
            cb(result);
        });
    },
    createBurger: function (burger, cb) {
        orm.createBurger("burgers", "burger_name", burger, function (result) {
            cb(result);
        });
    },
    // updateBurger: function (objColVals, condition, cb) {
    //     orm.updateBurger("burgers", objColVals, condition, (res) => {
    //         cb(res);
    //     });
    // }
};

module.exports = burger;