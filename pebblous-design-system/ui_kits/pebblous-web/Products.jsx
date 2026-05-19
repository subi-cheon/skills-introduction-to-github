/*
 * Product grid — three product cards representing Data Clinic, PebbloScope, PebbloSim.
 * Uses the browser-frame motif from Figma Products/*_laptop frames (black chrome, orange accent).
 */
function BrowserFrame({ title, children, accent = "#F86825" }) {
  return (
    <div style={{
      borderRadius: 12, overflow: "hidden",
      background: "#000",
      boxShadow: "0 24px 60px rgba(0,0,0,0.25), 0 4px 12px rgba(0,0,0,0.1)",
      border: "1px solid rgba(255,255,255,0.06)"
    }}>
      <div style={{
        height: 36, background: "rgba(255,255,255,0.06)",
        display: "flex", alignItems: "center", padding: "0 16px",
        justifyContent: "space-between",
        fontFamily: "var(--pb-font-sans)", color: "#fff",
        fontSize: 12, fontWeight: 600
      }}>
        <span style={{ color: "#fff", letterSpacing: "0.02em" }}>{title}</span>
        <span style={{ display: "inline-flex", gap: 6, alignItems: "center",
                       background: accent, color: "#fff",
                       padding: "4px 10px", borderRadius: 6, fontSize: 10, fontWeight: 700 }}>
          ● Live
        </span>
      </div>
      <div style={{ background: "#000", minHeight: 260 }}>{children}</div>
    </div>
  );
}

function ProductCard({ name, tagline, description, children }) {
  return (
    <article style={{
      display: "flex", flexDirection: "column", gap: 20,
      fontFamily: "var(--pb-font-sans)"
    }}>
      {children}
      <div>
        <div style={{
          fontFamily: "'TT Firs Neue', Pretendard, sans-serif",
          fontSize: 24, fontWeight: 700, letterSpacing: "-0.01em", color: "#171719"
        }}>{name}</div>
        <div style={{ fontSize: 15, color: "#F86825", fontWeight: 600, marginTop: 4 }}>{tagline}</div>
        <p style={{ fontSize: 14, color: "#70737C", lineHeight: 1.6, marginTop: 10 }}>
          {description}
        </p>
        <a href="#" onClick={e=>e.preventDefault()} style={{
          display: "inline-flex", alignItems: "center", gap: 4,
          color: "#171719", fontWeight: 600, fontSize: 14,
          textDecoration: "underline", textUnderlineOffset: 4,
          textDecorationThickness: 1.5, marginTop: 14
        }}>자세히 보기 →</a>
      </div>
    </article>
  );
}

