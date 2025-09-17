import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
  });
  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(document.documentElement.classList.contains('dark'));
  };

  return (
  <header className="w-full px-2 sm:px-6 py-3 flex items-center justify-between shadow-xl fixed top-0 left-0 z-40 backdrop-blur-lg bg-opacity-80 rounded-b-2xl border-b border-black/10 dark:border-white/10 transition-all duration-300 animate-fadein" style={{background: 'var(--color-bg-secondary)', backdropFilter: 'var(--color-blur)'}} role="banner">
  <a href="#main" className="font-extrabold text-xl sm:text-2xl tracking-tight focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 rounded-xl px-2 py-1 transition hover:scale-110 hover:shadow-lg active:scale-95 focus:shadow-accent/30" style={{color: 'var(--color-accent)', letterSpacing: '-0.02em'}} tabIndex={0} aria-label="홈으로 이동">
        뮤지코딩 <span className="hidden sm:inline">AI</span>
      </a>
      {/* 중앙에 다크모드 토글 버튼 */}
      <div className="flex-1 flex justify-center">
        <button
          onClick={toggleDark}
          className="px-4 py-1.5 rounded-xl shadow-lg bg-opacity-80 font-semibold text-base transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 hover:scale-110 hover:shadow-accent/30 active:scale-95 focus:shadow-accent/30" style={{background: 'var(--color-bg-secondary)', color: 'var(--color-text)'}}
          aria-label="다크모드 토글"
          aria-pressed={isDark}
        >
          {isDark ? '☀️ 라이트' : '🌙 다크'}
        </button>
      </div>
      {/* 데스크탑 내비게이션 */}
      <nav className="hidden md:flex gap-4 text-base items-center font-medium" aria-label="주요 메뉴">
        <a href="#main" className="px-2 py-1 rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 transition hover:bg-accent/20 hover:scale-110 hover:shadow-lg active:scale-95 focus:shadow-accent/30" style={{color: 'var(--color-text)'}} tabIndex={0}>메인</a>
        <a href="#feedback" className="px-2 py-1 rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 transition hover:bg-accent/20 hover:scale-110 hover:shadow-lg active:scale-95 focus:shadow-accent/30" style={{color: 'var(--color-text)'}} tabIndex={0}>피드백</a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 transition hover:bg-accent/20 hover:scale-110 hover:shadow-lg active:scale-95 focus:shadow-accent/30" style={{color: 'var(--color-text)'}} tabIndex={0}>GitHub</a>
      </nav>
      {/* 모바일 메뉴 버튼 */}
      <button className="md:hidden p-2 rounded-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 text-gray-700 dark:text-gray-200 transition hover:bg-accent/20 hover:scale-110 hover:shadow-lg active:scale-95 focus:shadow-accent/30" aria-label="메뉴 열기" aria-haspopup="true" aria-expanded={open} onClick={() => setOpen(o => !o)}>
        <span className="sr-only">메뉴</span>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      {/* 모바일 내비게이션 드로어 */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex justify-end md:hidden animate-fadein"
          style={{background: 'rgba(0,0,0,0.45)'}}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          {/* 드로어 패널 */}
          <nav
            className="relative w-60 max-w-[92vw] h-full flex flex-col bg-white dark:bg-gray-900 shadow-2xl rounded-l-2xl border-l border-black/10 dark:border-white/10 z-50 animate-slidein"
            style={{marginTop: 'env(safe-area-inset-top, 0px)'}}
            onClick={e => e.stopPropagation()}
            aria-label="모바일 메뉴"
          >
            {/* 상단 헤더 */}
            <div className="flex items-center justify-between px-2 py-1 border-b border-black/10 dark:border-white/10 bg-white dark:bg-gray-900">
              <span className="font-extrabold text-base tracking-tight" style={{color: 'var(--color-accent)'}}>뮤지코딩</span>
              <button
                className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-base focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 rounded transition hover:scale-110 active:scale-95 focus:shadow-accent/30"
                aria-label="메뉴 닫기"
                onClick={() => setOpen(false)}
                style={{background: 'none', boxShadow: 'none', border: 'none', lineHeight: 1}}
              >
                ×
              </button>
            </div>
            {/* 메뉴 항목 */}
            <div className="flex justify-center px-0 pt-0 pb-0">
              <div className="w-full max-w-[96%] bg-white dark:bg-gray-900 shadow-md flex flex-col divide-y divide-black/10 dark:divide-white/10 mt-0">
                <a href="#main" className="py-2 px-2 text-base font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 transition hover:bg-accent/10 active:bg-accent/20" style={{color: 'var(--color-text)'}} tabIndex={0} onClick={() => setOpen(false)}>메인</a>
                <a href="#feedback" className="py-2 px-2 text-base font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 transition hover:bg-accent/10 active:bg-accent/20" style={{color: 'var(--color-text)'}} tabIndex={0} onClick={() => setOpen(false)}>피드백</a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="py-2 px-2 text-base font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 transition hover:bg-accent/10 active:bg-accent/20 rounded-b-2xl" style={{color: 'var(--color-text)'}} tabIndex={0} onClick={() => setOpen(false)}>GitHub</a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}