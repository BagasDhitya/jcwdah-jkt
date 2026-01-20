import { useEffect } from "react"

export default function Box() {

    // fase unmounting : ketika componen dihide/muncul, 
    // maka unmounting terjadi dan lognya akan dicetak
    useEffect(() => {
        console.log("Box muncul")
        return () => {
            console.log("Box disembunyikan")
        }
    }, [])

    return (
        <div className="mt-4 p-4 border rounded-lg bg-gray-50">
            <p>Box ini sedang <strong>mounted</strong><br />
                Buka console lalu klik <em>Hide</em>
            </p>
        </div>
    )
}
