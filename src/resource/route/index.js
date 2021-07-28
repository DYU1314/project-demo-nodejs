const siteRoute = require("./siteRoute");
const newsRoute = require("./NewsRoute");

function route(app) {
  app.use("/news", newsRoute);
  app.use("/", siteRoute);
}

module.exports = route;
