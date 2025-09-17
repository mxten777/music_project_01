# AI 작사·작곡 도우미 MVP 설계서

## 1. 프로젝트 개요
- 시(텍스트)를 입력하면 → 가사로 변환 → 코드 진행 추천 → 샘플 멜로디 프리뷰를 제공하는 웹앱
- Vite + React + TailwindCSS 기반, Firebase(추후 연동)

## 2. 주요 기능
1. 시 텍스트 입력 및 가사 변환
2. 코드 진행(Am–F–C–G 등) 자동 추천
3. 샘플 멜로디(오디오/MIDI) 프리뷰
4. (추후) 로그인/작품 저장/공유 등

## 3. 폴더 구조(초안)
```
src/
  components/   # UI 컴포넌트
  pages/        # 주요 페이지
  utils/        # 유틸 함수/AI API 연동
  App.tsx       # 루트 컴포넌트
  main.tsx      # 진입점
  index.css     # TailwindCSS
```

## 4. 주요 컴포넌트/페이지 설계
- pages/MainPage.tsx : 메인(시 입력, 변환 결과, 프리뷰)
- components/PoemInput.tsx : 시 입력 폼
- components/LyricsResult.tsx : 변환된 가사/코드/멜로디 결과
- components/AudioPreview.tsx : 샘플 멜로디 프리뷰
- utils/lyricHelper.ts : 시→가사 변환/코드 추천 로직(샘플)

## 5. MVP 플로우
1. 사용자가 시 입력
2. [변환] 버튼 클릭 → 가사/코드/멜로디 샘플 생성
3. 결과/프리뷰 표시

## 6. 향후 확장(예정)
- Firebase 연동(로그인, DB)
- AI API 연동(실제 작사/작곡)
- 작품 저장/공유/다운로드

---

> 이 설계서를 바탕으로 폴더/파일 생성 및 MVP 기능 구현을 진행합니다.
