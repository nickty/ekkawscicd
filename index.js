const express = require("express");
const app = express();
const port = 9000;

// change for check
app.get("/", (req, res) => {
  res.send("Hello World! I am working from AWS");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
