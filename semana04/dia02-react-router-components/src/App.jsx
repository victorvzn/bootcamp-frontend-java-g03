import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/login' element={<h1>LoginPage</h1>} />
        <Route path='/register' element={<h1>RegisterPage</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App