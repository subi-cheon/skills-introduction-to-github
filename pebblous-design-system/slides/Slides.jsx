/*
 * Pebblous slide templates. 1280×720 slides designed to match the brand:
 * - heavy type in Pretendard JP, TT Firs Neue for display numbers,
 * - orange primary, black/white grounds,
 * - generous whitespace, tight letter-spacing, corner label.
 */

const SLIDE_W = 1280, SLIDE_H = 720;

function slideBase(style = {}) {
  return {
    width: SLIDE_W, height: SLIDE_H, position: "relative",
    fontFamily: "var(--pb-font-sans)",
    overflow: "hidden",
    ...style
  };
}

function Corner({ num, dark }) {
  const c = dark ? "rgba(255,255,255,0.5)" : "#70737C";
  return (
    <>
      <div style={{ position: "absolute", top: 40, left: 56, display: "flex", alignItems: "center" }}>
        <Wordmark height={18} color="#F86825" />
      </div>
      <div style={{
        position: "absolute", bottom: 36, right: 56,
        fontFamily: "var(--pb-font-mono)", fontSize: 12, color: c, fontWeight: 600,
        letterSpacing: "0.05em"
      }}>{num}</div>
    </>
  );
}

function TitleSlide() {
  return (
    <div style={slideBase({ background: "#171719", color: "#fff" })}>
      <Corner num="01 / Title" dark />
      {/* Pebble halo */}
      <div style={{
        position: "absolute", right: -180, top: -180,
        width: 680, height: 680, borderRadius: "50%",
        background: "radial-gradient(circle at 30% 30%, #F86825 0%, #C64900 55%, transparent 75%)",
        filter: "blur(1px)", opacity: 0.9
      }} />
      <div style={{ position: "absolute", left: 96, top: 220, maxWidth: 900 }}>
        <div style={{
          fontSize: 14, letterSpacing: "0.1em", fontWeight: 700,
          color: "#F86825", textTransform: "uppercase", marginBottom: 24
        }}>2026 &middot; Overview</div>
        <h1 style={{
          fontSize: 92, lineHeight: 1.05, letterSpacing: "-0.03em",
          fontWeight: 700, margin: 0, color: "#fff"
        }}>
          데이터가 제 역할을<br/><span style={{ color: "#F86825" }}>해내도록.</span>
        </h1>
        <div style={{
          fontSize: 20, color: "rgba(255,255,255,0.6)", marginTop: 36,
          fontWeight: 500
        }}>
          Pebblous Inc. · Suhyun Park · April 2026
        </div>
      </div>
    </div>
  );
}

function SectionHeaderSlide() {
  return (
    <div style={slideBase({ background: "#F86825", color: "#fff" })}>
      <Corner num="02 / Section" dark />
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 96px" }}>
        <div>
          <div style={{
            fontFamily: "'TT Firs Neue', Pretendard, sans-serif",
            fontSize: 200, lineHeight: 0.9, fontWeight: 700,
            letterSpacing: "-0.04em", color: "rgba(255,255,255,0.25)"
          }}>01</div>
          <div style={{
            fontSize: 72, lineHeight: 1.1, letterSpacing: "-0.025em",
            fontWeight: 700, marginTop: 8
          }}>우리가 푸는 문제</div>
          <div style={{
            fontSize: 22, color: "rgba(255,255,255,0.85)", marginTop: 20,
            maxWidth: 640, fontWeight: 500, lineHeight: 1.5
          }}>왜 AI의 성패가 데이터 품질에 달려 있는지.</div>
        </div>
      </div>
    </div>
  );
}

