# CLAUDE.md — Pebblous Design System

이 디렉터리는 **페블러스(Pebblous, pebblous.ai)** 의 디자인 시스템·발표자료·UI 키트가 모인 단일 소스 오브 트루스입니다. 한국 AI 데이터 인프라 회사이며, 모든 산출물은 한국어 우선으로 작성됩니다.

## 🛑 비협상 원칙 — 어떤 산출물에서도 절대 어기지 않는다

1. **오렌지는 `#F86825` 한 가지만 사용한다.** 새 액센트 컬러를 만들지 않는다. 호버는 어둡게(`#C64900`/`#923401`), 소프트는 따뜻한 크림(`#FFF0E6`/`#FFF9F5`).
2. **폰트는 Pretendard(한국어 본문) + TT Firs Neue(디스플레이/큰 숫자) 조합만.** Inter, Roboto, 시스템 산세리프 금지.
3. **한국어는 `-ㅂ니다 / -습니다` 격식체.** 마케팅·발표·문서 모두 동일. UI 마이크로카피만 `-요` 허용.
4. **제품명은 영문 PascalCase 유지.** `Data Clinic` (두 단어, `DataClinic` 금지), `PebbloScope`, `PebbloSim`, `Data Greenhouse`. 진단 산출물은 영문 `Diagnosis Report`.
5. **금지 시각 패턴**: 그라데이션 벽 / 이모지 (브랜드 마스코트 🍊 제외, UI/슬라이드에 사용 금지) / AI 글로시 3D 렌더 / 통통 튀는 애니메이션 / 스톡 사진 / 파스텔 톤 콜아웃 카드(자세히는 [`slides/slides.md`](slides/slides.md) §5-A 참조).
6. **플랫 그라운드 + 조용한 다중 레이어 그림자**. 글로시 드롭섀도우·인너 섀도우 금지. 큰 숫자에는 음수 자간(`-0.025em ~ -0.04em`).

## 디렉터리 맵

| 경로 | 무엇이 있는가 | 언제 보는가 |
|---|---|---|
| [`SKILL.md`](SKILL.md) | 스킬 진입점. 사용자 친화적 요약 + 발표자료 작성 시 비협상 원칙 | `pebblous-design` 스킬 호출 시 |
| [`project/README.md`](project/README.md) | 브랜드 백서. 톤·컬러·타이포·간격·애니메이션 등 시각/카피 파운데이션 전체 | 디자인 의사결정 근거가 필요할 때 |
| [`colors_and_type.css`](colors_and_type.css) | CSS 토큰 (컬러·타입). Figma `/Color/Definition`, `/Typography/Section-1` 에서 추출 | 코드로 토큰을 적용할 때 |
| [`fonts/`](fonts/) | Pretendard 전 weight + TT Firs Neue Variable `.otf` | 산출물에 폰트 동봉 / 시스템 설치 안내 |
| [`assets/logos/`](assets/logos/) | `Pebblous_orange/white/black` 워드마크 PNG·SVG, 제품 로고 SVG | 모든 워드마크 사용 |
| [`assets/pebble/`](assets/pebble/) | 페블 셰이프 (`Pebble-1~9, 13, 99`). 슬라이드 배경·장식용 | 페블 모티프가 필요할 때 |
| [`assets/pebbly/`](assets/pebbly/) | 얼굴이 있는 캐릭터 페블이. **슬라이드 배경에는 사용 금지** | 캐릭터 일러스트 필요 시만 |
| [`brand/Wordmark.jsx`](brand/Wordmark.jsx) | 워드마크 React 컴포넌트 | 코드 임베드 |
| [`preview/*.html`](preview/) | 토큰별 비주얼 카드(컬러·타입·라디우스·섀도우·버튼·카드·네비 등 19종) | 디자인 시스템 시각 레퍼런스 |
| [`src/styles/design-tokens.css`](src/styles/design-tokens.css), [`src/theme/`](src/theme/) | CSS 토큰 + MUI 테마(팔레트·타이포·그림자) | 프로덕션 React 코드에 토큰 주입 |
| [`ui_kits/pebblous-web/`](ui_kits/pebblous-web/) | 마케팅 사이트 픽셀 재현 (Header/Hero/Products/StatsFooter) | 마케팅 UI 패턴 참고 |
| [`slides/slides.md`](slides/slides.md) | **발표자료 픽셀 단위 명세** — 커버 2종, 목차, 본문 5요소, EOD | 슬라이드 덱을 만들 때 1순위로 본다 |
| [`slides/{cover-ir,cover-external-report,table-of-contents,body,eod}.jpg`](slides/) | 슬라이드 레퍼런스 이미지 — `slides.md` 의 시각 기준 | 명세 해석이 모호할 때 |
| [`slides/deck-builder/`](slides/deck-builder/) | 폐쇄망용 pptxgenjs 빌더. `.md → .pptx` | 발표자료를 자동 생성할 때 |
| `slides/Slides.jsx`, `slides/index.html` | **참조 금지.** 디자인 시스템 내부 React 프리뷰일 뿐, 발표자료 규격과 다름 | — |

