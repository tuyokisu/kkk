'use client';

import { plans } from '@/information';
import React, { useState } from 'react';



export default function CoseCommission() {
  // モーダルの状態管理
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);

  // モーダルを開く
  const handleOpen = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
  };

  // モーダルを閉じる
  const handleClose = () => {
    setSelectedPlan(null);
    document.body.style.overflow = 'auto'; // 背景スクロール解除
  };

  return (
    <section className="py-20 bg-neutral-900 text-white" id="commission">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold tracking-tight mb-4">
            COMMISSION
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            ご依頼について。クリックして詳細をご確認ください。
          </p>
        </div>

        {/* グリッドレイアウト 
            lg:grid-cols-4 から lg:grid-cols-3 に変更し、
            アイテムが5つになった際にバランスよく見えるようにしました 
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
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