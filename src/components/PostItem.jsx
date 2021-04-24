export function PostItem({ post, handleView }) {
  return (
    <li>
      <h2>{post.title}</h2>
      <button onClick={() => handleView(post)}>view post!</button>
    </li>
  );
}
