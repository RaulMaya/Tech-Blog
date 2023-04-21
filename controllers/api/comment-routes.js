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

// Delete a comment
router.delete("/:id", async (req, res) => {
  try {
    const commentToDestroy = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!commentToDestroy) {
      res.status(404).json({ message: "No comments found with that id!" });
      return;
    }

    res.status(200).json(commentToDestroy);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;