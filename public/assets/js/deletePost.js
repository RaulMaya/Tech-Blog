const deletePost = async (event) => {
    event.preventDefault();

    const postToDelete = document.querySelector("#deletePost").value;

    console.log(postToDelete);
    try {
      const response = await fetch(`/api/posts/${postToDelete}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      console.log(response);

      if (response.ok) {
        console.log(`Post Deleted`);
        // Reload the page to display the new post
        location.reload(true);
      } else {
        console.log(`Failed to delete post`);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

const deleteBtns = document.getElementsByClassName("deletePost");

for (let i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener("click", deletePost);
}
