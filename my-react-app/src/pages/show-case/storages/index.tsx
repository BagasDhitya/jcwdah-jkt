import { useState } from 'react'
import Cookies from 'js-cookie'
import Navbar from '@/components/Navbar'
import { useTheme } from '@/context/ThemeContext'

export default function Storages() {
    const [input, setInput] = useState<string>("")
    const name = localStorage.getItem("name")
    const { theme } = useTheme()

    function implementStorage() {
        localStorage.setItem('input', input) // local storage -> sifatnya permanen
        sessionStorage.setItem('input', input) // session storage -> hanya sekali buka tab browser
        Cookies.set('input', input, { expires: 1 }) // cookie storage -> bisa disetting masa kadaluwarsanya
    }

    return (
        <div className={`flex flex-col justify-center items-center w-screen h-svh 
        ${theme === "light" ? "bg-white" : "bg-black"}`}>
            <Navbar name={name as string} />
            <h2>Storage Example : local storage, session storage, cookies</h2>
            <div className='mt-5 space-x-5'>
                <input
                    type="text"
                    className='p-3 border rounded text-black'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    onClick={implementStorage}
                    className='bg-green-500 rounded-md text-white hover:bg-green-600 p-3 w-60 h-16'>
                    Submit
                </button>
            </div>
            <div className='mt-5 border rounded flex flex-col justify-center items-center'>
                <h3>Result</h3>
                <p className='text-blue-700 font-semibold'>
                    local storage result : {localStorage.getItem("input")}
                </p>
                <p className='text-blue-700 font-semibold'>
                    session storage result : {sessionStorage.getItem("input")}
                </p>
                <p className='text-blue-700 font-semibold'>
                    cookies storage result : {Cookies.get("input")}
                </p>
            </div>
        </div>
    )
}
