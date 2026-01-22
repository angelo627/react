import { useState, useEffect } from "react";

function Posts() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res =>res.json())
        .then(data =>{
            setPosts(data.splice(0,5))
            setLoading(false)
        });
    },[]);

    if (loading) {
    return <p>Loading posts....</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts