import { Navigate, useLocation } from "react-router-dom"

export default function Contact() {

    const location = useLocation()

    return <Navigate to="/blog" replace={true} state={{
        location: location.pathname
    }} />

    return (
        <h1>Contact Page</h1>
    )
}