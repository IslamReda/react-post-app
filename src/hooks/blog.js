import { useState, useEffect, useMemo } from "react";
import { getUser, getPost, getPostComments, getUserPosts } from "../api";

export function usePost(postId) {
  let [post, setPost] = useState(null);
  let [isPostLoading, setIsPostLoading] = useState(false);

  useEffect(() => {
    setIsPostLoading(true);
    getPost(postId).then((postData) => {
      setPost(postData);
      setIsPostLoading(false);
    });
  }, [postId]);

  const value = useMemo(
    () => ({
      post,
      isPostLoading,
    }),
    [post, isPostLoading]
  );

  return value;
}

export function usePostComments(postId) {
  let [postComments, setPostComments] = useState(null);
  let [areCommentsLoading, setAreCommentsLoading] = useState(false);

  useEffect(() => {
    setAreCommentsLoading(true);
    getPostComments(postId).then((postCommentsData) => {
      setPostComments(postCommentsData);
      setAreCommentsLoading(false);
    });
  }, [postId]);

  const value = useMemo(
    () => ({
      postComments,
      areCommentsLoading,
    }),
    [postComments, areCommentsLoading]
  );

  return value;
}

export function useUser(userId) {
  let [user, setUser] = useState(null);
  let [isUserLoading, setIsUserLoading] = useState(false);

  useEffect(() => {
    setIsUserLoading(true);
    getUser(userId).then((userData) => {
      setUser(userData);
      setIsUserLoading(false);
    });
  }, [userId]);

  const value = useMemo(
    () => ({
      user,
      isUserLoading,
    }),
    [user, isUserLoading]
  );

  return value;
}

export function useUserPosts(userId) {
  let [userPosts, setUserPosts] = useState(null);
  let [loading, setLoading] = useState(false);

  console.log("INSIDE useUserPosts!!!!!");

  useEffect(() => {
    setLoading(true);
    getUserPosts(userId).then((userPostsData) => {
      console.log("Data:",userPostsData);
      setUserPosts(userPostsData);
      setLoading(false);
    });
  }, [userId]);

  const value = useMemo(
    () => ({
      userPosts,
      loading,
    }),
    [userPosts, loading]
  );

  return value;
}

//   const getPost = async function (postId) {
//     try {
//       const res = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${postId}`
//       );
//       const data = await res.json();
//       console.log("post");
//       setPost(data);
//     } catch (error) {
//       console.log(err);
//     }
//   };

//   const handleShowPostComments = useCallback(
//     (postId) =>
//       fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
//         .then((response) => response.json())
//         .then((commentsJson) => setPostComments(commentsJson)),
//     [setPostComments]
//   );

//   const getPostComments = async function (postId) {
//     try {
//       const res = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
//       );
//       const data = await res.json();
//       setComment;
//     } catch (error) {
//       console.log(err);
//     }
//   };

//   const handleView = (postObj) => {
//     setSelectedPost(postObj);
//   };

// const handleGetPosts = useCallback(
//   (userId) => {
//     setLoading(true);
//     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//       .then((response) => response.json())
//       .then((postJson) => {
//         setPosts(postJson);
//         setLoading(false);
//       });
//   },
//   [setPosts, setLoading]
// );
