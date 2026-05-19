# Pebblous Deck Builder (오프라인)

`slides.md` §2/§3/§4/§5/§5-B 명세를 코드로 박제한 pptxgenjs 빌더입니다.
폐쇄망에서 md/pdf 문서를 .pptx 발표자료로 변환할 때 사용합니다.

## 폐쇄망 반입 절차

외부망 PC에서 한 번:

```bash
cd slides/deck-builder
npm install
npm pack pptxgenjs            # pptxgenjs-3.x.tgz 생성 (선택)
tar czf deck-builder.tgz .    # node_modules 포함 전체 묶음
```

`deck-builder.tgz` 를 폐쇄망으로 반입 후:

```bash
tar xzf deck-builder.tgz && cd deck-builder
node build-deck.js example.md
# → example.pptx
```

## 필수 사전 조건

- **Pretendard / TT Firs Neue 시스템 설치**: pptxgenjs 는 폰트를 임베드하지 않습니다.
  발표 PC에 두 폰트가 깔려 있지 않으면 대체 폰트로 렌더링됩니다.
  → `fonts/` 폴더의 `.ttf` 를 PowerPoint 실행 PC에도 설치하세요.
- **SVG 자산**: PowerPoint 2019+ 는 SVG 를 지원하지만 일부 버전에서 깨질 수 있습니다.
  문제가 발생하면 `assets/logos/*.svg`, `assets/pebble/Pebble-*.svg` 를 PNG@2x 로
  변환해 같은 파일명(`.png`)으로 두고, `ppt-template.js` 의 경로 헬퍼를 PNG 로 바꾸세요.

## 마크다운 컨벤션

상세 규약은 [`build-deck.js`](./build-deck.js) 상단 주석 참조.

- `---` frontmatter 에 `coverType` / `title` / `subtitle` / `date` 명시
- `# 섹션명` = 키커 라벨 (상단 좌측 오렌지 텍스트)
- `## 슬라이드 제목` = 본문 슬라이드 한 장
- `- 항목` = 본문 불릿
- `> 강조: ...` = §5-A-4 액센트 블록 (슬라이드당 1회 권장)
- `# 목차` 섹션의 불릿 = TOC 슬라이드 항목

EOD 슬라이드는 자동으로 마지막에 붙습니다.

## 직접 API 호출

빌더를 라이브러리로 쓰는 경우:

```js
const { Deck } = require('./ppt-template');

const deck = new Deck();
deck.addCoverReport({ title: '제목', subtitle: '부제', date: '2026-05-15' });
deck.addTOC(['배경', '제안', '로드맵']);
deck.setBodyTotal(2);

const { slide, area } = deck.addBody({ kicker: '배경', heading: '시장은 이미 움직였습니다' });
slide.addText('자유 콘텐츠', { x: area.x, y: area.y, w: area.w, h: area.h, fontSize: 22 });

deck.addEOD();
await deck.write('out.pptx');
```

## 자가 검증 (slides.md §7)

빌드 후 PowerPoint 로 열어 확인:

- [ ] 커버 → 목차 → 본문 → EOD 순서
- [ ] 본문 5요소(키커·헤딩·로고·페이지번호·기업명) 위치 동일
- [ ] 오렌지는 `#F86825` 한 가지만
- [ ] §5-A 금지 패턴(파스텔 콜아웃 카드, 본문 부분 볼드 흩뿌리기) 없음
- [ ] EOD 의 3종 링크가 클릭되며 각각 `mailto:` / `pebblous.ai` / `dataclinic.ai` 로 이동
