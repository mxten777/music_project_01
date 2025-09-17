import { useState } from 'react';

export default function UsageGuideModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="fixed bottom-6 right-6 z-50 px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 dark:hover:bg-blue-400 transition-all"
        onClick={() => setOpen(true)}
        aria-label="사용법 보기"
      >
        사용법
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-lg w-full p-6 relative animate-fadein">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-xl"
              onClick={() => setOpen(false)}
              aria-label="닫기"
            >
              ×
            </button>
            <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Storybook 사용법</h2>
            <ol className="list-decimal pl-5 text-sm text-gray-800 dark:text-gray-100 space-y-2">
              <li>우측 하단 <b>사용법</b> 버튼을 클릭하면 이 안내가 열립니다.</li>
              <li>Storybook 실행: <code>pnpm storybook</code> 또는 <code>npm run storybook</code> 명령어를 사용하세요.</li>
              <li>브라우저에서 <code>http://localhost:6006</code> 접속 후, 좌측에서 원하는 컴포넌트를 선택해 UI/동작을 확인할 수 있습니다.</li>
              <li>새 컴포넌트는 <code>src/components/컴포넌트명.stories.tsx</code> 파일을 추가해 문서화할 수 있습니다.</li>
              <li>자세한 내용은 <a href="https://storybook.js.org/docs/react" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-blue-400">공식 문서</a> 참고</li>
            </ol>
          </div>
        </div>
      )}
    </>
  );
}
