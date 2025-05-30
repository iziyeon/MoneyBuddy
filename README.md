# MoneyBuddy Frontend 🧭

머니버디 프로젝트 프론트엔드 레포지토리입니다.

---

## 📦 현재 기술 스택

| 영역   | 스택               |
| ------ | ------------------ |
| 빌드툴 | Vite               |
| 언어   | React + TypeScript |

---

## 📁 폴더 구조

src/
assets/ # 정적 리소스 (이미지, 폰트 등)
components/
common/ # 공통 컴포넌트
layout/ # 레이아웃 전용 컴포넌트 (Header, Footer 등)
pages/ # 페이지별 전용 컴포넌트
data/ # 더미 데이터 및 임시 데이터
fakedata/
hooks/ # 커스텀 훅
pages/ # 라우팅 진입 엔트리
routes/ # 라우터 관리 (라우팅 모듈 분리)
services/ # API 통신 로직
api.ts
stores/ # 상태관리 (zustand 등 → 여기로 통합)
types/ # 타입 정의 (interface, DTO 등)
utils/ # 유틸리티 함수 모음
Regex.ts # 정규표현식 관리
App.tsx
index.css
main.tsx
vite-env.d.ts

---

## ✅ 커밋 컨벤션 (Gitmoji)

| 이모지 | 코드                 | 설명               |
| ------ | -------------------- | ------------------ |
| 🎉     | `:tada:`             | 프로젝트 초기 세팅 |
| ✨     | `:sparkles:`         | 기능 추가          |
| 🔥     | `:fire:`             | 코드/파일 제거     |
| 🎨     | `:art:`              | 코드 구조 개선     |
| ➕     | `:heavy_plus_sign:`  | 파일 추가          |
| ➖     | `:heavy_minus_sign:` | 파일 제거          |
| 💄     | `:lipstick:`         | UI 스타일 수정     |
| 🏗️     | `:card_file_box:`    | 프로젝트 구조 변경 |
| 🐛     | `:bug:`              | 버그 수정          |
| ♻️     | `:recycle:`          | 리팩토링           |
| 📝     | `:memo:`             | 문서 작성 및 수정  |
| 🚀     | `:rocket:`           | 배포               |

- VSCode Gitmoji 확장 프로그램 사용 권장

---

## ✅ 브랜치 네이밍 규칙

- 브랜치는 페이지 단위 기능 개발 기준으로 생성
- 포맷: `feature/페이지이름`

| 예시                     |               |
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

- VSCode Gitmoji 확장 설치 → GUI 커밋 가능 (필수)
- CLI 사용시 (선택)

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
| Gitmoji       | 이모지 커밋 지원    |

> 📌 이 4개 확장은 개발 초기부터 모든 팀원이 필수로 설치해야 합니다.

---

## ✅ 협업 규칙 요약

- 패키지 설치 시 `^` 제거 (버전 고정 유지)
- 폴더 구조 기능 단위 분리 원칙 철저히 유지
- 커밋 컨벤션 (Gitmoji) 전원 동일 적용
- Git Flow 브랜치 전략으로 협업

---
