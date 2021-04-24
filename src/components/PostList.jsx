import { PostItem } from "./PostItem"

export function PostList({ posts , handleView}) {
    return (
        <ul>
            { posts.map(post => {
                <PostItem post={post}  handleView={handleView} key={post.id} />
            }) }
        </ul>
        );
}