'use client'
import { useRouter } from 'next/navigation';
import UniversalButton from '../common/UniversalButton';
import LandingPageTreeVisualizationPanel from './LandingPageTreeVisualizationPanel';

export default function LandingPageMainHero() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/early-access');
  };

  return (
    <main className="flex flex-col sm:flex-row justify-center">
      <LandingPageTreeVisualizationPanel/>
      <UniversalButton 
        onClick={handleClick}
        label='Join Our Journey'
        classNames={{
          root: 'button-primary sm:flex-o'
        }}
      />
    </main>
  )
}
