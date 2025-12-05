// app/components/Top.tsx

import Image from "next/image";
export default function Top() {
 return (
    <section id="top" className="relative h-screen flex items-center justify-center text-center text-white mb-24">
      <Image
        src="/oga00.png"
        alt="画像の説明"
        fill
        className="object-cover -z-10"
        priority
      />
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/30 -z-10"></div>
      <div className="z-10 px-4">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-wide mb-4 font-heading uppercase">
          Suragi
        </h1>
        <p className="text-lg md:text-2xl font-bold tracking-[0.2em] md:tracking-[0.5em]">
          Official Page
        </p>
      </div>
    </section>
   );
}