function Products() {
  return (
    <section style={{ background: "#F4F4F5", padding: "100px 48px", fontFamily: "var(--pb-font-sans)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{
          fontSize: 13, fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "0.08em", color: "#F86825", marginBottom: 12
        }}>Our products</div>
        <h2 style={{
          fontSize: 48, lineHeight: 1.15, letterSpacing: "-0.025em",
          fontWeight: 700, color: "#171719", maxWidth: 780, margin: 0
        }}>하나의 인프라, 세 개의 도구.</h2>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 32, marginTop: 72
        }}>
          <ProductCard
            name="Data Clinic"
            tagline="Diagnosis Report"
            description="데이터셋의 품질 · 편향 · 커버리지를 자동으로 진단하고 팀 전체가 읽을 수 있는 Diagnosis Report를 생성합니다."
          >
            <BrowserFrame title="dataclinic.pebblous.ai">
              <div style={{ padding: "14px 18px", color: "#fff", fontFamily: "var(--pb-font-sans)" }}>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", fontWeight: 700 }}>SUMMARY</div>
                <div style={{ fontSize: 16, fontWeight: 700, marginTop: 4 }}>Imbalance detected — 3 classes below threshold</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 6, marginTop: 14 }}>
                  {[78,45,92,28,71].map((v,i)=>(
                    <div key={i} style={{ height: 60, background: "rgba(255,255,255,0.06)", borderRadius: 4, display: "flex", alignItems: "flex-end", padding: 4 }}>
                      <div style={{ width: "100%", height: `${v}%`, background: v<50?"#F86825":"#51C57A", borderRadius: 2 }} />
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 12, fontSize: 11, color: "rgba(255,255,255,0.5)" }}>Class distribution · 10,234 samples</div>
              </div>
            </BrowserFrame>
          </ProductCard>

          <ProductCard
            name="PebbloScope"
            tagline="Precision Labeling"
            description="이미지 · 비디오 · 자연어 데이터를 일관성 있게 라벨링하고, 클래스 뷰와 커뮤니티 검수로 품질을 유지합니다."
          >
            <BrowserFrame title="pebbloscope.pebblous.ai">
              <div style={{ position: "relative", height: 260, background: "linear-gradient(135deg,#2d1b10 0%,#1a1a1a 100%)" }}>
                <div style={{ position: "absolute", left: "12%", top: "20%", width: 120, height: 80, border: "2px solid #F86825", borderRadius: 3 }}>
                  <div style={{ position: "absolute", top: -22, left: 0, background: "#F86825", color: "#fff", fontSize: 10, padding: "2px 6px", fontWeight: 700 }}>scene_text · 0.94</div>
                </div>
                <div style={{ position: "absolute", left: "45%", top: "45%", width: 90, height: 50, border: "2px solid #51C57A", borderRadius: 3 }}>
                  <div style={{ position: "absolute", top: -22, left: 0, background: "#51C57A", color: "#fff", fontSize: 10, padding: "2px 6px", fontWeight: 700 }}>logo · 0.88</div>
                </div>
                <div style={{ position: "absolute", right: "10%", bottom: "15%", width: 140, height: 60, border: "2px dashed rgba(255,255,255,0.3)", borderRadius: 3 }}>
                  <div style={{ position: "absolute", top: -22, left: 0, background: "rgba(255,255,255,0.15)", color: "#fff", fontSize: 10, padding: "2px 6px", fontWeight: 500 }}>pending review</div>
                </div>
              </div>
            </BrowserFrame>
          </ProductCard>

          <ProductCard
            name="PebbloSim"
            tagline="Synthetic Data Sim"
            description="부족한 엣지 케이스를 생성 AI로 증강합니다. 현실과 시뮬레이션 사이를 오가며 모델을 강건하게 만듭니다."
          >
            <BrowserFrame title="pebblosim.pebblous.ai">
              <div style={{ padding: 14, color: "#fff", fontFamily: "var(--pb-font-sans)" }}>
                <div style={{ fontSize: 10, letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", fontWeight: 700 }}>SIM OUTPUT</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6, marginTop: 10 }}>
                  {["rainy","foggy","night","dusk","snow","clear"].map(s => (
                    <div key={s} style={{ height: 56, borderRadius: 4, background:
                      s==="rainy"?"linear-gradient(135deg,#2a3548,#1a2130)":
                      s==="foggy"?"linear-gradient(135deg,#6a6e78,#9a9ea6)":
                      s==="night"?"linear-gradient(135deg,#0a0a1a,#1a1a2e)":
                      s==="dusk"?"linear-gradient(135deg,#f86825,#c64900)":
                      s==="snow"?"linear-gradient(135deg,#e0e4ec,#b4b8c4)":
                      "linear-gradient(135deg,#4a8ed6,#87c4ff)",
                      display: "flex", alignItems: "flex-end", padding: 4,
                      fontSize: 9, fontWeight: 700, color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,0.4)"
                    }}>{s}</div>
                  ))}
                </div>
                <div style={{ marginTop: 12, fontSize: 11, color: "rgba(255,255,255,0.5)" }}>6 variants · 240 frames rendered</div>
              </div>
            </BrowserFrame>
          </ProductCard>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Products, BrowserFrame, ProductCard });
