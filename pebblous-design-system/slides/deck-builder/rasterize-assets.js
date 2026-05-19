// rasterize-assets.js — §3 오렌지 커버용 "화이트 10% 알파 페블"을 PNG 알파에 미리 굽는다.
// 로고/페블 본체는 사용자 제공 PNG (assets/logos/*.png, assets/pebble/*.png) 를 그대로 쓰므로
// 이 스크립트가 다루는 것은 Pebble-9.png (화이트 실루엣) → Pebble-9_alpha10.png 하나뿐.

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC = path.resolve(__dirname, '../../assets/pebble/Pebble-9.png');
const OUT_DIR = path.resolve(__dirname, 'assets-png/pebble');
const OUT = path.join(OUT_DIR, 'Pebble-9_alpha10.png');

async function run() {
  if (!fs.existsSync(SRC)) { console.error('missing:', SRC); process.exit(1); }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const buf = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 3; i < buf.data.length; i += 4) buf.data[i] = Math.round(buf.data[i] * 0.10);
  await sharp(buf.data, { raw: { width: buf.info.width, height: buf.info.height, channels: 4 } }).png().toFile(OUT);
  console.log('✔', path.relative(__dirname, OUT));
}
run().catch((e) => { console.error(e); process.exit(1); });
