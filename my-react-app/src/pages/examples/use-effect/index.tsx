import { useEffect, useState } from "react"
import Box from "@/components/Box"

export default function UseEffectExamples() {

    const [count, setCount] = useState<number>(0)
    const [showBox, setShowBox] = useState<boolean>(false)

    // fase mounting -> log akan dibaca ketika pertama kali dirender
    useEffect(() => {
        console.log("Mounting : component pertama kali dirender")
    }, [])

    // fase updation -> log akan dibaca ketika ada state berubah
    useEffect(() => {
        console.log("Count berubah : ", count)
    }, [count]) // -> array dependencies : untuk melacak state yang berubah

    return (
        <div className="min-h-screen transition-colors duration-300 bg-gray-100 text-gray-900" >
            <div className="max-w-xl mx-auto py-12 px-6 space-y-6">
                <div>
                    <h1 className="text-3xl font-bold">useEffect Examples</h1>

                    {/* example : counter */}
                    <div className="bg-white border rounded-xl p-6 space-y-4">
                        <h2 className="text-xl font-semibold">Updating Phase</h2>
                        <p className="text-sm text-gray-500">
                            Klik tombol untuk mengubah state dan lihat console
                        </p>
                        <div className="flex items-center gap-4">
                            <div
                                className="px-4 py-2 rounded-lg bg-blue-600 text-white"
                                onClick={() => setCount(count + 1)}>
                                Increment ({count})
                            </div>
                        </div>
                    </div>

                    {/* example : mounting & unmount */}
                    <div className="bg-white border rounded-xl p-6 space-y-4">
                        <h2 className="text-xl font-semibold">Mounting & Unmounting</h2>
                        <p className="text-sm text-gray-500">
                            Toggle component untuk melihat log unmounting
                        </p>
                        <div
                            className="p-3 rounded-md bg-blue-400 text-white"
                            onClick={() => setShowBox((s) => !s)}>
                            {showBox ? "Hide" : "Show"} Box
                        </div>
                        {showBox && (
                            <Box />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
