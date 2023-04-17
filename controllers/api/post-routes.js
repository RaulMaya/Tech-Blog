const router = require("express").Router();
const { User, Post } = require("../../models");

// Create new post
router.post("/", async (req, res) => {
  console.log(req.session.userId)
  try {
    const userId = req.session.userId
    console.log("Burning Love", req.session.userId)
    const { postTitle, postText } = req.body;
    if (!req.body || !userId) {
      return res.status(400).json({ error: "Missing values" });
    }
    const newPost = await Post.create({
      post_title: postTitle,
      description: postText,
      user_id: userId,
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
