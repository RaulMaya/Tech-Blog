const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/withAuth");

router.get("/", withAuth, async (req, res) => {
  try {
    const dbUser = await User.findOne({ where: { email: req.session.email } });
    const user = dbUser.get({ plain: true });
    const dbPosts = await Post.findAll({
      where: { user_id: user.id }
    });
    
    let posts = dbPosts.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      user,
      posts,
      loggedIn: req.session.loggedIn,
      userid: req.session.userId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
