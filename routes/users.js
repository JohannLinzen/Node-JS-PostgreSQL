const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

const userRouter = express.Router();

// to run this function you need to send a GET request with the path /users
userRouter.get("/", getUsers);

// to run this function you need to send a GET request with the path /users/someID
userRouter.get("/:id", getUser);

// to run this function you need to send a POST request with the path /users
userRouter.post("/", createUser);

userRouter.put("/:id", updateUser);

userRouter.delete("/:id", deleteUser);

// another way to declare endpoints
// userRouter.route("/").get(getUsers).post(createUser);
// userRouter.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = {
  userRouter,
};
