import "./globals.css";
import './globals.css';
import Header from './components/Header';
import Footer from "./components/Footer";

export const metadata = {
  title: 'Charlène Duret',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
