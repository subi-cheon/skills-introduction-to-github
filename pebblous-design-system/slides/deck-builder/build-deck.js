// build-deck.js — 입력 문서(.md) → Pebblous 발표자료(.pptx)
//
// 사용법:
//   node build-deck.js <input.md> [output.pptx]
//
// 입력 마크다운 규약 (단순 컨벤션):
//   ---
//   coverType: report          # "ir" | "report"
//   title: 2026 Q1 데이터 클리닉 도입 리포트
//   subtitle: 진단 보고서 자동 생성 파이프라인 도입 결과
//   date: 2026-05-15
//   ---
//
//   # 목차
//   - 시장 배경
//   - Data Clinic 개요
//   - 도입 성과
//   - 다음 단계
//
//   # 시장 배경
//   ## 데이터 품질 비용은 매년 증가합니다
//   - 국내 데이터 운영 인건비 연 12% 증가 추세
//   - 진단 리포트 1건 작성에 평균 3.6시간 소요
//   > 강조: 진단 자동화로 84% 시간 절감 가능
//
//   # Data Clinic 개요
//   ## 한 번의 업로드로 Diagnosis Report 가 자동 생성됩니다
//   - 진입: 파일 업로드 → 자동 스키마 추정
//   - 산출: PDF + 대시보드
//
// 규칙:
//   - "# 섹션" 은 키커(상단 좌측), "## 제목" 은 슬라이드 헤드라인.
//   - "## 제목" 한 개 = 본문 슬라이드 한 장.
//   - "# 목차" 섹션은 §4 목차 슬라이드로 변환되며, 하위 ## 제목은 무시됨.
//   - "> 강조: ..." 줄은 §5-A-4 액센트 블록으로 렌더링.
//   - 마지막에 EOD 슬라이드가 자동으로 붙음.

const fs = require('fs');
const path = require('path');
const { Deck, FONT_KR, INK } = require('./ppt-template');

function parseFrontMatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { meta: {}, body: src };
  const meta = {};
  m[1].split('\n').forEach((line) => {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  });
  return { meta, body: src.slice(m[0].length) };
}

function parseSections(body) {
  // "# 섹션" 단위로 자르고, 각 섹션 안의 "## 제목" 블록을 슬라이드로 본다
  const sections = [];
  let cur = null;
  body.split('\n').forEach((line) => {
    const h1 = line.match(/^#\s+(.+)$/);
    const h2 = line.match(/^##\s+(.+)$/);
    if (h1) {
      cur = { name: h1[1].trim(), slides: [], bullets: [] };
      sections.push(cur);
    } else if (h2 && cur) {
      cur.slides.push({ heading: h2[1].trim(), bullets: [], accents: [] });
    } else if (cur) {
      const slide = cur.slides[cur.slides.length - 1];
      const bullet = line.match(/^\s*[-*]\s+(.+)$/);
      const accent = line.match(/^>\s*(?:강조[:：]\s*)?(.+)$/);
      if (slide) {
        if (accent) slide.accents.push(accent[1].trim());
        else if (bullet) slide.bullets.push(bullet[1].trim());
      } else if (bullet) {
        cur.bullets.push(bullet[1].trim()); // TOC 항목 등
      }
    }
  });
  return sections;
}

async function main() {
  const [, , inputPath, outputPathArg] = process.argv;
  if (!inputPath) {
    console.error('Usage: node build-deck.js <input.md> [output.pptx]');
    process.exit(1);
  }
  const src = fs.readFileSync(inputPath, 'utf8');
  const { meta, body } = parseFrontMatter(src);
  const sections = parseSections(body);

  const deck = new Deck();

  // 1) 커버
  if ((meta.coverType || 'report') === 'ir') {
    deck.addCoverIR({
      tagline: meta.tagline || 'Pebblous Makes Data Tangible',
      slogan: meta.slogan || 'AI Data Doctor',
    });
  } else {
    deck.addCoverReport({
      title: meta.title || path.basename(inputPath, path.extname(inputPath)),
      subtitle: meta.subtitle || '',
      date: meta.date || '',
    });
  }

  // 2) 목차 — "# 목차" 섹션이 있으면 사용, 없으면 섹션명에서 자동 생성
  const tocSection = sections.find((x) => /^목차$/.test(x.name));
  const tocItems = tocSection
    ? tocSection.bullets
    : sections.filter((x) => !/^목차$/.test(x.name)).map((x) => x.name);
  if (tocItems.length) deck.addTOC(tocItems);

  // 3) 본문
  const bodySections = sections.filter((x) => !/^목차$/.test(x.name));
  const totalBodyPages = bodySections.reduce((acc, sec) => acc + sec.slides.length, 0);

  bodySections.forEach((sec) => {
    sec.slides.forEach((sl) => {
      const { slide, area } = deck.addBody({ kicker: sec.name, heading: sl.heading });

      // 불릿 목록
      if (sl.bullets.length) {
        slide.addText(
          sl.bullets.map((t) => ({ text: t, options: { bullet: { code: '25CF' } } })),
          { x: area.x, y: area.y, w: area.w * 0.92,
            h: area.h - (sl.accents.length ? 1.6 : 0),
            fontFace: FONT_KR, fontSize: 22, color: INK, paraSpaceAfter: 8, lineSpacingMultiple: 1.5 },
        );
      }

      // 액센트 블록 (§5-A-4) — 슬라이드당 최대 1회 권장
      if (sl.accents.length) {
        const ay = area.y + area.h - 1.2;
        deck.addAccentBlock(slide, {
          x: area.x, y: ay, w: area.w, h: 1.0,
          caption: '강조',
          body: sl.accents[0],
        });
      }
    });
  });

  // 4) EOD
  deck.addEOD();

  const outFile = outputPathArg || inputPath.replace(/\.md$/i, '') + '.pptx';
  await deck.write(outFile);
  console.log('✔ 산출:', outFile);
  console.log(`  - 본문 ${totalBodyPages} 슬라이드 + 커버 + ${tocItems.length ? '목차 + ' : ''}EOD`);
}

main().catch((e) => { console.error(e); process.exit(1); });
