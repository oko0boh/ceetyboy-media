CLEAR — ready for Henry (social brand kit of board 1658, inspected by board 1686 on 8 Nov 2026; one wording fix made on this branch, see 3).

# Inspection of `campaign/PREP-01/` (ceetyboy-media `cloud/1658-brand-kit` → this branch `cloud/1686-inspect-brand-kit`)

| # | Check | Result | Proof |
|---|---|---|---|
| 1 | Every file in `images/` has its real size in its name | 21/21 match (ffprobe width×height = the name) | — |
| 1 | Brand colours | navy #0F172A backgrounds, yellow #FACC15 accents and icons, white text, the logo's red car; nothing off-brand | the pictures below |
| 2 | Facebook cover, phone crop (centre 1110×624 → 640×360) | all words inside, nothing cut; the left third (city render) is where the profile picture sits | `fb-phone-crop-640x360.png` |
| 2 | Facebook cover, desktop 820×312 | all words inside, right of the profile picture's corner | `fb-desktop-820x312.png`; 1658's own 390 px mock `../proof/after-facebook-390.png` |
| 2 | YouTube banner, safe box 1546×423 (red frame) | logo, name, both tagline lines, the link and the handle are all inside | `yt-safe-box.png`, `yt-safe-only.png` |
| 2 | Profile picture as a circle at 200 / 110 / 40 px | car mark clear at 200 and 110; at 40 px still the red car in the yellow ring (no text in it to lose) | `profile-circles-200-110-40.png` |
| 3 | `BIOS.md` lengths | `bun src/mocks.ts` exits 0: IG 137/150 · FB 92/101 · TikTok 76/80 · YouTube 142/150 · WhatsApp 93/139, descriptions within 512 | — |
| 3 | French first, natural French | yes, except one line I fixed: WhatsApp business description « nous vous aidons à être trouvé » → « nous aidons votre entreprise à être trouvée » (`bios.json`, BIOS.md and the WhatsApp mock rebuilt by `src/mocks.ts`) | `../proof/after-whatsapp-390.png` |
| 3 | No invented numbers, no method talk (board 577) | none: only the tagline, « Cotonou en 3D », « trouvez le lieu, voyez la route », the business line | — |
| 3 | Links carry `utm_campaign=cb90` | all 5 (`utm_source=<platform>&utm_medium=bio&utm_campaign=cb90&utm_content=bio`) | — |
| 4 | Highlight icons read as their names | Lieux = pin · Trajets = dotted route to a pin · Commerces = shop front · Tutos = play screen · Villes = buildings · Find Me = magnifier on a pin | `highlights-1080x1080-row.png`, `highlights-1080x1920-two.png` |

Taste notes for Henry (not blocking): YouTube's description promises « Nouvelle vidéo chaque semaine » while the campaign posts daily: true, just modest. On WhatsApp the « About » line is short (93/139), so there is room if he wants a longer one.

**Mac (1687): apply the files from THIS branch (`cloud/1686-inspect-brand-kit` = 1658 + the one wording fix), not from `cloud/1658-brand-kit`.**
