const router = require("express").Router();

// const homeRoutes = require(".");
// // const apiRoutes = require("./api");

// router.use("/", homeRoutes);
// // router.use("/api", apiRoutes);

router.get("*", function (req, res) {
  res.render("404", { title: "Page Not Found" });
});

module.exports = router;
