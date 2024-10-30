'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function HeaderComp() {
  const logo = '/logo-find.png';

  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);
    return () => {
      window.removeEventListener('scroll', onNavScroll);
    };
  }, []);
  return (
    <div
      className={
        !navState
          ? 'absolute top-7 right-0 left-0 opacity-100 z-50'
          : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
      }>
      <Image width={120} height={120} alt='logo' src={logo} />
    </div>
  );
}
