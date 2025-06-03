import "./globals.css";
import './globals.css';
import Header from './components/Header';

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
      </body>
    </html>
  );
}
