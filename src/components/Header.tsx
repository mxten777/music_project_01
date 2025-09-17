import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full px-4 py-3 flex items-center justify-between bg-white/80 dark:bg-gray-900/80 shadow-lg fixed top-0 left-0 z-40 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <a href="#main" className="font-bold text-lg text-blue-600 dark:text-blue-300 tracking-tight focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition" tabIndex={0} aria-label="홈으로 이동">
        뮤지코딩 <span className="hidden sm:inline">AI</span>
      </a>
      {/* 데스크탑 내비게이션 */}
      <nav className="hidden md:flex gap-4 text-sm items-center">
        <a href="#main" className="hover:underline text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition" tabIndex={0}>메인</a>
        <a href="#feedback" className="hover:underline text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition" tabIndex={0}>피드백</a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition" tabIndex={0}>GitHub</a>
      </nav>
      {/* 모바일 메뉴 버튼 */}
      <button className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 dark:text-gray-200" aria-label="메뉴 열기" onClick={() => setOpen(o => !o)}>
        <span className="sr-only">메뉴</span>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      {/* 모바일 내비게이션 드로어 */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-end md:hidden animate-fadein" onClick={() => setOpen(false)}>
          <nav className="bg-white dark:bg-gray-900 w-48 h-full shadow-lg flex flex-col py-8 px-6 gap-4 animate-slidein" onClick={e => e.stopPropagation()} aria-label="모바일 메뉴">
            <button className="self-end mb-4 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl focus:outline-none" aria-label="메뉴 닫기" onClick={() => setOpen(false)}>×</button>
            <a href="#main" className="py-2 hover:underline text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition" tabIndex={0} onClick={() => setOpen(false)}>메인</a>
            <a href="#feedback" className="py-2 hover:underline text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition" tabIndex={0} onClick={() => setOpen(false)}>피드백</a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="py-2 hover:underline text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition" tabIndex={0} onClick={() => setOpen(false)}>GitHub</a>
          </nav>
        </div>
      )}
    </header>
  );
}
