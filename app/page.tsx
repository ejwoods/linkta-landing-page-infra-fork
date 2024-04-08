import LandingPageMainHero from './components/main-content/LandingPageMainHero';
import LinktaLogoWithText from './components/layout/LinktaLogoWithText';
import Footer from './components/layout/Footer';

export default function Home() {
  return (
    <div>
      <header>
        <LinktaLogoWithText />
      </header>
      <main>
        <LandingPageMainHero />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
