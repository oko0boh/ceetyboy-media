// Ceety Boy social brand kit (board 1658, campaign PREP-01).
// Renders every profile image at each platform's exact size with Chromium.
// Run from campaign/PREP-01:  bun src/build.ts   (needs Playwright + network for Google Fonts)
import { readFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { chromium } = require("playwright");

const ROOT = join(import.meta.dir, "..");
const OUT = join(ROOT, "images");
mkdirSync(OUT, { recursive: true });

const NAVY = "#0F172A", YELLOW = "#FACC15", WHITE = "#F8FAFC", ORANGE = "#F97316";
const b64 = (f: string, mime: string) => `data:${mime};base64,${readFileSync(join(ROOT, "src", f)).toString("base64")}`;
const LOGO = b64("logo.png", "image/png");
const STILL = b64("etoile-rouge-still-B-1920x1080.jpg", "image/jpeg");
const FONTS = `<link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,800&family=Figtree:wght@500;700&display=swap" rel="stylesheet">`;

const page = (w: number, h: number, body: string, css = "") => `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${w}px;height:${h}px;overflow:hidden;background:${NAVY};color:${WHITE};font-family:Figtree,sans-serif}
.h{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;letter-spacing:-0.02em;line-height:1}
.y{color:${YELLOW}}
${css}</style></head><body>${body}</body></html>`;

// ---------- profile picture: navy field, yellow ring, white disc, logo ----------
const profile = (s: number) => page(s, s, `<div class="ring"><div class="disc"><img src="${LOGO}"></div></div>`, `
body{display:flex;align-items:center;justify-content:center}
.ring{width:${s * 0.86}px;height:${s * 0.86}px;border-radius:50%;background:${YELLOW};display:flex;align-items:center;justify-content:center}
.disc{width:${s * 0.80}px;height:${s * 0.80}px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;overflow:hidden}
.disc img{width:118%;height:118%;object-fit:cover}`);

// ---------- wide covers: navy text panel + Studio still with a yellow seam ----------
// safe: the box (centred) that every device shows; text and logo stay inside it.
// flip: picture on the left, text on the right (Facebook: the profile picture covers the cover's bottom-left on phones).
function cover(w: number, h: number, safeW: number, safeH: number, scale: number, flip = false) {
  const left = (w - safeW) / 2, top = (h - safeH) / 2;
  const split = left + safeW * 0.6; // picture starts here
  return page(w, h, `
  <div class="wrap"><div class="pic"></div><div class="panel"></div><div class="seam"></div>
  <div class="txt">
    <div class="brand"><img src="${LOGO}"><span class="h">Ceety Boy</span></div>
    <div class="h big">Chaque lieu.<br><span class="y">Chaque trajet.</span></div>
    <div class="en">Every place. Every route.</div>
    <div class="url">ceetyboy.com <span class="y">·</span> @ceetyboyapp</div>
  </div></div>`, `
  .wrap{position:absolute;inset:0${flip ? ";transform:scaleX(-1)" : ""}}
  ${flip ? `.pic,.txt{transform:scaleX(-1)} .txt{width:${safeW * 0.56}px !important;padding-left:${60 * scale}px}` : ""}
  .pic{position:absolute;inset:0 0 0 ${split - 40 * scale}px;background:url(${STILL}) ${w > 2000 ? "45%" : "50%"} 62%/cover}
  .panel{position:absolute;left:0;top:0;bottom:0;width:${split}px;background:${NAVY};clip-path:polygon(0 0,100% 0,calc(100% - ${60 * scale}px) 100%,0 100%)}
  .seam{position:absolute;left:${split - 6 * scale}px;top:0;bottom:0;width:${8 * scale}px;background:${YELLOW};transform:skewX(${Math.atan(60 * scale / h) * -180 / Math.PI}deg);transform-origin:top}
  .txt{position:absolute;left:${left + 24 * scale}px;top:${top}px;height:${safeH}px;width:${safeW * 0.52}px;display:flex;flex-direction:column;justify-content:center;gap:${10 * scale}px}
  .brand{display:flex;align-items:center;gap:${12 * scale}px;font-size:${34 * scale}px}
  .brand img{width:${54 * scale}px;height:${54 * scale}px;border-radius:50%;background:#fff;object-fit:cover}
  .big{font-size:${52 * scale}px;margin-top:${6 * scale}px}
  .en{font-weight:700;font-size:${22 * scale}px;opacity:.9}
  .url{font-weight:700;font-size:${21 * scale}px;margin-top:${6 * scale}px}`);
}

// ---------- Instagram highlight covers: yellow line icon centred on navy ----------
const ICONS: Record<string, string> = {
  trajets: `<path d="M22 84c0-16 48-8 48-30" stroke-dasharray="1 9"/><circle cx="22" cy="84" r="7" fill="${YELLOW}"/><path d="M70 46s-15-13-15-24a15 15 0 0 1 30 0c0 11-15 24-15 24z"/><circle cx="70" cy="22" r="5"/>`,
  lieux: `<path d="M50 8C34 8 22 20 22 36c0 22 28 54 28 54s28-32 28-54C78 20 66 8 50 8z"/><circle cx="50" cy="36" r="10"/>`,
  commerces: `<path d="M16 40 22 16h56l6 24"/><path d="M16 40c0 7 5 12 11.5 12S39 47 39 40c0 7 5 12 11 12s11-5 11-12c0 7 5 12 11.5 12S84 47 84 40"/><path d="M22 52v34h56V52"/><path d="M42 86V66h16v20"/>`,
  tutos: `<rect x="12" y="20" width="76" height="56" rx="10"/><path d="M42 36v24l20-12z" fill="${YELLOW}"/><path d="M30 88h40"/>`,
  findme: `<circle cx="44" cy="42" r="26"/><path d="M63 61l23 23"/><path d="M44 30c-6 0-11 5-11 11 0 8 11 17 11 17s11-9 11-17c0-6-5-11-11-11z"/>`,
  villes: `<path d="M8 88h84"/><path d="M14 88V48h18v40"/><path d="M32 88V24h24v64"/><path d="M56 88V40h28v48"/><path d="M40 36h8M40 50h8M40 64h8M64 52h12M64 66h12M20 60h6M20 72h6"/>`,
};
const highlight = (w: number, h: number, key: string) => page(w, h, `<div class="c"><svg viewBox="0 0 100 100">${ICONS[key]}</svg></div>`, `
body{display:flex;align-items:center;justify-content:center}
.c{width:${Math.min(w, h) * 0.62}px;height:${Math.min(w, h) * 0.62}px;border-radius:50%;border:${Math.min(w, h) * 0.012}px solid ${YELLOW};display:flex;align-items:center;justify-content:center}
svg{width:56%;height:56%;fill:none;stroke:${YELLOW};stroke-width:5;stroke-linecap:round;stroke-linejoin:round}`);

type Job = { file: string; w: number; h: number; html: string };
const jobs: Job[] = [
  { file: "profile-1080x1080.png", w: 1080, h: 1080, html: profile(1080) },          // Instagram, Facebook, TikTok (master)
  { file: "profile-youtube-800x800.png", w: 800, h: 800, html: profile(800) },
  { file: "profile-whatsapp-640x640.png", w: 640, h: 640, html: profile(640) },
  { file: "profile-tiktok-200x200.png", w: 200, h: 200, html: profile(200) },         // legibility check at the smallest size
  // Facebook cover 1640x624 (2x of 820x312); phones crop the sides to ~1110x624 → text kept in a 1100x520 centre box.
  { file: "facebook-cover-1640x624.png", w: 1640, h: 624, html: cover(1640, 624, 1100, 520, 1.4, true) },
  // YouTube 2560x1440; the part every device shows is 1546x423 in the centre.
  { file: "youtube-banner-2560x1440.png", w: 2560, h: 1440, html: cover(2560, 1440, 1546, 423, 1.35) },
  // WhatsApp Business cover: 16:9, content in the centre (no official size published; see README).
  { file: "whatsapp-cover-1920x1080.png", w: 1920, h: 1080, html: cover(1920, 1080, 1300, 600, 1.5) },
];
for (const k of Object.keys(ICONS)) {
  jobs.push({ file: `highlight-${k}-1080x1920.png`, w: 1080, h: 1920, html: highlight(1080, 1920, k) });
  jobs.push({ file: `highlight-${k}-1080x1080.png`, w: 1080, h: 1080, html: highlight(1080, 1080, k) });
}

const browser = await chromium.launch();
const ctx = await browser.newContext({ deviceScaleFactor: 1, userAgent: "Mozilla/5.0 CeetyBoyInspector/1.0" });
for (const j of jobs) {
  const p = await ctx.newPage();
  await p.setViewportSize({ width: j.w, height: j.h });
  await p.setContent(j.html, { waitUntil: "networkidle" });
  await p.evaluate(() => (document as any).fonts.ready);
  await p.screenshot({ path: join(OUT, j.file) });
  await p.close();
  console.log("wrote", j.file);
}
await browser.close();
