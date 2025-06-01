# MoneyBuddy Frontend 🧭

## 프로젝트 개요

**머니버디**는 사용자 경제 상태와 고민을 입력하면  
전문가가 답변과 맞춤 미션을 제안하는 경제 상담 멘토링 웹 서비스입니다.

- 사용자가 쉽고 빠르게 자신의 경제 고민을 등록할 수 있습니다.
- 전문가가 고민 내용을 확인하고 맞춤형 답변과 미션을 제공합니다.
- 미션 달성 여부에 따라 자동으로 성장 리포트를 생성합니다.
- 사용자는 마이페이지에서 성장 그래프와 히스토리를 한눈에 확인할 수 있습니다.

### 핵심 가치

- 쉽고 편리한 경제 상담 경험 제공
- 개인 맞춤형 미션으로 실질적인 경제 성장 지원
- 성장 과정 시각화로 동기 부여

---

## 📦 현재 기술 스택 및 버전

### 프론트엔드 주요 기술 스택

| 영역            | 기술 스택            | 버전                           | 설명                                           |
| --------------- | -------------------- | ------------------------------ | ---------------------------------------------- |
| 빌드 도구       | Vite                 | 6.3.5                          | 빠르고 가벼운 프론트엔드 빌드 도구             |
| 언어            | React + TypeScript   | React 18.3.1, TypeScript 5.8.3 | UI 라이브러리와 정적 타입을 지원하는 JS 슈퍼셋 |
| 라우팅          | react-router-dom     | 7.6.1                          | SPA 내 페이지 이동 및 라우팅 관리              |
| 상태 관리       | zustand              | 5.0.5                          | 가벼우면서도 직관적인 상태 관리 라이브러리     |
| 폼 관리         | react-hook-form      | 7.56.4                         | 쉽고 효율적인 폼 상태 및 검증 관리             |
| 유효성 검사     | zod                  | 3.25.42                        | 직관적인 스키마 기반 데이터 검증 라이브러리    |
| HTTP 클라이언트 | axios                | 1.9.0                          | Promise 기반 HTTP 요청 라이브러리              |
| 날짜 처리       | dayjs                | 1.11.13                        | 가볍고 빠른 날짜 및 시간 처리 라이브러리       |
| 차트            | recharts             | 2.15.3                         | React용 차트 라이브러리                        |
| 애니메이션      | framer-motion        | 12.15.0                        | React에 최적화된 선언적 애니메이션 라이브러리  |
| 알림            | react-toastify       | 11.0.5                         | 간단한 토스트 알림 메시지 구현 라이브러리      |
| 아이콘          | lucide-react         | 0.511.0                        | 가볍고 사용하기 쉬운 SVG 아이콘 라이브러리     |
| 화면 측정       | react-use-measure    | 2.1.7                          | DOM 요소 크기와 위치 추적 훅                   |
| 슬라이더        | keen-slider          | 6.8.6                          | 터치 지원 모던 슬라이더 라이브러리             |
| UI 컴포넌트     | @headlessui/react    | 2.2.4                          | 접근성 좋은 완전 제어형 UI 컴포넌트 집합       |
| 에러 처리       | react-error-boundary | 6.0.0                          | React 컴포넌트 에러 경계 처리                  |
| SEO 관리        | react-helmet-async   | 2.0.5                          | 서버 사이드 렌더링 지원 SEO 메타태그 관리      |
| 스타일링        | Tailwind CSS         | 4.1.8                          | 유틸리티 클래스 기반 CSS 프레임워크            |
| PostCSS         | postcss              | 8.5.4                          | CSS 후처리기, Tailwind CSS 빌드에 사용됨       |
| CSS 자동접두어  | autoprefixer         | 10.4.21                        | CSS 속성 자동 벤더 프리픽스 추가               |

### 개발 도구 및 린트

| 영역                 | 도구                             | 버전   | 설명                                       |
| -------------------- | -------------------------------- | ------ | ------------------------------------------ |
| ESLint               | eslint                           | 9.27.0 | 자바스크립트/타입스크립트 코드 품질 검사기 |
| ESLint 플러그인      | @typescript-eslint/eslint-plugin | 8.33.0 | TypeScript 지원 ESLint 플러그인            |
| ESLint 파서          | @typescript-eslint/parser        | 8.33.0 | TypeScript 구문 분석기                     |
| Prettier             | prettier                         | 3.5.3  | 코드 포맷팅 도구                           |
| Prettier ESLint 설정 | eslint-config-prettier           | 10.1.5 | ESLint와 Prettier 충돌 방지 설정           |
| Prettier 플러그인    | eslint-plugin-prettier           | 5.4.1  | Prettier 규칙을 ESLint로 통합              |
| React 플러그인       | @vitejs/plugin-react             | 4.5.0  | Vite에서 React 지원을 위한 공식 플러그인   |

## 📁 폴더 구조

