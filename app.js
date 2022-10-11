const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 3000;

const corsOptions_8080 = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use("/public", express.static(path.join(__dirname, "public")));
app.listen(port);

console.log("Server started at http://localhost:" + port);
app.get("/", cors(corsOptions_8080), function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});
