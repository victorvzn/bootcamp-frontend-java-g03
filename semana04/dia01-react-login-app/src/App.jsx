import { useState } from "react"

function App() {
  const initialState = {
    email: '',
    password: ''
  }

  const [form, setForm] = useState(initialState)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleLogin = (event) => {
    event.preventDefault();
    
    console.log('Estoy enviando las credenciales del usuario...', form)
  }

  return (
    <main>
      <h1 className="text-3xl font-bold underline text-center">
        Login
      </h1>

      {JSON.stringify(form)}

      <form
        className="flex flex-col gap-2 p-8"
        onSubmit={handleLogin}
      >
        <input
          type="text"
          className="border p-3 shadow-sm rounded-md"
          placeholder="jhondoe@gmail.com"
          name="email"
          onChange={handleChange}
          value={form.email}
        />
        <input
          type="password"
          className="border p-3 shadow-sm rounded-md"
          placeholder="Ej. supersecret"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
        <input
          type="submit"
          className="border p-3 bg-sky-700 text-white rounded-md cursor-pointer"
          value="Login"
        />
      </form>
    </main>
  )
}

export default App
