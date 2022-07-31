import db from "../../libs/pressa.js";
import query from "./query.js";


const AWAIT = async () => {
  try {
    return await db.fetchAll(query.AWAIT);
  } catch (error) {
    console.log(error.message);
  }
};


const ACCEPTED = async () => {
  try {
    return await db.fetchAll(query.ACCEPTED);
  } catch (error) {
    console.log(error.message);
  }
};


const REJECTED = async () => {
  try {
    return await db.fetchAll(query.REJECTED);
  } catch (error) {
    console.log(error.message);
  }
};

export default {AWAIT, ACCEPTED, REJECTED}