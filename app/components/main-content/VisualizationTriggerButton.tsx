'use client'
import { useRouter } from 'next/navigation';
import { Button } from '@mantine/core';

export default function VisualizationTriggerButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/early-access');
  };

  return <Button onClick={handleClick}>Join Our Journey</Button>;;
}
