import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Kiyaku() {
    return (
        <>
            <Header />
            <main className="pt-32 pb-20 px-4 min-h-screen bg-black text-white">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center tracking-widest font-heading">PRIVACY POLICY</h1>

                    <div className="space-y-12 text-gray-300 leading-relaxed text-sm md:text-base">
                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/20 pb-2">1. 個人情報の定義</h2>
                            <p>
                                「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報（個人識別情報）を指します。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/20 pb-2">2. 個人情報の収集・利用目的</h2>
                            <p className="mb-4">
                                当方は、以下の目的で個人情報を収集・利用することがあります。
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>お問い合わせに対する回答のため</li>
                                <li>サービスの提供・運営のため</li>
                                <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
                                <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/20 pb-2">3. 個人情報の第三者への開示・提供について</h2>
                            <p className="mb-4">
                                当方は、原則として、ご本人の同意を得ずに個人情報を第三者に提供しません。ただし、以下の場合は除きます。
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>法令に基づき開示・提供を求められた場合</li>
                                <li>人の生命、身体又は財産の保護のために必要な場合であって、ご本人の同意を得ることが困難な場合</li>
                                <li>公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を得ることが困難な場合</li>
                                <li>国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合</li>
                                <li>利用目的の達成に必要な範囲内において個人情報の取扱いの全部又は一部を委託する場合</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/20 pb-2">4. 匿名加工情報の作成・提供について</h2>
                            <p>
                                当方は、匿名加工情報（法令に定める措置を講じて特定の個人を識別することができないように個人情報を加工して得られる個人に関する情報であって、当該個人情報を復元することができないようにしたもの）を作成する場合には、以下の対応を行います。
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>法令で定める基準に従い、適正な加工を施す</li>
                                <li>法令で定める基準に従い、安全管理措置を講じる</li>
                                <li>匿名加工情報に含まれる情報の項目を公表する</li>
                                <li>作成した匿名加工情報をご本人を識別するために他の情報と照合しない</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/20 pb-2">5. 個人データの開示等の請求について</h2>
                            <p className="mb-4">
                                当方は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
                                <li>当方の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                                <li>その他法令に違反することとなる場合</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/20 pb-2">6. プライバシーポリシーの変更</h2>
                            <p>
                                本ポリシーの内容は、ユーザーに通知することなく、変更することができるものとします。
                                当方が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/20 pb-2">7. お問い合わせ窓口</h2>
                            <p className="mb-4">
                                個人情報の取扱いに関するお問い合わせは、以下の窓口までお願いいたします。
                            </p>
                            <address className="not-italic">
                                <p>Suragi</p>
                                <p>お問い合わせフォーム、またはSNSのDMよりご連絡ください。</p>
                            </address>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
