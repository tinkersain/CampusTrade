const express = require("express");
const {
  allUsers,
  getUserByQuery,
  addUser,
  updateUser,
  deleteUser,
  login,
} = require("./../controllers/user.controller.js");

const userRouter = express.Router();

userRouter.get("/users", allUsers);
userRouter.get("/users/search/:query", getUserByQuery);
userRouter.post("/users", addUser);
userRouter.put("/users/update/:sic", updateUser);
userRouter.delete("/users/delete/:sic", deleteUser);
userRouter.post("/users/login", login);

module.exports = userRouter;