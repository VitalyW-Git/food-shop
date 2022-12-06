import dotenv from 'dotenv';
import mysql, {MysqlError}  from 'mysql';
import config from './config';

dotenv.config();

const dbConnectionParams = {
    connectionLimit: 10,
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.dbPassword,
    database: config.mysql.dbName,
};

/** create mysql connection pool */

const connectDb = async () =>
    new Promise<mysql.Connection>((resolve, reject) => {
        const connection = mysql.createConnection(dbConnectionParams);
        connection.connect((error) => {
            if (error) {
                reject(error.message);
            } else {
                resolve(connection);
            }
        });
    });


const queryDb = async <T>(connection: mysql.Connection, query: string) =>
    new Promise<T>((resolve, reject) => {
        connection.query(query, connection, (error: MysqlError | null, resultProducts: any) => {
            if (error) {
                reject(error.message);
                return;
            }
            resolve(resultProducts);
            connection.end();
        });
    });


export {connectDb, queryDb};