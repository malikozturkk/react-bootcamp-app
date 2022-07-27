import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { getAllPosts } from "../../services/posts"
import { getPath } from "../../utils"
import { Helmet } from "react-helmet"

export default function Blog() {

    const [posts, setPosts] = useState(false)
    const location = useLocation()

    useEffect(() => {
        getAllPosts()
            .then(data => setPosts(data))
    }, [])

    return (
        <>
            <Helmet>
                <title>Blog Sayfası</title>
            </Helmet>
            <h1 className="text-xl font-medium">Son Konular</h1>
            {!posts && 'Yükleniyor...'}
            {posts && posts.map(post => (
                <Link key={post.id} className="block p-4 border-b" to={getPath('blog.detail', {
                    postId: post.id
                })}>
                    {post.title}
                </Link>
            ))}
        </>
    )
}