type CardProps = {
    title: string
    image: string
    content: string
    category: string
    className?: string
    onClick?: () => void
}

export default function Card({
    title,
    image,
    content,
    category,
    className = "",
    onClick
}: CardProps) {
    return (
        <div
            onClick={onClick}
            className={`border rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer
            transition ${className}`}
        >
            {image && (
                <img src={image} alt={title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
                <span className="text-sm font-medium text-gray-500">{category}</span>
                <h3 className="text-lg font-semibold mt-1">{title}</h3>
                <p className="text-gray-600 mt-2 line-clamp-3">{content}</p>
            </div>
        </div>
    )
}
