import { useParams } from "react-router-dom"
import { getPostDetail } from "../../services/posts"
import { useState, useEffect } from "react"

export default function Detail() {

    const [post, setPost] = useState(false)
    const { postId } = useParams()

    useEffect(() => {
        getPostDetail(postId)
            .then(res => setPost(res))
    }, [postId])

    if(!post) {
        return 'Yükleniyor...'
    }

    return (
        <>
            <h1 className="text-xl font-medium mb-2">{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}