import { Email } from "../entities/Email";
import { QueueService } from "./QueueService";

class EmailService {
  private queueService;
  constructor() {
    this.queueService = new QueueService();
  }

  async sendEmails(emails: Email[]): Promise<void> {
    emails.forEach((email) => {
      this.queueService.pushMessage(JSON.stringify(email));
    });
  }
}

export { EmailService };
