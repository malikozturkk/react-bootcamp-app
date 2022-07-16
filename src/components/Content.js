import { useEffect, useState } from "react";

export default function Content({ children }) {

    const [post, setPost] = useState(false)
    const [postId, setPostId] = useState(1)

    useEffect(() => {
        console.log('her renderda çalışır')
      })
    
      useEffect(() => {
        console.log('component mount olduğunda çalışır')
        //let interval = setInterval(() => console.log('interval çalıştı'), 1000);
        return () => {
          console.log('component unmount olduğunda çalışır')
          //clearInterval(interval)
        }
      }, []);

      useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(json => setPost(json))
        }, [postId]);

    return ( 
        <section>
            <h3>Post Id = {postId}</h3>
            <button onClick={() => setPostId(c => c + 1)}>Arttır</button>
            <hr />
            <pre>{JSON.stringify(post, null, 2)}</pre>
        </section>
    );
}