const updatePost = async (i) => {
    const fades = document.getElementsByClassName("fade")
    const postTitles = document.getElementsByClassName("postTitle");
    const postTexts = document.getElementsByClassName("postText");
    
    const postId = fades[i].id
    const postTitle = postTitles[i].value
    const postText = postTexts[i].value

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
        location.reload(true);
      } else {
        console.log(`Failed to update post`);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

const updateBtns = document.getElementsByClassName("confirmUpdate");

for (let i = 0; i < updateBtns.length; i++) {
  updateBtns[i].addEventListener("click", updatePost.bind(this, i));
}
