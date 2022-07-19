import { Fragment } from "react"
function Highlight({ match, children, render }) {
    const types = {
        hashtag: /(#[\w]+)/,
        mention: /(@[\w]+)/
    }
    const regex = new RegExp(types?.[match] || `(${match}+)`, 'gi')
    return children.split(regex)
        .map((part, index) => regex.test(part) ? render(part) : part)
}

function Test() {

    const text = 'lorem ipsum #dollor @amet ipsum lorem'
    const showPart = (part) => console.log(part)
    return (
        <>
            <Highlight match='hashtag' render={part => <mark onClick={() => showPart(part)}>{part}</mark>}>
                {text}
            </Highlight> <br />

            <Highlight match='mention' render={part => <mark onClick={() => showPart(part)}>{part}</mark>}>
                {text}
            </Highlight> <br />

            <Highlight match='lorem' render={part => <mark onClick={() => showPart(part)}>{part}</mark>}>
                {text}
            </Highlight>
        </>
    )
}

export default Test