const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 3000;

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/public", express.static(path.join(__dirname, "public")));
app.listen(port);

console.log("Server started at http://localhost:" + port);
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});
