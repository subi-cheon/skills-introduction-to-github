// Pebblous deck builder — pptxgenjs 기반
// slides.md §2/§3/§4/§5/§5-B 명세를 코드로 박제한 빌더.
// 인터넷 없는 환경에서 npm pack 으로 배포하여 사용.

const PptxGenJS = require('pptxgenjs');
const path = require('path');

const ORANGE = 'F86825';
const INK = '1A1A1A';
const GRAY = '8A8A8A';
const PEACH = 'FBE7D9';
const WHITE = 'FFFFFF';

const FONT_KR = 'Pretendard';
const FONT_EN = 'TT Firs Neue';

// 16:9 — pptxgenjs LAYOUT_WIDE = 13.333" x 7.5"
const W = 13.333;
const H = 7.5;

// 자산은 사용자 제공 PNG 를 1차 소스로 사용 (assets/logos/*.png, assets/pebble/*.png).
// §3 오렌지 커버용 화이트 10% 알파 페블만 rasterize-assets.js 가 assets-png/ 캐시에 생성.
const fs = require('fs');
const ASSETS = path.resolve(__dirname, '../../assets');
const PNG_CACHE = path.resolve(__dirname, 'assets-png');

const LOGO_ORANGE = path.join(ASSETS, 'logos/Pebblous_orange.png');
const LOGO_WHITE = path.join(ASSETS, 'logos/Pebblous_white.png');
// 워드마크 PNG 가로:세로 비율 (965 x 129)
const LOGO_RATIO = 129 / 965;
const logoH = (w) => +(w * LOGO_RATIO).toFixed(3);

// 기본 페블: 오렌지 솔리드. §2 IR 커버 / §4 TOC 에서 사용.
const PEBBLE = (n = 99) => path.join(ASSETS, `pebble/Pebble-${n}.png`);
// §3 오렌지 커버 전용: Pebble-9 (화이트 실루엣) 을 알파 10% 로 베이크한 변형.
const PEBBLE_WHITE = () => {
  const baked = path.join(PNG_CACHE, 'pebble/Pebble-9_alpha10.png');
  return fs.existsSync(baked) ? baked : path.join(ASSETS, 'pebble/Pebble-9.png');
};

class Deck {
  constructor({ author = '페블러스' } = {}) {
    const pptx = new PptxGenJS();
    pptx.layout = 'LAYOUT_WIDE';
    pptx.author = author;
    pptx.company = '페블러스';
    this.pptx = pptx;
    this.bodyPage = 0; // 본문 페이지 카운터 (커버/목차/EOD 제외)
  }

  // §2 IR 커버 — 화이트 배경, 워드마크 주인공
  addCoverIR({ tagline = 'Pebblous Makes Data Tangible', slogan = 'AI Data Doctor', pebble = 99 } = {}) {
    const s = this.pptx.addSlide();
    s.background = { color: WHITE };

    s.addText(tagline, { x: 0.6, y: 0.45, w: 6, h: 0.4,
      fontFace: FONT_KR, fontSize: 14, color: ORANGE, bold: false });
    s.addText('Pebblous.ai', { x: W - 2.2, y: 0.45, w: 1.7, h: 0.4, align: 'right',
      fontFace: FONT_KR, fontSize: 14, color: ORANGE });

    // 페블 — 우측, 캔버스 우단을 넘어 클리핑 (높이의 ~90%)
    const ph = H * 0.9;
    s.addImage({ path: PEBBLE(pebble), x: W - ph * 0.55, y: (H - ph) / 2, w: ph, h: ph });

    // 워드마크 — 하단 좌측, 너비 ~50%
    const ww = W * 0.5;
    s.addImage({ path: LOGO_ORANGE, x: 0.6, y: H - 1.6, w: ww, h: logoH(ww) });
    s.addText(slogan, { x: 0.6, y: H - 1.0, w: ww, h: 0.5,
      fontFace: FONT_KR, fontSize: 18, color: ORANGE });
    return s;
  }

