import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import Cookies from "js-cookie"
import { toast } from "react-toastify"
import { useTheme } from "@/context/ThemeContext"
import 'react-toastify/dist/ReactToastify.css'

interface NavbarProps {
    name: string
}

export default function Navbar({ name }: NavbarProps) {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
    const navigate = useNavigate()
    const { theme, toggleTheme } = useTheme()

    function handleLogout() {
        if (window.confirm("Are you sure want to logout?")) {
            Cookies.remove("token")
            localStorage.removeItem("name")
            toast.success("Successfully Logout")
            navigate("/")
        }
    }

    function handleSetting() {
        console.log("Open setting")
        toast.info("This is a dummy setting")
    }

    return (
        <nav className={`${theme === "light" ? "bg-white text-slate-700" : "bg-black text-white"} shadow px-6 py-4 
        flex justify-between items-center top-0 fixed w-full`}>
            <div className="font-bold text-xl">My React App</div>
            <div className="flex items-center gap-4 relative">
                <Link to="/show-case/storages">Storages</Link>
                <div
                    onClick={toggleTheme}
                    className={`${theme === "light" ? "bg-slate-500 text-white font-semibold" : "bg-white text-black font-semibold"}
                px-3 py-1 border rounded`}>
                    {theme === "light" ? "Dark" : "Light"}
                </div>
                <div className="flex items-center gap-2 font-medium" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    {name}
                </div>
                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-10 text-gray-800">
                        <div className="block w-full text-left px-4 py-2" onClick={handleSetting}>Setting</div>
                        <div className="block w-full text-left text-red-500 px-4 py-2" onClick={handleLogout}>Logout</div>
                    </div>
                )}
            </div>
        </nav>
    )
}
