import { json } from "express";
import {
  fetchUsers,
  fetchUserById,
  addUser,
  updateUser,
  removeUser,
} from "../services/users.js";
import HttpError from "../utils/HttpError.js";

const getUsers = (req, res) => {
  let { sort, order, filRole, page } = req.query;
  let pageInt = parseInt(page);

  if (isNaN(page)) {
    pageInt = 1;
  }
  if (!sort) {
    sort = "name";
  }
  if (!order) {
    order = "asc";
  }
  fetchUsers(sort, order, filRole, page)
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      const httpError = new HttpError(err.message, 500);
      next(httpError);
    });
};
const getUserById = (req, res, next) => {
  const { _id } = req.params;
  fetchUserById(_id)
    .then((users) => {
      if (!users) {
        // 404 -> Not Found
        const httpError = new HttpError(
          "User with given id does not exist",
          404
        );
        next(httpError);
        return;
      }
      res, json(users);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        // 400 -> BAD REQUEST
        const httpError = new HttpError("Invalid user id", 400);
        next(httpError);
      } else {
        // eg. DB connection error
        // 500 -> Internal Server Error
        const httpError = new HttpError(err.message, 500);
        next(httpError);
      }
    });
};

//POST /users
const postUser = (req, res, next) => {
  const { body } = req;
  console.log(Object.keys(body));
  // check if the body is an empty object
  if (Object.keys(body).length === 0) {
    const httpError = new HttpError(
      "Request body is empty. User details are missing.",
      400
    );
    next(httpError);
    return;
  }

  addUser(body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      const httpError = new HttpError(err.message, 400);
      next(httpError);
    });
};

const putUser = (req, res, next) => {
  const { body } = req;
  const { _id } = req.params;

  // check if the body is an empty object
  if (Object.keys(body).length === 0) {
    const httpError = new HttpError(
      "Request body is empty. user details are missing.",
      400
    );
    next(httpError);
    return;
  }

  updateUser(_id, body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        // 400 -> BAD REQUEST
        const httpError = new HttpError("Invalid user id", 400);
        next(httpError);
      } else {
        // eg. DB connection error
        // 500 -> Internal Server Error
        const httpError = new HttpError(err.message, 500);
        next(httpError);
      }
    });
};

const deleteUser = (req, res, next) => {
  const { _id } = req.params;

  removeUser(_id)
    .then(() => {
      res.status(204).json();
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        // 400 -> BAD REQUEST
        const httpError = new HttpError("Invalid user id", 400);
        next(httpError);
      } else {
        // eg. DB connection error
        // 500 -> Internal Server Error
        const httpError = new HttpError(err.message, 500);
        next(httpError);
      }
    });
};

export { getUsers, getUserById, postUser, putUser, deleteUser };
