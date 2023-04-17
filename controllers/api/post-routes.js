const router = require("express").Router();
const { User, Post } = require("../../models");

// Create new post
router.post("/", async (req, res) => {
  try {
    const userId = req.session.userId;
    const { title, text } = req.body;
    if (!req.body || !userId) {
      return res.status(400).json({ error: "Missing values" });
    }
    const newPost = await Post.create({
      title,
      text,
      userId,
    });
    console.log(newPost);
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
