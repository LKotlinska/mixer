export function Person({firstname, lastname, isPresent = true, onClickHandler}) {
    return (
        <article className="person" onClick={onClickHandler}>
            <h2>{ firstname }<span> { lastname }</span></h2>
        </article>
    )
}