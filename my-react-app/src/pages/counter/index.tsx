import { useState } from "react"
import "./index.css"

export default function Counter() {
    const [count, setCount] = useState<number>(0)
    const [isVisible, setIsVisible] = useState<boolean>(true)

    return (
        <div className="counter-container">
            <h1>React State Example</h1>
            <p className="description">In React, <strong>state</strong> is used to store data that can change over
                time. When the state changes, React automatically updates the UI.</p>

            <button className="toggle-btn" onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide Counter" : "Show Counter"}
            </button>
            {isVisible ? (
                <div className="counter-box">
                    <p className="count-value">{count}</p>
                    <div className="buttons">
                        <button onClick={() => setCount(count + 1)}>+</button>
                        <button onClick={() => setCount(count - 1)}>-</button>
                    </div>
                </div>
            ) : (
                <div>
                    Content hidden
                </div>
            )}

            <p className="explanation">
                Clicking the buttons updates the state.
                React detects the change and re-renders only the necessary parts of the UI.
            </p>
        </div>
    )
}
