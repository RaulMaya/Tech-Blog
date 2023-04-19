const router = require("express").Router();
const { User, Post } = require("../../models");

// Create new post
router.post("/", async (req, res) => {
  console.log(req.session.userId);
  try {
    const userId = req.session.userId;
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

// Update Post
router.put("/:id", async (req, res) => {
  // update product data
  try {
    const { postTitle, postText } = req.body;
    const updatePost = await Post.update(
      {
        post_title: postTitle,
        description: postText
      }, 
      {
      where: {
        id: req.params.id,
      },
    });

    if (!updatePost) {
      res.status(404).json({ message: "No post found with that id!" });
      return;
    }


    res.status(200).json(updatePost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a post
router.delete("/:id", async (req, res) => {
  try {
    const postToDestroy = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!postToDestroy) {
      res.status(404).json({ message: "No post found with that id!" });
      return;
    }

    res.status(200).json(postToDestroy);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
