import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Counter from './pages/counter'
import Home from './pages/home'
import ShowCase from "./pages/show-case"
import UseStateExamples from "./pages/examples/use-state"
import UseRefExamples from "./pages/examples/use-ref"
import UseEffectExamples from "./pages/examples/use-effect"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/counter" />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/home' element={<Home />} />
        <Route path="/show-case" element={<ShowCase />} />
        <Route path="/examples/use-state" element={<UseStateExamples />} />
        <Route path="/examples/use-ref" element={<UseRefExamples />} />
        <Route path="/examples/use-effect" element={<UseEffectExamples />} />
      </Routes>
    </BrowserRouter>
  )
}
