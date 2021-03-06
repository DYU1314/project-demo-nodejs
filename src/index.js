const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const db = require("./resource/mvc/models/config/db");
const route = require("./resource/route");

// Connect to DB
db.connect();

// Constants
const port = 3000;

// HTTP logger
const morgan = require("morgan");
app.use(morgan("combined"));

// view engine
app.engine(
  "hbs",
  handlebars({
    layoutsDir: path.join(__dirname, "resource", "mvc", "views", "layouts"),
    defaultLayouts: "main",
    partialsDir: path.join(__dirname, "resource", "mvc", "views", "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "mvc", "views"));

// App
app.use(express.static(path.join(__dirname, "public")));
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
