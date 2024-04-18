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

  return (
    <main
      className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-600 rounded-lg shadow-lg p-4"
    >
      <h1 className="text-2xl font-bold text-center">App</h1>

      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}

      <section className="mt-8">
        <ul className="flex flex-col gap-2">
          {todos.map(todo => {
            return (
              <li className="flex">
                <input
                  className="mr-2"
                  type="checkbox"
                />
                <div className="w-full flex justify-between items-center">
                  <span>
                    {todo.title}
                  </span>
                  <button
                    className="bg-red-300 rounded-lg px-2 py-2"
                  >
                    ❌
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export default App