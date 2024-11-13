"use client";
import React, { useEffect, useState } from 'react';
import { BackgroundParticles } from "@/components/ui/BackgroundParticles"; // Ensure the import path is correct
import { GradualSpacingDemo } from "@/components/ui/GradualSpacing";
import Image from 'next/image';
import './globals.css';

const LandingPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const textElement = document.getElementById('delayed-text');
      if (textElement) {
        textElement.classList.remove('hidden');
        textElement.classList.add('fade-in');
      }
      setIsLoaded(true);
    }, 2000); // 2-second delay

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return <div className="loading-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 relative">
      <BackgroundParticles className="absolute inset-0 z-0" />
      <div className="flex-grow flex flex-col items-center justify-center text-center z-10 relative">
        <div className="flex flex-col items-center">
          <div className="elefantShipBackground"></div> {/* Use the new class */}
          <GradualSpacingDemo className="mt-16" /> {/* Added margin-top of 50px */}
        </div>
        <p id="delayed-text" className="mt-4 text-gray-500 text-lg max-w-xl hidden">
          Enjoy zero trading fees in our Elefant NFT lending dApp!
        </p>
      </div>
      <div className="imageContainer">
        <Image className="moneyLeft" src="/panoptisImage.webp" alt="Money Left" width={150} height={150} />
        <Image className="moon" src="/panoptisImage.webp" alt="Moon" width={160} height={160} />
        <Image className="moneyRight" src="/panoptisImage.webp" alt="Money Right" width={250} height={250} />
        <Image className="elefantspaceRight" src="/panoptisImage.webp" alt="Elefant Right" width={330} height={330} />
      </div>
    </div>
  );
};

export default LandingPage;