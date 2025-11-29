export default function MusicVideo() {
    return (
        <section id="video" className="py-20 px-4 bg-neutral-900/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 tracking-widest font-heading">MUSIC VIDEO</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2].map((item) => (
                        <div key={item} className="aspect-video bg-black/50 relative group cursor-pointer overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 group-hover:scale-105 transition-transform duration-500">
                                <span className="text-white/20 text-4xl font-bold">VIDEO {item}</span>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center pl-1">
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="#" className="inline-block border border-white/30 px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-colors">
                        YOUTUBE CHANNEL
                    </a>
                </div>
            </div>
        </section>
    );
}
