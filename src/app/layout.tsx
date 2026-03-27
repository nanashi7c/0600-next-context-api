import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "../contexts/AppContext";
import { Header } from "../components/layout/Header";
import { Sidebar } from "../components/layout/Sidebar";
import { Inter } from "next/font/google";

//フォント読み込み
const inter = Inter({
  subsets: ["latin"],
  // 適用weight指定
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Turvo",
  description: "Todo app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        // className={`{inter.className} ${geistSans.variable} ${geistMono.variable}`}
        className={inter.className}
      >
        <AppProvider>
          <Header />
          <div className="flex h-[calc(100vh-72px)] font-light">
            <Sidebar />
            <main className="flex font-light flex-1 min-w-0">{children}</main>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
