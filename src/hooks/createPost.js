// import { useState, useCallback, useMemo } from "react";

// export function createPost(userId, postTitle, postBody) {
//   let [createdPost, setCreatedPost] = useState(null);
//   let [isCreatedPostLoading, setIsCreatedPostLoading] = useState(false);

//   const handleSubmit = useCallback(
//     (postTitle, postBody) => {
//       setLoading(true);
//       fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         body: JSON.stringify({
//           title: postTitle,
//           body: postBody,
//           userId: 1,
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       })
//         .then((response) => response.json())
//         .then((json) => {
//           console.log(json);
//           setCreatedPost(json);
//           setLoading(false);
//         });
//     },
//     [setCreatedPost]
//   );









//   const value = useMemo(
//     () => ({
//       createdPost,
//       creatingPostLoading,
//       handleSubmit,
//     }),
//     [createdPost, creatingPostLoading, handleSubmit]
//   );

//   return value;
// }






//   // const handleSubmit = useCallback(
//   //   (postTitle, postBody) => {
//   //     setLoading(true);
//   //     fetch("https://jsonplaceholder.typicode.com/posts", {
//   //       method: "POST",
//   //       body: JSON.stringify({
//   //         title: postTitle,
//   //         body: postBody,
//   //         userId: 1,
//   //       }),
//   //       headers: {
//   //         "Content-type": "application/json; charset=UTF-8",
//   //       },
//   //     })
//   //       .then((response) => response.json())
//   //       .then((json) => {
//   //         console.log(json);
//   //         setCreatedPost(json);
//   //         setLoading(false);
//   //       });
//   //   },
//   //   [setCreatedPost]
//   // );