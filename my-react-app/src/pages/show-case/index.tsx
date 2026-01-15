import TailwindButton from "../../components/TailwindButton";

export default function ShowCase() {
    return (
        <div className="min-h-screen bg-gray-100 p-8 space-y-12">

            {/* FONT */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Font</h2>
                <p className="font-sans text-base text-red-500">
                    Ini font <span className="font-bold">Sans</span>
                </p>
                <p className="font-serif text-base text-red-600">
                    Ini font <span className="font-bold">Serif</span>
                </p>
                <p className="font-mono text-base text-red-700">
                    Ini font <span className="font-bold">Mono</span>
                </p>
            </section>

            {/* BACKGROUND & COLOR */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Color & Background</h2>
                <div className="flex gap-4">
                    <div className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                        Blue
                    </div>
                    <div className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                        Green
                    </div>
                    <div className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
                        Orange
                    </div>
                </div>
            </section>

            {/* PADDING & MARGIN */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Padding & Margin</h2>
                <div className="bg-white p-6">
                    <div className="bg-purple-600 text-white p-4 mb-4">
                        Padding 4, Margin Bottom 4
                    </div>
                    <div className="bg-purple-900 text-white p-2">
                        Padding 2
                    </div>
                </div>
            </section>

            {/* POSITION */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Position</h2>
                <div className="relative bg-white h-32 rounded">
                    <div className="absolute top-2 left-2 bg-blue-500 px-2 py-1 text-sm rounded text-white">
                        Absolute Top Left
                    </div>
                    <div className="absolute bottom-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                        Absolute Bottom Right
                    </div>
                </div>
            </section>

            {/* FLEX */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Flex</h2>
                <div className="flex items-center justify-between bg-white p-4 rounded">
                    <div className="bg-gray-300 px-4 py-2 rounded">Left</div>
                    <div className="bg-gray-400 px-4 py-2 rounded">Center</div>
                    <div className="bg-gray-500 px-4 py-2 rounded">Right</div>
                </div>
                <div className="flex items-center justify-evenly bg-white p-4 rounded">
                    <div className="bg-gray-300 px-4 py-2 rounded">Left</div>
                    <div className="bg-gray-400 px-4 py-2 rounded">Center</div>
                    <div className="bg-gray-500 px-4 py-2 rounded">Right</div>
                </div>
                <div className="flex items-center justify-center bg-white p-4 rounded">
                    <div className="bg-gray-300 px-4 py-2 rounded">Left</div>
                    <div className="bg-gray-400 px-4 py-2 rounded">Center</div>
                    <div className="bg-gray-500 px-4 py-2 rounded">Right</div>
                </div>
            </section>

            {/* GRID + RESPONSIVE */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Grid</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <div className="bg-indigo-500 text-white p-4 rounded">1</div>
                    <div className="bg-indigo-600 text-white p-4 rounded">2</div>
                    <div className="bg-indigo-700 text-white p-4 rounded">3</div>
                    <div className="bg-indigo-500 text-white p-4 rounded">4</div>
                    <div className="bg-indigo-600 text-white p-4 rounded">5</div>
                    <div className="bg-indigo-700 text-white p-4 rounded">6</div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Reusable Button</h2>
                <div className="flex justify-evenly items-center">
                    <TailwindButton
                        title="Red Button"
                        mode="red"
                        onClick={() => alert("Red button clicked")}
                    />
                    <TailwindButton
                        title="Blue Button"
                        mode="blue"
                        onClick={() => alert("Blue button clicked")}
                    />
                </div>
            </section>
        </div>
    )
}