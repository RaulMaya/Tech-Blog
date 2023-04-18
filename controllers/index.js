const router = require("express").Router();

const homeRoutes = require("./home-routes");
const dashboardRoutes = require("./dashboard-routes");
const postRoutes = require("./post-routes");
const apiRoutes = require("./api");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/posts", postRoutes);
router.use("/api", apiRoutes);

router.get("*", function (req, res) {
  res.render("404", { title: "Page Not Found" });
});

module.exports = router;
