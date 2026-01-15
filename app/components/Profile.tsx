export default function ProfileCard() {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 p-20" id="profile">
      {/* セクションタイトル */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white tracking-widest uppercase">
          PROFILE
        </h2>
        <div className="w-8 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>

      {/* テキストのみのカード */}
      <div className="bg-[#1a1a1a] rounded-lg border border-neutral-800 p-8 md:p-12 shadow-2xl">

        {/* 名前と肩書き */}
        <div className="mb-8 border-b border-neutral-800 pb-6">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide">
            SURAGI
          </h3>
          <p className="text-blue-500 font-bold tracking-widest uppercase text-sm">
            クリエイーター / アーティスト
          </p>
        </div>

        {/* 紹介文本文 */}
        <div className="text-gray-300 leading-8 text-base md:text-lg font-light">
          <p className="mb-6">
            はじめまして。楽曲制作を中心に活動しているクリエイターです。
            主にダークでエモーショナルな世界観の楽曲を得意としています。
          </p>
          <p className="mb-6">
            ご依頼主様の持つイメージや物語を音として具現化し、聴く人の心に残るサウンドメイクを心がけています。
            ボーカル曲の制作からBGM、MIX・マスタリングまで、音に関することなら幅広く対応可能です。
          </p>
          <p>
            新しい表現への挑戦を常に続けています。制作のご相談やコラボレーションのご提案など、
            お問い合わせフォームよりお気軽にご連絡ください。
          </p>
        </div>

      </div>
    </section>
  );
}