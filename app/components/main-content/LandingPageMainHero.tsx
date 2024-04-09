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
    <main className="flex flex-col justify-center">
      <LandingPageTreeVisualizationPanel/>
      <UniversalButton onClick={handleClick} label='Join Our Journey'/>
    </main>
  )
}
