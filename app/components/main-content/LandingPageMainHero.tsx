'use client'
import { useRouter } from 'next/navigation';
import UniversalButton from '../common/UniversalButton';

export default function LandingPageMainHero() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/early-access');
  };

  return (
    <main>
      <div>LandingPageMainHero</div>
      <UniversalButton onClick={handleClick} label='Join Our Journey'/>
    </main>
  )
}
