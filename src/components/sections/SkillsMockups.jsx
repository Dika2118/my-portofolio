import React from 'react';

export function FrontendMockup() {
  return (
    <div className="w-full h-48 bg-[#f8fafc] dark:bg-[#0a0c10] rounded-t-xl border-b border-gray-200 dark:border-[#1f242d] p-3 flex flex-col justify-between overflow-hidden relative group transition-colors duration-300">
      {/* Window Title Bar */}
      <div className="flex items-center gap-1.5 mb-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
      </div>

      {/* Interface Mockup */}
      <div className="flex-1 bg-white dark:bg-[#12151c] rounded-lg border border-gray-200 dark:border-[#1f2633] p-2 flex gap-2 overflow-hidden shadow-sm transition-colors duration-300">
        {/* Left Sidebar */}
        <div className="w-8 bg-gray-100 dark:bg-[#181c26] rounded flex flex-col items-center py-2 gap-2 border border-gray-200 dark:border-[#232a38] transition-colors duration-300">
          <div className="w-4 h-4 rounded bg-gray-300 dark:bg-[#2b3345]" />
          <div className="w-4 h-4 rounded bg-gray-200 dark:bg-[#222836]" />
          <div className="w-4 h-4 rounded bg-gray-200 dark:bg-[#222836]" />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Banner Graphic */}
          <div className="h-16 bg-gray-100 dark:bg-[#1a1f2c] rounded border border-gray-200 dark:border-[#252d3d] flex items-center justify-center relative overflow-hidden transition-colors duration-300">
            <svg className="w-8 h-8 text-gray-400 dark:text-[#333d52]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Color Pills / Widgets */}
          <div className="flex gap-2">
            <div className="flex-1 h-3.5 rounded bg-[#3b82f6]" />
            <div className="flex-1 h-3.5 rounded bg-[#22c55e]" />
            <div className="flex-1 h-3.5 rounded bg-[#eab308]" />
          </div>

          {/* Bottom Row */}
          <div className="flex gap-2 items-end flex-1">
            <div className="w-1/3 flex items-end gap-1 h-6">
              <div className="w-2 h-full bg-[#06b6d4] rounded-t-sm" />
              <div className="w-2 h-3/4 bg-[#3b82f6] rounded-t-sm" />
              <div className="w-2 h-1/2 bg-[#f97316] rounded-t-sm" />
            </div>
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="h-1.5 w-full bg-gray-200 dark:bg-[#273042] rounded" />
              <div className="h-1.5 w-2/3 bg-gray-200 dark:bg-[#273042] rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BackendMockup() {
  return (
    <div className="w-full h-48 bg-[#f8fafc] dark:bg-[#0a0c10] rounded-t-xl border-b border-gray-200 dark:border-[#1f242d] p-3 flex flex-col justify-between overflow-hidden relative group transition-colors duration-300">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="w-6 h-3 bg-gray-100 dark:bg-[#1c2230] rounded border border-gray-200 dark:border-[#2a3447] flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full" />
        </div>
      </div>

      {/* Architecture Graphic */}
      <div className="flex-1 bg-white dark:bg-[#12151c] rounded-lg border border-gray-200 dark:border-[#1f2633] p-2 flex flex-col items-center justify-center relative shadow-sm transition-colors duration-300">
        {/* Top Node */}
        <div className="w-28 h-6 bg-gray-50 dark:bg-[#1e2638] rounded border border-blue-400/50 flex items-center justify-between px-2 text-[10px] text-blue-600 dark:text-blue-400 font-mono shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
          <span>API / Router</span>
          <span className="text-[#22c55e] font-semibold">200</span>
        </div>

        {/* Lines */}
        <div className="w-px h-3 bg-gray-300 dark:bg-[#333e54] my-0.5 relative">
          <div className="w-1 h-1 rounded-full bg-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping" />
        </div>

        {/* Branch Flow */}
        <div className="w-36 flex justify-between relative">
          <div className="w-14 h-5 bg-gray-50 dark:bg-[#182030] rounded border border-gray-200 dark:border-[#2b374e] flex items-center justify-center text-[9px] text-gray-700 dark:text-gray-300 shadow-xs">
            Auth Service
          </div>
          <div className="w-14 h-5 bg-gray-50 dark:bg-[#182030] rounded border border-gray-200 dark:border-[#2b374e] flex items-center justify-center text-[9px] text-gray-700 dark:text-gray-300 shadow-xs">
            Data Handler
          </div>
        </div>

        {/* Connection to DB */}
        <div className="w-px h-3 bg-gray-300 dark:bg-[#333e54] my-0.5" />

        {/* Bottom DB Node */}
        <div className="w-20 h-8 bg-gray-50 dark:bg-[#1a2233] rounded-lg border border-gray-300 dark:border-[#2e3b56] flex items-center justify-center gap-2 relative shadow-xs">
          <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
          <span className="w-2 h-2 rounded-full bg-red-500 absolute -top-1 -right-1" />
        </div>
      </div>
    </div>
  );
}

