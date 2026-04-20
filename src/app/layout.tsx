import "./globals.css";
import { Header } from "../components/layout/Header";
import { Sidebar } from "../components/layout/sidebar/Sidebar";
import { Inter } from "next/font/google";
import { TasksProvider } from "../contexts/TasksContext";
import { StatsProvider } from "../contexts/StatsContext";
import { ProjectsProvider } from "../contexts/ProjectsContext";
import { ToastProvider } from "../contexts/ToastContext";
import { AddTaskModalProvider } from "../contexts/AddTaskModalContext";

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
      <body className={inter.className}>
        <TasksProvider>
          <StatsProvider>
            <ProjectsProvider>
              <ToastProvider>
                <AddTaskModalProvider>
                  <Header />
                  <div className="flex h-[calc(100vh-72px)] font-light overflow-x-auto">
                    <Sidebar />
                    <main className="flex font-light flex-1 min-w-0 bg-(--content-bg-color)">
                      {children}
                    </main>
                  </div>
                </AddTaskModalProvider>
              </ToastProvider>
            </ProjectsProvider>
          </StatsProvider>
        </TasksProvider>
      </body>
    </html>
  );
}
