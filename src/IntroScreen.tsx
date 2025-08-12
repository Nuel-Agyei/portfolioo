import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TextPressure from './components/TextPressure/TextPressure';

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate out after 3 seconds
    const tl = gsap.timeline({
      delay: 5,
      onComplete: onComplete,
    });

    tl.to(introRef.current, {
      y: '-100%',
      opacity: 0,
      duration: 1,
      ease: 'power3.inOut',
    });
  }, []);

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white px-4"
    >
      <div
      className="w-full max-w-xl mx-auto"
      style={{ position: 'relative' }}
      >
      <TextPressure
        text="Hey There!"
        flex={true}
        alpha={true}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#ffffff"
        strokeColor="#ff0000"
        minFontSize={48}
      />
      </div>
    </div>
  );
};

export default IntroScreen;
