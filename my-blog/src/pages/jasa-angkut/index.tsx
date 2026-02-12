export default function JasaAngkut() {
    return (
        <div className="light bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden antialiased">
            <div className="relative flex min-h-screen flex-col">

                {/* Navbar */}
                <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                    <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-7xl mx-auto w-full">
                        <div className="flex items-center gap-2 text-primary">
                            <div className="size-8 flex items-center justify-center bg-primary text-white rounded-lg">
                                <span className="material-symbols-outlined">local_shipping</span>
                            </div>
                            <h2 className="text-xl font-bold tracking-tight">
                                AngkutCepat
                            </h2>
                        </div>

                        <div className="hidden md:flex items-center gap-8">
                            <nav className="flex items-center gap-6">
                                <a href="#services" className="text-sm font-medium hover:text-primary">
                                    Layanan
                                </a>
                                <a href="#how-it-works" className="text-sm font-medium hover:text-primary">
                                    Cara Pesan
                                </a>
                                <a href="#pricing" className="text-sm font-medium hover:text-primary">
                                    Harga
                                </a>
                                <a href="#testimonials" className="text-sm font-medium hover:text-primary">
                                    Testimoni
                                </a>
                            </nav>

                            <button className="h-10 px-5 bg-primary hover:bg-blue-600 text-white text-sm font-bold rounded-lg">
                                Pesan Sekarang
                            </button>
                        </div>

                        <button className="md:hidden">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </header>

                {/* Main */}
                <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-10 py-5">

                    {/* Hero */}
                    <section className="py-10 flex flex-col-reverse lg:flex-row gap-10 items-center">
                        <div className="flex-1 flex flex-col gap-6">
                            <span className="px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold w-fit">
                                #1 Jasa Pindahan Indonesia
                            </span>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                                Jasa Pindah & Angkut Barang{" "}
                                <span className="text-primary">Terpercaya</span>
                            </h1>

                            <p className="text-slate-600 text-lg">
                                Solusi cepat dan aman untuk pindahan kos, rumah, dan pengiriman barang bisnis Anda.
                            </p>

                            <div className="flex gap-4">
                                <button className="h-12 px-8 bg-primary text-white font-bold rounded-lg">
                                    Pesan Sekarang
                                </button>
                                <button className="h-12 px-8 border rounded-lg font-bold">
                                    Cek Ongkir
                                </button>
                            </div>
                        </div>

                        <div className="flex-1">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9DGJRChae9GfBmyxT6l3b_mjrSZEqtdd707t0sR18WbH7DwbZae3mgrbmwDaOf2OlO1UG9L8ssizmox3j5jJWu68Y5VE-n9ScU10XpTp3wnCBExZ0Oypmu1aqFy0n6EWXHgDQK1jXqjzDYXrrFZWG2ENSljqpWnC-q8irz2Q16_jwz-n57SyCwOrtqJX3jdksrsznTc8bThI8VYOktwEQCg7HTfay50NPRbulCG5AUBlyf0fuy2G8aaAevum6ylDLz3CJdGaPTV4d"
                                alt="AngkutCepat"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </section>

                    {/* Services */}
                    <section id="services" className="py-20">
                        <h2 className="text-3xl font-bold text-center mb-10">
                            Layanan Kami
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: "bed", title: "Pindah Kos" },
                                { icon: "house", title: "Pindah Rumah" },
                                { icon: "storefront", title: "Angkut UMKM" },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="p-6 rounded-xl border bg-white dark:bg-gray-800 hover:shadow-xl transition"
                                >
                                    <span className="material-symbols-outlined text-primary text-3xl">
                                        {item.icon}
                                    </span>
                                    <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>

                {/* WhatsApp Floating */}
                <a
                    href="#"
                    className="fixed bottom-6 right-6 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-xl"
                >
                    <span className="material-symbols-outlined">chat</span>
                </a>

            </div>
        </div>
    );
}
