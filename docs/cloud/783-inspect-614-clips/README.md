NOT CLEAR. No clip is final yet.
- All were recorded on live Web-1024d, which no inspector has cleared.
- All eight 9:16 clips have two layout faults: the game's view bar is cut at the right edge, and the end-card credits sit under the Reels/TikTok buttons.
- Six clips open on « La ville se construit … % ».
- Lagos shows cyan patches on the lagoon.
- The two films are drafts by design (BROUILLON on every frame), and the long one still shows the old km.

Content-clean today (would pass on a CLEAR build): **GOTA 16:9, Lolo Andoche 16:9, Marsal Technologies 16:9**. Task 784 re-records everything with the fixes below.

# 783 · Inspector: event-partner trip clips + film drafts (ceetyboy-media `cloud/614-1025`, 7cb4b2b)

## In short (for Henry)
1. **What passes everywhere.**
   - It is real game video (the car drives, the views change), not a slideshow.
   - Names match `data/seo/sponsors.json` (seo/engine) exactly.
   - The km on every end card is the game's km (747): Dido's 6,2 · GOTA 4,7 · Kekeli 3,8 · Lagos 10,5 · Leadpreneur 9,4 · Lolo 5,2 · Marsal 7,0 · oba 8,0.
   - Music is present in every file (« Allada », mean −27.5 dB). Credits are on every end card.
   - The word « truck » appears nowhere. Every trip says « la voiture ».
   - The two « à confirmer » pins (oba Architectes, Kekeli Wear) carry a red « Position à confirmer » badge on every frame.
2. **9:16 layout (all 8 vertical clips) → fix in 784.**
   - The game is landscape-only on phones (« Tournez votre téléphone », checked on live at 390×844). The vertical clips were therefore filmed on a narrow canvas the game does not lay out.
   - The bottom bar shows « CART… », « CONDUITE » is hidden, and « 30 S · 2× » sits on top of CARTE.
   - The end-card credits (OSM, ESA, CC BY music) sit in the bottom 6 %, under the platform's caption and buttons.
3. **Loading text in the first second → fix in 784.** These clips show the « La ville se construit 0–80 % » pill in their first 1–2 s:
   - 16:9: Dido's, Kekeli, Lagos, Leadpreneur;
   - 9:16: Kekeli, Leadpreneur, Lolo, Marsal, oba.
   That is a loading screen in a promo.
4. **Lagos Buka & Grills (both formats):** cyan patches float on the lagoon beside Ancien Pont at about 6 s. It looks like a water layer that did not line up. It needs checking on the 1025l build.
5. **Films (`film/`):** both are BROUILLON on every frame, with « titre à confirmer » and « carte provisoire » in the opening. They are drafts by design.
   - The long draft's map chip still says **Lagos 9,9 km**; the game says 10,5. They were rendered at 09:57, before 747's fix at 10:33.
   - Re-render after 784. Not final.

## Table: clip × check (✓ pass · ✗ fail · — n/a)
| Clip | Real video | Every frame loaded | No loading text | Names = sponsors.json | km = game | Credits | 9:16 safe zone | Sound | No « truck » | Pin flag | Verdict |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Dido's Beauty Company 16:9 | ✓ | ✓ | ✗ 72 % at 0 s | ✓ | ✓ 6,2 | ✓ | — | ✓ | ✓ | — | re-record |
| Dido's Beauty Company 9:16 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ bar cut, credits low | ✓ | ✓ | — | re-record |
| GOTA International Group 16:9 | ✓ | ✓ | ✓ | ✓ | ✓ 4,7 | ✓ | — | ✓ | ✓ | — | **content-clean** |
| GOTA International Group 9:16 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | — | re-record |
| Kekeli Wear 16:9 | ✓ | ✓ | ✗ 0 % | ✓ | ✓ 3,8 | ✓ | — | ✓ | ✓ | ✓ (badge hides « …r » of the name) | hold: pin à confirmer |
| Kekeli Wear 9:16 | ✓ | ✓ | ✗ 0 % | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ (same) | hold: pin à confirmer |
| Lagos Buka & Grills 16:9 | ✓ | ✗ cyan water patches | ✗ 80 % | ✓ | ✓ 10,5 | ✓ | — | ✓ | ✓ | — | re-record |
| Lagos Buka & Grills 9:16 | ✓ | ✗ (same bridge) | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | — | re-record |
| Leadpreneur Academy 16:9 | ✓ | ✓ | ✗ 0 % | ✓ | ✓ 9,4 | ✓ | — | ✓ | ✓ | — | re-record |
| Leadpreneur Academy 9:16 | ✓ | ✓ | ✗ 0 % | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | — | re-record |
| Lolo Andoche 16:9 | ✓ | ✓ | ✓ | ✓ | ✓ 5,2 | ✓ | — | ✓ | ✓ | — | **content-clean** |
| Lolo Andoche 9:16 | ✓ | ✓ | ✗ 50–80 % | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | — | re-record |
| Marsal Technologies 16:9 | ✓ | ✓ | ✓ | ✓ | ✓ 7,0 | ✓ | — | ✓ | ✓ | — | **content-clean** (no line yet: name only) |
| Marsal Technologies 9:16 | ✓ | ✓ | ✗ 0 % | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | — | re-record |
| oba Architectes 16:9 | ✓ | ✓ | ✓ | ✓ | ✓ 8,0 | ✓ | — | ✓ | ✓ | ✓ (badge hides « …es ») | hold: pin à confirmer |
| oba Architectes 9:16 | ✓ | ✓ | ✗ 0 % | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | hold: pin à confirmer |
| Film long draft (3:00) | ✓ trips | ✓ | ✓ | ✓ | ✗ Lagos 9,9 (others: see 747) | ✓ | — | ✓ | ✓ | oba/Kekeli as cards only, no trip | draft, re-render |
| Film short draft (1:50) | ✓ | ✓ | ✓ | ✓ | rendered with the same old km | ✓ | — | ✓ | ✓ | same | draft, re-render |

