import { Nsong } from "@/information";
import Link from "next/link";
export default function NewSong() {
    return (
        <section id="newSong" className="py-20 px-4 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 tracking-widest font-heading">NEW SONG</h2>
            <div className="space-y-24">
                {Nsong.map((item) => (
                    <div key={item.id} className="group">
                        <div className="flex flex-col gap-10">
                            {/* 動画エリア：YouTube埋め込み */}
                            <div className="block w-full aspect-video relative overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                <video
                                    src={item.url}
                                    title={item.title}
                                    className="w-full h-full object-cover"
                                    controls
                                    playsInline
                                />
                            </div>

                            {/* 情報エリア：縦積み */}
                            <div className="flex flex-col items-start gap-4 px-2">
                                <h3 className="text-4xl md:text-6xl font-bold tracking-tight">{item.title}</h3>
                                <span className="text-gray-400 font-mono text-xl tracking-wider">Release: {item.data}</span>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

