import NewError from "../errors/NewError.js";
import jwt from "../libs/jwt.js";

export default (req, res, next) => {
  try {
    if (req.url == "/auth/login") {
      return next();
    }
    if (req.method == "POST" && req.url == "/publish") {
      
      let { token } = req.headers;

      if (!token) {
        return next(NewError.forbidden("Not Authorize"));
      }

      let user_id = jwt.verify(token);
      req.userId = user_id;
    }
    return next();
  } catch (error) {
    next(NewError.internal("Server Error"));
  }
};
