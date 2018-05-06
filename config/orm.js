// Include connection to MySQL server
const sqlserver = require("../config/connection")

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
    getAllBurgers: function (tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput}`;
        sqlserver.query(queryString, (err, data) => {
            if (err) { throw err };
            cb(data);
        });
    },
    createBurger: function (table, cols, vals, cb) {
        const queryString = `INSERT INTO ${table} (${cols.toString()} VALUES (${vals}))`;

        console.log(queryString);


        sqlserver.query(queryString, vals, (err, data) => {
            if (err) { throw err; }
            console.log(data);
            cb(data);
        });
    },
    updateBurger: function (table, objColVals, condition, cb) {
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