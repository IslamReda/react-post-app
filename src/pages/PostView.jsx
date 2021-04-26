import { Header } from "../components/Header";
import { Post } from "../components/Post";
import { CommentsList } from "../components/CommentsList";
import { usePost, usePostComments } from "../hooks/blog";
import { Link, useParams } from "@reach/router";

export function PostView() {
  const params = useParams();
  const { post, isPostLoading } = usePost(params.postId);
  const { postComments, areCommentsLoading } = usePostComments(params.postId);
  return (
    <>
      <div>
        <Header title="Post Section" />
        <Link to="/">Home</Link>
        <Post post={post} isPostLoading={isPostLoading} />
        <CommentsList
          comments={postComments}
          areCommentsLoading={areCommentsLoading}
        />
      </div>
    </>
  );
}
