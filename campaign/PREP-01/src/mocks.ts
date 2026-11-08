// Board 1658: checks bio lengths, writes BIOS.md, renders phone-width (390 px) profile mocks into proof/.
// Run from campaign/PREP-01:  bun src/mocks.ts
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
const { chromium } = require("playwright");

const ROOT = join(import.meta.dir, "..");
const bios = JSON.parse(readFileSync(join(ROOT, "bios.json"), "utf8"));
// UTF-16 length: what most apps count (an emoji = 2), so this is the safe side.
const len = (s: string) => s.length;
const link = (src: string) => `https://ceetyboy.com/?utm_source=${src}&utm_medium=bio&utm_campaign=cb90&utm_content=bio`;

let bad = 0;
let md = `# Ceety Boy — profile bios (board 1658, PREP-01)\n\nHandle everywhere: **${bios.handle}** · name **${bios.name}** · link **ceetyboy.com** (with the tag below, so the tracker counts bio clicks).\n` +
  `French first, English under. Lengths counted the strict way (an emoji counts 2). Where the platform allows only one bio, use the French; the English goes in the second line slot or the « About » / description.\n\n`;
for (const p of bios.platforms) {
  const fr = len(p.fr), en = len(p.en), cap = Math.min(p.limit, 150);
  if (fr > cap || en > cap) { bad++; console.error(`TOO LONG ${p.id}: fr ${fr} en ${en} > ${cap}`); }
  md += `## ${p.label}\nLimit: ${p.limitNote}. Link: \`${link(p.id)}\`\n\n**FR** (${fr} / ${cap})\n\n\`\`\`\n${p.fr}\n\`\`\`\n\n**EN** (${en} / ${cap})\n\n\`\`\`\n${p.en}\n\`\`\`\n\n`;
  if (p.descriptionFr) {
    if (len(p.descriptionFr) > 512 || len(p.descriptionEn) > 512) { bad++; console.error(`TOO LONG ${p.id} description`); }
    md += `Business description (limit 512) — **FR** (${len(p.descriptionFr)})\n\n\`\`\`\n${p.descriptionFr}\n\`\`\`\n\n**EN** (${len(p.descriptionEn)})\n\n\`\`\`\n${p.descriptionEn}\n\`\`\`\n\n`;
  }
}
md += `## Instagram highlight names (cover file → name, max 15 characters)\n| Cover | FR (use) | EN |\n|---|---|---|\n` +
  [["trajets", "Trajets", "Routes"], ["lieux", "Lieux", "Places"], ["commerces", "Commerces", "Businesses"], ["tutos", "Tutos", "How-to"], ["findme", "Find Me", "Find Me"], ["villes", "Villes", "Cities"]]
    .map(([k, f, e]) => `| \`images/highlight-${k}-1080x1920.png\` | ${f} | ${e} |`).join("\n") + "\n";
writeFileSync(join(ROOT, "BIOS.md"), md);
if (bad) process.exit(1);

// ---------- phone mocks ----------
const img = (f: string) => `data:image/png;base64,${readFileSync(join(ROOT, "images", f)).toString("base64")}`;
const P = img("profile-1080x1080.png");
const HL = ["trajets", "lieux", "commerces", "tutos", "findme", "villes"].map((k) => img(`highlight-${k}-1080x1080.png`));
const HLN = ["Trajets", "Lieux", "Commerces", "Tutos", "Find Me", "Villes"];
const B = (id: string) => bios.platforms.find((p: any) => p.id === id);
const nl = (s: string) => s.replace(/\n/g, "<br>");
const shell = (inner: string, dark = false) => `<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;padding:0;box-sizing:border-box}body{width:390px;font-family:-apple-system,Roboto,"Helvetica Neue",Arial,sans-serif;font-size:14px;background:${dark ? "#121212" : "#fff"};color:${dark ? "#f1f1f1" : "#111"}}
.av{border-radius:50%;display:block}.b{font-weight:700}.m{color:${dark ? "#aaa" : "#666"}}.lk{color:${dark ? "#3ea6ff" : "#00376b"};font-weight:600}
.bar{height:44px;display:flex;align-items:center;justify-content:center;font-weight:700;border-bottom:1px solid ${dark ? "#333" : "#eee"}}
.btn{flex:1;text-align:center;padding:8px;border-radius:8px;font-weight:600}
</style></head><body>${inner}</body></html>`;

