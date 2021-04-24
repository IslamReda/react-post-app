import { useCallback, useState } from "react";
import { Header } from "./components/Header";
import { PostInput } from "./components/PostInput";
import { PostList } from "./components/PostList";
import { Post } from "./components/Post";
import { CommentsList } from "./components/CommentsList";

function App() {
  let [posts, setPosts] = useState([]);
  let [loading, setLoading] = useState(true);

  let [selectedPost, setSelectedPost] = useState(null);
  let [postComments, setPostComments] = useState([]);
  const handleGetPosts = useCallback(
    (userId) => {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response) => response.json())
        .then((postJson) => {
          setPosts(postJson);
          setLoading(false);
        });
    },
    [setPosts, setLoading]
  );

  const handleShowPostComments = useCallback(
    (postId) =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => response.json())
        .then((commentsJson) => setPostComments(commentsJson)),
    [setPostComments]
  );

  const handleView = (postObj) => {
    setSelectedPost(postObj);
  };

  if (selectedPost) {
    handleShowPostComments();
    return (
      <div>
        <Header title="Hello To Post" />
        <Post post={selectedPost} />
        <CommentsList comments={postComments} />
      </div>
    );
  } else {
    return (
      <div>
        <Header title="Hello To Blogs" />
        <PostInput handleGetPosts={handleGetPosts} />
        {loading ? (
          <h1>Enter User ID to load his posts</h1>
        ) : (
          <PostList handleView={handleView} posts={posts} />
        )}
      </div>
    );
  }
}

export default App;
