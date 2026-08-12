import React from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import InteractiveBackground from '../canvas/InteractiveBackground';
import { PERSONAL_INFO } from '../../lib/constants';
import { MapPin } from 'lucide-react';

export default function Heros() {
  return (
    <section id="hero" className="pt-24 sm:pt-28 pb-16 min-h-screen flex flex-col justify-center bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-340 relative z-10">

        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-950 border border-border shadow-2xl flex flex-col justify-end items-center min-h-75 sm:min-h-105 md:min-h-100 group/banner">
          {/* 3D Interactive Light Canvas Background */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ background: 'transparent' }}>
              <InteractiveBackground />
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

          <div className="relative z-20 w-full text-center pb-6 sm:pb-10 pointer-events-none select-none">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 via-neutral-200/50 to-neutral-950/80 drop-shadow-md">
              Think.Design.Develop
            </h2>
          </div>
        </div>

        {/* Profile Header Row: Avatar + Name/Role + Stats */}
        <div className="relative z-20 -mt-16 sm:-mt-24 px-2 sm:px-6 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5 text-center sm:text-left">
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
                {PERSONAL_INFO.role}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="pb-2 sm:pb-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-border/50 w-full lg:w-auto">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black tracking-tight text-foreground mt-0.5">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bio Section: Animates from Left (Fade-Left) when scrolled slightly past hero */}
        {PERSONAL_INFO.bio && (
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="mt-8 sm:mt-12 px-2 sm:px-6"
          >
            <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-neutral-400 leading-relaxed max-w-3xl text-left">
              {PERSONAL_INFO.bio}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}