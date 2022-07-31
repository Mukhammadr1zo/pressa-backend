import pg from "pg"
import database from "../config.js"

const pool = new pg.Pool(database.Configs);

async function fetch(SQL, ...params) {
  let client = await pool.connect();
  try {
    let {
      rows: [row],
    } = await client.query(SQL, params.length ? params : null);
    return row;
  } catch (error) {
    console.error(error);
  } finally {
    await client.release();
  }
}

async function fetchAll(SQL, ...params) {
  let client = await pool.connect();
  try {
    let { rows } = await client.query(SQL, params.length ? params : null);
    return rows;
  } catch (error) {
    console.error(error);
  } finally {
    await client.release();
  }
}

export default {
  fetch,
  fetchAll,
};
