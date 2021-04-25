import { usePosts } from "./hooks/usePosts";
import { Blog } from "./hooks/Blog";

import { Header } from "./components/Header";
import { PostInput } from "./components/PostInput";
import { PostList } from "./components/PostList";
import { Post } from "./components/Post";
import { CommentsList } from "./components/CommentsList";
import { PostForm } from "./components/PostForm";

function App() {
  let {
    posts,
    loading,
    selectedPost,
    postComments,
    handleGetPosts,
    handleShowPostComments,
    handleView,
  } = usePosts([]);

  let { createdPost, creatingPostLoading, handleSubmit } = Blog(null);

  return <PostForm handleSubmit={handleSubmit} />;

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
