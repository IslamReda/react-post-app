export async function getUser(userId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data = await res.json();
    console.log("user", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserPosts(userId) {
  try {
    console.log("INSIDE THE ASYNC FUNCTION!!!");
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const data = await res.json();
    console.log("userPosts", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPost(postId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = await res.json();
    console.log("post", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostComments(postId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    const data = await res.json();
    console.log("postComments", data);
  } catch (error) {
    console.log(error);
  }
}

export async function createPost(userId, postTitle, postBody) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
    console.log("createdPost", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
