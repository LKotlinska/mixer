import styles from "./StudentList.module.css";

export function StudentList({children}) {
    return (
        <div className="studentList">
            <h1 className={styles.StudentList}>Studentlist</h1>
            <div className="bg-redmt-4">
                { children }
            </div>
        </div>
    )
}