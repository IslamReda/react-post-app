export function PostItem({ post , handleClick }) {
    return (
        <li>
            <h2>{post.title}</h2>
            <button onClick={() =>
            handleClick(post)}>
                view
            </button>
        </li>
        );
}