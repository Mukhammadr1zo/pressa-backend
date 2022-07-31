import jsonwebtoken from "jsonwebtoken";
import jwtSecret from "../config.js";

export default {
  sign: (payload) => jsonwebtoken.sign(payload, jwtSecret.SECRET),

  verify: (token) => jsonwebtoken.verify(token, jwtSecret.SECRET),
};
