import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        // Visible when top of skills section reaches 80% of viewport or passes it
        setIsVisible(rect.top <= window.innerHeight * 0.8);
      } else {
        setIsVisible(window.scrollY > 400);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed bottom-12 sm:bottom-16 right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black border border-gray-800 dark:border-gray-200 shadow-xl hover:shadow-2xl flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Scroll to top"
          title="Kembali ke atas"
        >
          <ArrowUp className="w-5 h-5 text-white dark:text-black stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
