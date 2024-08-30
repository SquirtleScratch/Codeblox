const { Client } = require("pg");

const client = new Client({
    host: "3.145.185.234",
    user: process.env.PGDB_USER,
    port: 5432,
    password: process.env.PGDB_PASS,
    database: 'codeblox'
});

client.connect((err) => {
    if(err){
        console.error("Error connecting to the database:", err);
    } else{
        console.log('Connected to PostgreSQL DB.');
    }
});

module.exports = client;