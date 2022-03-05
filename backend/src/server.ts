import express from "express";

import { router } from "./routes";
import { QueueService } from "./services/QueueService";

const queueService = new QueueService();
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(router);
queueService.createQueue();
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
