import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import './globals.css';
import { ChildrenProps } from './types';

export const metadata = {
  title: 'Tu Nombre | Desarrollador Full-Stack',
  description:
    'Portafolio de [Tu Nombre] - Experto en Back-End y desarrollo Full-Stack.',
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div id="app-container" className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm shadow-md transition-colors">
              <Navigation />
            </header>

            <main className="flex-grow">{children}</main>

            <footer>
              <Footer />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
