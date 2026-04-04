import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
function Navbar({ onSearch }) {
    const location = useLocation();
    const isItemsPage = location.pathname === "/items";
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSearch = (e) => {
        onSearch(e.target.value);
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-teal-950/95 border-b border-teal-900 backdrop-blur-md px-4 py-3 shadow-lg">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-white font-extrabold text-2xl tracking-tight">
                        Finder
                    </Link>
                    {isItemsPage && (
                        <div className="hidden items-center gap-2 rounded-full bg-white px-3 py-2 text-teal-950 shadow-sm md:flex">
                            <CiSearch className="text-xl" />
                            <input
                                type="search"
                                placeholder="Search items"
                                className="w-56 bg-transparent text-sm outline-none"
                                onChange={handleSearch}
                            />
                        </div>
                    )}
                </div>

                <button
                    type="button"
                    className="text-white text-3xl md:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    {menuOpen ? <AiOutlineClose /> : <FaBarsStaggered />}
                </button>

                <nav
                    className={`${menuOpen ? 'flex' : 'hidden'} w-full flex-col items-center gap-3 rounded-3xl bg-teal-950/95 p-4 text-white shadow-2xl md:flex md:w-auto md:flex-row md:items-center md:bg-transparent md:p-0`}
                >
                    <Link to="/" className="text-white hover:text-slate-300" onClick={() => setMenuOpen(false)}>
                        Home
                    </Link>
                    <Link to="/items" className="text-white hover:text-slate-300" onClick={() => setMenuOpen(false)}>
                        Items
                    </Link>
                    <Link to="/upload" className="text-white hover:text-slate-300" onClick={() => setMenuOpen(false)}>
                        Upload New
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;