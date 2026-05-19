/*
 * Pebblous shared header — used across marketing pages.
 * Orange brand wordmark, nav, contact CTA. Black background is the brand's default.
 */
function Header({ active = "Product", dark = true }) {
  const items = ["Product", "Solution", "Research", "Company"];
  const base = dark ? "#171719" : "#fff";
  const fg = dark ? "#fff" : "#171719";
  const muted = dark ? "rgba(255,255,255,0.6)" : "#70737C";

  return (
    <header style={{
      background: base, color: fg,
      padding: "20px 48px",
      display: "flex", alignItems: "center", gap: 32,
      borderBottom: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #EAEBEC",
      fontFamily: "var(--pb-font-sans)"
    }}>
      <div style={{ marginRight: "auto", display: "flex", alignItems: "center" }}>
        <Wordmark height={22} color="#F86825" />
      </div>
      <nav style={{ display: "flex", gap: 28, fontSize: 14, fontWeight: 500 }}>
        {items.map(it => (
          <a key={it} href="#" onClick={e => e.preventDefault()}
             style={{
               color: it === active ? fg : muted,
               textDecoration: "none",
               fontWeight: it === active ? 700 : 500
             }}>{it}</a>
        ))}
      </nav>
      <button style={{
        background: "#F86825", color: "#fff",
        border: 0, borderRadius: 10, padding: "10px 20px",
        fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
      }}>문의하기</button>
    </header>
  );
}

Object.assign(window, { Header });
