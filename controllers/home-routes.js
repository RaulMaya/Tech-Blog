const router = require("express").Router();
const withAuth = require("../utils/withAuth");

router.get("/", async (req, res) => {
  try {
    res.render("index", { loggedIn: req.session.loggedIn, title:"TTS: The Tech Shore" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/write", withAuth, async (req, res) => {
  try {
    res.render("write", { loggedIn: req.session.loggedIn, title:"TTS: The Tech Shore" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
