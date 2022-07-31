import db from "../../libs/pressa.js";
import query from "./query.js";


const USERLOGIN = async ({ username, password }) => {
  try {
    return await db.fetch(query.LOGIN, username, password);
  } catch (error) {
    console.log(error.message);
  }
};


export default {
  USERLOGIN
};
