const rsmq = require("rsmq-worker");
const sendService = require("./sendEmailService");

const worker = new rsmq(process.env.QUEUE_NAME, {
  host: process.env.HOST_QUEUE,
  port: process.env.PORT_QUEUE,
  ns: "rsmq",
});

worker.on("message", function (msg, next, id) {
  let data = JSON.parse(msg);
  try {
    sendService.sendEmail(data);
  } catch (error) {}
  next();
});

worker.on("error", function (err, msg) {
  console.log("ERROR", err, msg.id);
});
worker.on("exceeded", function (msg) {
  console.log("EXCEEDED", msg.id);
});
worker.on("timeout", function (msg) {
  console.log("TIMEOUT", msg.id, msg.rc);
});

module.exports = {
  startWorker() {
    worker.start();
  },
};
