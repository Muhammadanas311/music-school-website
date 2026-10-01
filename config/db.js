import mysql from 'mysql2/promise'

const db= mysql.createPool({
    host: process.env.db_Host,
    user: process.env.db_User,
    password: process.env.db_Password,
    database: process.env.db_Database
})

db.getConnection()
.then((conn) => {
    console.log("Connected to Database Successfully")
    conn.release()
})
.catch((err) => console.log("❌ Database connection failed:", err.code, "-", err.message))


export default db