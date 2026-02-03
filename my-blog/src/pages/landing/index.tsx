import { motion } from 'framer-motion'

export default function Landing() {
    const features = [
        {
            title: 'Entertainment',
            desc: 'Latest news, reviews, and gossip from movies, music, and TV.',
            image: 'https://picsum.photos/400/200?random=1',
        },
        {
            title: 'Business',
            desc: 'Insights, analysis, and updates from the world of business and startups.',
            image: 'https://picsum.photos/400/200?random=2',
        },
        {
            title: 'Technology',
            desc: 'Trends, guides, and breakthroughs shaping the tech world.',
            image: 'https://picsum.photos/400/200?random=3',
        },
    ]

    return (
        <div className="relative bg-blue-50 overflow-hidden font-sans">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
            </div>

            {/* Hero Section */}
            <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
                <div className="w-full max-w-4xl mb-8">
                    <img
                        src="https://picsum.photos/1200/400?random=10"
                        alt="Hero"
                        className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg mb-6"
                    />
                </div>
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6"
                >
                    Welcome to My Blog
                </motion.h1>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-lg md:text-xl text-blue-800 mb-8 max-w-2xl"
                >
                    Your daily dose of insights and stories from entertainment to business.
                    Stay ahead with trending news, thoughtful articles, and inspiring content.
                </motion.p>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all">
                        Explore Now
                    </button>
                </motion.div>
            </section>

            {/* About Section */}
            <section className="relative z-10 px-6 py-20 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
                <motion.img
                    src="https://picsum.photos/600/400?random=20"
                    alt="About"
                    className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-xl shadow-lg"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                />
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">About My Blog</h2>
                    <p className="text-blue-800 max-w-lg">
                        My Blog brings you carefully curated content from the world of entertainment, business, technology, and lifestyle.
                        We aim to inform, inspire, and keep you connected to the latest trends that matter.
                    </p>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="relative z-10 px-6 py-20 bg-white/70 backdrop-blur-md">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-bold text-blue-900 mb-12 text-center"
                >
                    What You’ll Find Here
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-blue-100/70 rounded-xl shadow-lg overflow-hidden"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-blue-900 mb-3">{item.title}</h3>
                                <p className="text-blue-800">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <footer className="relative z-10 bg-blue-900 text-white py-12 text-center">
                <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
                <p className="mt-2 text-sm text-blue-300">Follow us on social media for more updates.</p>
            </footer>
        </div>
    )
}
