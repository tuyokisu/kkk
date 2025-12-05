export default function Goods() {
    return (
        <section id="goods" className="py-20 px-4 max-w-6xl mx-auto ">
            <h2 className="text-4xl font-bold text-center mb-12 tracking-widest font-heading">GOODS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="group cursor-pointer">
                        <div className="aspect-square bg-neutral-800 mb-4 relative overflow-hidden">
                            <div className="absolute inset-0 bg-neutral-700 group-hover:scale-105 transition-transform duration-500"></div>
                        </div>
                        <h3 className="text-sm font-medium mb-1 group-hover:text-accent transition-colors">Official T-Shirt Type-{item}</h3>
                        <p className="text-gray-500 text-xs">¥3,500</p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a href="#" className="inline-block border border-white/30 px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-colors">
                    ONLINE STORE
                </a>
            </div>
        </section>
    );
}
