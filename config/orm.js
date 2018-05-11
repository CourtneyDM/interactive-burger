// Include connection to MySQL server
const sqlserver = require("../config/connection")

function printQuestionMarks(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?")
    }

    return arr.toString();
}

function objToSql(obj) {
    let arr = [];

    for (let key in obj) {
        let value = obj[key];

        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = `'${value}'`;
            }

            arr.push(`${key} = ${value}`);
        }
    }
    return arr.toString();
}

// Define ORM
const orm = {
    // SELECT * FROM burgers WHERE devoured = 0
    getAllBurgers: function (table, itemToSelect, condition, cb) {
        const queryString = `SELECT ${itemToSelect} FROM ${table} WHERE ${condition}`;

        console.log(queryString);

        sqlserver.query(queryString, (err, data) => {
            if (err) { throw err };
            cb(data);
        });
    },

    createBurger: function (table, colVal, itemToInsert, cb) {
        // INSERT INTO burgers (burger_name) VALUE (burger name received from POST)
        const queryString = `INSERT INTO ${table} (${colVal}) VALUES ('${itemToInsert}')`;

        sqlserver.query(queryString, (err, data) => {
            if (err) { throw err; }
            console.log(data);
            cb(data);
        });
    },
    updateBurger: function (table, objColVals, condition, cb) {
        // UPDATE burgers SET devoured = 1 WHERE burger_name = name received from POST
        const queryString = `UPDATE ${table} SET ${objToSql(objColVas)} WHERE ${condition}`;
        console.log(queryString);

        sqlserver.query(queryString, (err, data) => {
            if (err) { throw err; }
            console.log("Value updated.");
            cb(data);
        });
    }
}

module.exports = orm;