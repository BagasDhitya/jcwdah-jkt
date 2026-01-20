import { useState, useRef } from "react"

export default function UseRefExamples() {
    const renderCountRef = useRef<number>(0)

    const [stateCounter, setStateCounter] = useState<number>(0)
    const [triggerRef, setTriggerRef] = useState<boolean>(false)

    console.log("counter from use ref : ", renderCountRef.current)
    console.log("counter from use state : ", stateCounter)

    return (
        <div className="min-h-screen transition-colors duration-300 bg-gray-100 text-gray-900" >
            <div className="max-w-xl mx-auto py-12 px-6 space-y-6">
                <div>
                    <h1 className="text-3xl font-bold">useRef Examples</h1>

                    {/* example : useRef vs useState */}
                    <div className="rounded-xl bg-white border p-6 space-y-4">
                        <p className="text-sm text-gray-500">
                            Render count akan bertambah setiap component re-render
                        </p>
                        <div className="text-sm">
                            <strong>Render Count : </strong>{""}
                            <span className="font-mono">{renderCountRef.current}</span>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => setStateCounter(stateCounter + 1)}>
                                Update useState
                            </button>
                            <button onClick={() => renderCountRef.current += 1}>
                                Update useRef
                            </button>
                            <button onClick={() => setTriggerRef(!triggerRef)}>
                                Trigger Count Reff
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
