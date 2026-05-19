# Pebblous Web UI Kit

Pixel-leaning recreation of Pebblous's public marketing site, assembled from the Figma file's `Products/*_laptop` frames, the Pebblous brand wordmark, and the shared `colors_and_type.css`.

## Components

- `Header.jsx` — dark/light top nav with orange wordmark and contact CTA
- `Hero.jsx` — headline section with blurred pebble motif, mixed Korean/English tagline
- `Products.jsx` — three-up product grid (`Data Clinic`, `PebbloScope`, `PebbloSim`) using `BrowserFrame` as the device chrome
- `StatsFooter.jsx` — TT Firs Neue big-number stats + dark footer mirroring the Figma laptop mockup footers

## Notes
- This is a high-fidelity shell, not production code. Click targets are placeholders.
- Product preview renders inside each `BrowserFrame` are illustrative — real product screenshots were not available, so compact mock data dashboards are shown instead.
