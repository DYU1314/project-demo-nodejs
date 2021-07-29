const Course = require("../models/CoursesModel");
const { multipleMongoToObject } = require("../models/utils/mongoose");
class HomeController {
  home(req, res) {
    // Course.find({}, (err, courses, next) => {
    //   if (!err) {
    //     res.json(courses);
    //     return;
    //   }
    //   next(err);
    // });

    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: multipleMongoToObject(courses),
        });
      })
      .catch((err) => next(err));

    // res.json({
    //   name: "test",
    // });

    // res.render("home");
  }

  contact(req, res) {
    res.render("contact");
  }
}

module.exports = new HomeController();
