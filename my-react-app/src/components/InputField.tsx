interface InputFieldProps {
    label: string
    type?: string
    value: string
    onChange: (val: string) => void
}

export default function InputField({ label, type = "text", value, onChange }: InputFieldProps) {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-1 font-medium text-gray-700">{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>
    )
}
