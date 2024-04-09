import LinktaLogoWithText from './components/layout/LinktaLogoWithText';
import LandingPageMainHero from './components/main-content/LandingPageMainHero';
import { MantineProvider } from '@mantine/core';

export default function Home() {
  return (
    <div>
      <MantineProvider>
        <div className="sm:hidden ml-0">
          <LinktaLogoWithText />
        </div>
        <LandingPageMainHero />
      </MantineProvider>
    </div>
  );
}
