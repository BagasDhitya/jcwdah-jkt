import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Counter from './pages/counter'
import Home from './pages/home'
import ShowCase from "./pages/show-case"
import UseStateExamples from "./pages/examples/use-state"
import UseRefExamples from "./pages/examples/use-ref"
import UseEffectExamples from "./pages/examples/use-effect"
import CustomHooksExample from "./pages/examples/custom-hooks"
import Storages from "./pages/show-case/storages"
import Login from "./pages/login"

import Cookies from "js-cookie"
import type { JSX } from "react"

export default function App() {

  function PrivateRoutes({ children }: { children: JSX.Element }) {
    const token = Cookies.get("token")
    return token ? children : <Navigate to="/" />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path='/counter' element={
          <PrivateRoutes>
            <Counter />
          </PrivateRoutes>
        } />
        <Route path='/home' element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        } />
        <Route path="/show-case" element={
          <PrivateRoutes>
            <ShowCase />
          </PrivateRoutes>
        } />
        <Route path="/show-case/storages" element={
          <PrivateRoutes>
            <Storages />
          </PrivateRoutes>} />
        <Route path="/examples/use-state" element={
          <PrivateRoutes>
            <UseStateExamples />
          </PrivateRoutes>
        } />
        <Route path="/examples/use-ref" element={
          <PrivateRoutes>
            <UseRefExamples />
          </PrivateRoutes>
        } />
        <Route path="/examples/use-effect" element={
          <PrivateRoutes>
            <UseEffectExamples />
          </PrivateRoutes>
        } />
        <Route path="/examples/custom-hooks" element={
          <PrivateRoutes>
            <CustomHooksExample />
          </PrivateRoutes>
        } />
      </Routes>
    </BrowserRouter>
  )
}
