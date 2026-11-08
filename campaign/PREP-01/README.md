# Ceety Boy social brand kit — Facebook, Instagram, TikTok, YouTube, WhatsApp Business (board 1658, campaign PREP-01)

Everything to set up the five profiles the same way before day 1 (16 Nov 2026): navy #0F172A · yellow #FACC15 · white #F8FAFC,
the red car logo, tagline « Chaque lieu. Chaque trajet. » / « Every place. Every route. », handle **@ceetyboyapp**, link **ceetyboy.com**.
Bios and highlight names: **`BIOS.md`** (French first, English under, character counts checked against each platform's limit).

## What goes where (`images/`)
| Platform | Profile picture | Cover / banner | Other |
|---|---|---|---|
| Instagram | `profile-1080x1080.png` | — (Instagram has none) | 6 highlight covers `highlight-<name>-1080x1920.png` (upload as a story, then « Add to highlight ») — or the `-1080x1080` version straight from the highlight editor |
| Facebook | `profile-1080x1080.png` | `facebook-cover-1640x624.png` | — |
| TikTok | `profile-1080x1080.png` (checked legible at 200 px: `profile-tiktok-200x200.png`) | — (TikTok has none) | — |
| YouTube | `profile-youtube-800x800.png` | `youtube-banner-2560x1440.png` (text inside the 1546×423 centre box every device shows) | — |
| WhatsApp Business | `profile-whatsapp-640x640.png` | `whatsapp-cover-1920x1080.png` | « About » + business description in `BIOS.md` |

Highlights, left to right: Trajets · Lieux · Commerces · Tutos · Find Me · Villes (files `trajets`, `lieux`, `commerces`, `tutos`, `findme`, `villes`).

## Notes
- The cover picture is the Étoile Rouge Studio still (`src/etoile-rouge-still-B-1920x1080.jpg`, from the 29 Oct brand kit) — a game picture made with the Studio, as the rules ask.
- **Facebook cover is mirrored** (picture left, words right): the phone mock showed Facebook's round profile picture sits on the bottom-left of the cover and hid the tagline and the link. Words are kept inside the centre 1100 px that phones show.
- WhatsApp Business publishes no official cover size; the 16:9 file keeps all words in the centre, so any crop works. If the app crops oddly, the Mac re-checks in the app and tells the cloud.
- Every bio link carries the tracking tag (`utm_campaign=cb90`, `utm_medium=bio`, `utm_source=<platform>`) so the stats tracker counts bio clicks.
- No follower numbers, no user numbers: the mocks show « — » where the app shows counts.

## Proof (`proof/`)
| File | What it shows | How made |
|---|---|---|
| `after-all-profiles-390.png` | the five profiles side by side at phone width | the five mocks below joined |
| `after-instagram-390.png` | Instagram profile: picture, bio FR, link, 5 of the 6 highlights | `src/mocks.ts`, Chromium 390 px wide |
| `after-facebook-390.png` | Facebook Page: cover + profile picture + intro | same |
| `after-tiktok-390.png` | TikTok profile | same |
| `after-youtube-390.png` | YouTube channel (dark mode, banner as phones crop it) | same |
| `after-whatsapp-390.png` | WhatsApp Business profile: cover, picture, About, description | same |
Before: these accounts had no matching brand set (nothing to shoot). These are mock-ups of each app's profile layout, not screenshots of the live apps; the Mac checks the real apps after applying.

## Rebuild
From this folder: `NODE_PATH=$(npm root -g) bun src/build.ts` (images) then `bun src/mocks.ts` (BIOS.md + proof; it fails if a bio is too long). Needs Playwright and Google Fonts (Bricolage Grotesque, Figtree).
