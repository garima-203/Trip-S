'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';

export default function Home() {
  const router = useRouter();

  const goToHomePage = () => {
    router.push('/hotel-page');  
  };

  return (
    <div className="p-4"> 
      <Button
        onClick={goToHomePage}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go to Hotel Page
      </Button>
    </div>
  );
}
