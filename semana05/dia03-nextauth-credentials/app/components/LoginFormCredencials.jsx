const LoginFormCredencials = () => {
  return (
    <div>
      <form className="flex flex-col gap-2">
        <label>Email</label>
        <input
          type="text"
          placeholder="jhon@doe.com"
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="mipass"
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default LoginFormCredencials