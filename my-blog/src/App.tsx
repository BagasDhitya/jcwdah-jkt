import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Landing from "./pages/landing"
import Blogs from "./pages/blog"
import Dashboard from "./pages/admin/dashboard"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
