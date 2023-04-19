const newComment = async (event) => {
    event.preventDefault();
  
    const comment_description = document.querySelector("#commentsInput").value;
    const post_id = document.getElementById("writeComment").value
    console.log(comment_description, post_id);
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ comment_description, post_id }),
        headers: { "Content-Type": "application/json" },
      });
  
      console.log(response);
  
      if (response.ok) {
        console.log(`Comment created`);
        // Reload the page to display the new post
        location.reload();
      } else {
        console.log(`Failed to create comment`);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };
  
  document.getElementById("writeComment").addEventListener("click", newComment);