const deleteComment = async (i) => {
    const deleteCommentBtns = document.getElementsByClassName("fa-trash");
    const commentId = deleteCommentBtns[i].id
    try {
      const response = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      console.log(response);

      if (response.ok) {
        console.log(`Comment Deleted`);
        // Reload the page to display the new post
        location.reload(true);
      } else {
        console.log(`Failed to delete comment`);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

const deleteCommentBtns = document.getElementsByClassName("fa-trash");

for (let i = 0; i < deleteCommentBtns.length; i++) {
    deleteCommentBtns[i].addEventListener("click", deleteComment.bind(this, i));
}
