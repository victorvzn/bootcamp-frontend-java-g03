import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Estoy en la pagina principal</h1>} />
        
        <Route path='/login' element={<h1>LoginPage</h1>} />
        <Route path='/register' element={<h1>RegisterPage</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App