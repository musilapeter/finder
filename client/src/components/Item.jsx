import { useState } from 'react';

function Item({ item }) {
    const [claimed, setClaimed] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-KE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        }).format(date);
    };

    const handleClaim = async () => {
        setClaimed(true);
        const claimText = `I would like to claim the item \"${item.name}\" found at ${item.placeFound}.`;
        try {
            await navigator.clipboard.writeText(claimText);
            setStatusMessage('Claim message copied to clipboard. Paste it to notify the owner.');
        } catch (err) {
            setStatusMessage('Claim action activated — copy the details manually from the item.');
        }
    };

    const handleShare = async () => {
        const shareData = {
            title: `Lost & Found: ${item.name}`,
            text: `Check out this found item: ${item.name} found at ${item.placeFound}. ${item.description}`,
            url: `${window.location.origin}/items`
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
                setStatusMessage('Shared successfully!');
            } else {
                await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
                setStatusMessage('Share text copied to clipboard. Paste it where you want to share.');
            }
        } catch (err) {
            setStatusMessage('Unable to share right now. Please try again later.');
        }
    };

    return (
        <div className="max-w-xl rounded-3xl bg-slate-900/90 shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-emerald-500/30">
            <img
                src={item.image}
                alt={item.name}
                className="h-64 w-full object-cover"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/bag_1.jpg';
                }}
            />
            <div className="space-y-3 p-5 text-slate-100">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-sm text-slate-300">
                    <span className="font-semibold text-slate-100">Date Found:</span> {formatDate(item.date)}
                </p>
                <p className="text-sm text-slate-300">
                    <span className="font-semibold text-slate-100">Place Found:</span> {item.placeFound}
                </p>
                <p className="text-slate-300">{item.description}</p>
            </div>
            {statusMessage && (
                <div className="mx-5 mb-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
                    {statusMessage}
                </div>
            )}
            <div className="flex flex-wrap gap-3 border-t border-white/10 bg-slate-950 p-4">
                <button
                    type="button"
                    onClick={handleClaim}
                    disabled={claimed}
                    className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                        claimed
                            ? 'bg-emerald-300 text-slate-950 cursor-not-allowed opacity-80'
                            : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                    }`}
                >
                    {claimed ? 'Claimed' : 'Claim'}
                </button>
                <button
                    type="button"
                    onClick={handleShare}
                    className="rounded-2xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
                >
                    Share
                </button>
            </div>
        </div>
    );
}

export default Item;