export default function Footer() {
    return (
        <footer className="py-12 px-4 bg-black text-white border-t border-white/10">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex gap-6 mb-8">
                    {['Twitter', 'Instagram', 'YouTube', 'TikTok'].map((social) => (
                        <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                            {social}
                        </a>
                    ))}
                </div>
                <p className="text-xs text-gray-600 tracking-widest">
                    &copy; Suragi. ALL RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    );
}
