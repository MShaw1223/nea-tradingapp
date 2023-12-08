import path from "path";
import sqlite3 , { Database } from "sqlite3";
const dbPath = path.resolve(__dirname, 'data', 'database.db')

const db = new sqlite3.Database(dbPath);
export default db;