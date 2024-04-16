import { useState } from "react"

function App() {
  const DEFAULT_TODOS = [
    {
      id: 1,
      title: 'Aprender JS',
      completed: false
    },
    {
      id: 2,
      title: 'Aprender CSS',
      completed: true
    },
    {
      id: 3,
      title: 'Aprender React.js',
      completed: false
    }
  ]

  const [todos, setTodos] = useState(DEFAULT_TODOS)

  return (
    <main
      className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-600 rounded-lg shadow-lg p-4"
    >
      <h1 className="text-2xl font-bold text-center">TODO APP</h1>

      {/* {JSON.stringify(todos)} */}

      <form>
        <input
          className="w-full border my-3 p-3"
          type="text"
          placeholder="¿Qué deseas hacer hoy?"
          required
        />
      </form>

      <div className="flex justify-between items-center">
        <span className="font-bold">2 de 3</span>
        <button
          className="bg-blue-500 rounded-lg px-2 py-1 text-white hover:bg-blue-700 duration-300"
        >
          Limpiar tareas completadas
        </button>
      </div>

      <section className="mt-8">
        <ul className="flex flex-col gap-2">
          <li className="flex">
            <input
              className="mr-2"
              type="checkbox"
            />
            <div className="w-full flex justify-between items-center">
              <div>
                Task name
              </div>
              <button
                className="bg-red-300 rounded-lg px-2 py-2"
              >
                ❌
              </button>
            </div>
          </li>
          <li className="flex">
            <input
              className="mr-2"
              type="checkbox"
            />
            <div className="w-full flex justify-between items-center">
              <div>
                Task name
              </div>
              <button
                className="bg-red-300 rounded-lg px-2 py-2"
              >
                ❌
              </button>
            </div>
          </li>
          <li className="flex">
            <input
              className="mr-2"
              type="checkbox"
              checked
            />
            <div className="w-full flex justify-between items-center">
              <div className="line-through">
                Task name
              </div>
              <button
                className="bg-red-300 rounded-lg px-2 py-2"
              >
                ❌
              </button>
            </div>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default App
