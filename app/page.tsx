import LandingPageMainHero from './components/main-content/LandingPageMainHero';
import { MantineProvider } from '@mantine/core';

export default function Home() {
  return (
    <div>
      <MantineProvider>
        <LandingPageMainHero />
      </MantineProvider>
    </div>
  );
}
