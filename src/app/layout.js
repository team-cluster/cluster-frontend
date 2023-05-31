import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import localFont from "next/font/local";

const pretendard = localFont({
  src: [
    {
      path: "./fonts/PretendardVariable.woff2",
    },
  ],
  display: "swap",
});

export const metadata = {
  title: "ClusterKice",
  description: "webpage for team cluster.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <header className="header">
          <div className="geist-wrapper">
            <Navbar />
          </div>
        </header>
        <main className="content-main">
          <div className="geist-wrapper">{children}</div>
        </main>
        <footer className="footer">
          <div className="geist-wrapper">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}
