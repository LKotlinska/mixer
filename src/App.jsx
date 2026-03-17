import './App.css'
import { Person } from './Person'
import { StudentList } from './StudentList'
import { NotPresentList } from './NotPresentList'
import { MixedList } from './MixedList'
import { useState } from 'react'

function App() {
  const [students, setStudent] = useState([
    { id: 1, firstname: "Rune", lastname: "Panda", isPresent: true, groupId: null },
    { id: 2, firstname: "Laura", lastname: "Kotlinska", isPresent: false, groupId: null },
    { id: 3, firstname: "Björn", lastname: "Björnsson", isPresent: false, groupId: null },
    { id: 4, firstname: "Amanda", lastname: "Björk", isPresent: true, groupId: null },
    { id: 5, firstname: "Fanny", lastname: "Andersson", isPresent: false, groupId: null },
    { id: 6, firstname: "Jenny", lastname: "Berg", isPresent: false, groupId: null }
  ])

function togglePresent(id) {
  const student = students.map((s) => {

    if (s.id === id) {
      return {...s, isPresent: !s.isPresent}
    }
    return {...s}
  })
  setStudent(student);
}


const present = students.filter(({...student}) => student.isPresent === true);
const absent = students.filter(({...student}) => student.isPresent === false);

  return (
      <section className="layout">
        <StudentList>

          {present.map(student => (
            <Person
              key={student.id}
              {...student}
              onClickHandler={() => togglePresent(student.id)}
            />
          ))}

        </StudentList>

        <NotPresentList>

          {absent.map(student => (
            <Person
              key={student.id}
              {...student}
              onClickHandler={() => togglePresent(student.id)}
              />
          ))}

        </NotPresentList>
        
        <MixedList></MixedList>
      </section>
  )
}

export default App