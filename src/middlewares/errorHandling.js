import NewError from "../errors/NewError.js"

export default (err, req, res, next) => {
  if (err instanceof NewError) {
    return res
      .status(err.status)
      .json({ status: err.status, message: err.message });
  }

  // return res.status(500).json({ message: "An unexpected error" });
  res.status(err.status).json({
    status: err.status,
    message: "InternalServerError",
  });
  // process.exit();
};
