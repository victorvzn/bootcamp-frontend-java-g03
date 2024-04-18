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
  const [input, setInput] = useState('')

  const handleChange = (event) => {
    const value = event.target.value

    setInput(value)
  }

  const handleSubmit = (event) => {
    // Evita que se actualice la página
    event.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }

    const updatedTodos = [...todos, newTodo]

    setTodos(updatedTodos) // <- Nos ayuda a insertar un nuevo todo

    // TODO: Limpiar la caja de texto después de añadir un nuevo todo

    // console.log(input)
    // console.log('Agregando nueva tarea...')
  }

  return (
    <main
      className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-600 rounded-lg shadow-lg p-4"
    >
      <h1 className="text-2xl font-bold text-center">App</h1>

      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}

      <form
        className="flex items-center gap-2"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full border my-3 p-3"
          type="text"
          placeholder="¿Qué deseas hacer hoy?"
          required
          onChange={handleChange}
          value={input}
        />
        <input
          className="bg-blue-300 font-bold rounded-lg px-2 py-2 cursor-pointer"
          type="submit"
          value="Añadir"
        />
      </form>

      <section className="mt-8">
        <ul className="flex flex-col gap-2">
          {todos.map(todo => {
            return (
              <li className="flex" key={todo.id}>
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