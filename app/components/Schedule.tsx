const scheduleItems = [
    { date: '2024.06.15', type: 'LIVE', title: 'Summer Fes 2024' },
    { date: '2024.06.22', type: 'EVENT', title: 'Talk Show in Tokyo' },
    { date: '2024.07.07', type: 'LIVE', title: 'One Man Live "Starry Night"' },
];

export default function Schedule() {
    return (
        <section id="schedule" className="py-20 px-4 bg-neutral-900/50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 tracking-widest font-heading">SCHEDULE</h2>
                <div className="space-y-4">
                    {scheduleItems.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-start md:items-center bg-black/40 p-6 border-l-2 border-transparent hover:border-accent transition-colors">
                            <div className="flex items-center mb-2 md:mb-0 md:w-48">
                                <span className="text-accent font-bold mr-4 text-sm border border-accent px-2 py-0.5 rounded">{item.type}</span>
                                <span className="font-mono text-gray-300">{item.date}</span>
                            </div>
                            <h3 className="text-lg font-medium">{item.title}</h3>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="#" className="inline-block border border-white/30 px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-colors">
                        VIEW ALL
                    </a>
                </div>
            </div>
        </section>
    );
}