  // §3 내부/외부 리포트 커버 — 오렌지 풀블리드
  addCoverReport({ title, subtitle = '', date = '', publisher = '페블러스' } = {}) {
    if (!title) throw new Error('addCoverReport: title 필수');
    const s = this.pptx.addSlide();
    s.background = { color: ORANGE };

    // 워드마크(화이트) — 상단 좌측, 너비 ~15%
    const ww = W * 0.15;
    s.addImage({ path: LOGO_WHITE, x: 0.6, y: 0.5, w: ww, h: logoH(ww) });
    s.addText('Pebblous Make Data Tangible', { x: W - 5, y: 0.55, w: 4.4, h: 0.5, align: 'right',
      fontFace: FONT_EN, fontSize: 18, color: WHITE });

    // 페블 — 정중앙 800x800px ≈ 5.55". 화이트 변형을 §3의 "opacity 0.1 화이트 오버레이"로 사용.
    const pSize = 5.55;
    s.addImage({
      path: PEBBLE_WHITE(),
      x: (W - pSize) / 2, y: (H - pSize) / 2, w: pSize, h: pSize,
      rotate: -8,
    });

    // 메인/서브 타이틀 — 좌측 중단
    s.addText(title, { x: 0.6, y: H * 0.5 - 0.9, w: W - 1.2, h: 1.2,
      fontFace: FONT_KR, fontSize: 54, color: WHITE, bold: true });
    if (subtitle) {
      s.addText(subtitle, { x: 0.6, y: H * 0.5 + 0.5, w: W - 1.2, h: 0.6,
        fontFace: FONT_KR, fontSize: 20, color: WHITE });
    }

    // 발행일 / 발행처 — 하단 우측
    if (date) s.addText(date, { x: W - 3.6, y: H - 1.2, w: 3.0, h: 0.4, align: 'right',
      fontFace: FONT_KR, fontSize: 18, color: WHITE });
    s.addText(publisher, { x: W - 3.6, y: H - 0.8, w: 3.0, h: 0.4, align: 'right',
      fontFace: FONT_KR, fontSize: 18, color: WHITE, bold: true });
    return s;
  }

  // §4 목차 — 라이트 피치 배경, "목차" 라벨 금지
  addTOC(items, { pebble = 99 } = {}) {
    if (!Array.isArray(items) || !items.length) throw new Error('addTOC: items 배열 필수');
    if (items.length > 7) console.warn('addTOC: 목차 항목 7개 초과 — 카테고리로 묶는 것을 권장 (§4)');

    const s = this.pptx.addSlide();
    s.background = { color: PEACH };

    s.addImage({ path: LOGO_ORANGE, x: 0.6, y: 0.5, w: W * 0.15, h: logoH(W * 0.15) });

    const ph = H * 0.7;
    s.addImage({ path: PEBBLE(pebble), x: W - ph * 0.7, y: (H - ph) / 2, w: ph, h: ph, transparency: 70 });

    const startY = H * 0.32;
    const gap = 0.7;
    items.forEach((label, i) => {
      const idx = String(i + 1).padStart(2, '0');
      s.addText([
        { text: idx + '   ', options: { fontFace: FONT_EN, fontSize: 24, color: ORANGE } },
        { text: label,       options: { fontFace: FONT_KR, fontSize: 24, color: INK, bold: true } },
      ], { x: 0.8, y: startY + i * gap, w: W * 0.55, h: 0.6 });
    });
    return s;
  }

