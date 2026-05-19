/*
 * Hero block — big serif-ish display type, orange accent, dark background,
 * follows the deck + marketing-page pattern seen in the Pebblous Figma.
 */
function Hero() {
  return (
    <section style={{
      background: "#171719",
      color: "#fff",
      padding: "120px 48px 140px",
      fontFamily: "var(--pb-font-sans)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Orange pebble motif */}
      <div style={{
        position: "absolute", top: -80, right: -120,
        width: 520, height: 520, borderRadius: "50%",
        background: "radial-gradient(circle at 30% 30%, #F86825 0%, #C64900 60%, transparent 75%)",
        filter: "blur(2px)", opacity: 0.85
      }} />
      <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "6px 14px", borderRadius: 999,
          border: "1px solid rgba(255,255,255,0.2)",
          fontSize: 13, fontWeight: 500, marginBottom: 32,
          color: "rgba(255,255,255,0.85)"
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#F86825" }} />
          AI 데이터 인프라 · <Wordmark height={13} color="currentColor" style={{ marginLeft: 2 }} />
        </div>
        <h1 style={{
          fontFamily: "var(--pb-font-sans)",
          fontSize: 88, lineHeight: 1.05, letterSpacing: "-0.03em",
          fontWeight: 700, margin: 0, maxWidth: 900
        }}>
          데이터가 제 역할을 <br/>
          <span style={{ color: "#F86825" }}>해내도록</span>.
        </h1>
        <p style={{
          fontSize: 20, lineHeight: 1.6, marginTop: 28, maxWidth: 620,
          color: "rgba(255,255,255,0.7)", fontWeight: 400
        }}>
          Pebblous는 데이터의 진단부터 라벨링, 시뮬레이션까지
          AI 모델 개발의 모든 데이터 워크플로우를 책임집니다.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 44 }}>
          <button style={{
            background: "#F86825", color: "#fff", border: 0,
            borderRadius: 12, padding: "14px 24px",
            fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
          }}>시작하기 →</button>
          <button style={{
            background: "transparent", color: "#fff",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: 12, padding: "14px 24px",
            fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
          }}>데모 영상</button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
