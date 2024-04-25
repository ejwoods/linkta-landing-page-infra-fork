'use client';
import { useRouter } from 'next/navigation';
import UniversalButton from '../common/UniversalButton';
import LandingPageTreeVisualizationPanel from './LandingPageTreeVisualizationPanel';

export default function LandingPageMainHero() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/early-access');
  };

  return (
    <main className="flex flex-col sm:flex-row-reverse justify-center">
      <LandingPageTreeVisualizationPanel />
      <div className="sm:mb-2 p-2">
        <UniversalButton
          id="early-access-button"
          classNames={{
            root: 'button-primary sm:flex-o sm:align-self-end',
          }}
          label="Join Our Journey"
          onClick={handleClick}
        />
      </div>
    </main>
  );
}
