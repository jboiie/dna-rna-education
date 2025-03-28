import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function ScrollAnimation() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      controls.start({ opacity: scrollY / 500 });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      style={{ width: '100%', height: '100vh', backgroundColor: 'lightblue' }}
    >
      Scroll to see the animation!
    </motion.div>
  );
}