import Post from "./Post";

const Posts = (props) => {

    return (
        <ul>
            {props.posts.map((post) => {
                return (
                    <Post post={post} showBody={false} showLink={true} key={post.id} />
                )
            })}
        </ul>
    )
}
export default Posts;
