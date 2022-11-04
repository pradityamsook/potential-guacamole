// import Connection from 'mysql/lib/Connection';
// import { createPool } from 'mysql2/promise';
import postgres from 'postgres';

export async function connect() {
    const connection = postgres('postgres://postgres:123456@localhost:5432/node_mysql_ts',{
        host: 'localhost',
        username: 'postgres',
        password: '123456',
        port: 5432,
        database: 'node_mysql_ts',
    });
    return connection;
}