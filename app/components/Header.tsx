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
                    <Link href="/#commission" className="hover:text-accent transition-colors">COSE</Link>
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
            <div 
                className={`
                    fixed top-0 left-0 w-screen h-[100dvh] z-40
                    flex flex-col items-center justify-center
                    /* 背景色: 濃いグレー + 透過(95%) + ブラー(ぼかし) */
                    bg-[#1a1a1a]/95 backdrop-blur-sm
                    transition-all duration-300 ease-in-out
                    ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
                `}
            >
                <nav className="w-full h-full flex flex-col items-center justify-center gap-8 md:gap-10 pt-16">
                    
                    {/* TOP */}
                    <div 
                        className={`transition-transform duration-500 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        style={{ transitionDelay: isOpen ? '100ms' : '0ms' }}
                    >
                        <Link 
                            href="/#top" 
                            onClick={() => setIsOpen(false)} 
                            className="text-3xl font-black text-white tracking-[0.2em] hover:text-gray-400 transition-colors uppercase"
                        >
                            TOP
                        </Link>
                    </div>

                    {/* NEWS */}
                    <div 
                        className={`transition-transform duration-500 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        style={{ transitionDelay: isOpen ? '150ms' : '0ms' }}
                    >
                        <Link 
                            href="/#news" 
                            onClick={() => setIsOpen(false)} 
                            className="text-3xl font-black text-white tracking-[0.2em] hover:text-gray-400 transition-colors uppercase"
                        >
                            NEWS
                        </Link>
                    </div>

                    {/* VIDEO */}
                    <div 
                        className={`transition-transform duration-500 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        style={{ transitionDelay: isOpen ? '200ms' : '0ms' }}
                    >
                        <Link 
                            href="/#musicVideo" 
                            onClick={() => setIsOpen(false)} 
                            className="text-3xl font-black text-white tracking-[0.2em] hover:text-gray-400 transition-colors uppercase"
                        >
                            VIDEO
                        </Link>
                    </div>

                    {/* COSE */}
                    <div 
                        className={`transition-transform duration-500 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        style={{ transitionDelay: isOpen ? '250ms' : '0ms' }}
                    >
                        <Link 
                            href="/#commission" 
                            onClick={() => setIsOpen(false)} 
                            className="text-3xl font-black text-white tracking-[0.2em] hover:text-gray-400 transition-colors uppercase"
                        >
                            COSE
                        </Link>
                    </div>

                    {/* CONTACT */}
                    <div 
                        className={`transition-transform duration-500 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        style={{ transitionDelay: isOpen ? '300ms' : '0ms' }}
                    >
                        <Link 
                            href="/#contact" 
                            onClick={() => setIsOpen(false)} 
                            className="text-3xl font-black text-white tracking-[0.2em] hover:text-gray-400 transition-colors uppercase"
                        >
                            CONTACT
                        </Link>
                    </div>

                </nav>
            </div>
        
        </header>
    );
}
