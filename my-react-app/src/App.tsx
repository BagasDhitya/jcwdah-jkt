import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Counter from './pages/counter'
import Home from './pages/home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/counter" />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