export function AndroidMockup() {
  return (
    <div className="w-full h-48 bg-[#f8fafc] dark:bg-[#0a0c10] rounded-t-xl border-b border-gray-200 dark:border-[#1f242d] p-3 flex flex-col items-center justify-center overflow-hidden relative group transition-colors duration-300">
      {/* Device Outline */}
      <div className="w-32 h-40 bg-white dark:bg-[#12151c] rounded-2xl border-2 border-gray-300 dark:border-[#2b3447] p-1.5 flex flex-col justify-between shadow-md relative transition-colors duration-300">
        {/* Phone Speaker Notch */}
        <div className="w-8 h-1 bg-gray-300 dark:bg-[#2b3447] rounded-full mx-auto mb-1" />

        {/* Screen Content */}
        <div className="flex-1 bg-gray-50 dark:bg-[#090b0e] rounded-lg p-1.5 flex flex-col gap-1.5 overflow-hidden">
          {/* Header Graphic Box */}
          <div className="h-14 bg-gray-200 dark:bg-[#1a202c] rounded border border-gray-300 dark:border-[#2a3447] flex items-center justify-center relative">
            <svg className="w-6 h-6 text-gray-400 dark:text-[#3b475e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Apps Cards */}
          <div className="grid grid-cols-4 gap-1">
            <div className="h-3 rounded bg-[#3b82f6]" />
            <div className="h-3 rounded bg-[#ef4444]" />
            <div className="h-3 rounded bg-[#22c55e]" />
            <div className="h-3 rounded bg-[#eab308]" />
          </div>

          <div className="h-1.5 bg-gray-200 dark:bg-[#1f2838] rounded w-full mt-auto" />
        </div>

        {/* Android Nav Bar */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-[#475569]" />
          <span className="w-2 h-2 rounded-full bg-gray-600 dark:bg-[#64748b]" />
          <span className="w-1.5 h-1.5 rounded-sm bg-gray-400 dark:bg-[#475569]" />
        </div>
      </div>
    </div>
  );
}

export function UiUxMockup() {
  return (
    <div className="w-full h-48 bg-[#f8fafc] dark:bg-[#0a0c10] rounded-t-xl border-b border-gray-200 dark:border-[#1f242d] p-3 flex flex-col justify-between overflow-hidden relative group transition-colors duration-300">
      {/* Window Title Bar */}
      <div className="flex items-center gap-1.5 mb-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
      </div>

      {/* Editor Mockup */}
      <div className="flex-1 bg-white dark:bg-[#12151c] rounded-lg border border-gray-200 dark:border-[#1f2633] p-1.5 flex gap-1.5 overflow-hidden shadow-sm transition-colors duration-300">
        {/* Tools Panel */}
        <div className="w-6 bg-gray-100 dark:bg-[#181c26] rounded flex flex-col items-center py-2 gap-2 border border-gray-200 dark:border-[#232a38]">
          <div className="w-2.5 h-2.5 rounded-sm bg-[#3b82f6]" />
          <div className="w-2.5 h-2.5 rounded-sm bg-gray-300 dark:bg-[#475569]" />
          <div className="w-2.5 h-2.5 rounded-sm bg-gray-300 dark:bg-[#475569]" />
          <div className="w-2.5 h-2.5 rounded-sm bg-gray-300 dark:bg-[#475569]" />
        </div>

        {/* Canvas Area */}
        <div className="flex-1 bg-gray-50 dark:bg-[#0a0c10] rounded border border-gray-200 dark:border-[#1e2533] p-3 relative flex items-center justify-center overflow-hidden">
          {/* Grid Background Lines */}
          <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(#888888_1px,transparent_1px)] [background-size:8px_8px]" />

          {/* Active Canvas Selection Box */}
          <div className="w-24 h-16 border-2 border-[#3b82f6] rounded bg-[#3b82f6]/10 dark:bg-[#182238]/60 relative flex flex-col justify-center items-center p-1">
            {/* Corner Resize Handles */}
            <span className="w-1.5 h-1.5 bg-[#3b82f6] border border-white absolute -top-1 -left-1" />
            <span className="w-1.5 h-1.5 bg-[#3b82f6] border border-white absolute -top-1 -right-1" />
            <span className="w-1.5 h-1.5 bg-[#3b82f6] border border-white absolute -bottom-1 -left-1" />
            <span className="w-1.5 h-1.5 bg-[#3b82f6] border border-white absolute -bottom-1 -right-1" />

            <div className="h-2 w-12 bg-gray-300 dark:bg-[#2d3a54] rounded mb-1" />
            <div className="h-3 w-10 bg-[#3b82f6] rounded text-[8px] text-white flex items-center justify-center font-mono font-bold">
              BUTTON
            </div>
          </div>
        </div>

        {/* Inspector Panel */}
        <div className="w-12 bg-gray-100 dark:bg-[#181c26] rounded flex flex-col p-1 gap-1.5 border border-gray-200 dark:border-[#232a38]">
          <div className="h-2 w-full bg-gray-200 dark:bg-[#2a3447] rounded" />
          <div className="h-2 w-full bg-gray-200 dark:bg-[#2a3447] rounded" />
          <div className="h-2 w-full bg-[#3b82f6]/50 rounded" />
        </div>
      </div>
    </div>
  );
}

export function ProjectManagementMockup() {
  return (
    <div className="w-full h-48 bg-[#f8fafc] dark:bg-[#0a0c10] rounded-t-xl border-b border-gray-200 dark:border-[#1f242d] p-3 flex flex-col justify-between overflow-hidden relative group transition-colors duration-300">
      {/* Window Title Bar */}
      <div className="flex items-center gap-1.5 mb-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
      </div>

      {/* Kanban Board */}
      <div className="flex-1 bg-white dark:bg-[#12151c] rounded-lg border border-gray-200 dark:border-[#1f2633] p-2 flex gap-2 overflow-hidden shadow-sm transition-colors duration-300">
        {/* Column 1 */}
        <div className="flex-1 bg-gray-50 dark:bg-[#171c26] rounded border border-gray-200 dark:border-[#232c3d] p-1 flex flex-col gap-1.5">
          <div className="h-2 bg-gray-300 dark:bg-[#2b3548] rounded w-1/2 mb-1" />
          <div className="h-6 bg-white dark:bg-[#1e2536] rounded border border-gray-200 dark:border-[#2d384d] p-1 shadow-xs">
            <div className="h-1.5 bg-gray-400 dark:bg-[#475569] rounded w-3/4" />
          </div>
          <div className="h-6 bg-white dark:bg-[#1e2536] rounded border border-gray-200 dark:border-[#2d384d] p-1 shadow-xs">
            <div className="h-1.5 bg-gray-400 dark:bg-[#475569] rounded w-1/2" />
          </div>
        </div>

        {/* Column 2 (In Progress / Active) */}
        <div className="flex-1 bg-blue-50/40 dark:bg-[#171c26] rounded border border-gray-200 dark:border-[#232c3d] p-1 flex flex-col gap-1.5">
          <div className="h-2 bg-[#3b82f6] rounded w-1/2 mb-1" />
          <div className="h-8 bg-white dark:bg-[#1b2842] rounded border-2 border-[#3b82f6] p-1 flex flex-col justify-between shadow-xs">
            <div className="h-1.5 bg-[#3b82f6] rounded w-full" />
            <div className="h-1 bg-gray-300 dark:bg-[#475569] rounded w-1/2" />
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex-1 bg-gray-50 dark:bg-[#171c26] rounded border border-gray-200 dark:border-[#232c3d] p-1 flex flex-col gap-1.5">
          <div className="h-2 bg-[#22c55e] rounded w-1/2 mb-1" />
          <div className="h-6 bg-white dark:bg-[#1e2536] rounded border border-gray-200 dark:border-[#2d384d] p-1 shadow-xs">
            <div className="h-1.5 bg-[#22c55e] rounded w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function DevOpsMockup() {
  return (
    <div className="w-full h-48 bg-[#f8fafc] dark:bg-[#0a0c10] rounded-t-xl border-b border-gray-200 dark:border-[#1f242d] p-3 flex flex-col justify-between overflow-hidden relative group transition-colors duration-300">
      {/* Window Title Bar */}
      <div className="flex items-center gap-1.5 mb-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
      </div>

      {/* Cloud Topology */}
      <div className="flex-1 bg-white dark:bg-[#12151c] rounded-lg border border-gray-200 dark:border-[#1f2633] p-2 flex items-center justify-center relative overflow-hidden shadow-sm transition-colors duration-300">
        {/* Orbital Ring */}
        <div className="w-28 h-28 rounded-full border border-dashed border-gray-300 dark:border-[#2d3950] absolute flex items-center justify-center animate-[spin_30s_linear_infinite]" />

        {/* Central Cloud Node */}
        <div className="w-10 h-10 bg-blue-50 dark:bg-[#1c263b] rounded-full border border-[#3b82f6] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h12a5 5 0 001-9.9M15 13a3 3 0 00-3-3H9a3 3 0 00-3 3" />
          </svg>
        </div>

        {/* Satellites */}
        {/* Top Node */}
        <div className="w-6 h-6 bg-gray-50 dark:bg-[#1a2130] rounded-md border border-gray-200 dark:border-[#2e3a52] absolute top-2 flex items-center justify-center text-[10px] text-cyan-600 dark:text-cyan-400 font-mono shadow-xs">
          &lt;/&gt;
        </div>
        {/* Left Node */}
        <div className="w-6 h-6 bg-gray-50 dark:bg-[#1a2130] rounded-md border border-gray-200 dark:border-[#2e3a52] absolute left-6 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-xs">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        {/* Right Node */}
        <div className="w-6 h-6 bg-gray-50 dark:bg-[#1a2130] rounded-md border border-gray-200 dark:border-[#2e3a52] absolute right-6 flex items-center justify-center text-yellow-600 dark:text-yellow-400 shadow-xs">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        {/* Bottom Node */}
        <div className="w-6 h-6 bg-gray-50 dark:bg-[#1a2130] rounded-md border border-gray-200 dark:border-[#2e3a52] absolute bottom-2 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-xs">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
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
