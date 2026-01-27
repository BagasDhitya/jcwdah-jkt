import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ className = "", ...props }: Props) {
    return (
        <button
        {...props}
        className={`px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 ${className}`}
        />
    )
}
