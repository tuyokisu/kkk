const mediaItems = [
    { date: '2024.05.25', type: 'RADIO', title: 'FM802 "Music Freaks" Guest Appearance' },
    { date: '2024.05.28', type: 'WEB', title: 'Interview on Music Natalie' },
    { date: '2024.06.01', type: 'TV', title: 'Music Station Performance' },
];

export default function Media() {
    return (
        <section id="media" className="py-20 px-4 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 tracking-widest font-heading">MEDIA</h2>
            <div className="space-y-6">
                {mediaItems.map((item, index) => (
                    <div key={index} className="group cursor-pointer">
                        <div className="flex flex-col md:flex-row md:items-center border-b border-white/10 pb-6 transition-colors group-hover:border-accent">
                            <div className="flex items-center mb-2 md:mb-0 md:w-40">
                                <span className="text-xs font-bold text-gray-500 mr-3 w-12">{item.type}</span>
                                <span className="text-gray-400 font-mono">{item.date}</span>
                            </div>
                            <span className="text-lg group-hover:text-accent transition-colors">{item.title}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a href="#" className="inline-block border border-white/30 px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-colors">
                    VIEW ALL
                </a>
            </div>
        </section>
    );
}
