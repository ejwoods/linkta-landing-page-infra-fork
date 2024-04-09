import LandingPageMainHero from './components/main-content/LandingPageMainHero';
import LinktaLogoWithText from './components/layout/LinktaLogoWithText';
import Footer from './components/layout/Footer';
import { Inter, EB_Garamond } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap', weight: "300"});

const ebGaramond = EB_Garamond({ subsets: ['latin'], display: 'swap', weight: "600"});

export default function Home() {
  return (
    <div>
      <header className={ebGaramond.className + " block"}>
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
