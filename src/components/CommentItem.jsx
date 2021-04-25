export function CommentItem({ comment }) {
  return (
    <li>
      <h6>Commenter: {comment.email.split("@")[0]}</h6>
      <h5>{comment.name}</h5>
      <p>{comment.body}</p>
    </li>
  );
}
