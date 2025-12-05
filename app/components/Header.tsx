"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm text-white border-b border-white/10">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-widest uppercase font-heading">
                    Suragi
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider">
                    <Link href="/#top" className="hover:text-accent transition-colors">TOP</Link>
                    <Link href="/#news" className="hover:text-accent transition-colors">NEWS</Link>
                    <Link href="/#musicVideo" className="hover:text-accent transition-colors">VIDEO</Link>
                    <Link href="/#goods" className="hover:text-accent transition-colors">GOODS</Link>
                    <Link href="/#contact" className="hover:text-accent transition-colors">CONTACT</Link>
                </nav>

                <div className="md:hidden">
                    <button className="p-2 z-50 relative" onClick={() => setIsOpen(!isOpen)}>
                        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <nav className="flex flex-col items-center gap-8 text-xl font-medium tracking-wider">
                    <Link href="/#news" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">NEWS</Link>
                    <Link href="/#schedule" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">SCHEDULE</Link>
                    <Link href="/#live" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">LIVE</Link>
                    <Link href="/#media" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">MEDIA</Link>
                    <Link href="/#video" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">VIDEO</Link>
                    <Link href="/#goods" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">GOODS</Link>
                    <Link href="/#contact" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">CONTACT</Link>
                </nav>
            </div>
        </header>
    );
}
