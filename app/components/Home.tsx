
import { Video } from '@/information';
import React from 'react';



const videoSrc = Video[0].data; 

const Home = () => {
  return (
   
    <div className="background-container"> 
      
      
      <video 
        autoPlay      // 自動再生
        loop          // ループ再生
        muted         // ミュート（自動再生に必須）
        playsInline   // モバイルでのインライン再生
        preload="metadata" // メタデータのみ事前読み込み
        className="background-video"
      >
        {/* ローカルファイルパスを src に設定 */}
        <source src={videoSrc} type="video/mp4" />
        お使いのブラウザは動画の再生をサポートしていません。
      </video>

      <div className="content-overlay">
        <h1>動画を背景にしたタイトル</h1>
        <p>ここに重ねたい任意のテキストやコンポーネントを配置します。</p>
        <button>詳細はこちら</button>
      </div>
    </div>
  );
};

export default Home;