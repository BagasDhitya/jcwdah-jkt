import { useBlogs, type Blog } from "../../../hooks/useBlogs"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { blogSchema, type BlogFormValues } from "../../../schemas/blogSchema"
import Button from "../../../components/Button"

export default function Dashboard() {
    const { blogs, createBlog, loading } = useBlogs()

    const { register, handleSubmit, reset, formState: { errors } } = useForm<BlogFormValues>({
        resolver: zodResolver(blogSchema)
    })

    async function onSubmit(data: BlogFormValues) {
        try {
            await createBlog(data)
            reset()
            alert("Content created successfully!")
        } catch (error: any) {
            alert(error.message)
        }
    }

    return (
        <div className="p-6 space-y-8">
            <h1 className="text-2xl font-bold">Dashboard</h1>

            {/* FORM TO ADD NEW CONTENT */}
            <div className="border rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-4">Add New Content</h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* tinggal copas kebawah sesuaikan dengan field yang udah ada */}
                    <div>
                        <label className="block mb-1 font-medium">Title</label>
                        <input {...register("title")} className="w-full border rounded px-3 py-2" />
                        {errors.title && (
                            <p className="text-red-500 text-sm">{errors.title.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Image URL</label>
                        <input {...register("image")} className="w-full border rounded px-3 py-2" />
                        {errors.image && (
                            <p className="text-red-500 text-sm">{errors.image.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Content</label>
                        <input {...register("content")} className="w-full border rounded px-3 py-2" />
                        {errors.content && (
                            <p className="text-red-500 text-sm">{errors.content.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Category</label>
                        <select {...register("category")} className="w-full border rounded px-3 py-2">
                            <option value="finance">Finance</option>
                            <option value="sports">Sports</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    <div className="md:col-span-2 flex justify-end">
                        <Button type="submit" variant="primary">Add Content</Button>
                    </div>
                </form>
            </div>

            {/* Content List Table */}
            <div className="border rounded-lg p-6 shadow-md overflow-x-auto">
                <h2 className="text-xl font-semibold mb-4">Blog Lists</h2>
                {loading ? (<p>Loading ...</p>) : blogs.length === 0 ? (
                    <p>No content found.</p>
                ) : (
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border px-4 py-2">Title</th>
                                <th className="border px-4 py-2">Category</th>
                                <th className="border px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((item: Blog) => (
                                <tr key={item.objectId}>
                                    <td className="border px-4 py-2">{item.title}</td>
                                    <td className="border px-4 py-2">{item.category}</td>
                                    <Button
                                        size="sm"
                                        onClick={() => console.log('edit blog : ', item.objectId)}>
                                        Edit</Button>
                                    <Button
                                        size="sm"
                                        onClick={() => console.log('delete blog : ', item.objectId)}
                                    >
                                        Delete
                                    </Button>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}
