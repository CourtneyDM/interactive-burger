// MySQL Dependency
const mysql = require("mysql");

// Create connection to MySQL database

if (process.env.JAWSDB_URL) {
    const sqlserver = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    const sqlserver = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    });
}


// Create connection to MySQL server
sqlserver.connect(err => {
    if (err) { console.log(`Error: ${err.stack}`) };
    console.log(`Connected to MySQL server: Database: ${sqlserver.database}, Connection ID: ${sqlserver.threadId}.`);
});

// Export MySQL connection
module.exports = sqlserver;