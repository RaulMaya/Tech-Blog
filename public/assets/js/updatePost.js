const updatePost = async () => {
    postId = document.querySelector(".fade").id
    const postTitle = document.querySelector("#postTitle").value;
    const postText = document.querySelector("#postText").value;

    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "PUT",
        body: JSON.stringify({ postTitle, postText }),
        headers: { "Content-Type": "application/json" },
      });
  
      console.log(response);
  
      if (response.ok) {
        console.log(`Post updated`);
        // Reload the page to display the new post
        location.reload();
      } else {
        console.log(`Failed to update post`);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

document.getElementById("confirmUpdate").addEventListener("click", updatePost);