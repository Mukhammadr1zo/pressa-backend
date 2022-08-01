import NewError from "../../errors/NewError.js";
import model from "./model.js";

async function CREATE(req, res, next) {
    try {
      const publish = await model.CREATE(req.body, req.file);
      console.log(publish);
      if (publish) {
        res.status(201).json({
          status: 201,
          message: "New publish added",
          data: publish,
        });
      } else {
        next(NewError.unauthorized("Client Error"));
      }
    } catch (error) {
      next(NewError.internal(error.message));
    }
  }

async function GET(req, res, next) {
    try {
      const publish = await model.GET(req.params);
      console.log(publish);
      if (publish) {
        res.status(201).json({
          status: 201,
          message: " publish get",
          data: publish,
        });
      } else {
        next(NewError.unauthorized("Client Error"));
      }
    } catch (error) {
      next(NewError.internal(error.message));
    }
  }

async function PUT(req, res, next) {
    try {
      const publish = await model.PUT(req.params);
      console.log(req.params);
      if (publish) {
        res.status(201).json({
          status: 201,
          message: "New publish updated",
          data: publish,
        });
      } else {
        next(NewError.unauthorized("Client Error"));
      }
    } catch (error) {
      next(NewError.internal(error.message));
    }
  }


  async function DELETE(req, res, next) {
    try {
      const publish = await model.DELETE(req.params);
      console.log(publish);
      if (publish) {
        res.status(201).json({
          status: 201,
          message: "New publish cancelled successfully",
          data: publish,
        });
      } else {
        next(NewError.unauthorized("Client Error"));
      }
    } catch (error) {
      next(NewError.internal(error.message));
    }
  }

export default {CREATE, PUT, DELETE, GET};
