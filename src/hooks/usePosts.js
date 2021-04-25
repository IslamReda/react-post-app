import { useState, useCallback } from "react";

export function usePosts(initialState) {
  let [posts, setPosts] = useState(initialState);
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

  return {
    posts,
    loading,
    selectedPost,
    postComments,
    handleGetPosts,
    handleShowPostComments,
    handleView,
  };
}