## 발표자료(슬라이드 덱)를 만들 때

1. **반드시 [`slides/slides.md`](slides/slides.md) 를 먼저 읽고 그 명세만 따른다.** `slides/Slides.jsx`·`index.html` 은 템플릿이 아니다.
2. 커버 선택은 자료 성격에 따른다 — IR/회사소개는 §2 (화이트 배경 + 풀 워드마크), 내부/외부 리포트는 §3 (오렌지 풀블리드 + 중앙 페블 10% 화이트 오버레이).
3. 본문 슬라이드의 **5가지 고정 요소**(부제목·제목·로고·페이지 번호·기업명) 위치는 절대 변경 금지. 제목 박스의 세로 정렬은 **'위쪽'** 고정 (2줄 헤딩이 부제목과 좁아붙는 사고 방지). 페이지 번호는 **zero-pad / 전체 페이지 없이** 정수만 (예: `2`).
4. **§5-A 금지 패턴**: 파스텔 콜아웃 카드, 본문 부분 볼드 흩뿌리기, 키커 라벨 오남용. AI 도구의 기본값으로 만들어지는 "그럴듯한 박스" — 한 건도 허용 안 함.
5. 마지막 슬라이드는 §5-B EOD: 화이트 배경 + 오렌지 `Thank you.`(마침표 포함) + `contact@pebblous.ai · pebblous.ai · dataclinic.ai` 3종 하이퍼링크 (순서·구분자 고정).
6. 작성 후 [`slides.md` §7 체크리스트](slides/slides.md)로 자가 검증.

### 빌더로 자동 생성 (md → pptx)

폐쇄망에서 사용자가 .md 문서를 주면 [`slides/deck-builder/`](slides/deck-builder/) 의 pptxgenjs 빌더로 변환한다.

```bash
cd slides/deck-builder
npm install                       # 1회
node rasterize-assets.js          # 1회 (자산 변경 시만 — Pebble-9 알파 10% 베이크)
node build-deck.js input.md       # 매번
```

빌더는 `slides.md` §2/§3/§4/§5/§5-A-4/§5-B 명세를 코드로 박제하고 있어, 호출자가 명세를 어길 여지가 없도록 5요소 위치·하이퍼링크 순서·페이지번호 포맷을 강제한다. 자세한 마크다운 컨벤션은 [`slides/deck-builder/README.md`](slides/deck-builder/README.md) 와 [`build-deck.js`](slides/deck-builder/build-deck.js) 상단 주석 참조.

## 카피 톤 빠른 참고

- 헤드라인은 5~12자, 종종 대조 구조: *"데이터가 제 역할을 해내도록."*
- 본문 ≤ 2줄/문단.
- "저희"는 거의 쓰지 않는다. 세계를 묘사하듯 쓴다 ("AI가…", "데이터가…").
- 큰 숫자는 콤마 없이 TT Firs Neue 디스플레이로: `57.2M`, `99.4%`, `24/7`. `57,200,000` 같은 표기 피하기.
- 영문 ALL-CAPS 는 UI 아이브로우 라벨에만 (`OUR PRODUCTS`, `SUMMARY`). 문장은 절대 ALL-CAPS 금지.

## 자주 헷갈리는 것

- 라이트 피치 `#FBE7D9` 는 **§4 목차 슬라이드 배경 전용**. 본문 콜아웃 박스 색으로 끌어내리지 말 것.
- 보라 액센트 `#9747FF`/`#6541F2` 는 Figma 에디토리얼 스트로크에만 등장. 제품 컬러 아님.
- 캐릭터 페블이(`assets/pebbly/`)와 페블 셰이프(`assets/pebble/`)는 별개. 슬라이드 배경에 페블이 캐릭터 금지.
- 보더가 그림자보다 우선. `1px solid #EAEBEC` 디바이더가 워크호스.

## 외부 소스

- **Figma**: `🍊 Pebblous Design System.fig` (19 페이지). 디자인 토큰의 원천. 변경이 의심되면 Figma 가 진실.
- **코드베이스 없음**: 이 디렉터리가 유일한 코드 표현. UI 키트·슬라이드 빌더 모두 Figma의 시각 언어를 코드로 재현한 것.
