import React, { useEffect } from 'react'

import Screen from './Screen';

export default function LandingPage() {

  const [screen, setScreen] = React.useState(true);

  const enter = () => {
    setScreen(false);
  };

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    if (screen) {
      window.addEventListener('click', enter);
    } else {
      window.removeEventListener('click', enter);
    }

    return () => {
      window.removeEventListener('click', enter);
      clearTimeout(timeoutId);
    };
  }, [screen])

  return (
    <Screen screen={screen}/>
  );
}
