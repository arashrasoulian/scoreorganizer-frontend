import React, { useEffect, useRef, useState } from 'react';

const ZoomInOnScroll = ({
  children,
  className = '',
  triggerOnce = true,
  threshold = 0.2,
  delay = 0,
}) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [triggerOnce, threshold, delay]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? 'visible' : ''} `}
    >
      {children}
    </div>
  );
};

export default ZoomInOnScroll;
