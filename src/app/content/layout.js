import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function DefaultLayout({ children }) {
  return (
    <div className="w-full">
      <header className="header sticky top-0 z-50">
        <div className="geist-wrapper">
          <Navbar />
        </div>
      </header>
      <main className="content-main">{children}</main>
      <footer className="footer">
        <div className="geist-wrapper">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