const pages: Record<string, string> = {
  instagram: shell(`<div class="bar">ceetyboyapp</div>
  <div style="padding:14px 16px;display:flex;align-items:center;gap:20px"><img class="av" src="${P}" width="86" height="86">
   <div style="display:flex;gap:22px;text-align:center"><div><div class="b">—</div>publications</div><div><div class="b">—</div>followers</div><div><div class="b">—</div>suivi(e)s</div></div></div>
  <div style="padding:0 16px"><div class="b">Ceety Boy</div><div>${nl(B("instagram").fr)}</div><div class="lk">ceetyboy.com</div></div>
  <div style="display:flex;gap:6px;padding:12px 16px"><div class="btn" style="background:#efefef">Suivre</div><div class="btn" style="background:#efefef">Message</div></div>
  <div style="display:flex;gap:14px;padding:6px 16px 16px;overflow:hidden">${HL.map((h, i) => `<div style="text-align:center;font-size:12px"><img class="av" src="${h}" width="62" height="62" style="border:1px solid #ddd;padding:2px"><div style="margin-top:4px">${HLN[i]}</div></div>`).join("")}</div>`),
  facebook: shell(`<div style="position:relative"><img src="${img("facebook-cover-1640x624.png")}" style="width:390px;height:220px;object-fit:cover;display:block">
   <img class="av" src="${P}" width="150" height="150" style="position:absolute;left:16px;top:140px;border:4px solid #fff"></div>
  <div style="padding:80px 16px 0"><div class="b" style="font-size:24px">Ceety Boy</div><div class="m">@ceetyboyapp</div>
   <div style="margin-top:10px">${B("facebook").fr}</div><div class="lk" style="margin-top:6px;color:#0866ff">ceetyboy.com</div>
   <div style="display:flex;gap:6px;margin:14px 0 20px"><div class="btn" style="background:#0866ff;color:#fff">Suivre</div><div class="btn" style="background:#e4e6eb">Message</div></div></div>`),
  tiktok: shell(`<div class="bar">Ceety Boy</div><div style="text-align:center;padding:18px 16px">
   <img class="av" src="${P}" width="96" height="96" style="margin:0 auto"><div class="b" style="margin-top:10px;font-size:17px">@ceetyboyapp</div>
   <div style="display:flex;justify-content:center;gap:26px;margin:12px 0"><div><div class="b">—</div><span class="m">Abonnements</span></div><div><div class="b">—</div><span class="m">Followers</span></div><div><div class="b">—</div><span class="m">J'aime</span></div></div>
   <div style="display:flex;gap:6px;justify-content:center"><div class="btn" style="background:#fe2c55;color:#fff;flex:0 0 160px">Suivre</div></div>
   <div style="margin-top:12px">${B("tiktok").fr}</div><div class="b" style="margin-top:6px">🔗 ceetyboy.com</div></div><div style="height:20px"></div>`),
  youtube: shell(`<img src="${img("youtube-banner-2560x1440.png")}" style="width:390px;height:65px;object-fit:cover;object-position:center;display:block;border-radius:0">
  <div style="padding:14px 16px;display:flex;gap:14px;align-items:center"><img class="av" src="${P}" width="72" height="72">
   <div><div class="b" style="font-size:22px">Ceety Boy</div><div class="m">@ceetyboyapp · — abonnés</div></div></div>
  <div style="padding:0 16px"><div class="m" style="color:#ddd">${B("youtube").fr.slice(0, 95)}… <b>plus</b></div><div class="lk" style="margin-top:6px">ceetyboy.com</div>
   <div class="btn" style="background:#f1f1f1;color:#0f0f0f;margin:14px 0 20px;border-radius:20px">S'abonner</div></div>`, true),
  whatsapp: shell(`<div style="position:relative"><img src="${img("whatsapp-cover-1920x1080.png")}" style="width:390px;height:219px;object-fit:cover;display:block">
   <img class="av" src="${img("profile-whatsapp-640x640.png")}" width="110" height="110" style="position:absolute;left:140px;top:160px;border:4px solid #fff"></div>
  <div style="text-align:center;padding:60px 16px 0"><div class="b" style="font-size:22px">Ceety Boy</div><div class="m">Compte professionnel</div></div>
  <div style="padding:14px 16px"><div>${B("whatsapp").fr}</div><div class="m" style="margin-top:10px">${B("whatsapp").descriptionFr}</div><div class="lk" style="margin-top:8px;color:#008069">ceetyboy.com</div></div><div style="height:16px"></div>`),
};

mkdirSync(join(ROOT, "proof"), { recursive: true });
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 390, height: 600 }, deviceScaleFactor: 2, userAgent: "Mozilla/5.0 CeetyBoyInspector/1.0" });
for (const [k, html] of Object.entries(pages)) {
  const p = await ctx.newPage();
  await p.setContent(html, { waitUntil: "load" });
  await p.screenshot({ path: join(ROOT, "proof", `after-${k}-390.png`), fullPage: true });
  await p.close();
  console.log("mock", k);
}
await browser.close();
