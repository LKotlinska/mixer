export default function Person({ firstname, lastname, isPresent = true }) {
    return (
    <>
        <article>
            { isPresent && <p>{firstname + ' ' + lastname + "✅"}</p>}
        </article>
    </>
    )
}