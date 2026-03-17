export function Person({firstname, lastname, isPresent = true, onClickHandler}) {
    return (
        <article className="person" onClick={onClickHandler}>
            <p>{ isPresent ? 'present' : 'not present' }</p>
            <h2>{ firstname }<span> { lastname }</span></h2>
        </article>
    )
}