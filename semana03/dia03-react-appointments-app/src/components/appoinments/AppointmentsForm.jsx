import { useState } from "react"

const AppointmentsForm = () => {
  const INITIAL_FORM_STATE = {
    id: '',
    petName: '',
    petAge: '',
    ownerName: '',
    appointmentDate: '',
    appointmentTime: '',
    symptoms: ''
  }

  const [form, setForm] = useState(INITIAL_FORM_STATE)

  const handleChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  return (
    <section className="w-96 p-4">
      <h2 className="text-2xl text-center mb-4">Nuevo paciente</h2>

      <pre>{JSON.stringify(form, null, 2)}</pre>

      <form
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="petName"
          placeholder="Nombre de la mascota"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
        />
        <input
          type="number"
          name="petAge"
          placeholder="Edad de la mascota"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
        />
        <input
          type="text"
          name="ownerName"
          placeholder="Dueño de la mascota"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
        />
        <input
          type="date"
          name="appointmentDate"
          placeholder="Fecha de la cita"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
        />
        <input
          type="time"
          name="appointmentTime"
          placeholder="Hora de la cita"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
        />
        <textarea
          name="symptoms"
          placeholder="Síntomas"
          className="border p-3 shadow-md rounded-md"
          rows="5"
          onChange={handleChange}
        >
        </textarea>

        <input
          type="submit"
          className="borer p-2 bg-green-800 text-white rounded-md cursor-pointer"
          value="Guardar"
        />
      </form>
    </section>
  )
}

export default AppointmentsForm