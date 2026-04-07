import "./globals.css";
import { Header } from "../components/layout/Header";
import { Sidebar } from "../components/layout/Sidebar";
import { Inter } from "next/font/google";
import { TasksProvider } from "../contexts/TasksContext";
import { StatsProvider } from "../contexts/StatsContext";
import { ProjectsProvider } from "../contexts/ProjectsContext";

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
        <TasksProvider>
          <StatsProvider>
            <ProjectsProvider>
              <Header />
              <div className="flex h-[calc(100vh-72px)] font-light overflow-x-auto">
                <Sidebar />
                <main className="flex font-light flex-1 min-w-0 bg-(--content-bg-color)">
                  {children}
                </main>
              </div>
            </ProjectsProvider>
          </StatsProvider>
        </TasksProvider>
      </body>
    </html>
  );
}
