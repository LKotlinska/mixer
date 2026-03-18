import { useRef, useState } from "react"

export function InputForm( {onAdd} ) {
    
    const [error, setError] = useState("")
    const inputFirstName = useRef(null)
    const inputLastName = useRef(null)

    
    function handleSubmit(e) {
        //prevents reload
        e.preventDefault()

        const firstname = inputFirstName.current.value.trim()
        const lastname = inputLastName.current.value.trim()


        if (!firstname || !lastname) {
            setError("Please enter both a first and last name")
            return
        }
        onAdd(firstname, lastname)
        setError("")
        inputFirstName.current.value = ""
        inputLastName.current.value = ""

        inputFirstName.current.focus()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">Firstname: </label>
            <input ref={inputFirstName} type="text" name="firstname" id="firstname"/>
            <label htmlFor="lastname">Lastname: </label>
            <input ref={inputLastName} type="text" name="lastname" id="lastname"/>

            <button type="submit">Add student</button>
            
            { error && <p>{error}</p>}
        </form>
    )
}