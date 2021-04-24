import { PostItem } from "./PostItem"

export function PostList({  posts , handleClick}) {
    return (
        <ul>
            { posts.map(post => {
                <PostItem post={post}  handleClick={handleClick} />
            }) }
        </ul>
        );
}