  // §5 본문 — 5요소 자동 배치 후 콘텐츠 영역(rect) 반환
  // usage: const { slide, area } = deck.addBody({ kicker, heading });
  //        slide.addText('...', { x: area.x, y: area.y, w: area.w, h: area.h, ... });
  addBody({ kicker, heading } = {}) {
    if (!heading) throw new Error('addBody: heading 필수');
    this.bodyPage += 1;
    const s = this.pptx.addSlide();
    s.background = { color: WHITE };

    if (kicker) s.addText(kicker, { x: 0.6, y: 0.55, w: W - 3, h: 0.35,
      fontFace: FONT_KR, fontSize: 16, color: ORANGE, bold: true, valign: 'top' });
    // 제목은 세로 정렬을 '위쪽'으로 고정 — 2줄로 늘어나도 부제목과의 간격이 유지되도록.
    s.addText(heading, { x: 0.6, y: 0.95, w: W - 3, h: 1.4,
      fontFace: FONT_KR, fontSize: 36, color: INK, bold: true, valign: 'top' });

    s.addImage({ path: LOGO_ORANGE, x: W - 1.9, y: 0.55, w: W * 0.10, h: logoH(W * 0.10) });

    s.addText('페블러스', { x: 0.6, y: H - 0.5, w: 2, h: 0.3,
      fontFace: FONT_KR, fontSize: 11, color: ORANGE, bold: true });

    // 페이지 번호는 zero-pad / 전체 페이지 없이 현재 번호만 정수로 표기 (예: "2")
    const pageText = String(this.bodyPage);
    s.addText(pageText, { x: W - 1.6, y: H - 0.5, w: 1.0, h: 0.3, align: 'right',
      fontFace: FONT_EN, fontSize: 12, color: GRAY });

    // 콘텐츠 영역 — 고정 요소를 침범하지 않는 직사각형
    const area = { x: 0.6, y: 2.1, w: W - 1.2, h: H - 2.8 };
    return { slide: s, area };
  }

  // §5-A-4 허용 강조 — 화이트 그라운드 + 좌측 4px 오렌지 액센트 바
  addAccentBlock(slide, { x, y, w, h, caption, body }) {
    if (caption) {
      slide.addText(caption, { x: x + 0.12, y: y - 0.35, w: w - 0.12, h: 0.3,
        fontFace: FONT_KR, fontSize: 14, color: ORANGE, bold: true });
    }
    // 4px ≈ 0.042" — 얇은 사각형으로 액센트 바
    slide.addShape('rect', { x, y, w: 0.042, h, fill: { color: ORANGE }, line: { color: ORANGE } });
    slide.addText(body, { x: x + 0.27, y, w: w - 0.3, h,
      fontFace: FONT_KR, fontSize: 19, color: INK });
  }

  // §5-B EOD — 화이트 + Thank you. + 3종 링크
  addEOD() {
    const s = this.pptx.addSlide();
    s.background = { color: WHITE };

    s.addText('Pebblous Makes Data Tangible', { x: 0.6, y: 0.5, w: 7, h: 0.5,
      fontFace: FONT_EN, fontSize: 18, color: ORANGE });
    s.addImage({ path: LOGO_ORANGE, x: W - 2.6, y: 0.5, w: W * 0.15, h: logoH(W * 0.15) });

    s.addText('Thank you.', { x: 0.6, y: H * 0.45 - 0.8, w: W - 1.2, h: 1.0,
      fontFace: FONT_EN, fontSize: 46, color: ORANGE, bold: true, charSpacing: -1.5 });

    s.addText('문의 · 협업 제안', { x: 0.6, y: H * 0.45 + 0.6, w: W - 1.2, h: 0.4,
      fontFace: FONT_KR, fontSize: 18, color: GRAY });

    // 3종 컨택 — 한 줄, 각각 하이퍼링크. 순서/구분자 고정.
    s.addText(
      [
        { text: 'contact@pebblous.ai',
          options: { hyperlink: { url: 'mailto:contact@pebblous.ai' }, color: INK } },
        { text: '  ·  ', options: { color: INK } },
        { text: 'pebblous.ai',
          options: { hyperlink: { url: 'https://pebblous.ai/' }, color: INK } },
        { text: '  ·  ', options: { color: INK } },
        { text: 'dataclinic.ai',
          options: { hyperlink: { url: 'https://dataclinic.ai/' }, color: INK } },
      ],
      { x: 0.6, y: H * 0.45 + 1.05, w: W - 1.2, h: 0.6,
        fontFace: FONT_EN, fontSize: 24 },
    );

    s.addText('페블러스', { x: 0.6, y: H - 0.5, w: 2, h: 0.3,
      fontFace: FONT_KR, fontSize: 11, color: ORANGE, bold: true });
    return s;
  }

  async write(filename) { await this.pptx.writeFile({ fileName: filename }); return filename; }
}

module.exports = { Deck, ORANGE, INK, GRAY, PEACH, WHITE, FONT_KR, FONT_EN, W, H };
