import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "mysql1234",
  database: "pet-diary",
});

export const db = pool.promise();

/*
 * createPool : 연결(요청)수가 여러개일때 안정적으로 사용가능
 * createConnection <-> createPool
 *
 * pool.promise()
 *
 * getConnection() : db연결을 꺼내는 함수
 *
 *
 */
