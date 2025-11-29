export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-900">
            {/* Background placeholder - would be an image or video */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-black opacity-50"></div>

            <div className="relative z-20 text-center px-4">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 font-heading uppercase">
                    Suragi
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 tracking-[0.5em] font-light">
                    OFFICIAL WEBSITE
                </p>
            </div>
        </section>
    );
}
