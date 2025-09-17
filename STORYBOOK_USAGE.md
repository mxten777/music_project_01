# Storybook 사용법

## 1. Storybook 실행

프로젝트 루트에서 아래 명령어를 실행하세요:

```
pnpm storybook
```
또는
```
npm run storybook
```

실행 후 브라우저에서 자동으로 열리거나, 아래 주소로 접속합니다:

```
http://localhost:6006
```

## 2. 컴포넌트 스토리 확인

- 좌측 패널에서 `Components` → 원하는 컴포넌트(예: `PoemInput`)를 클릭
- 실제 UI와 동작을 바로 확인할 수 있습니다
- props, 상태 등을 playground에서 조작해볼 수 있습니다

## 3. 스토리 파일 추가/수정

- 새 컴포넌트에 대해 `src/components/컴포넌트명.stories.tsx` 파일을 추가
- 예시 코드는 `PoemInput.stories.tsx` 참고

## 4. 변경사항 반영

- 스토리 파일을 수정하면 Storybook이 자동으로 반영합니다
- 반영이 안 되면 Storybook 서버를 재시작하세요

## 5. 기타

- Storybook은 컴포넌트 UI/동작 테스트, 문서화, 디자인 시스템 구축에 유용합니다
- 더 자세한 내용은 https://storybook.js.org/docs/react 참고
