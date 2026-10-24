# 441 · Reel 1 « Place de l'Étoile Rouge » — rendered in the cloud (24 Oct 2026)

**DRAFT, not for posting.** Made by a cloud agent from the live web game (https://app.ceetyboy.com, Studio web mode of board 440), frame by
frame in the VM's software graphics: 1,800 frames, 1080 × 1920 (9:16), 60 fps, 30 s, 4 h 50 min of rendering. Henry 24 Oct: render in the cloud.

| file | what |
|---|---|
| `reel1-etoile-rouge-9x16-DRAFT.mp4` | 30 s, H.264 60 fps, 18.6 MB, music only |
| `qa/sheet-01…03.png` | one frame every 0.5 s with the frame-QA flags (city-boy `scripts/studio/frame-qa.ts`) |
| `qa/flags.png` | the worst frame of each flag |

## Known problem in this draft (being fixed)
16.4–19.2 s (shot 4, the side shot following the car): the camera passes **through the buildings** of the street — the screen is a wall for
~3 s (frame QA: empty / jump). Cause: the reel put the camera 22 m beside the car, inside the buildings. Fixed in the reel file (8 m, 3.5 m
high, city-boy `cloud/441-cloud-video-desk`), shot 4 to the end is re-rendering now (~3.5 h); the fixed MP4 replaces this one here.

## Sound
Music: « Allada », Kevin MacLeod (incompetech.com), CC BY 4.0 — credit in the post: « Musique : Kevin MacLeod (incompetech.com), CC BY 4.0 ».
Loudness −14 LUFS, −1 dBTP. Not in this cloud version: the whooshes / risers / traffic (no licensed files yet: SOUND-LIST.md, ElevenLabs off,
board 503) and the car's engine (Mac-only stem).

## Credits for a post
Map and buildings: © OpenStreetMap contributors (ODbL) and Microsoft Global ML Building Footprints (CDLA Permissive 2.0) — the Studio uses our
own city, no Google tiles. Statue model: see the game's Credits screen.