function ContentSlide() {
  return (
    <div style={slideBase({ background: "#fff", color: "#171719" })}>
      <Corner num="03 / Content" />
      <div style={{ position: "absolute", left: 96, top: 120, right: 96 }}>
        <div style={{
          fontSize: 13, letterSpacing: "0.08em", fontWeight: 700,
          color: "#F86825", textTransform: "uppercase"
        }}>문제 정의</div>
        <h2 style={{
          fontSize: 56, lineHeight: 1.15, letterSpacing: "-0.025em",
          fontWeight: 700, margin: "16px 0 0 0", maxWidth: 900
        }}>AI 프로젝트의 80%는 <span style={{ color: "#F86825" }}>데이터 단계</span>에서 실패합니다.</h2>
        <p style={{
          fontSize: 20, color: "#46474C", lineHeight: 1.6, marginTop: 24,
          maxWidth: 760, fontWeight: 400
        }}>
          모델이 아니라 데이터가 병목입니다. 수집된 데이터는 편향돼 있고, 라벨은 일관되지 않으며,
          엣지 케이스는 절대적으로 부족합니다.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 64 }}>
          {[
            { h: "편향",    d: "수집 단계에서 이미 기울어진 분포." },
            { h: "불일치", d: "어노테이터마다 다른 기준." },
            { h: "희소성", d: "희귀하지만 치명적인 엣지 케이스." },
          ].map(c => (
            <div key={c.h} style={{
              borderTop: "3px solid #F86825", paddingTop: 20
            }}>
              <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.01em" }}>{c.h}</div>
              <div style={{ fontSize: 17, color: "#70737C", marginTop: 8, lineHeight: 1.55 }}>{c.d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuoteSlide() {
  return (
    <div style={slideBase({ background: "#F4F4F5", color: "#171719" })}>
      <Corner num="04 / Quote" />
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 140px" }}>
        <div>
          <div style={{
            fontFamily: "'TT Firs Neue', Pretendard, sans-serif",
            fontSize: 200, lineHeight: 0.6, color: "#F86825",
            fontWeight: 700, marginBottom: -20
          }}>"</div>
          <div style={{
            fontSize: 56, lineHeight: 1.25, letterSpacing: "-0.02em",
            fontWeight: 600, maxWidth: 1000, color: "#171719"
          }}>
            좋은 모델은 좋은 데이터에서 나온다. 우리는 그 "좋음"을 정의하고, 측정하고, 만들어냅니다.
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: 48 }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#F86825", color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'TT Firs Neue', Pretendard, sans-serif",
              fontWeight: 700, fontSize: 22 }}>P</div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700 }}>박수현</div>
              <div style={{ fontSize: 15, color: "#70737C" }}>CEO, Pebblous</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricSlide() {
  const items = [
    { n: "57.2M", l: "라벨링된 인스턴스", s: "Since 2022" },
    { n: "99.4%", l: "진단 정확도",       s: "Data Clinic v3" },
    { n: "128",   l: "파트너 기업",       s: "2025 기준" },
    { n: "24/7",  l: "Sim 가동률",        s: "4-region HA" },
  ];
  return (
    <div style={slideBase({ background: "#171719", color: "#fff" })}>
      <Corner num="05 / Metrics" dark />
      <div style={{ position: "absolute", left: 96, top: 120 }}>
        <div style={{ fontSize: 13, letterSpacing: "0.08em", fontWeight: 700, color: "#F86825", textTransform: "uppercase" }}>Traction</div>
        <h2 style={{ fontSize: 56, fontWeight: 700, letterSpacing: "-0.025em", margin: "16px 0 0 0" }}>
          숫자로 보는 <Wordmark height={48} color="#F86825" style={{ marginLeft: 4, transform: "translateY(-4px)" }} />.
        </h2>
      </div>
      <div style={{
        position: "absolute", left: 96, right: 96, bottom: 110,
        display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32
      }}>
        {items.map(it => (
          <div key={it.l} style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: 20 }}>
            <div style={{
              fontFamily: "'TT Firs Neue', Pretendard, sans-serif",
              fontSize: 76, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1,
              color: "#F86825"
            }}>{it.n}</div>
            <div style={{ fontSize: 18, fontWeight: 700, marginTop: 16 }}>{it.l}</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 4, fontFamily: "var(--pb-font-mono)" }}>{it.s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ComparisonSlide() {
  return (
    <div style={slideBase({ background: "#fff", color: "#171719" })}>
      <Corner num="06 / Compare" />
      <div style={{ position: "absolute", left: 96, top: 120, right: 96 }}>
        <h2 style={{ fontSize: 48, fontWeight: 700, letterSpacing: "-0.025em", margin: 0 }}>
          전통적 파이프라인 vs. <Wordmark height={44} color="#F86825" style={{ marginLeft: 6, transform: "translateY(-4px)" }} />
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 56 }}>
          <div style={{ padding: 32, borderRadius: 20, background: "#F4F4F5" }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", color: "#70737C", textTransform: "uppercase" }}>Before</div>
            <div style={{ fontSize: 26, fontWeight: 700, marginTop: 10 }}>Manual, siloed</div>
            <ul style={{ marginTop: 20, paddingLeft: 20, fontSize: 17, lineHeight: 1.8, color: "#46474C" }}>
              <li>데이터셋 당 수개월</li>
              <li>팀마다 다른 기준</li>
              <li>엣지 케이스는 운에 맡김</li>
            </ul>
          </div>
          <div style={{ padding: 32, borderRadius: 20, background: "#171719", color: "#fff", position: "relative" }}>
            <div style={{ position: "absolute", top: 16, right: 20, padding: "4px 10px", background: "#F86825", fontSize: 11, fontWeight: 700, borderRadius: 6, letterSpacing: "0.05em" }}>RECOMMENDED</div>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", color: "#F86825", textTransform: "uppercase" }}>After</div>
            <div style={{ fontSize: 26, fontWeight: 700, marginTop: 10 }}>Diagnose → Label → Augment</div>
            <ul style={{ marginTop: 20, paddingLeft: 20, fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)" }}>
              <li>하루 단위의 Diagnosis Report</li>
              <li>자동화된 일관성 검수</li>
              <li>생성 AI로 엣지 케이스 증강</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClosingSlide() {
  return (
    <div style={slideBase({ background: "#171719", color: "#fff" })}>
      <Corner num="07 / Thanks" dark />
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <div style={{
          fontFamily: "'TT Firs Neue', Pretendard, sans-serif",
          fontSize: 140, fontWeight: 700, letterSpacing: "-0.04em", color: "#F86825", lineHeight: 1
        }}>Thanks.</div>
        <div style={{ fontSize: 24, marginTop: 24, color: "rgba(255,255,255,0.7)" }}>
          contact@pebblous.ai &nbsp;·&nbsp; pebblous.ai
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  TitleSlide, SectionHeaderSlide, ContentSlide, QuoteSlide,
  MetricSlide, ComparisonSlide, ClosingSlide
});
