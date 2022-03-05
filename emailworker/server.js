"use strict";

const express = require("express");
const app = express();
const emailWorkerService = require("./src/services/emailWorkerService");
// const os = require("os");
const PORT = process.env.PORT || 8082;
emailWorkerService.startWorker();
app.listen(PORT, () => {
  console.log(`Server Started on Port  ${PORT}`);
});

