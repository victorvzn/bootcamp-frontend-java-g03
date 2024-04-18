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

    // DONE: Limpiar la caja de texto después de añadir un nuevo todo
    setInput('')

    // console.log(input)
    // console.log('Agregando nueva tarea...')
  }

  const handleRemoveTodo = (event) => {
    // const { id } = event.target.dataset
    const idSelected = event.target.dataset.id

    const newTodos = todos.filter(todo => todo.id !== idSelected)

    setTodos(newTodos)

    //console.log('eliminando una tarea...', event.target.dataset.id)
  }

  const handleCompleted = (event) => {
    const idSelected = event.target.dataset.id
    const isChecked = event.target.checked

    console.log(idSelected, isChecked)

    const newTodos = todos.map(todo => {
      if (todo.id === idSelected) {
        return { ...todo, completed: isChecked } // Modificamos la propiedad completed
      }
      return todo // Deja el objeto sin modificaciones
    })

    setTodos(newTodos)
  }

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  const handleClearTodos = (event) => {
    const incompletedTodos = todos.filter(todo => !todo.completed)

    setTodos(incompletedTodos)
  }

  return (
    <main
      className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-600 rounded-lg shadow-lg p-4"
    >
      <h1 className="text-2xl font-bold text-center">App</h1>

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

      {/* TODO: RETO1 - Añadir una estadística de cuantas tareas estan completadas */}
      {/* TODO: RETO2 - Completar la funcionalidad del botón limpiar tareas */}

      {todos.length > 0 && (
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">{completedTodos} de {totalTodos}</span>
          <button
            className="bg-blue-500 rounded-lg px-2 py-1 text-white hover:bg-blue-600 duration-300"
            onClick={handleClearTodos}
          >Limpiar tareas completadas</button>
        </div>
      )}

      <section className="mt-8">
        <ul className="flex flex-col gap-2">
          {todos.map(todo => {
            return (
              <li className="flex" key={todo.id}>
                <input
                  className="mr-2"
                  type="checkbox"
                  data-id={todo.id}
                  onChange={handleCompleted}
                  checked={todo.completed}
                />
                <div className="w-full flex justify-between items-center">
                  <span
                    className={todo.completed ? 'line-through' : ''}
                  >
                    {todo.title}
                  </span>
                  <button
                    className="bg-red-300 rounded-lg px-2 py-2"
                    data-id={todo.id}
                    onClick={handleRemoveTodo}
                  >
                    ❌
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </main>
  )
}

export default App