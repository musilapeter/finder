import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="min-h-[calc(100vh-7rem)] px-4 py-10 md:px-8 lg:px-12">
            <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[2rem] bg-white/95 p-8 shadow-2xl backdrop-blur-md text-slate-900 lg:flex-row lg:items-center">
                <div className="lg:w-1/2">
                    <img
                        src="/images/bag_1.jpg"
                        alt="Lost and found"
                        className="h-full w-full rounded-[1.75rem] object-cover shadow-2xl"
                    />
                </div>

                <div className="lg:w-1/2 space-y-6">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-teal-950 sm:text-5xl">
                            Welcome to the lost & found community
                        </h1>
                        <p className="mt-4 text-lg leading-8 text-slate-700">
                            Lost something important or found an item? Upload it, search for it, and help reunite people with their belongings faster.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <Link
                            to="/items"
                            className="rounded-2xl bg-teal-950 px-6 py-4 text-center text-white shadow-lg transition hover:bg-teal-800"
                        >
                            Browse Items
                        </Link>
                        <Link
                            to="/upload"
                            className="rounded-2xl border border-teal-950 bg-white px-6 py-4 text-center text-teal-950 shadow-lg transition hover:bg-teal-50"
                        >
                            Upload Found Item
                        </Link>
                    </div>

                    <div className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-700 shadow-sm">
                        <div>
                            <h3 className="font-semibold text-teal-950">✨ Looking for something?</h3>
                            <p>Search the community database and filter items quickly.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-teal-950">✨ Found something?</h3>
                            <p>Upload the item and help it find its owner.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;