import { Link, useNavigate } from "@reach/router";

import { useUserPosts } from "../hooks/blog";

import { PostList } from "../components/PostList";
import { PostInput } from "../components/PostInput";
import { Header } from "../components/Header";

export function Home({ userId }) {
  console.log(userId);
  const {userPosts, loading} = useUserPosts(userId);
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Link to="/login">Back to Login</Link>
        {/* <PostInput handleGetPosts={handleGetPosts} /> */}
        {loading ? (
          <div class="text-center">
            <h4>Loading...</h4>
          </div>
        ) : (
          <PostList
            handleView={(post) => navigate(`/post/${post.id}`)}
            posts={userPosts}
          />
        )}
      </div>
    </>
  );
}
