'use client'; // Make sure this is at the top!

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const goToHomePage = () => {
    router.push('/hotel-page');  
  };

  return (
    <div className="p-4"> 
      <button
        onClick={goToHomePage}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go to Home Page
      </button>
    </div>
  );
}
