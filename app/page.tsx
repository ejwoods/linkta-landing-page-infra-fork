import LandingPageMainHero from './components/main-content/LandingPageMainHero';
import VisualizationTriggerButton from './components/main-content/VisualizationTriggerButton';
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
        <VisualizationTriggerButton />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
