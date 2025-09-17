export default function Footer() {
  return (
  <footer className="w-full px-2 sm:px-6 py-7 text-xs text-center mt-14 shadow-inner rounded-t-2xl border-t border-black/10 dark:border-white/10 transition-all duration-300 animate-fadein backdrop-blur-lg bg-opacity-80 hover:shadow-lg hover:scale-[1.01] focus-within:shadow-accent/30" style={{background: 'var(--color-bg-secondary)', backdropFilter: 'var(--color-blur)'}}>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
        <span className="font-bold tracking-tight text-base sm:text-lg" style={{color: 'var(--color-accent)'}}>© 2025 뮤지코딩</span>
        <span className="hidden sm:inline">|</span>
        <span className="text-gray-500 dark:text-gray-400">AI 작사·작곡 도우미</span>
        <span className="hidden sm:inline">|</span>
  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="underline px-2 py-1 rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 transition hover:bg-accent/20 hover:text-accent hover:scale-110 hover:shadow-lg active:scale-95 focus:shadow-accent/30" style={{color: 'var(--color-accent)'}} aria-label="GitHub">GitHub</a>
      </div>
      <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-400 dark:text-gray-500">
  <span>문의: <a href="mailto:musicoding@example.com" className="underline px-1 rounded focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 transition hover:text-accent hover:scale-110 hover:shadow-lg active:scale-95 focus:shadow-accent/30">musicoding@example.com</a></span>
        <span className="hidden sm:inline">|</span>
        <span>Made with <span className="animate-pulse text-pink-500">♥</span> by AI</span>
      </div>
    </footer>
  );
}
