import mariadb, { Connection } from 'mariadb';
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } from '../config';

export const getConnection = async (): Promise<Connection> => {
  try {
    let conn;
    if (!conn) {
      conn = await mariadb.createConnection({
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
      });
    }
    return conn;
  } catch (err) {
    console.log('err', err);
    throw err;
  }
};
