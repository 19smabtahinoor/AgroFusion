import { useEffect } from 'react';

const useScale = () => {
  const scale = () => {
    const width = window.innerWidth;
    let zoomLevel = 1;

    if (width < 576) zoomLevel = 0.6;
    else if (width < 768) zoomLevel = 0.7;
    else if (width < 992) zoomLevel = 0.8;
    else if (width < 1200) zoomLevel = 0.9;

    document.body.style.transform = `scale(${zoomLevel})`;
    document.body.style.transformOrigin = 'top left';
    document.body.style.width = `${100 / zoomLevel}%`;
  };

  useEffect(() => {
    scale();
    window.addEventListener('resize', scale);
    return () => window.removeEventListener('resize', scale);
  }, []);
};

export default useScale;
