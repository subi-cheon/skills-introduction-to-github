/*
 * Stats block + Footer. Stats uses the "TT Firs Neue large number" treatment seen on the Pebblous website.
 * Footer mirrors the footer inside the product laptop mockups.
 */
function Stats() {
  const items = [
    { n: "57.2M", l: "라벨링 완료 인스턴스" },
    { n: "128+",  l: "파트너 기업 & 연구소" },
    { n: "99.4%", l: "Diagnosis Report 정확도" },
    { n: "24/7",  l: "Sim 클러스터 가동률" },
  ];
  return (
    <section style={{ background: "#fff", padding: "80px 48px", borderTop: "1px solid #EAEBEC", borderBottom: "1px solid #EAEBEC" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 }}>
        {items.map(it => (
          <div key={it.l}>
            <div style={{
              fontFamily: "'TT Firs Neue', Pretendard, sans-serif",
              fontSize: 56, fontWeight: 700, color: "#171719",
              letterSpacing: "-0.02em", lineHeight: 1
            }}>{it.n}</div>
            <div style={{ fontFamily: "var(--pb-font-sans)", fontSize: 14, color: "#70737C", marginTop: 8, fontWeight: 500 }}>{it.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      background: "#171719", color: "#fff",
      padding: "56px 48px 40px", fontFamily: "var(--pb-font-sans)"
    }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 40 }}>
        <div>
          <Wordmark height={28} color="#F86825" />
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginTop: 16, lineHeight: 1.7, maxWidth: 320 }}>
            AI가 세상을 더 잘 이해하도록, 데이터가 제 역할을 해내도록.
          </p>
        </div>
        {[
          { h: "Product", items: ["Data Clinic","PebbloScope","PebbloSim"] },
          { h: "Company", items: ["About","Research","Careers"] },
          { h: "Contact",  items: ["contact@pebblous.ai","044-589-3824","Sejong · Seoul · Daejeon · Pohang"] },
        ].map(col => (
          <div key={col.h}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>{col.h}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {col.items.map(it => (
                <li key={it} style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1240, margin: "40px auto 0", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", color: "rgba(255,255,255,0.5)", fontSize: 12 }}>
        <div>Copyright © Pebblous.ai — All rights reserved</div>
        <div style={{ display: "flex", gap: 16 }}>
          <span>Web pebblous.ai</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Stats, Footer });
