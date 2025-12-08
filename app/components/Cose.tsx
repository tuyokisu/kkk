'use client';

import React, { useState } from 'react';

// コース情報のデータ定義
const plans = [
  {
    id: 'composition',
    title: 'Composition',
    jpTitle: '作曲・編曲',
    description: 'あなたのイメージを形にする、オリジナル楽曲の制作を行います。歌モノからBGMまで幅広く対応可能です。',
    detailDescription: 'ご希望のジャンルやリファレンス楽曲をもとに、デモ制作から完パケまで行います。楽器の生録音が必要な場合や、譜面作成が必要な場合もオプションにて対応可能です。',
    price: '¥30,000',
    priceSuffix: '〜',
    features: ['ジャンル不問', '修正2回まで無料', 'ステムデータ納品可', 'ラフ提案：1週間〜'],
    buttonText: '詳細を見る',
    isCustomQuote: false,
  },
  {
    id: 'mix',
    title: 'Mixing',
    jpTitle: 'MIX・マスタリング',
    description: '歌ってみた動画やオリジナル楽曲の魅力を最大限に引き出すミックスダウンを提供します。',
    detailDescription: 'ボーカルのピッチ・タイミング補正を丁寧に行い、オケとの馴染みを調整します。2mix納品に加え、マスタリング済みの音源もお渡しします。',
    price: '¥5,000',
    priceSuffix: '〜',
    features: ['ピッチ・タイミング補正込', 'ノイズ除去', 'マスタリング込', 'トラック数制限なし'],
    buttonText: '詳細を見る',
    isCustomQuote: false,
  },
  {
    id: 'mv',
    title: 'Music Video',
    jpTitle: 'ミュージックビデオ',
    description: '楽曲の世界観を広げる映像制作。リリックビデオから実写編集まで対応します。',
    detailDescription: 'イラスト一枚からのリリックビデオ制作や、撮影素材のカット編集、エフェクト追加など。YouTubeやSNSに最適なフォーマットで書き出します。',
    price: '¥15,000',
    priceSuffix: '〜',
    features: ['4K画質対応', 'YouTube用エンコード', 'サムネイル作成可', '納期：2週間〜'],
    buttonText: '詳細を見る',
    isCustomQuote: false,
  },
  {
    id: 'others',
    title: 'Others',
    jpTitle: 'その他・ご相談',
    description: '仮歌、ナレーション、楽器演奏、コンサルティングなど、音楽に関わることなら何でもご相談ください。',
    detailDescription: '上記メニューにない内容でも、音楽に関わることであれば柔軟に対応いたします。予算が決まっている場合なども、まずはお気軽にご連絡ください。',
    price: 'Ask',
    priceSuffix: '',
    features: ['柔軟な対応', '急ぎの案件も相談可', '予算に合わせた提案'],
    buttonText: '詳細を見る',
    isCustomQuote: true,
  },
];

export default function CoseCommission() {
  // モーダルの状態管理
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);

  // モーダルを開く
  const handleOpen = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    document.body.style.overflow = 'hidden'; // 背景スクロール固定
  };

  // モーダルを閉じる
  const handleClose = () => {
    setSelectedPlan(null);
    document.body.style.overflow = 'auto'; // 背景スクロール解除
  };

  // フォームへスクロールして閉じる関数
  const scrollToContact = () => {
    handleClose();
    // ページ内の id="contact" または id="contact-form" の要素を探してスクロール
    const contactSection = document.getElementById('contact') || document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-neutral-900 text-white" id="commission">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            COMMISSION
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            ご依頼について。クリックして詳細をご確認ください。
          </p>
        </div>

        {/* グリッドレイアウト */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              onClick={() => handleOpen(plan)} // カード全体をクリック可能に
              className={`
                group cursor-pointer relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2
                ${plan.isCustomQuote 
                  ? 'bg-neutral-800 border-2 border-dashed border-neutral-600'
                  : 'bg-neutral-800 border border-neutral-700 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                }
              `}
            >
              <div className="mb-6">
                <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase group-hover:text-indigo-300 transition-colors">
                  {plan.title}
                </span>
                <h3 className="text-xl font-bold mt-1 text-white">
                  {plan.jpTitle}
                </h3>
              </div>

              <div className="mb-6 pb-6 border-b border-neutral-700">
                {plan.isCustomQuote ? (
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold">お見積り</span>
                  </div>
                ) : (
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-sm text-neutral-400 ml-1">{plan.priceSuffix}</span>
                  </div>
                )}
              </div>

              <p className="text-sm text-neutral-300 mb-6 flex-grow">
                {plan.description}
              </p>
              
              {/* ボタン風の装飾 (Linkではなくdiv) */}
              <div 
                className={`
                  block w-full text-center py-3 rounded-lg font-bold transition-colors
                  ${plan.isCustomQuote
                    ? 'bg-transparent border border-white text-white group-hover:bg-white group-hover:text-black'
                    : 'bg-neutral-700 text-white group-hover:bg-indigo-600'
                  }
                `}
              >
                {plan.buttonText}
              </div>
            </div>
          ))}
        </div>

        {/* --- モーダル (ポップアップ) --- */}
        {selectedPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* 1. 背景の黒幕 (クリックで閉じる) */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
              onClick={handleClose}
            ></div>

            {/* 2. モーダル本体 */}
            <div className="relative bg-neutral-800 border border-neutral-700 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
              
              {/* ヘッダー */}
              <div className="p-6 md:p-8 border-b border-neutral-700 flex justify-between items-start bg-neutral-800">
                <div>
                  <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
                    {selectedPlan.title}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {selectedPlan.jpTitle}
                  </h3>
                </div>
                {/* 閉じるボタン (×) */}
                <button 
                  onClick={handleClose}
                  className="text-neutral-400 hover:text-white transition-colors p-1"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* 中身 */}
              <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
                {/* 価格の再表示 */}
                <div className="mb-6 flex items-baseline">
                  <span className="text-3xl font-bold text-white">
                    {selectedPlan.isCustomQuote ? 'お見積り' : selectedPlan.price}
                  </span>
                  {!selectedPlan.isCustomQuote && (
                    <span className="text-sm text-neutral-400 ml-2">から制作可能</span>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-white mb-2">内容について</h4>
                    <p className="text-neutral-300 leading-relaxed">
                      {selectedPlan.detailDescription || selectedPlan.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">特徴・制作の流れ</h4>
                    <ul className="grid gap-2">
                      {selectedPlan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-neutral-300 text-sm">
                          <svg className="w-4 h-4 mr-3 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* フッターアクション */}
              <div className="p-6 border-t border-neutral-700 bg-neutral-900/50 flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={scrollToContact}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition-colors text-center"
                >
                  この内容で相談する
                </button>
                <button 
                  onClick={handleClose}
                  className="sm:w-auto w-full bg-transparent border border-neutral-600 text-neutral-300 hover:text-white hover:border-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  閉じる
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}