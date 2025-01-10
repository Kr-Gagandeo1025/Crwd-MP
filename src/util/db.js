// util/db.js
import { Client } from "pg";

const config = {
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DB,
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.PG_SSL_CERTIFICATE,
    },
};

let client;

function getClient() {
    if (!client) {
        client = new Client(config);
        client.connect().catch((err) => console.error("Database connection error:", err));
    }else{
        console.log("Connected DB")
    }
    return client;
}

export default getClient;
