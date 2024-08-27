const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  var options = {
    root: __dirname,
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };
  res.sendFile("./index.html", options);
});

app.use((err, req, res, next) => {
  res.status(500).send("Error occured");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
