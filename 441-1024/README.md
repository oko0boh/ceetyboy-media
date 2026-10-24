# 441 · Reel 1 « Place de l'Étoile Rouge » — rendered in the cloud (24 Oct 2026)

Made by a cloud agent from the live web game (https://app.ceetyboy.com, Studio web mode of board 440), frame by frame in the VM's software
graphics (no GPU): 1,800 frames, 1080 × 1920 (9:16), 60 fps, 30 s. Henry 24 Oct: render in the cloud, the Mac is busy.
**Not posted; for Henry to watch and decide.**

| file | what |
|---|---|
| `reel1-etoile-rouge-9x16-v2.mp4` | 30 s, H.264 60 fps, 18.6 MB, music, −14.3 LUFS, peak −1.6 dB |
| `qa/sheet-01…03.png` | one frame every 0.5 s with the frame-QA flags (city-boy `scripts/studio/frame-qa.ts`) |
| `qa/flags.png` | the worst frame of each flag |

## The 7 shots
1. 0–4.8 s rise over the rooftops to the column · 2. 4.8–9.6 s top-down on the red star, slow spin · 3. 9.6–14.4 s dive down to the car
· 4. 14.4–19.2 s **orbit of the column at 22 m** (sunset, the boulevard behind) · 5. 19.2–24 s push-in on the statue · 6. whip pan onto the car
leaving the ring · 7. crane up, card « Place de l'Étoile Rouge · Cotonou », fade.

## What changed from the first draft (v1, removed)
v1's shot 4 was a street-level side shot 22 m beside the car: the camera went **through the buildings** for ~3 s (16.4–19.2 s). At 8 m it
passed behind a tree and lost the car. v2 replaces it with an orbit of the column inside the 82 m ring, above the trees (city-boy
`data/studio/reels/etoile-rouge-30s-9x16.reel.json`, branch `cloud/441-cloud-video-desk`). Frame QA: the empty/through-the-wall frames are gone.

## Still flagged (looked at; not broken frames)
- 14.5 s: the « match » cut from the dive into the orbit shows ~0.5 s of a tree and the car before the orbit (the match was written for the
  side shot). Fix if Henry wants: change shot 3's `out` to `cut` (one more ~2 h partial render).
- 23.9 s: the whip pan the reel asks for (QA counts it as a jump after the still statue shot).
- small « pop » flags: cars appearing in traffic at 14 s and 24 s.

## Sound
Music: « Allada », Kevin MacLeod (incompetech.com), CC BY 4.0 — credit in the post: « Musique : Kevin MacLeod (incompetech.com), CC BY 4.0 ».
Not in the cloud version: whooshes / risers / traffic (no licensed files yet: SOUND-LIST.md; ElevenLabs off, board 503) and the car's engine
(Mac-only stem).

## Credits for a post
Map and buildings: © OpenStreetMap contributors (ODbL) and Microsoft Global ML Building Footprints (CDLA Permissive 2.0) — the Studio uses our
own city, no Google tiles. Statue model: see the game's Credits screen.

## Cost in the cloud
4 h 50 min for the full first render, then 2 partial re-renders of shots 4–7 (~4 h 15 min each, of which ~1 h 30 min just stepping the game
back to frame 864). City-boy `scripts/studio/web-render.ts` resumes after a stop.
