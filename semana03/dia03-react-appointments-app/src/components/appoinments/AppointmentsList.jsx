const AppointmentsList = ({ appointments }) => {
  return (
    <>
      <div>AppointmentsList</div>

      <pre>{JSON.stringify(appointments, null, 2)}</pre>
    </>
  )
}

export default AppointmentsList