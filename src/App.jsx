import './App.css'
import { Person } from './Person'
import { StudentList } from './StudentList'
import { NotPresentList } from './NotPresentList'
import { MixedList } from './MixedList'
import { useEffect, useState } from 'react'

function App() {

  const [students, setStudents] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const [mixedStudents, setMixedStudents] = useState([])

  const present = students?.filter(({...student}) => student.isPresent === true);
  const absent = students?.filter(({...student}) => student.isPresent === false);

  const fetchData = () => {
    fetch('./src/data/student.json')
      .then ((response) => response.json())
      .then ((json) => {
        setStudents(json.students)
      })
      .catch(error => {
        console.error("Failure")
        setError("Could not load students data.")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  // Fetch data on component load
  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [])

  const groups = mixedStudents.reduce((acc, student) => {
    const key = student.groupId
    if(!acc[key]) acc[key] = []
    acc[key].push(student)
    return acc
  }, {})

  function togglePresent(id) {
    const student = students.map((s) => {

      if (s.id === id) {
        return {...s, isPresent: !s.isPresent}
      }
      return {...s}
    })
    setStudents(student);
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
    const isOdd = array.length % 2 !== 0;
    const groups = []
    let i = 0
    let groupId = 1

    while (i < array.length) {
      const isLastThree = isOdd && i === array.length - 3
      const size = isLastThree ? 3 : 2

      const group = array.slice(i, i+ size).map(student => ({
        ...student,
        groupId
      }))
      groups.push(...group)
      i += size
      groupId++
    }

    setMixedStudents(groups)
    setStudents(prev => prev.filter(student => !student.isPresent))
  }

  return (
      <section className="layout">

        <button onClick={() => console.log("Mixed: ", shuffle(present)) }>Mix students</button>

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