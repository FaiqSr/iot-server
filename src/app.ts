import "dotenv/config";
import express from "express";
import router from "./routes/routes";
import { errorMiddleware } from "./middleware/ErrorMiddleware";
import requestLogger from "./middleware/RequestLogger";
import { startNotificationCron } from "./cron/notificationCron";

const app = express();

app.use(express.json());
app.use(requestLogger);
app.use(router);

// error handler
app.use(errorMiddleware);

// start notification cron (controlled by ENABLE_NOTIFICATION_CRON env var)
startNotificationCron();

export default app;
