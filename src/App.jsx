import { useRef } from 'react'
import './App.css'
import { Person } from './Person'
import { StudentList } from './StudentList'
import { NotPresentList } from './NotPresentList'
import { MixedList } from './MixedList'
import { InputForm } from './InputForm'
import useStudents from './hooks/useStudents'

function App() {

  const { togglePresent,setStudents, students, absent, present, groups, shuffle, loading, error } = useStudents();

  const sectionRef = useRef(null);
  const btnRef = useRef(null);
  const isDark = useRef(false);

  const toggleDark = () => {
    isDark.current = !isDark.current;
    sectionRef.current.classList.toggle('dark');
    btnRef.current.textContent = isDark.current ? '☀ Light' : '☾ Dark';
  };

  function addPerson(firstname, lastname) {

    const newPerson = {
      id: students.length + 1,
      firstname: firstname,
      lastname: lastname
    }
    setStudents(prev => [...prev, newPerson])
  }
  return (
      <section ref={sectionRef} className="layout">

        <div className="toolbar">
          <button onClick={() => shuffle(present)}>Mix students</button>
          <button ref={btnRef} className="dark-toggle" onClick={toggleDark}>☾ Dark</button>
        </div>

        <InputForm onAdd={addPerson}>
        </InputForm>

        <StudentList>
          {loading && <p>Loading...</p>}
          {!loading && error && <p>{error}</p>}
          {!loading && !error &&
          present?.map(student => (
            <Person
              key={student.id}
              {...student}
              onClickHandler={() => togglePresent(student.id)}
            />
          ))}
        </StudentList>

        <NotPresentList>

          {absent?.map(student => (
            <Person
              key={student.id}
              {...student}
              onClickHandler={() => togglePresent(student.id)}
              />
          ))}

        </NotPresentList>
        
        <MixedList groups={groups} />
      </section>
  )
}

export default App