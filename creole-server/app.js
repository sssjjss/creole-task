const express = require("express");
const bodyParser = require("body-parser");
require("./src/models/connection/connection");
const cors = require("cors");
const app = express();
const port = 8000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/users", require("./src/routes/users.route"));
app.get("/", (req, res) => {
  res.send("Welcome to creole server!");
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
