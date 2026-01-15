interface TailwindButtonProps {
    title: string
    mode: 'red' | 'blue'
    onClick?: () => void
}

export default function TailwindButton({ title, mode, onClick }: TailwindButtonProps) {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer p-3 w-40 h-10 rounded text-white flex justify-center items-center
                 ${mode === 'red' ? 'bg-red-500 hover:bg-red-900' : 'bg-blue-500 hover:bg-blue-900'}`}
        >
            {title}
        </div>
    )
}
