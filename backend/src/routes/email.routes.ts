import { Router } from "express";

import { EmailController } from "../controllers/EmailController";
import { EmailService } from "../services/EmailService";

const emailRoutes = Router();
const emailController = new EmailController();

emailRoutes.post("/sendList", emailController.sendList);

export { emailRoutes };
