const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();

// Constants
const port = 3000;

// HTTP logger
const morgan = require("morgan");
app.use(morgan('combined'));

// view engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/mvc/views'));

// App
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
