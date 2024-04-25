import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LayoutBase from './layouts/LayoutBase'

import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutBase />}>
          <Route index element={<HomePage />} />

          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App