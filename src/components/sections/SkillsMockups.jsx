import React from 'react';
import { motion } from 'framer-motion';

export function FrontendMockup() {
  return (
    <div className="w-full h-52 bg-[#fafafa] dark:bg-[#090b0e] rounded-t-2xl border-b border-gray-200 dark:border-[#1e2430] p-4 flex items-center justify-center relative overflow-hidden group transition-colors duration-300 select-none">
      {/* Background Radial Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#80808025_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

      {/* Floating Centered Window Mockup */}
      <div className="w-[240px] sm:w-[265px] h-[155px] sm:h-[170px] bg-white dark:bg-[#12151c] rounded-xl border border-gray-200 dark:border-[#1f2633] shadow-md dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden relative transition-transform duration-300 group-hover:scale-[1.02] shrink-0">
        {/* Fixed Title Bar */}
        <div className="bg-gray-100/90 dark:bg-[#181c26] border-b border-gray-200 dark:border-[#1f2633] px-2.5 py-1.5 flex items-center gap-1.5 shrink-0 z-30">
          <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
          <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
          <div className="ml-1.5 h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-[#252d3d]" />
        </div>

        {/* Window Frame Content */}
        <div className="flex-1 flex overflow-hidden bg-white dark:bg-[#12151c] relative">
          {/* Fixed Left Sidebar */}
          <div className="w-7 bg-gray-50 dark:bg-[#161a23] border-r border-gray-200 dark:border-[#1f2633] p-1 flex flex-col justify-between items-center z-30 shrink-0">
            <div className="flex flex-col items-center gap-1.5 w-full">
              {/* Profile Logo */}
              <div className="w-4 h-4 rounded-xs border border-gray-300 dark:border-[#2e3748] bg-gray-200 dark:bg-[#202736] relative overflow-hidden shrink-0">
                <div className="absolute -bottom-2 -left-1 w-4 h-4 rotate-45 rounded-xs bg-gray-400 dark:bg-[#34425a]" />
                <div className="absolute -bottom-1.5 left-1.5 w-3 h-3 rotate-45 rounded-xs bg-gray-300 dark:bg-[#242d3d]" />
              </div>
              {/* Sidebar line placeholders */}
              <div className="flex flex-col gap-0.5 w-full px-0.5">
                <div className="h-0.5 w-3/4 rounded-sm bg-gray-400 dark:bg-[#404e68]" />
                <div className="h-0.5 w-full rounded-sm bg-gray-300 dark:bg-[#2b3547]" />
                <div className="h-0.5 w-full rounded-sm bg-gray-300 dark:bg-[#2b3547]" />
                <div className="h-0.5 w-full rounded-sm bg-gray-300 dark:bg-[#2b3547]" />
                <div className="h-0.5 w-full rounded-sm bg-gray-300 dark:bg-[#2b3547]" />
              </div>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-[#404e68]" />
          </div>

          {/* Right Main Area */}
          <div className="flex-1 flex flex-col relative overflow-hidden bg-white dark:bg-[#12151c]">
            {/* Fixed Top Navbar inside mockup */}
            <div className="h-4.5 border-b border-gray-200 dark:border-[#1f2633] bg-gray-50/95 dark:bg-[#161a23]/95 backdrop-blur-xs px-1.5 flex items-center justify-between z-20 shrink-0">
              <div className="w-1.5 h-1.5 rounded-xs bg-gray-400 dark:bg-[#404e68]" />
              <div className="flex items-center gap-0.5">
                <div className="h-0.5 w-2.5 rounded-full bg-blue-500" />
                <div className="h-0.5 w-2 rounded-full bg-gray-300 dark:bg-[#2c374a]" />
                <div className="h-0.5 w-2 rounded-full bg-gray-300 dark:bg-[#2c374a]" />
                <div className="h-0.5 w-2 rounded-full bg-gray-300 dark:bg-[#2c374a]" />
              </div>
            </div>

            {/* Scrollable Viewport Container */}
            <div className="flex-1 overflow-hidden relative">
              {/* Smooth Auto-Scrolling Inner Content */}
              <motion.div
                animate={{
                  y: [0, -42, -42, 0, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="flex flex-col gap-1.5 p-1.5"
              >
                {/* Banner Graphic with Mountain shapes */}
                <div className="h-8 w-full bg-gray-100 dark:bg-[#181e2b] rounded border border-gray-200 dark:border-[#232c3d] relative overflow-hidden shrink-0">
                  <div className="absolute -bottom-3 left-1.5 w-7 h-7 rotate-45 rounded-sm bg-gray-300 dark:bg-[#2d384e]" />
                  <div className="absolute -bottom-2.5 left-6 w-5.5 h-5.5 rotate-45 rounded-sm bg-gray-400 dark:bg-[#3d4d6b]" />
                </div>

                {/* 3 Grid Cards */}
                <div className="grid grid-cols-3 gap-1 shrink-0">
                  {/* Card 1 */}
                  <motion.div
                    animate={{
                      scale: [1, 1.04, 1, 1],
                      borderColor: [
                        'rgba(229,231,235,1)',
                        'rgba(59,130,246,0.6)',
                        'rgba(229,231,235,1)',
                        'rgba(229,231,235,1)'
                      ]
                    }}
                    transition={{ duration: 7, repeat: Infinity, times: [0, 0.25, 0.4, 1] }}
                    className="h-5 rounded bg-gray-100 dark:bg-[#181e2b] border border-gray-200 dark:border-[#232c3d] relative overflow-hidden"
                  >
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500" />
                  </motion.div>

                  {/* Card 2 */}
                  <div className="h-5 rounded bg-gray-100 dark:bg-[#181e2b] border border-gray-200 dark:border-[#232c3d] relative overflow-hidden">
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-emerald-500" />
                  </div>

                  {/* Card 3 */}
                  <motion.div
                    animate={{
                      scale: [1, 1, 1.05, 1],
                      boxShadow: [
                        '0 0 0px rgba(234,179,8,0)',
                        '0 0 0px rgba(234,179,8,0)',
                        '0 0 8px rgba(234,179,8,0.5)',
                        '0 0 0px rgba(234,179,8,0)'
                      ]
                    }}
                    transition={{ duration: 7, repeat: Infinity, times: [0, 0.5, 0.7, 1] }}
                    className="h-5 rounded bg-gray-100 dark:bg-[#181e2b] border border-gray-200 dark:border-[#232c3d] relative overflow-hidden"
                  >
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-amber-500" />
                  </motion.div>
                </div>

                {/* Section 1: Equalizer + List items */}
                <div className="flex gap-1 items-center shrink-0">
                  {/* Equalizer / Animated Chart */}
                  <div className="bg-gray-100 dark:bg-[#181e2b] border border-gray-200 dark:border-[#232c3d] rounded p-1 flex items-end gap-0.5 h-8 w-fit shrink-0">
                    <motion.div
                      animate={{ height: ['35%', '90%', '45%', '35%'] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-1 rounded-xs bg-rose-500"
                    />
                    <motion.div
                      animate={{ height: ['75%', '30%', '95%', '75%'] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-1 rounded-xs bg-blue-500"
                    />
                    <motion.div
                      animate={{ height: ['40%', '85%', '25%', '40%'] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-1 rounded-xs bg-emerald-500"
                    />
                    <motion.div
                      animate={{ height: ['90%', '40%', '80%', '90%'] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-1 rounded-xs bg-amber-500"
                    />
                    <motion.div
                      animate={{ height: ['50%', '95%', '35%', '50%'] }}
                      transition={{ duration: 2.0, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-1 rounded-xs bg-rose-500"
                    />
                  </div>

                  {/* List items */}
                  <div className="flex flex-1 flex-col gap-0.5">
                    <div className="bg-gray-100 dark:bg-[#181e2b] border border-gray-200 dark:border-[#232c3d] rounded p-0.5 flex items-center gap-1">
                      <div className="w-2 h-2 rounded bg-gray-300 dark:bg-[#34425a] shrink-0" />
                      <div className="flex-1 flex flex-col gap-0.5">
                        <div className="h-0.5 w-3/4 rounded bg-gray-400 dark:bg-[#404e68]" />
                        <div className="h-0.5 w-1/2 rounded bg-gray-300 dark:bg-[#2b3547]" />
                      </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-[#181e2b] border border-gray-200 dark:border-[#232c3d] rounded p-0.5 flex items-center gap-1">
                      <div className="w-2 h-2 rounded bg-gray-300 dark:bg-[#34425a] shrink-0" />
                      <div className="flex-1 flex flex-col gap-0.5">
                        <div className="h-0.5 w-3/4 rounded bg-gray-400 dark:bg-[#404e68]" />
                        <div className="h-0.5 w-1/2 rounded bg-gray-300 dark:bg-[#2b3547]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Lower Content that scrolls into view */}
                <div className="flex flex-col gap-1 shrink-0 pt-0.5">
                  <div className="bg-gray-100 dark:bg-[#181e2b] border border-gray-200 dark:border-[#232c3d] rounded p-1 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-xs bg-blue-500" />
                      <div className="h-0.5 w-12 rounded bg-gray-400 dark:bg-[#404e68]" />
                    </div>
                    <div className="h-0.5 w-6 rounded bg-emerald-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="h-6 rounded bg-gray-100 dark:bg-[#181e2b] border border-gray-200 dark:border-[#232c3d] p-1 flex flex-col justify-between">
                      <div className="h-0.5 w-full bg-gray-300 dark:bg-[#2b3547] rounded" />
                      <div className="h-0.5 w-1/2 bg-blue-500 rounded" />
                    </div>
                    <div className="h-6 rounded bg-gray-100 dark:bg-[#181e2b] border border-gray-200 dark:border-[#232c3d] p-1 flex flex-col justify-between">
                      <div className="h-0.5 w-full bg-gray-300 dark:bg-[#2b3547] rounded" />
                      <div className="h-0.5 w-1/2 bg-purple-500 rounded" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Moving Mouse Cursor (Absolute overlay over scroll area) */}
              <motion.div
                animate={{
                  left: ['75%', '22%', '78%', '32%', '75%'],
                  top: ['65%', '32%', '72%', '50%', '65%']
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="pointer-events-none absolute z-30 drop-shadow-md -translate-x-1/2 -translate-y-1/2"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-gray-900 dark:text-white">
                  <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BackendMockup() {
  return (
    <div className="w-full h-52 bg-[#fafafa] dark:bg-[#090b0e] rounded-t-2xl border-b border-gray-200 dark:border-[#1e2430] p-4 flex items-center justify-center relative overflow-hidden group transition-colors duration-300 select-none">
      {/* Background Radial Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#80808025_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

      {/* Floating Centered Window Mockup */}
      <div className="w-[240px] sm:w-[265px] h-[155px] sm:h-[170px] bg-white dark:bg-[#12151c] rounded-xl border border-gray-200 dark:border-[#1f2633] shadow-md dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden relative transition-transform duration-300 group-hover:scale-[1.02] shrink-0">
        {/* Title Bar */}
        <div className="bg-gray-100/90 dark:bg-[#181c26] border-b border-gray-200 dark:border-[#1f2633] px-2.5 py-1.5 flex items-center gap-1.5 shrink-0 z-30">
          <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
          <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
          <div className="ml-1.5 h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-[#252d3d]" />
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden relative bg-white dark:bg-[#12151c] p-2 flex flex-col items-center justify-between">
          {/* Top Row: Code Box (Left) and UI Box (Right) with branching connector line */}
          <div className="relative z-10 flex w-full items-center justify-between px-3">
            {/* Branching Lines from Top Windows to Center */}
            <div className="border-gray-300 dark:border-[#2b3547] absolute top-full right-8 left-9.5 h-2 rounded-b-sm border-x border-b pointer-events-none" />
            <div className="bg-gray-300 dark:bg-[#2b3547] absolute top-full left-1/2 mt-2 h-1.5 w-px -translate-x-1/2 pointer-events-none" />

            {/* Left Box: Code Snippet Window */}
            <div className="border border-gray-200 dark:border-[#1f2633] bg-gray-50 dark:bg-[#161a23] z-10 flex h-8 w-14 flex-col overflow-hidden rounded shadow-xs">
              <div className="bg-gray-100 dark:bg-[#181c26] border-b border-gray-200 dark:border-[#1f2633] flex h-2 w-full shrink-0 items-center gap-[2.5px] px-1">
                <div className="bg-[#ff5f56] h-[2.5px] w-[2.5px] rounded-full" />
                <div className="bg-[#ffbd2e] h-[2.5px] w-[2.5px] rounded-full" />
                <div className="bg-[#27c93f] h-[2.5px] w-[2.5px] rounded-full" />
              </div>
              <div className="flex flex-1 items-start overflow-hidden p-1">
                <motion.div
                  animate={{ translateY: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex w-full flex-col gap-[2.5px]"
                >
                  <div className="bg-gray-400 dark:bg-[#404e68] h-0.5 w-3/4 rounded-full" />
                  <div className="bg-blue-500 h-0.5 w-1/2 rounded-full" />
                  <div className="bg-gray-400 dark:bg-[#404e68] h-0.5 w-full rounded-full" />
                  <div className="bg-emerald-500 h-0.5 w-2/3 rounded-full" />
                </motion.div>
              </div>
            </div>

            {/* Right Box: UI Component Window */}
            <div className="border border-gray-200 dark:border-[#1f2633] bg-gray-50 dark:bg-[#161a23] z-10 flex h-7 w-11 flex-col items-center justify-center gap-1 rounded shadow-xs">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="w-2 h-2 rounded-xs border border-dashed border-blue-500"
              />
              <div className="bg-gray-400 dark:bg-[#404e68] h-0.5 w-5 rounded-full" />
            </div>
          </div>

          {/* Middle Box: Server / API Controller */}
          <div className="border border-gray-200 dark:border-[#1f2633] bg-gray-50 dark:bg-[#161a23] relative z-10 mt-3.5 flex h-6.5 w-28 items-center justify-between rounded px-2 shadow-xs">
            <div className="flex flex-col gap-1">
              <div className="bg-gray-400 dark:bg-[#404e68] h-0.5 w-8 rounded-full" />
              <div className="bg-gray-300 dark:bg-[#2c374a] h-0.5 w-5 rounded-full" />
            </div>
            <div className="flex gap-1">
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="h-1.5 w-1.5 rounded-full bg-emerald-500"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
                className="h-1.5 w-1.5 rounded-full bg-blue-500"
              />
            </div>
          </div>

          {/* Vertical Lines with Animated Moving Packets/Dots */}
          <div className="relative z-0 flex h-5 w-14 shrink-0 justify-between px-1">
            {/* Line 1 (Red Dot) */}
            <div className="bg-gray-300 dark:bg-[#2b3547] relative h-full w-px">
              <motion.div
                animate={{ top: ['0%', '80%', '0%'] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.8)] z-10"
              />
            </div>
            {/* Line 2 (Blue Dot) */}
            <div className="bg-gray-300 dark:bg-[#2b3547] relative h-full w-px">
              <motion.div
                animate={{ top: ['80%', '0%', '80%'] }}
                transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.8)] z-10"
              />
            </div>
            {/* Line 3 (Green Dot) */}
            <div className="bg-gray-300 dark:bg-[#2b3547] relative h-full w-px">
              <motion.div
                animate={{ top: ['15%', '85%', '15%'] }}
                transition={{ duration: 2.7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)] z-10"
              />
            </div>
          </div>

          {/* Bottom Box: Database Cylinder */}
          <div className="relative z-10 mb-0.5 h-7 w-14 shrink-0 drop-shadow-xs">
            {/* Base Ellipse */}
            <div className="border border-gray-300 dark:border-[#2e3b56] bg-gray-100 dark:bg-[#161c28] absolute bottom-0 z-0 h-2.5 w-full rounded-[50%]" />
            {/* Cylinder Wall */}
            <div className="border-x border-gray-300 dark:border-[#2e3b56] bg-gray-100 dark:bg-[#161c28] absolute top-1.25 z-10 h-4.5 w-full" />
            {/* Middle Divider Curve */}
            <div className="border-b border-gray-300 dark:border-[#2e3b56] absolute top-2.5 z-20 h-2.5 w-full rounded-[50%]" />
            {/* Top Ellipse Surface */}
            <div className="border border-gray-300 dark:border-[#2e3b56] bg-gray-100 dark:bg-[#1a2232] absolute top-0 z-30 flex h-2.5 w-full items-center justify-center rounded-[50%]">
              {/* Inner Glowing Ring */}
              <motion.div
                animate={{ scale: [0.45, 0.75, 0.45], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="border border-blue-500 absolute h-full w-full rounded-[50%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AndroidMockup() {
  return (
    <div className="w-full h-52 bg-[#fafafa] dark:bg-[#090b0e] rounded-t-2xl border-b border-gray-200 dark:border-[#1e2430] p-4 flex items-center justify-center relative overflow-hidden group transition-colors duration-300 select-none">
      <div className="absolute inset-0 bg-[radial-gradient(#80808025_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

      <div className="w-[125px] sm:w-[135px] h-[160px] sm:h-[175px] bg-white dark:bg-[#12151c] rounded-2xl border-2 border-gray-300 dark:border-[#2b3447] p-1.5 flex flex-col justify-between shadow-md dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] relative transition-transform duration-300 group-hover:scale-[1.03] shrink-0">
        {/* Phone Speaker Notch */}
        <div className="w-7 h-1 bg-gray-300 dark:bg-[#2b3447] rounded-full mx-auto mb-1" />

        {/* Screen Content */}
        <div className="flex-1 bg-gray-50 dark:bg-[#090b0e] rounded-lg p-1.5 flex flex-col gap-1.5 overflow-hidden">
          {/* Header Graphic Box */}
          <div className="h-12 bg-gray-200 dark:bg-[#1a202c] rounded border border-gray-300 dark:border-[#2a3447] flex items-center justify-center relative">
            <svg className="w-5 h-5 text-gray-400 dark:text-[#3b475e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Apps Cards */}
          <div className="grid grid-cols-4 gap-1">
            <div className="h-2.5 rounded bg-[#3b82f6]" />
            <div className="h-2.5 rounded bg-[#ef4444]" />
            <div className="h-2.5 rounded bg-[#22c55e]" />
            <div className="h-2.5 rounded bg-[#eab308]" />
          </div>

          <div className="h-1.5 bg-gray-200 dark:bg-[#1f2838] rounded w-full mt-auto" />
        </div>

        {/* Android Nav Bar */}
        <div className="flex items-center justify-center gap-2.5 pt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-[#475569]" />
          <span className="w-1.5 h-1.5 rounded-full bg-gray-600 dark:bg-[#64748b]" />
          <span className="w-1.5 h-1.5 rounded-xs bg-gray-400 dark:bg-[#475569]" />
        </div>
      </div>
    </div>
  );
}

export function UiUxMockup() {
  return (
    <div className="w-full h-52 bg-[#fafafa] dark:bg-[#090b0e] rounded-t-2xl border-b border-gray-200 dark:border-[#1e2430] p-4 flex items-center justify-center relative overflow-hidden group transition-colors duration-300 select-none">
      <div className="absolute inset-0 bg-[radial-gradient(#80808025_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

      <div className="w-[240px] sm:w-[265px] h-[155px] sm:h-[170px] bg-white dark:bg-[#12151c] rounded-xl border border-gray-200 dark:border-[#1f2633] shadow-md dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden relative transition-transform duration-300 group-hover:scale-[1.02] shrink-0 p-2 justify-between">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
          <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
        </div>

        <div className="flex-1 bg-white dark:bg-[#12151c] rounded-lg border border-gray-200 dark:border-[#1f2633] p-1.5 flex gap-1.5 overflow-hidden shadow-xs">
          <div className="w-5 bg-gray-100 dark:bg-[#181c26] rounded flex flex-col items-center py-1.5 gap-1.5 border border-gray-200 dark:border-[#232a38]">
            <div className="w-2 h-2 rounded-xs bg-[#3b82f6]" />
            <div className="w-2 h-2 rounded-xs bg-gray-300 dark:bg-[#475569]" />
            <div className="w-2 h-2 rounded-xs bg-gray-300 dark:bg-[#475569]" />
            <div className="w-2 h-2 rounded-xs bg-gray-300 dark:bg-[#475569]" />
          </div>

          <div className="flex-1 bg-gray-50 dark:bg-[#0a0c10] rounded border border-gray-200 dark:border-[#1e2533] p-2 relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(#888888_1px,transparent_1px)] [background-size:8px_8px]" />

            <div className="w-20 h-14 border-2 border-[#3b82f6] rounded bg-[#3b82f6]/10 dark:bg-[#182238]/60 relative flex flex-col justify-center items-center p-1">
              <span className="w-1.5 h-1.5 bg-[#3b82f6] border border-white absolute -top-1 -left-1" />
              <span className="w-1.5 h-1.5 bg-[#3b82f6] border border-white absolute -top-1 -right-1" />
              <span className="w-1.5 h-1.5 bg-[#3b82f6] border border-white absolute -bottom-1 -left-1" />
              <span className="w-1.5 h-1.5 bg-[#3b82f6] border border-white absolute -bottom-1 -right-1" />

              <div className="h-1.5 w-10 bg-gray-300 dark:bg-[#2d3a54] rounded mb-1" />
              <div className="h-2.5 w-8 bg-[#3b82f6] rounded text-[7px] text-white flex items-center justify-center font-mono font-bold">
                BUTTON
              </div>
            </div>
          </div>

          <div className="w-10 bg-gray-100 dark:bg-[#181c26] rounded flex flex-col p-1 gap-1 border border-gray-200 dark:border-[#232a38]">
            <div className="h-1.5 w-full bg-gray-200 dark:bg-[#2a3447] rounded" />
            <div className="h-1.5 w-full bg-gray-200 dark:bg-[#2a3447] rounded" />
            <div className="h-1.5 w-full bg-[#3b82f6]/50 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectManagementMockup() {
  return (
    <div className="w-full h-52 bg-[#fafafa] dark:bg-[#090b0e] rounded-t-2xl border-b border-gray-200 dark:border-[#1e2430] p-4 flex items-center justify-center relative overflow-hidden group transition-colors duration-300 select-none">
      <div className="absolute inset-0 bg-[radial-gradient(#80808025_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

      <div className="w-[240px] sm:w-[265px] h-[155px] sm:h-[170px] bg-white dark:bg-[#12151c] rounded-xl border border-gray-200 dark:border-[#1f2633] shadow-md dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden relative transition-transform duration-300 group-hover:scale-[1.02] shrink-0 p-2 justify-between">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
          <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
        </div>

        <div className="flex-1 bg-white dark:bg-[#12151c] rounded-lg border border-gray-200 dark:border-[#1f2633] p-1.5 flex gap-1.5 overflow-hidden shadow-xs">
          <div className="flex-1 bg-gray-50 dark:bg-[#171c26] rounded border border-gray-200 dark:border-[#232c3d] p-1 flex flex-col gap-1">
            <div className="h-1.5 bg-gray-300 dark:bg-[#2b3548] rounded w-1/2 mb-0.5" />
            <div className="h-5 bg-white dark:bg-[#1e2536] rounded border border-gray-200 dark:border-[#2d384d] p-1 shadow-xs">
              <div className="h-1 bg-gray-400 dark:bg-[#475569] rounded w-3/4" />
            </div>
            <div className="h-5 bg-white dark:bg-[#1e2536] rounded border border-gray-200 dark:border-[#2d384d] p-1 shadow-xs">
              <div className="h-1 bg-gray-400 dark:bg-[#475569] rounded w-1/2" />
            </div>
          </div>

          <div className="flex-1 bg-blue-50/40 dark:bg-[#171c26] rounded border border-gray-200 dark:border-[#232c3d] p-1 flex flex-col gap-1">
            <div className="h-1.5 bg-[#3b82f6] rounded w-1/2 mb-0.5" />
            <div className="h-7 bg-white dark:bg-[#1b2842] rounded border-2 border-[#3b82f6] p-1 flex flex-col justify-between shadow-xs">
              <div className="h-1 bg-[#3b82f6] rounded w-full" />
              <div className="h-1 bg-gray-300 dark:bg-[#475569] rounded w-1/2" />
            </div>
          </div>

          <div className="flex-1 bg-gray-50 dark:bg-[#171c26] rounded border border-gray-200 dark:border-[#232c3d] p-1 flex flex-col gap-1">
            <div className="h-1.5 bg-[#22c55e] rounded w-1/2 mb-0.5" />
            <div className="h-5 bg-white dark:bg-[#1e2536] rounded border border-gray-200 dark:border-[#2d384d] p-1 shadow-xs">
              <div className="h-1 bg-[#22c55e] rounded w-2/3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DevOpsMockup() {
  return (
    <div className="w-full h-52 bg-[#fafafa] dark:bg-[#090b0e] rounded-t-2xl border-b border-gray-200 dark:border-[#1e2430] p-4 flex items-center justify-center relative overflow-hidden group transition-colors duration-300 select-none">
      <div className="absolute inset-0 bg-[radial-gradient(#80808025_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

      <div className="w-[240px] sm:w-[265px] h-[155px] sm:h-[170px] bg-white dark:bg-[#12151c] rounded-xl border border-gray-200 dark:border-[#1f2633] shadow-md dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden relative transition-transform duration-300 group-hover:scale-[1.02] shrink-0 p-2 justify-between">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
          <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
        </div>

        <div className="flex-1 bg-white dark:bg-[#12151c] rounded-lg border border-gray-200 dark:border-[#1f2633] p-2 flex items-center justify-center relative overflow-hidden shadow-xs">
          <div className="w-24 h-24 rounded-full border border-dashed border-gray-300 dark:border-[#2d3950] absolute flex items-center justify-center animate-[spin_30s_linear_infinite]" />

          <div className="w-9 h-9 bg-blue-50 dark:bg-[#1c263b] rounded-full border border-[#3b82f6] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h12a5 5 0 001-9.9M15 13a3 3 0 00-3-3H9a3 3 0 00-3 3" />
            </svg>
          </div>

          <div className="w-5 h-5 bg-gray-50 dark:bg-[#1a2130] rounded-md border border-gray-200 dark:border-[#2e3a52] absolute top-1 flex items-center justify-center text-[9px] text-cyan-600 dark:text-cyan-400 font-mono shadow-xs">
            &lt;/&gt;
          </div>
          <div className="w-5 h-5 bg-gray-50 dark:bg-[#1a2130] rounded-md border border-gray-200 dark:border-[#2e3a52] absolute left-5 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-xs">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div className="w-5 h-5 bg-gray-50 dark:bg-[#1a2130] rounded-md border border-gray-200 dark:border-[#2e3a52] absolute right-5 flex items-center justify-center text-yellow-600 dark:text-yellow-400 shadow-xs">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div className="w-5 h-5 bg-gray-50 dark:bg-[#1a2130] rounded-md border border-gray-200 dark:border-[#2e3a52] absolute bottom-1 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-xs">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MockupRenderer({ id }) {
  switch (id) {
    case 'frontend':
      return <FrontendMockup />;
    case 'backend':
      return <BackendMockup />;
    case 'android':
      return <AndroidMockup />;
    case 'uiux':
      return <UiUxMockup />;
    case 'pm':
      return <ProjectManagementMockup />;
    case 'devops':
      return <DevOpsMockup />;
    default:
      return <FrontendMockup />;
  }
}
