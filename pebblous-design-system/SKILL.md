---
name: pebblous-design
description: Use this skill to generate well-branded interfaces and assets for Pebblous (페블러스) — a Korean AI data-infrastructure company — either for production or throwaway prototypes / decks / mocks. Contains essential design guidelines, orange-first color tokens, Pretendard + TT Firs Neue type, logos, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files — especially `colors_and_type.css` for tokens, `preview/` for visual cards that document every atom of the system, `ui_kits/pebblous-web/` for component recipes, and `slides/` for presentation templates.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out (`fonts/*`, `assets/logos/*`, `colors_and_type.css`) and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (Korean-first vs English-first? marketing page vs product UI vs deck? which product: Data Clinic / PebbloScope / PebbloSim?). UX writing: product is **Data Clinic** (two words, never `DataClinic`); the diagnostic artifact is **Diagnosis Report** (English), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key non-negotiables for this brand:
- Primary orange is `#F86825`. Do not invent new accent colors.
- Type is **Pretendard** (Korean body) + **TT Firs Neue** (display / big numbers). No Inter, no Roboto.
- No gradient walls, no emoji in UI, no bouncy animations. Flat grounds, tight negative letter-spacing, quiet layered shadows.
- Korean copy uses the formal-polite `-ㅂ니다` register; product names stay PascalCase English.

---

## 🛑 발표자료(슬라이드 덱) 작성 시 — 비협상 원칙

발표자료, deck, presentation, PPT, 슬라이드를 만들 때:

1. **반드시 `slides/slides.md`를 먼저 읽고, 그 명세만을 따른다.**
2. **`slides/Slides.jsx`, `slides/index.html`은 절대 템플릿으로 참조하지 않는다.**
   이 파일들은 디자인 시스템 내부의 React 프리뷰 컴포넌트일 뿐이며,
   실제 발표자료 규격(커버/목차/본문 고정 5요소)과 다르다.
3. 특히 **커버 슬라이드와 목차 슬라이드와 EOD 슬라이드**는 `slides.md`의 §2/§3/§4/§5-B를
   픽셀 단위로 따른다 — 배경색, 페블 위치, 워드마크 색상, 폰트 크기 모두.
4. 작성 후 `slides.md` §7 체크리스트로 자가 검증한다.

이 규칙을 어기면 결과물이 브랜드 가이드 위반으로 폐기된다.
