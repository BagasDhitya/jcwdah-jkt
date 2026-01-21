import { useCounter } from "@/hooks/useCounter"

export default function CustomHooksExample() {
    const { increment, decrement, count, average } = useCounter()

    console.log(average)

    return (
        <div className="flex justify-center items-center">
            <div className="flex gap-3">
                <div className="bg-green-500 w-20 h-14 text-white flex justify-center items-center" onClick={increment}>+</div>
                <div className="flex flex-col gap-3">
                    <p className="text-xl">count : {count}</p>
                    <p className="text-xl">average : {average}</p>
                </div>
                <div className="bg-red-500 w-20 h-14 text-white flex justify-center items-center" onClick={decrement}>-</div>
            </div>
        </div>
    )
}
