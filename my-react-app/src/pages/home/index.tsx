import { ToastContainer } from "react-toastify"
import MessageCard from "../../components/message-card/MessageCard"
import Navbar from "@/components/Navbar"
import { useTheme } from "@/context/ThemeContext"

export default function Home() {
  const name = localStorage.getItem("name")
  const { theme } = useTheme()

  return (
    <div className={`${theme === "light" ? "bg-white" : "bg-black"} w-screen h-svh flex flex-col
    justify-center items-center`}>
      <Navbar name={name as string} />
      <MessageCard text="Welcome to our app" />
      <MessageCard text="Please complete your profile before explore our features." />
      <MessageCard text="Hello World" />
      <ToastContainer />
    </div>
  )
}
