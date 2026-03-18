export function Person({firstname, lastname, onClickHandler}) {
    return (
        <article className="person" onClick={onClickHandler}>
            <h2>{ firstname }<span> { lastname }</span></h2>
        </article>
    )
}