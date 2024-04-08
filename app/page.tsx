import LandingPageMainHero from './components/main-content/LandingPageMainHero';
import LinktaLogoWithText from './components/layout/LinktaLogoWithText';
import Footer from './components/layout/Footer';
import { Inter, EB_Garamond } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap', weight: "300"});

const ebGaramond = EB_Garamond({ subsets: ['latin'], display: 'swap', weight: "600"});

export default function Home() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <header className={ebGaramond.className}>
        <LinktaLogoWithText />
      </header>
      <main className={inter.className}>
        <LandingPageMainHero />
      </main>
      <footer className={inter.className + ` text-sm`}>
        <Footer />
      </footer>
    </div>
  );
}
