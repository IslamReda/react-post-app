export function CommentItem({ comment }) {
  return (
    <li>
      <h5>{comment.name}</h5>
      <h6>Commenter: {comment.email.split("@")[0]}</h6>
      <p>{comment.body}</p>
    </li>
  );
}
