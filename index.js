const express = require("express")
const connection = require("./db");
const auth = require("./router/auth");

const app = express();

connection();

app.use(express.json());

app.use("/api/base/auth", auth);

app.listen(8000, () => {
  console.log("all ok");
});
