# CONTENT WORKFLOW GUIDE

Cloudflare Pages에 배포할 정적 사이트를 장기 운영하기 위한 파일 정리/콘텐츠 발행 지침서입니다.

## 1) 목표

- 사용자에게 실제로 도움이 되는 독창적 콘텐츠를 지속 발행한다.
- 탐색이 쉽고 신뢰 가능한 페이지 구조를 유지한다.
- 발행 후 주기적으로 업데이트하여 품질을 높인다.

## 2) 현재 파일 구조 (MVP)

```text
/
  index.html
  styles.css
  script.js
  CONTENT_WORKFLOW.md
```

## 3) 추천 확장 구조 (콘텐츠 증가 시)

```text
/
  index.html
  styles.css
  script.js
  /pages
    article-template.html
  /posts
    2026-03-user-content-checklist.md
    2026-03-ad-layout-principles.md
  /data
    posts.json
  /assets
    /images
    /icons
  CONTENT_WORKFLOW.md
```

## 4) 파일 네이밍 규칙

- HTML/CSS/JS 파일: 소문자 + kebab-case
  - 예: `article-template.html`
- 포스트 파일: `YYYY-MM-slug.md`
  - 예: `2026-03-content-quality-routine.md`
- 이미지 파일: `YYYYMM-topic-shortdesc.ext`
  - 예: `202603-quality-checklist-cover.webp`

## 5) 콘텐츠 작성 원칙

- 독창성: 다른 글 복제/재작성보다 직접 경험/분석 중심으로 작성
- 유용성: 독자 질문에 명확한 답 제공, 불필요한 장문 지양
- 신뢰성: 주장/수치/정책성 정보는 출처 확인 후 작성
- 가독성: 짧은 문단, 소제목, 목록 활용
- 경험 우선: 광고/배너보다 본문 접근성과 정보 전달 우선

## 6) 발행 프로세스

1. 아이디어 수집: 독자 질문, 검색 의도, 기존 글의 공백 확인
2. 초안 작성: 문제 정의 -> 해결 방법 -> 예시 -> 결론 구조
3. 품질 점검:
   - 중복 콘텐츠 여부
   - 제목/본문 일치 여부
   - 초보자도 이해 가능한지
   - 모바일에서 읽기 쉬운지
4. 업로드: 관련 파일명 규칙 준수 후 배포
5. 업데이트: 발행 2~4주 내 정보 최신성 재검토

## 7) 운영 체크리스트

- [ ] 제목이 과장형 클릭 유도 문구가 아닌가?
- [ ] 본문이 제목의 질문에 실제로 답하는가?
- [ ] 핵심 정보가 첫 화면(상단)에서 바로 보이는가?
- [ ] 광고/외부 링크가 독서 흐름을 방해하지 않는가?
- [ ] 오래된 정보(가격/정책/버전)가 남아 있지 않은가?

## 8) Cloudflare 배포 메모

- 정적 파일만으로 배포 가능
- 루트의 `index.html`이 기본 엔트리
- CSS/JS 경로는 상대경로(`./styles.css`, `./script.js`) 유지

## 9) 참고 자료

- [고품질 사이트를 만들기 위한 도움말](https://adsense-ko.googleblog.com/2012/04/blog-post_25.html)
- [고품질 사이트를 만들기 위한 도움말 2부](https://adsense-ko.googleblog.com/2012/09/2.html)
