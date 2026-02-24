import express from "express";
import router from "./routes/users.route.js";

import env from "dotenv";

import { errorHandler } from "./middleware/error.middleware.js";
import logger from "./middleware/logger.middleware.js";

env.config();

const app = express();

app.use(logger);

app.use(express.json());

app.use("/", errorHandler, router);

app.use(errorHandler);

export default app;
