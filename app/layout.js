import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PopupModal from "@/components/PopupModal";

export const metadata = {
  title: "Heritage Institute of Medical Sciences, Varanasi",
  description: "A Premier Medical Institution Dedicated to Healthcare & Education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
      </head>
      <body>
        <TopBar />
        <Navbar />
        <main style={{ overflowX: 'hidden', width: '100%', position: 'relative' }}>
          {children}
        </main>
        <Footer />
        <PopupModal />
      </body>
    </html>
  );
}
