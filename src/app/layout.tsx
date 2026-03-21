import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "../contexts/AppContext";
import { Header } from "../components/layout/Header";
import { Sidebar } from "../components/layout/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Turvo",
  description: "Todo app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        // Todo Providerを作成する。
        <AppProvider>
          <Header>
            <div>
              <Sidebar>{children}</Sidebar>
            </div>
          </Header>
        </AppProvider>
      </body>
    </html>
  );
}
