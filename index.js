const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("欢迎使用云开发");
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log("server is on listening ", port);
});
