export default function Button({ label, children, ...props }) {
    return(
        <button {...props}>{label || children}</button>
    )
}