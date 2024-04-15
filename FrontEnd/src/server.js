const cors = require("cors");
const express = require("express");
const app = express();
const initRoutes = require("./routes");


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
initRoutes(app);

let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});