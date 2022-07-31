import NewError from "../../errors/NewError.js";
import jwt from "../../libs/jwt.js";
import model from "./model.js";

class AuthController {
  async LOGIN(req, res, next) {
    try {
      let admins = await model.USERLOGIN(req.body);

      if (admins) {
        res.status(200).json({
          status: 200,
          message: "You Logged",
          token: jwt.sign({ userId: admins.user_id}),
          data: admins,
        });
      } else {
        next(NewError.unauthorized("Wrong Username or Password"));
      }
    } catch (error) {
      next(NewError.internal(error.message));
    }
  }
}

export default new AuthController();
