import { Link, Outlet } from "react-router-dom"

const LayoutBase = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <Link class="navbar-brand" to="/">React Router DOM</Link>
          <div class="collapse navbar-collapse justify-content-end">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">Login</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <Outlet />
      </div>
    </>
  )
}

export default LayoutBase