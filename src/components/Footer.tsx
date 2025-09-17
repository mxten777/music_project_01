export default function Footer() {
  return (
    <footer className="w-full px-4 py-6 bg-white/80 dark:bg-gray-900/80 border-t border-gray-200 dark:border-gray-800 text-xs text-center text-gray-500 dark:text-gray-400 mt-10 shadow-inner transition-all duration-300 animate-fadein">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
        <span className="font-semibold text-blue-600 dark:text-blue-300 tracking-tight">© 2025 뮤지코딩</span>
        <span className="hidden sm:inline">|</span>
        <span>AI 작사·작곡 도우미</span>
        <span className="hidden sm:inline">|</span>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition" aria-label="GitHub">GitHub</a>
      </div>
      <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-400 dark:text-gray-500">
        <span>문의: <a href="mailto:musicoding@example.com" className="underline hover:text-blue-600 dark:hover:text-blue-400">musicoding@example.com</a></span>
        <span className="hidden sm:inline">|</span>
        <span>Made with <span className="animate-pulse text-pink-500">♥</span> by AI</span>
      </div>
    </footer>
  );
}
