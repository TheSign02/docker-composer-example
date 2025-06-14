import { Pool } from "pg";
const pool  = new Pool({
    host: "db",
    port: 5432,
    user: "user",
    password: "123",
    database: "db123"
})

export default pool;