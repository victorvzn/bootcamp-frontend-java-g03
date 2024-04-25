import { Outlet } from "react-router-dom"

const LayoutBase = () => {
  return (
    <>
      <div>LayoutBase</div>

      <Outlet />
    </>
  )
}

export default LayoutBase