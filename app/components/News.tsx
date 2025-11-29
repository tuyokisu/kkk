import Link from 'next/link';

const newsItems = [
    { date: '2024.05.20', title: 'New Single "Example Song" Release Decision', id: 1 },
    { date: '2024.05.15', title: 'Live Tour 2024 "Journey" Ticket Sales Start', id: 2 },
    { date: '2024.05.01', title: 'Official Fan Club Opened', id: 3 },
];

export default function News() {
    return (
        <section id="news" className="py-20 px-4 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 tracking-widest font-heading">NEWS</h2>
            <div className="space-y-6">
                {newsItems.map((item) => (
                    <Link href={`/news/${item.id}`} key={item.id} className="block group">
                        <div className="flex flex-col md:flex-row md:items-center border-b border-white/10 pb-6 transition-colors group-hover:border-accent">
                            <span className="text-gray-400 font-mono mb-2 md:mb-0 md:w-32">{item.date}</span>
                            <span className="text-lg group-hover:text-accent transition-colors">{item.title}</span>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="text-center mt-12">
                <Link href="/news" className="inline-block border border-white/30 px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-colors">
                    VIEW ALL
                </Link>
            </div>
        </section>
    );
}
