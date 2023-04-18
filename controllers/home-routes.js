const router = require("express").Router();
const withAuth = require("../utils/withAuth");
const { User, Post } = require("../models");

router.get("/", async (req, res) => {
  try {
    const dbPosts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["firstname", "lastname", "username"],
        },
      ],
    });

    let posts = dbPosts.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render("index", {
      posts,
      loggedIn: req.session.loggedIn,
      userid: req.session.userId,
      title: "TTS: The Tech Shore",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/write", withAuth, async (req, res) => {
  try {
    res.render("write", {
      loggedIn: req.session.loggedIn,
      title: "TTS: The Tech Shore",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/read", async (req, res) => {
  try {
    const dbPosts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["firstname", "lastname", "username"],
        },
      ],
    });

    let posts = dbPosts.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render("read", {
      posts,
      loggedIn: req.session.loggedIn,
      userid: req.session.userId,
      title: "TTS: The Tech Shore",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
