import { media } from "@/information";
import { Img } from "@react-email/components";

export default function Footer() {
    return (
        <footer className="py-12 px-4 bg-black text-white border-t border-white/10">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex gap-6 mb-8">
                    {media.map((social) => (
                        <a key={social.id} href={social.url} target="_blank" className="text-gray-400 hover:text-white transition-colors text-sm">
                          <Img src={social.img}  alt="/" className="w-10"/>
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

