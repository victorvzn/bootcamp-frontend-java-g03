import { useState } from "react"

import Header from "./components/Header"
import TodoList from "./components/TodoList"
import Form from "./components/Form"

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

  const handleSubmit = (newTodo) => {
    const updatedTodos = [...todos, newTodo]

    setTodos(updatedTodos) // <- Nos ayuda a insertar un nuevo todo
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
      <Header />

      <Form
        onSubmit={handleSubmit}
      />

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
        <TodoList
          todos={todos}
          onCompleted={handleCompleted}
          onRemoveTodo={handleRemoveTodo}
        />
      </section>

      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </main>
  )
}

export default App