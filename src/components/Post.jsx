export function Post({ post }) {
  return (
    <div id={`post-${post.id}`}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
