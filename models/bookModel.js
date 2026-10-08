import pool from '../config/db.js';

//read
export const fetch = async () => {
    const [rowws] = await pool.query("SELECT * FROM book");
    return rows;
}
