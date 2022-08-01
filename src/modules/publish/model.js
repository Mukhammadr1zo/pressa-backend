import db from "../../libs/pressa.js";
import query from "./query.js";

const CREATE = async ({ publisher_name, publisher_job, publisher_date, publisher_time, publisher_type, publisher_link, publisher_title, publisher_description, publisher_text, contact1, contact2}, img) => {

  try {
    return await db.fetchAll(query.CREATE, publisher_name, publisher_job, publisher_date, publisher_time, publisher_type, publisher_link, publisher_title, publisher_description, publisher_text, img.filename, contact1, contact2);
  } catch (error) {
    console.log(error.message);
  }
}

const PUT = async({ publishId }) => {
  try {
    return await db.fetch(query.PUT, publishId);
  } catch (e) {
    console.error(e);
  }
}

const GET = async({ publishId }) => {
  try {
    return await db.fetchAll(query.GET, publishId);
  } catch (e) {
    console.error(e);
  }
}

const DELETE = async({ publishId }) => {
  try {
    return await db.fetch(query.DELETE, publishId);
  } catch (e) {
    console.error(e);
  }
}


export default { CREATE, PUT, DELETE, GET };
