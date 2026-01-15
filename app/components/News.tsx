import { NewsDates } from '@/information';
import Link from 'next/link';



export default function News() {

    // .sort() は元の配列を変更するため、スプレッド構文 (...) で配列をコピーしてからソートします。
    const sortedNews = [...NewsDates].sort((a, b) => b.id - a.id);
    const seeNewsDates = sortedNews.slice(0, 4);

    return (

        <section id="news" className="py-20 px-4 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 tracking-widest font-heading">NEWS</h2>
            <div className="space-y-6">
                {seeNewsDates.map((item) => (
                    <div key={item.id} className="block group">
                        <div className="flex flex-col md:flex-row md:items-center border-b border-white/10 pb-6 ">
                            <span className="text-gray-400 font-mono mb-2 md:mb-0 md:w-32">{item.date}</span>
                            <span className="text-lg  ">{item.content}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <Link href="/News" className="inline-block border border-white/30 px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-colors">
                    VIEW ALL
                </Link>
            </div>
        </section>

    );
}
