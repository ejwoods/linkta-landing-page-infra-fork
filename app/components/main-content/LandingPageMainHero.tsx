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
    <main className="flex flex-col justify-center sm:flex-row-reverse">
      <LandingPageTreeVisualizationPanel />
      <div className="p-2 sm:mb-2">
        <UniversalButton
          type="button"
          onClick={handleClick}
          label="Join Our Journey"
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
