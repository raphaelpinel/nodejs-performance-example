const express = require("express");

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
  res.send("Node.js performance example");
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send("timer finished");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
