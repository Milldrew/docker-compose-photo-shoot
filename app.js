const express = require("express");

const app = express();
app.use(express.static("docs"));

app.get("/", (rew, res) => {
  res.send("hello");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(PORT);
});
