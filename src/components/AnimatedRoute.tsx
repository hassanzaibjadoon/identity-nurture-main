
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GreetingAnimation from './GreetingAnimation';

interface AnimatedRouteProps {
  children: React.ReactNode;
}

export default function AnimatedRoute({ children }: AnimatedRouteProps) {
  const [showGreeting, setShowGreeting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only check for greeting animation on initial page load
    const hasShownGreeting = sessionStorage.getItem('hasShownGreeting');
    
    if (!hasShownGreeting) {
      setShowGreeting(true);
      sessionStorage.setItem('hasShownGreeting', 'true');
      
      // Hide scroll while greeting is showing
      document.body.style.overflow = 'hidden';
      
      // Restore scroll after greeting animation
      const timer = setTimeout(() => {
        document.body.style.overflow = '';
      }, 2000); // Match the duration in GreetingAnimation component
      
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
  }, []);

  return (
    <>
      {showGreeting && <GreetingAnimation redirectPath={location.pathname} />}
      {children}
    </>
  );
}
