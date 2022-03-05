import { Response, Request } from "express";

import { EmailService } from "../services/EmailService";

class EmailController {
  // emailService = new EmailService();
  async sendList(request: Request, response: Response): Promise<Response> {
    const { emails } = request.body;
    const emailService = new EmailService();
    emailService.sendEmails(emails);
    return response.json(emails);
  }
}

export { EmailController };
