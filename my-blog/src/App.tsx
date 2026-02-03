import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Landing from "./pages/landing"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}
