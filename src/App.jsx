import { useCallback, useState } from "react";
import { Header } from "./components/Header"
import { PostInput } from "./components/PostInput"
import { PostList } from "./components/PostList"



function App() {
  let [posts, setPosts] = useState([])
  const handleGetPosts = useCallback( (userId)=> {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`) 
  .then((response) => response.json())
  .then((postJson) => setPosts(postJson)) 
  },[ setPosts])

  return (
    <div>
      <Header title="Hello To Blogs"/>
      <PostInput handleGetPosts={handleGetPosts}/>
      <PostList handleView={()=> {}} posts={posts}/>
    </div>
  );
}

export default App;
