import { useState, useEffect } from 'react';
import axios from 'axios';
import Item from '../components/Item';
import { stuff } from '../data/items.js';

// eslint-disable-next-line react/prop-types
function Items({ searchQuery }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredItems, setFilteredItems] = useState([]); // Store filtered items
    const [isFallback, setIsFallback] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const result = await axios.get('http://localhost:5000/api/items');
                const data = result.data.length > 0 ? result.data.reverse() : stuff;
                setItems(data);
                setFilteredItems(data);
                setIsFallback(result.data.length === 0);
            } catch (error) {
                setItems(stuff);
                setFilteredItems(stuff);
                setIsFallback(true);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    useEffect(() => {
        setFilteredItems(
            items.filter((item) => {
                const query = searchQuery.toLowerCase();
                return (
                    item.name.toLowerCase().includes(query) ||
                    item.placeFound.toLowerCase().includes(query) ||
                    item.description.toLowerCase().includes(query)
                );
            })
        );
    }, [searchQuery, items]);

    if (loading) {
        return (
            <div className="min-h-[calc(100vh-7rem)] flex flex-col items-center justify-center px-4 text-white">
                <div className="animate-spin rounded-full h-24 w-24 border-b-4 border-emerald-400"></div>
                <h1 className="mt-4 text-2xl font-semibold">Loading items...</h1>
            </div>
        );
    }

    return (
        <div className="min-h-[calc(100vh-7rem)] px-4 py-10 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-6 text-3xl font-bold text-white">Available Items</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <Item key={item._id ?? `${item.name}-${item.date}`} item={item} />
                        ))
                    ) : (
                        <div className="col-span-full flex min-h-[50vh] items-center justify-center rounded-3xl border border-white/10 bg-white/10 p-8 text-center text-white">
                            <div>
                                <h1 className="text-2xl font-semibold text-emerald-300">No items found</h1>
                                <p className="mt-2 text-slate-200">Try a different search or upload a new found item.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Items;