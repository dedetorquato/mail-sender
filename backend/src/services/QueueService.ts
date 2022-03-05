import Rsmq from "rsmq";

class QueueService {
  private emailDriver = new Rsmq({
    host: process.env.HOST_QUEUE,
    port: Number(process.env.PORT_QUEUE),
    ns: "rsmq",
  });

  async createQueue() {
    try {
      const response = await this.emailDriver.createQueueAsync({
        qname: process.env.QUEUE_NAME,
      });

      if (response === 1) {
        console.log("Queue created", response);
      }
    } catch (err) {
      if (err.name === "queueExists") console.log(" DQueue Exists");
      else console.log("redis error");
    }
  }

  async pushMessage(data: string): Promise<void> {
    const response = await this.emailDriver.sendMessageAsync({
      qname: process.env.QUEUE_NAME,
      message: data,
    });

    if (response) {
      console.log("Message sent. ID:", response);
    }
  }
}

export { QueueService };
