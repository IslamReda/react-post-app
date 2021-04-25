// import { useState, useMemo } from "react";
// import { getUserPosts } from "../api";

// export function userPosts(userId) {
//   let [userPosts, setUserPosts] = useState(null);
//   let [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     getUserPosts(userId).then((userPostsData) => {
//       setUserPosts(userPostsData);
//       setLoading(false);
//     });
//   }, [userId]);

//   const value = useMemo(
//     () => ({
//       userPosts,
//       loading,
//     }),
//     [userPosts, loading]
//   );

//   return value;
// }

// export function userPosts(userId) {
//   let [userPosts, setUserPosts] = useState(null);
//   let [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     getUserPosts(userId).then((userPostsData) => {
//       setUserPosts(userPostsData);
//       setLoading(false);
//     });
//   }, [userId]);

//   const value = useMemo(
//     () => ({
//       userPosts,
//       loading,
//     }),
//     [userPosts, loading]
//   );

//   return value;
// }


