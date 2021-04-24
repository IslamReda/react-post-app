import { CommentItem } from "./CommentItem";

export function CommentsList({ comments }) {
  return (
    <ul>
      {comments.map((comment) => (
        <CommentItem comment={comment} key={comment.id} />
      ))}
    </ul>
  );
}
