import NewError from "../errors/NewError.js"

export default (req, res, next) => {
  let { username, password } = req.body;

  if (req.url == "/login") {
    if (![username, password].every(Boolean)) {
      return next(NewError.unauthorized("Something went wrong while trying to login"));
    }
  }

  return next();
};
