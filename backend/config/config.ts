import dotenv from 'dotenv';
dotenv.config();

const MYSQL = {
    dbName: process.env.DB_NAME,
    dbPassword: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
};

const config = {
    mysql: MYSQL,
};

export default config;