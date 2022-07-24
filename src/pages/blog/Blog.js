import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { getAllPosts } from "../../services/posts"

export default function Blog() {

    const [posts, setPosts] = useState(false)
    const location = useLocation()

    useEffect(() => {
        getAllPosts()
            .then(data => setPosts(data))
    }, [])

    return (
        <>
            <h1 className="text-xl font-medium">Son Konular</h1>
            {!posts && 'Yükleniyor...'}
            {posts && posts.map(post => (
                <Link key={post.id} className="block p-4 border-b" to={`/blog/konu/${post.id}`}>
                    {post.title}
                </Link>
            ))}
        </>
    )
}