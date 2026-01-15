import { Song, NewsDate } from "./types"


//Youtubeの曲を以下の形式で追加していく。
export const Songs: Song[] = [
  {
    id: '1',
    img: "/oga0.png",
    title: "曲名",
    url: "https://youtu.be/6EKUOxmZQNc?si=mNwotne09yLhN4QF"
  },
  {
    id: '2',
    img: "/oga1.png",
    title: "曲名",
    url: "https://youtu.be/a442hNFdW_M?si=qOv0npDbKw2X0myU"
  },
  {
    id: '3',
    img: "/oga2.png",
    title: "曲名",
    url: "https://youtu.be/YK-aUIE06KE?si=zghRfXoKOqLTpEbU"
  },
  {
    id: '4',
    img: "/oga3.png",
    title: "曲名",
    url: "https://youtu.be/eUZEYjwB2_w?si=61k77jVEn32KR437"
  },
  {
    id: '5',
    img: "/oga4.png",
    title: "曲名",
    url: "https://youtu.be/QbhQrvZvtGw?si=f3htjaLJJPUtJBBe"
  },
  {
    id: '6',
    img: "/oga555.png",
    title: "曲名",
    url: "https://youtu.be/gJzAp-_dxc4?si=HOvpBBxBPfSm8vMw"
  },
]


//記事の内容を以下の形式で記述する
export const NewsDates: NewsDate[] = [
  { id: 1, date: '2010/11/3', content: "記事内容" },
  { id: 2, date: '2020/11/3', content: "記事内容" },
  { id: 3, date: '2030/11/3', content: "記事内容" },
  { id: 4, date: '2020/11/3', content: "記事内容" },
  { id: 5, date: '2020/11/3', content: "記事内容" },
  { id: 6, date: '2020/11/3', content: "記事内容" },
  { id: 7, date: '2020/11/3', content: "記事内容" },
  { id: 8, date: '2020/11/3', content: "記事内容" },
  { id: 9, date: '2020/11/3', content: "記事内容" },
  { id: 10, date: '2020/11/3', content: "記事内容" },
  { id: 11, date: '2020/11/3', content: "wwwwww" },
]


export const plans = [
  {
    id: 'composition',
    title: 'Composition',
    jpTitle: '作曲（メロディ制作）',
    description: 'あなたの詞やイメージから、オリジナルのメロディとコード進行を制作します。',
    detailDescription: '鼻歌、歌詞、リファレンス楽曲などのイメージをもとに、主旋律（メロディ）とコード進行を制作します。編曲（オケ制作）を含まないため、弾き語り用や、ご自身でアレンジができる方向けのプランです。',
    price: '¥30,000',
    priceSuffix: '〜',
    features: ['メロディ作成', 'コード譜作成', '修正2回まで無料', 'ラフ提案：5日〜'],
    buttonText: '詳細を見る',
    isCustomQuote: false,
  },
  {
    id: 'arrangement',
    title: 'Arrangement',
    jpTitle: '編曲・アレンジ',
    description: '既存のメロディを本格的な楽曲へ。デモ音源のクオリティアップを行います。',
    detailDescription: 'お持ちのメロディやコード譜をもとに、ドラム・ベース・ギター・シンセサイザーなどの楽器を加え、指定のジャンルに沿った本格的な伴奏データ（オケ）を制作します。',
    price: '¥25,000',
    priceSuffix: '〜',
    features: ['ジャンル不問', '楽器数制限なし', 'ステムデータ納品可', 'ラフ提案：10日〜'],
    buttonText: '詳細を見る',
    isCustomQuote: false,
  },
  {
    id: 'mix',
    title: 'Mixing',
    jpTitle: 'MIX・マスタリング',
    description: '歌ってみた動画やオリジナル楽曲の魅力を最大限に引き出すミックスダウンを提供します。',
    detailDescription: 'ボーカルのピッチ・タイミング補正を丁寧に行い、オケとの馴染みを調整します。2mix納品に加え、マスタリング済みの音源もお渡しします。',
    price: '¥8,000',
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
    price: '¥20,000',
    priceSuffix: '〜',
    features: ['4K画質対応', 'YouTube用エンコード', 'サムネイル作成可', '納期：2週間〜'],
    buttonText: '詳細を見る',
    isCustomQuote: false,
  },
  {
    id: 'others',
    title: 'Others',
    jpTitle: 'その他・ご相談',
    description: '作詞、仮歌、ナレーション、楽器演奏など、音楽に関わることなら何でもご相談ください。',
    detailDescription: '上記メニューにない内容でも、音楽に関わることであれば柔軟に対応いたします。「作曲＋編曲」のセット依頼や、予算が決まっている場合などもお気軽にご連絡ください。',
    price: 'Ask',
    priceSuffix: '',
    features: ['柔軟な対応', '急ぎの案件も相談可', '予算に合わせた提案'],
    buttonText: '詳細を見る',
    isCustomQuote: true,
  },
];

