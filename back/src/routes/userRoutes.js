const { Router } = require("express");
const getUserHandler = require("../handlers/userHandlers/getUserHandler");
const getUserIdHandler = require("../handlers/userHandlers/getIdUserHandler");
const postUserHandler = require("../handlers/userHandlers/postUserHandler");
const deactivateUserHandler = require("../handlers/userHandlers/deactivateUserHandler");
const syncUsersHandler = require("../handlers/userHandlers/syncUsersHandler");


const userRouter = Router();

userRouter.get("/", getUserHandler);
userRouter.get("/:id", getUserIdHandler);
userRouter.post("/", postUserHandler);
userRouter.delete("/:id", deactivateUserHandler);
userRouter.post('/sync', syncUsersHandler);


module.exports = userRouter;
