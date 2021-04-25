import { useState, useCallback } from "react";

export function Blog(initialState) {
  let [createdPost, setCreatedPost] = useState(initialState);
  let [creatingPostLoading, setLoading] = useState(true);

  const handleSubmit = useCallback(
    (postTitle, postBody) => {
      setLoading(true);
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: postTitle,
          body: postBody,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setCreatedPost(json);
          setLoading(false);
        });
    },
    [setCreatedPost]
  );

  return {
    createdPost,
    creatingPostLoading,
    handleSubmit,
  };
}
