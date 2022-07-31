import NewError from "../../errors/NewError.js";
import model from "./model.js";

class AdminController {
  async AWAIT(req, res, next) {
    try {
      const publisher = await model.AWAIT();
      if (publisher) {
        res.status(200).json({
          status: 200,
          message: "OK",
          data: publisher,
        });
      } else {
        next(NewError.unauthorized("Client Error"));
      }
    } catch (error) {
      next(NewError.internal(error.message));
    }
  }

  async ACCEPTED(req, res, next) {
    try {
      const publisher = await model.ACCEPTED();
      if (publisher) {
        res.status(200).json({
          status: 200,
          message: "OK",
          data: publisher,
        });
      } else {
        next(NewError.unauthorized("Client Error"));
      }
    } catch (error) {
      next(NewError.internal(error.message));
    }
  }

  async REJECTED(req, res, next) {
    try {
      const publisher = await model.REJECTED();
      if (publisher) {
        res.status(200).json({
          status: 200,
          message: "OK",
          data: publisher,
        });
      } else {
        next(NewError.unauthorized("Client Error"));
      }
    } catch (error) {
      next(NewError.internal(error.message));
    }
  }
}

export default new AdminController();
