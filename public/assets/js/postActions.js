const newPost = async (event) => {
  event.preventDefault();

  const postTitle = document.querySelector("#postTitle").value;
  const postText = document.querySelector("#postText").value;

  try {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        postTitle,
        postText,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log(`Post created`);
      // Reload the page to display the new post
      location.reload();
    } else {
      console.log(`Failed to create post`);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

document.getElementById("writePostSubmit").addEventListener("click", newPost);
