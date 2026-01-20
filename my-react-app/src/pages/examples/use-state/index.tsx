import { useState } from "react"

export default function UseStateExamples() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
    const [text, setText] = useState<string>("")

    console.log("isi teks :", text)

    return (
        <div
            className={`min-h-screen transition-colors duration-300 ${isDarkMode
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
        >
            <div className="max-w-xl mx-auto py-12 px-6 space-y-6">
                <div>
                    <h1 className="text-3xl font-bold">useState Examples</h1>
                    <p
                        className={`mt-2 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                    >
                        Contoh penggunaan useState
                    </p>
                </div>

                {/* example : dark / light mode */}
                <div
                    className={`rounded-xl border p-6 transition-colors ${isDarkMode
                            ? "bg-gray-800 border-gray-700"
                            : "bg-white border-gray-200"
                        }`}
                >
                    <h2 className="text-xl font-semibold mb-4">
                        Dark / Light Mode
                    </h2>

                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`px-4 py-2 rounded-lg font-medium transition ${isDarkMode
                                ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                : "bg-gray-900 text-white hover:bg-gray-800"
                            }`}
                    >
                        Switch to {isDarkMode ? "Light" : "Dark"} Mode
                    </button>
                </div>

                {/* example : input text */}
                <div
                    className={`rounded-xl border p-6 transition-colors ${isDarkMode
                            ? "bg-gray-800 border-gray-700"
                            : "bg-white border-gray-200"
                        }`}
                >
                    <h2 className="text-xl font-semibold mb-4">Input Text</h2>

                    <input
                        type="text"
                        placeholder="Ketik sesuatu ..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className={`w-full px-4 py-2 rounded-lg border outline-none transition ${isDarkMode
                                ? "bg-gray-900 border-gray-600 text-white placeholder-gray-500 focus:ring-2 focus:ring-gray-500"
                                : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                            }`}
                    />

                    <div className="mt-4 text-sm">
                        <span className="font-medium">Output: </span>
                        <span className="italic">
                            {text ? text : "Belum ada teks"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
