import DashboardHeader from "../components/dashboard-page/DashboardHeader"

const Dashboardlayout = ({ children }) => {
  return (
    <>
      <DashboardHeader />

      {children}
    </>
  )
}

export default Dashboardlayout