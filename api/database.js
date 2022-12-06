import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "dz",
    password: "@Cyber123",
    database: "lama_blog"
})