const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/withAuth");

router.get("/:id", withAuth, async (req, res) => {
  try {
    console.log(req.params.id);
    const dbPosts = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["firstname", "lastname", "username"],
        },
        {
          model: Comment,
          attributes: ["comment_description"],
          include: [
            {
              model: User,
              attributes: ["firstname", "lastname", "username"],
            },
          ],
        },
      ],
    });
    let post = dbPosts.get({ plain: true });
    console.log(post)
    let postComments = post.comments
    res.render("post", {
      post,
      postComments,
      loggedIn: req.session.loggedIn,
      userid: req.session.userId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
