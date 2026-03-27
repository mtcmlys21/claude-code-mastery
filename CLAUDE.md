# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 프로젝트 개요

개발자 웹 이력서 포트폴리오 사이트를 개발하는 프로젝트입니다. HTML, CSS, JavaScript, Tailwind CSS를 활용하여 반응형 웹 이력서를 구축합니다.

**개발 ROADMAP**: `ROADMAP.md` 파일 참고

---

## 언어 및 커뮤니케이션 규칙

### 기본 원칙
- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

### 예시
```javascript
// 올바른 예시
const calculateAge = (birthYear) => {
  // 현재 연도와 출생 연도로 나이 계산
  return new Date().getFullYear() - birthYear;
};
```

---

## 기술 스택

| 항목 | 기술 |
|------|------|
| **마크업** | HTML5 (시맨틱 마크업) |
| **스타일링** | CSS3 + Tailwind CSS |
| **스크립트** | JavaScript (Vanilla) |
| **배포** | GitHub Pages 또는 웹호스팅 |

---

## 프로젝트 구조

```
claude-code-mastery/
├── CLAUDE.md              # 이 파일 (개발 가이드)
├── ROADMAP.md             # 프로젝트 개발 계획
├── index.html             # 메인 이력서 페이지
├── css/
│   └── styles.css         # 커스텀 스타일 (Tailwind 보완)
├── js/
│   ├── main.js            # 메인 스크립트
│   └── utils.js           # 유틸리티 함수
└── assets/
    ├── images/            # 프로필 사진 등 이미지
    └── icons/             # 아이콘 (소셜 미디어 등)
```

---

## 개발 환경 설정

### 필수 요구사항
- 최신 웹 브라우저 (Chrome, Firefox, Safari, Edge)
- 텍스트 에디터 (VS Code 권장)
- Git

### Tailwind CSS 설정
- **CDN 방식** (초기 개발): HTML에 CDN 링크 추가
  ```html
  <script src="https://cdn.tailwindcss.com"></script>
  ```
- **로컬 설정** (프로덕션): npm/npx를 통한 로컬 설치

---

## 일반적인 개발 명령어

### 로컬 서버 실행
```bash
# Python 설치된 경우
python -m http.server 8000

# Node.js 설치된 경우
npx http-server
```
브라우저에서 `http://localhost:8000` 접속

### 파일 변경 감시 (Tailwind CSS 컴파일)
```bash
# Node.js 환경 설정 후
npx tailwindcss -i ./css/input.css -o ./css/styles.css --watch
```

### 성능 검사
```bash
# Google Lighthouse 사용 (브라우저 DevTools)
# 혹은 온라인: https://pagespeed.web.dev/
```

---

## 개발 가이드라인

### 마크업 (HTML)
- **시맨틱 태그** 사용: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` 등
- **접근성**: 모든 이미지에 `alt` 속성 필수, ARIA 레이블 고려
- **메타 태그**: SEO를 위한 기본 메타 태그 포함

### 스타일링 (CSS + Tailwind CSS)
- **Tailwind CSS 우선 사용**: 유틸리티 클래스로 스타일링
- **커스텀 CSS는 최소화**: 필요시에만 `css/styles.css`에 추가
- **반응형 디자인**:
  - Mobile-first 접근법
  - 중단점: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
  - 예: `text-sm md:text-base lg:text-lg`

### JavaScript
- **Vanilla JavaScript** 사용 (프레임워크 없음)
- **DOM 조작**: `document.querySelector()`, `addEventListener()` 사용
- **이벤트 위임** 활용하여 성능 최적화
- **비동기 처리**: 필요시 `fetch()` API 사용
- **주석**: 복잡한 로직에는 한국어 주석 추가

### 커밋 메시지 규칙
- **포맷**: `[타입] 변경 내용`
- **타입**:
  - `feat`: 새로운 기능
  - `fix`: 버그 수정
  - `style`: 스타일 변경 (마크업/CSS)
  - `refactor`: 코드 리팩토링
  - `docs`: 문서 추가/수정
- **예시**:
  ```
  feat: 다크모드 토글 기능 추가
  fix: 모바일 메뉴 레이아웃 버그 수정
  style: Tailwind 색상 팔레트 업데이트
  ```

---

## 브라우저 지원

| 브라우저 | 지원 버전 |
|---------|---------|
| Chrome | 최신 2개 버전 |
| Firefox | 최신 2개 버전 |
| Safari | 최신 2개 버전 |
| Edge | 최신 2개 버전 |

---

## 성능 최적화 팁

- **이미지 최적화**: WebP 형식 사용, 적절한 크기로 리사이징
- **CSS/JS 최소화**: 프로덕션 배포 시
- **폰트 로딩**: `font-display: swap` 사용하여 FOIT 방지
- **스크롤 성능**: 복잡한 애니메이션은 `will-change` 속성 활용

---

## 배포 체크리스트

- [ ] 모든 링크 정상 작동 확인
- [ ] 반응형 디자인 테스트 (모바일, 태블릿, 데스크톱)
- [ ] Lighthouse 성능 점수 확인 (90 이상 목표)
- [ ] SEO 메타 태그 설정 완료
- [ ] 모든 이미지에 alt 텍스트 추가
- [ ] 콘솔 에러/경고 없음 확인
- [ ] 크로스 브라우저 테스트 완료
