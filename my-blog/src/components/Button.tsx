type ButtonProps = React.ButtonHTMLAttributes<HTMLElement> & {
    variant?: "primary" | "secondary"
    size?: "sm" | "md" | "lg"
}

const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
}

const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-6 py-3 text-lg"
}

export default function Button({
    variant = "primary",
    size = "md",
    className = "",
    ...props
}: ButtonProps) {
    return (
        <button
            className={`rounded ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        />
    )
}
