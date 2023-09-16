import express from "express";
import { Sequelize } from "sequelize";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const sequelize = new Sequelize("sample_server", "default", "123456789", {
  host: "localhost",
  dialect: "mssql",
});

app.listen(port, async () => {
  sequelize
    .authenticate()
    .then((res) => {
      return console.log(`Express is listening at http://localhost:${port}`);
    })
    .catch((err) => {
      console.log(err);
      return console.log(`Server Error`);
    });
});
