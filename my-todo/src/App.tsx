import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Todos from "./pages/todos"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navigate to={'/todos'} />} path="/" />
        <Route element={<Todos />} path="/todos" />
      </Routes>
    </BrowserRouter>
  )
}
