export function NotPresentList({ children}) {

    const styling = {
        gridColumn: 1,
        gridRow: 2,
        overflow: "auto",
        backgroundColor: "darksalmon",
    }

    return (
        <div className="notPresentList" style={styling}>
            <h1>Not present</h1>
            <div>
                { children }
            </div>
        </div>
    )
}