export const media = [
  {
    id: 'Youtube',
    url: "https://www.youtube.com/@suragi6832",
    name: 'YouTube',
    img: '/youtube-log.png'
  },
  {
    id: 'X',
    url: "https://x.com/suragi2196?s=21&t=agcGAVABEL7hQDGfyeL9lw",
    name: 'X',
    img: '/x-logo.png'
  },
  {
    id: 'Instagram',
    url: "https://www.instagram.com/ooga0522",
    name: 'Instagram',
    img: '/insta-logo.png'
  },
  {
    id: 'TikTok',
    url: "https://www.tiktok.com/@suragi2196",
    name: 'TikTok',
    img: '/tiktok-log.png'
  },
  {
    id: 'Spotify',
    url: "https://open.spotify.com/intl-ja/artist/7sLzdoDmm8DjTr326Ik5rQ?si=kFGllm1sTZydLR0wuhRP7g",
    name: 'Spotify',
    img: '/spotify-log.png'
  }
]

//新しく発表する曲をここに入れてください。
export const Nsong = [
  {
    id: '1',
    img: "/oga0.png",
    data: "2026/1/1",
    title: "test",
    url: "https://whgoz5pgeftixsdy.public.blob.vercel-storage.com/%E9%A2%A8%E6%87%90%E5%AE%8C%E6%88%90_1.mp4"
  },
]

//ダウンロード曲
export const Dsong = [
  {
    id: '1',
    img: "/oga0.png",
    title: "test",
    mix: "https://whgoz5pgeftixsdy.public.blob.vercel-storage.com/test.wav",
    master: "https://whgoz5pgeftixsdy.public.blob.vercel-storage.com/test.wav"
  },
  {
    id: '2',
    img: "/oga0.png",
    title: "test",
    mix: "https://whgoz5pgeftixsdy.public.blob.vercel-storage.com/test.wav",
    master: "https://whgoz5pgeftixsdy.public.blob.vercel-storage.com/test.wav"
  },
  {
    id: '3',
    img: "/oga0.png",
    title: "test",
    mix: "https://whgoz5pgeftixsdy.public.blob.vercel-storage.com/test.wav",
    master: "https://whgoz5pgeftixsdy.public.blob.vercel-storage.com/test.wav"
  },
  {
    id: '4',
    img: "/oga0.png",
    title: "test",
    mix: "https://whgoz5pgeftixsdy.public.blob.vercel-storage.com/test.wav",
    master: "https://whgoz5pgeftixsdy.public.blob.vercel-storage.com/test.wav"
  },
  {
    id: '5',
    img: "/oga0.png",
    title: "test",
    mix: "https://whgoz5pgeftixsdy.public.blob.vercel-storage.com/test.wav",
    master: "https://whgoz5pgeftixsdy.public.blob.vercel-storage.com/test.wav"
  },
  {
    id: '6',
    img: "/oga0.png",
    title: "test",
    mix: "https://whgoz5pgeftixsdy.public.blob.vercel-storage.com/test.wav",
    master: "https://whgoz5pgeftixsdy.public.blob.vercel-storage.com/test.wav"
  },
  {
    id: '7',
    img: "/oga0.png",
    title: "test", 
    mix: "https://whgoz5pgeftixsdy.public.blob.vercel-storage.com/test.wav",
    master: "https://whgoz5pgeftixsdy.public.blob.vercel-storage.com/test.wav"
  },
]