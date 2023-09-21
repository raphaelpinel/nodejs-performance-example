const express = require("express");
const cluster = require("cluster");

const app = express();
const port = 3000;

function delay(durationInMs) {
  const startTime = new Date();
  while (new Date() - startTime < durationInMs) {
    // do nothing
    // event loop is blocked...
  }
}

app.get("/", (req, res) => {
  res.send(`Node.js performance example ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send(`timer finished ${process.pid}`);
});

if (cluster.isMaster) {
  console.log("Master started");
  cluster.fork();
  cluster.fork();
} else {
  console.log("worker started");
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
