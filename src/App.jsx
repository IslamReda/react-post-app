import { Router, Link } from "@reach/router";
import { useState } from "react";
import LoginContext from "./loginContext";

// import { UsePosts } from "./hooks/blog";
import { createPost } from "./hooks/createPost";

import { Home } from "./pages/Home";
import { PostView } from "./pages/PostView";
import { Login } from "./pages/Login";
import { Dashboard } from "./layouts/Dashboard";

function App() {
  // let { createdPost, creatingPostLoading, handleSubmit } = createPost(null);
  const [userName, setUserName] = useState(null);
  const auth = useContext(LoginContext);
 
  const handleLogin = () => {
    setName(auth.userName);
  };

  return (
    <>
      <Router>
        <Login path="/login" />
        <Dashboard path="/">
          <Home userId={userId} path="/" />
          <PostView path="post/:postId" />
        </Dashboard>
      </Router>
    </>
  );

  // return <PostForm handleSubmit={handleSubmit} />;

  // if (selectedPost) {
  //   handleShowPostComments();
  //   return (
  //     <div>
  //       <Header title="Hello To Post" />
  //       <Post post={selectedPost} />
  //       <CommentsList comments={postComments} />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <Header title="Blog" />
  //       <PostInput handleGetPosts={handleGetPosts} />
  //       {loading ? (
  //         <div class="text-center">
  //           <h4>Enter User ID to load his posts</h4>
  //         </div>
  //       ) : (
  //         <PostList handleView={handleView} posts={posts} />
  //       )}
  //     </div>
  //   );
  // }
}

export default App;
