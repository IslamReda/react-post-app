import { CommentItem } from "./CommentItem";

export function CommentsList({ comments, areCommentsLoading }) {
  return areCommentsLoading ? (
    <h3>Loading Comments...</h3>
  ) : (
    <ul>
      {comments.map((comment) => (
        <CommentItem comment={comment} key={comment.id} />
      ))}
    </ul>
  );
}
