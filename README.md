# AI 작사·작곡 도우미 (MVP)

Vite + React + TailwindCSS 기반의 시(詩) → 가사/코드/멜로디 자동 변환 웹앱

## 주요 기능
- 시(텍스트) 입력 → 가사 변환
- 엔카/발라드풍 코드 진행 자동 추천
- 샘플 멜로디 오디오 프리뷰 및 다운로드
- 예시 시(가사) 불러오기
- 결과 복사/오디오 다운로드

## 사용법
1. 시를 입력하거나 "예시 불러오기" 버튼 클릭
2. "변환" 버튼 클릭 → 결과(가사, 코드, 멜로디) 확인
3. 결과 복사 및 오디오 다운로드 가능

## 실행 방법
```bash
npm install
npm run dev
```

## 폴더 구조
```
src/
  components/   # UI 컴포넌트
  pages/        # 주요 페이지
  utils/        # 유틸 함수/샘플 데이터
```

## 향후 확장 예정
- Firebase 연동(로그인, 작품 저장)
- AI API 연동(실제 작사/작곡)
- 작품 공유/다운로드/랭킹 등

---

> 본 프로젝트는 MVP(최소기능제품) 예시입니다.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
