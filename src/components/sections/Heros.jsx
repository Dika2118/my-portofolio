import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import InteractiveBackground from '../canvas/InteractiveBackground';
import { PERSONAL_INFO } from '../../lib/constants';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../../i18n';

function TypewriterTagline({ text }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsFinished(false);
    let currentIndex = 0;

    // Start typing after initial delay (waiting for background banner drop animation)
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
          // Hide cursor after a short pause once typing completes
          setTimeout(() => {
            setIsFinished(true);
          }, 400);
        }
      }, 90);

      return () => clearInterval(interval);
    }, 600);

    return () => clearTimeout(startDelay);
  }, [text]);

  return (
    <span className="inline-flex items-center">
      <span>{displayedText}</span>
      {!isFinished && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
          className="ml-1 sm:ml-2 inline-block w-1.5 sm:w-2 sm:h-12 md:h-16 lg:h-20 h-8 bg-neutral-100 dark:bg-neutral-200 rounded-xs align-middle"
        />
      )}
    </span>
  );
}

export default function Heros() {
  const { t } = useLanguage();
  const [isBannerHovered, setIsBannerHovered] = useState(false);

  const stats = [
    { label: t('hero.stats.experience'), value: "4+" },
    { label: t('hero.stats.services'), value: "6" },
    { label: t('hero.stats.projects'), value: "7" },
    { label: t('hero.stats.achievements'), value: "15" },
    { label: t('hero.stats.articles'), value: "1" },
  ];

  return (
    <section id="hero" className="pt-24 sm:pt-28 pb-16 min-h-screen flex flex-col justify-center bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-340 relative z-10">

        {/* Top 3D Interactive Background Banner - Fade in falling from top */}
        <motion.div
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setIsBannerHovered(true)}
          onMouseLeave={() => setIsBannerHovered(false)}
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-950 border border-border shadow-2xl flex flex-col justify-end items-center min-h-75 sm:min-h-105 md:min-h-100 group/banner"
        >
          {/* 3D Interactive Light Canvas Background */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ background: 'transparent' }}>
              <InteractiveBackground isHovered={isBannerHovered} />
            </Canvas>
          </div>

          <div className="absolute inset-0 pointer-events-none opacity-35 dark:opacity-40 bg-[radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_40%,#000_65%,transparent_100%)]" />

          {/* Profile Silhouette Image */}
          <div className="absolute inset-x-0 top-0 bottom-0 flex justify-center items-start pt-1 sm:pt-2 pointer-events-none z-10">
            <img
              src="/images/profile-back.png"
              alt="Back Silhouette"
              className="h-[120%] sm:h-[135%] max-h-135 sm:max-h-170 scale-115 sm:scale-125 origin-top object-contain object-top drop-shadow-[0_12px_35px_rgba(0,0,0,0.9)] opacity-95"
            />
          </div>

          {/* Tagline Text - Typewriter Effect */}
          <div className="relative z-20 w-full text-center pb-6 sm:pb-10 pointer-events-none select-none">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 via-neutral-200/50 to-neutral-950/80 drop-shadow-md flex items-center justify-center">
              <TypewriterTagline text={t('hero.tagline') || 'Think.Design.Develop'} />
            </h2>
          </div>
        </motion.div>

        {/* Profile Header Row */}
        <div className="relative z-20 -mt-16 sm:-mt-24 px-2 sm:px-6 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6">
          {/* Avatar Photo + Name + Role - Fade in from Left to Right */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center sm:items-end gap-5 text-center sm:text-left"
          >
            {/* Avatar Photo Frame */}
            <div className="relative group shrink-0 ml-2 sm:ml-6">
              <div className="w-42 h-52 sm:w-52 sm:h-64 rounded-[46px] sm:rounded-[58px] overflow-hidden border-[6px] border-neutral-300 dark:border-neutral-800 shadow-2xl ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src="/images/profile-front.jpg"
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Profile Name & Role */}
            <div className="pb-1 sm:pb-3 space-y-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-lg sm:text-xl font-bold text-primary">
                {t('hero.role')}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                <span>{t('hero.location')}</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Bar (Experience, Services, Projects, Achievements, Articles) - Fade in from Right to Left */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="pb-2 sm:pb-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-border/50 w-full lg:w-auto"
          >
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mt-0.5">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-12 px-2 sm:px-6"
        >
          <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-neutral-400 leading-relaxed max-w-3xl text-left">
            {t('hero.bio')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}