import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import InputField from "@/components/InputField"
import usersData from "@/data/users.json"

export default function Login() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string>("")
    const navigate = useNavigate()

    function handleLogin() {
        const user = usersData.find((u) => u.email === email && u.password === password)

        if (user) {
            // generate dummy token
            const token = Math.random().toString(36).substring(2, 15)
            Cookies.set("token", token, { expires: 1 }) // token expire 1 hari
            localStorage.setItem("name", user.name)
            navigate('/home')
        } else {
            setError("Invalid credentials")
        }

    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <InputField label="Email" value={email} onChange={setEmail} />
                <InputField type="password" label="Password" value={password} onChange={setPassword} />
                <div
                    onClick={handleLogin}
                    className="w-full bg-blue-500 text-center font-semibold text-white py-2 rounded-md hover:bg-blue-600 transition">
                    Login
                </div>
            </div>
        </div>
    )
}
