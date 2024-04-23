function App() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline text-center">
        Login
      </h1>

      <form className="flex flex-col gap-2 p-8">
        <input
          type="text"
          className="border p-3 shadow-sm rounded-md"
          placeholder="jhondoe@gmail.com"
          name="email"
        />
        <input
          type="password"
          className="border p-3 shadow-sm rounded-md"
          placeholder="Ej. supersecret"
          name="password"
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
