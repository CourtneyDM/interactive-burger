// Import ORM dependencies for database interaction
const orm = require("../config/orm");

const burger = {
    getAllBurgers: (cb) => {
        orm.getAllBurgers("burgers", (res) => {
            cb(res);
        });
    },
    createBurger: (cols, vals, cb) => {
        orm.createBurger("burgers", cols, vals, (res) => {
            cb(res);
        });
    },
    updateBurger: (objColVals, condition, cb) => {
        orm.updateBurger("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;