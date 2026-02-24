import { Router } from "express";
import {
  deleteUser,
  filterUsers,
  getUserById,
  getUsers,
  postUser,
  updateUser,
} from "../controllers/user.controller.js";
import checkerValidation from "../middleware/validation.middleware.js";

let router = new Router();

router.get("/users", getUsers);

router.get("/users/:id", getUserById);

router.post("/users", checkerValidation, postUser);

router.put("/users/:id", checkerValidation, updateUser);

router.delete("/users/:id", deleteUser);

router.use(checkerValidation);

export default router;