| 경로                     | 설명                                            |
| ------------------------ | ----------------------------------------------- |
| `.vscode/settings.json`  | VSCode 공용 세팅 (Prettier, ESLint, Gitmoji 등) |
| `.gitignore`             | Git 버전관리 제외 목록                          |
| `eslint.config.js`       | ESLint 설정 파일                                |
| `vite.config.ts`         | Vite 설정 파일                                  |
| `index.html`             | 루트 HTML 엔트리                                |
| `package.json`           | 패키지 매니저 설정 파일                         |
| `package-lock.json`      | 패키지 버전 잠금 파일                           |
| `tsconfig.json`          | 타입스크립트 전역 설정 파일                     |
| `tsconfig.app.json`      | 앱 전용 타입스크립트 설정 파일                  |
| `tsconfig.node.json`     | Node 전용 타입스크립트 설정 파일                |
| `src/assets/`            | 정적 리소스 (이미지, 폰트 등)                   |
| `src/components/common/` | 공통 컴포넌트 (버튼, 인풋 등 재사용)            |
| `src/components/layout/` | 전체 레이아웃 컴포넌트 (Header, Footer 등)      |
| `src/components/pages/`  | 페이지별 전용 하위 컴포넌트                     |
| `src/data/fakedata/`     | 개발용 더미 데이터                              |
| `src/hooks/`             | 커스텀 훅                                       |
| `src/pages/`             | 라우팅 진입 엔트리 페이지 컴포넌트              |
| `src/routes/`            | 라우터 설정                                     |
| `src/services/api.ts`    | API 통신 로직 (axios 인스턴스)                  |
| `src/stores/`            | 상태관리 (zustand 등)                           |
| `src/types/`             | 타입 및 인터페이스 정의                         |
| `src/utils/Regex.ts`     | 정규표현식 유틸리티                             |
| `src/App.tsx`            | 앱 루트 컴포넌트                                |
| `src/index.css`          | 전역 스타일                                     |
| `src/main.tsx`           | React DOM 렌더링 진입점                         |
| `src/vite-env.d.ts`      | Vite 타입 보조 파일                             |

---

## ✅ 브랜치 네이밍 규칙

- 페이지 단위 기능 개발 기준으로 브랜치 생성
- 포맷: `feature/페이지이름`

| 예시                     | 설명          |
| ------------------------ | ------------- |
| `feature/home`           | 메인 페이지   |
| `feature/login`          | 로그인        |
| `feature/signup`         | 회원가입      |
| `feature/experts`        | 전문가 리스트 |
| `feature/experts-detail` | 전문가 상세   |
| `feature/input`          | 고민 입력     |
| `feature/input-schedule` | 상담 예약     |
| `feature/payment`        | 결제          |
| `feature/consultation`   | 상담방        |
| `feature/mypage`         | 마이페이지    |
| `feature/report`         | 리포트        |

**보조 브랜치**

| 유형     | 형식              | 예시                      |
| -------- | ----------------- | ------------------------- |
| 리팩토링 | `refactor/모듈명` | `refactor/axios-instance` |
| 설정     | `chore/설정명`    | `chore/tailwind-config`   |
| 문서     | `docs/문서명`     | `docs/readme-update`      |

---

## 📝 Gitmoji 커밋 규칙

모든 커밋은 다음 Gitmoji 규칙을 따릅니다.

| 이모지 |       태그       | 설명                  |
| :----: | :--------------: | :-------------------- |
|   ✨   | `[new features]` | 기능 및 코드 추가     |
|   🔥   |    `[remove]`    | 기능 및 코드 제거     |
|   🎨   |   `[styling]`    | 코드의 구조/형태 개선 |
|   ➕   |     `[add]`      | 파일 추가             |
|   ➖   |    `[remove]`    | 파일 제거             |
|   💄   |    `[style]`     | 스타일링              |
|   🏗️   |  `[structure]`   | 프로젝트 구조 변경    |
|   🐛   |     `[fix]`      | 버그 수정             |
|   ♻️   |   `[refactor]`   | 코드 리팩토링         |
|   📝   |     `[doc]`      | 문서 작성 및 편집     |
|   🎉   |     `[init]`     | 프로젝트 초기 설정    |
|   🚀   |    `[deploy]`    | 프로젝트 배포         |

### 커밋 메시지 예시

- `🏗️ [structure] 폴더 구조 변경 및 프로젝트 설정 추가`
- `✨ [new features] 로그인 API 연동 기능 추가`
- `🐛 [fix] 회원가입 폼 유효성 검사 수정`

---

## ✅ Git Flow 전략

| 브랜치      | 역할             |
| ----------- | ---------------- |
| `main`      | 실제 배포 버전   |
| `develop`   | 통합 개발 브랜치 |
| `feature/*` | 기능 개발        |
| `release/*` | 릴리즈 준비      |
| `hotfix/*`  | 긴급 수정        |

---

## ✅ Gitmoji 사용 방법

- 깃모지 사용은 필수이나,
- VSCode Gitmoji 확장 또는 CLI 중 선택하여 사용 가능

```bash
npm install -g gitmoji-cli
gitmoji -c
```

---

## ✅ 필수 VSCode 확장

| 확장명        | 설명                |
| ------------- | ------------------- |
| ESLint        | 린트 검사           |
| Prettier      | 코드 포맷 자동 정리 |
| Spell Checker | 오타 및 변수명 검증 |

---
