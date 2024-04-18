import { useState } from "react"

const App = () => {
  const INITIAL_TODOS = [
    {
      id: '1',
      title: 'Aprender JS',
      completed: false
    },
    {
      id: '2',
      title: 'Aprender CSS',
      completed: true
    },
    {
      id: '3',
      title: 'Aprender React.js',
      completed: false
    }
  ]

  const [todos, setTodos] = useState(INITIAL_TODOS)

  console.log(todos)

  return (
    <>
      <h1 className="text- text-center text-red-500">App</h1>

      {JSON.stringify(todos)}


    </>
  )
}

export default App