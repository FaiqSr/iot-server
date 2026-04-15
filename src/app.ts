import "dotenv/config";
import express from "express";
import router from "./routes/routes";
import { errorMiddleware } from "./middleware/ErrorMiddleware";

const app = express();

app.use(express.json());
app.use(router);

// error handler
app.use(errorMiddleware);

export default app;
