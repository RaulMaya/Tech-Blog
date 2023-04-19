const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

// Create new comment
router.post("/", async (req, res) => {
  try {
    const userId = req.session.userId
    const { comment_description, post_id } = req.body;
    if (!req.body || !userId) {
      return res.status(400).json({ error: "Missing values" });
    }
    const newComment = await Comment.create({
        comment_description,
        post_id,
        user_id: userId,
    });

    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;