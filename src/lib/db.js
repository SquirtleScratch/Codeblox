const { Client } = require("pg");

const client = new Client({
    host: process.env.POSTGRES_DB_HOST,
    user: process.env.POSTGRES_USER || 'postgres',
    port: process.env.POSGRES_PORT ||  5432,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
});

client.connect((err) => {
    if(err){
        console.error("Error connecting to the database:", err);
    } else{
        console.log('Connected to PostgreSQL DB.');
    }
});

module.exports = client;