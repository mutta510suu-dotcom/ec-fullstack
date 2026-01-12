import Link from "next/link";
export default function BirdsPage() {
  return (
    // 画面全体の高さを確保し、淡いオレンジから白へのグラデーションを設定
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* ここにナビゲーションやコンテンツを追加します */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* 🦜 Okame Café ロゴ */}
            <Link
              href="/"
              className="text-5xl font-extrabold text-red-600 animate-bounce drop-shadow-xl hover:text-yellow-400 transition"
            >
              🦜 Okame Café
            </Link>
            {/* メニューリンク群 */}
            <div className="hidden md:flex space-x-8">
              <Link
                href="/#about"
                className="text-gray-700 hover:text-amber-600 transition"
              >
                コンセプト
              </Link>
              <Link href="/birds" className="text-amber-600 font-semibold">
                インコ紹介
              </Link>
              <Link
                href="/#menu"
                className="text-gray-700 hover:text-amber-600 transition"
              >
                メニュー
              </Link>
              <Link
                href="/#pricing"
                className="text-gray-700 hover:text-amber-600 transition"
              >
                料金
              </Link>
              <Link
                href="/#access"
                className="text-gray-700 hover:text-amber-600 transition"
              >
                アクセス
              </Link>
              <Link
                href="/#contact"
                className="text-gray-700 hover:text-amber-600 transition"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 text-6xl">🦜</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            可愛い仲間たち
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            当店には個性豊かなオカメインコたちがお待ちしています。
            <br />
            それぞれの性格や特徴をご紹介します。
          </p>
        </div>
      </section>
      <section className="py-20 px-4 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            可愛いインコたちに会いに来ませんか？
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            ご予約・お問い合わせはお気軽にどうぞ
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition shadow-lg"
          >
            ご予約はこちら
          </Link>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl mb-4">🦜</div>
          <h3 className="text-2xl font-bold mb-4">Okame Café</h3>
          <p className="text-gray-400 mb-4">
            オカメインコたちと過ごす癒しのひととき
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <Link
              href="/#about"
              className="text-gray-400 hover:text-white transition"
            >
              コンセプト
            </Link>
            <Link
              href="/birds"
              className="text-gray-400 hover:text-white transition"
            >
              インコ紹介
            </Link>
            <Link
              href="/#menu"
              className="text-gray-400 hover:text-white transition"
            >
              メニュー
            </Link>
            <Link
              href="/#pricing"
              className="text-gray-400 hover:text-white transition"
            >
              料金
            </Link>
            <Link
              href="/#access"
              className="text-gray-400 hover:text-white transition"
            >
              アクセス
            </Link>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Okame Café. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
