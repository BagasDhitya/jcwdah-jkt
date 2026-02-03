import { useBlogs, type Blog } from "../../hooks/useBlogs"
import Card from "../../components/Card"

export default function Blogs() {
    const { blogs, error, loading } = useBlogs()

    if (loading) return <p>Loading ...</p>
    if (error) return <p>Error : {error}</p>

    return (
        <div className="p-5 space-y-8">
            <div className="text-center space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Blog & Insights
                </h1>
                <p className="text-gray-500 max-w-xl mx-auto">
                    A collection of articles, insights, and short notes about
                    technology, coding, and things worth sharing.
                </p>
                <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs?.map((item: Blog) => (
                    <Card
                        key={item.objectId}
                        title={item.title}
                        image={item.image}
                        content={item.content}
                        category={item.category}
                        onClick={() => {
                            console.log('Clicked : ', item.title)
                        }}
                    />
                ))}
            </div>
        </div>

    )
}