All 16 clips: 25.0 s (Lagos 16:9 24.9), 30 fps, H.264 + AAC 48 kHz stereo; 16:9 = 1920×1080, 9:16 = 1080×1920 (`data/probe.txt`).

**Observation, not a fail:** every clip has 1–3 still stretches of 1.0–1.5 s (ffmpeg `freezedetect`). They are the game's own Map view during a jump ahead, for example Dido's 16:9 at 7.2 s.
- The Map is on screen in 14–29 % of each drive (measured at 2 frames per second).
- In a 25 s reel this reads as a short pause. 784 may trim it to ≤ 0.5 s.

## What 784 must change when re-recording
1. **9:16:** do not film the game on a portrait canvas. Either film landscape and reframe to 9:16 around the car, or hide the bottom bar for the recording. Keep the top title pill.
2. **9:16 end card:** move the credits (and « ceetyboy.com ») above y ≈ 1500 px and away from the right 150 px, or put them in the post caption.
3. **Start the clip after « La ville se construit » has gone** (first frame with the « Aperçu : la voiture roule toute seule » pill).
4. **Pin badge:** place « Position à confirmer » under the title, not over the name's last letters.
5. **Lagos:** look at the Ancien Pont lagoon on the CLEAR build. If the cyan patches are still there, file a game bug with the frame.
6. **Films:** re-render both drafts from the 747 km (city-boy `cloud/747-film-km-match-game`, `film/sponsors.json gameMetres`).

## Proof (`proof/`)
- `strips/<clip>-0-25-50-75-end.jpg`: 18 strips, 5 frames each (0 s, 25 %, 50 %, 75 %, last frame), one per clip and film. Made with ffmpeg from the committed MP4s.
- `bug-9x16-view-bar-cut-gota-10s.jpg`: the cut bottom bar (« CART… », CONDUITE hidden).
- `bug-9x16-end-card-credits-under-platform-ui-shaded.jpg`: the GOTA 9:16 end card. Red shading marks the usual Reels/TikTok caption and button areas; the credits are inside them.
- `bug-first-frame-ville-se-construit-0-leadpreneur-16x9.jpg`: the first frame with « La ville se construit 0 % ».
- `bug-lagos-16x9-cyan-patches-lagoon-ancien-pont.jpg`: the cyan patches on the lagoon (Lagos, 25 %).
- `bug-film-long-lagos-9-9-km-vs-game-10-5.jpg`: the long draft's chip « Golden Tulip → Lagos Buka & Grills · 9,9 km ».
- `note-badge-covers-name-kekeli-9x16.jpg`: the badge cutting « Kekeli Wear ».
- `note-film-opening-brouillon-titre-a-confirmer.jpg`: the film opening (draft badge, title to be confirmed).
- `note-didos-16x9-map-still-1-4s.jpg`: the 1.4 s Map still, 4 frames per second.
- `after-gota-16x9-end-card-ok.jpg`: a content-clean 16:9 end card (GOTA).

## How it was checked
- ffprobe for format and sound; ffmpeg `volumedetect` and `freezedetect`; frame grabs.
- Names compared with city-boy `seo/engine:data/seo/sponsors.json`; km compared with `meta/*.json routeMetres` and 747's `gameMetres`.
- Portrait behaviour checked on live app.ceetyboy.com (Web-1024d) at 390×844 in the VM's Chromium.

## Mac proof shots
None: everything here was checked on the files themselves. The Mac downloads nothing from this branch (Henry's rule: only CLEAR finals).
