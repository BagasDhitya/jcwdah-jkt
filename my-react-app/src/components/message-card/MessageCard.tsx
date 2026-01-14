import styles from "./message-card.module.css"

interface MessageProps {
    text: string
    onText?: () => void
}

export default function MessageCard({ text, onText }: MessageProps) {

    function showText() {
        alert(text)
    }

    return (
        <div className={styles["message-card"]}>
            <p>{text}</p>
            <button
                className={styles["button-card"]}
                onClick={showText}>Show Text</button>
        </div>
    )
}