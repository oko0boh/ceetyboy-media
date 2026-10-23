# Ceety Boy · posts from the live web game (board 441 a, 23 Oct 2026)

**Nothing here is posted, scheduled or sent.** Each post still waits for Henry's « post <ID> » (QUEUE.md of tasks 136 / 142).
These are new **game-frame versions** (`-web`) of six queued posts. Every picture is a still of **our own city** in the live game
(app.ceetyboy.com, build Web-1023c), taken by the cloud's own Chromium with `scripts/studio/web-shots.ts` (city-boy branch
`cloud/441-cloud-video-desk`), checked by frame QA, then made into 4:5 slides + one 9:16 video by `scripts/post-render.ts` (board 154).

**Q9d (promo uses our own game frames):** OK. The web game draws our own city (its log: « Google tiles off … our city »): no Google
3D tiles, no Cesium ion logo, no « Upgrade for commercial use » strip, no « Development Build ». The stills use the game's `clean`
flag: no buttons, no keyboard-keys panel, no EN/FR interface text. The game's small « © » credits button is cropped off.

## Files per post
`<id>/<id>-s1.jpg …` = 4:5 slides (1080×1350, carousel) · `<id>/<id>.mp4` = 9:16 video (1080×1920, 30 fps, AAC music, promo line
on every frame) · `<id>/<id>-credits.txt` = the credit lines for the end of the caption (Q9a: credits in the caption only).
`stills/` = the 13 clean stills (1080×1080) + `contact-sheet.jpg`, for any other post.

## The six posts
Caption credit for every post (add at the end of the caption):
« Ville 3D Ceety Boy : données © contributeurs OpenStreetMap (ODbL), ESA WorldCover 2021, Meta & WRI, GHS © UE (CC BY 4.0) ·
Musique : (the track below), Kevin MacLeod (incompetech.com), CC BY 4.0 · À des fins promotionnelles uniquement / For promotional purposes only »

| Post (queue) | Files | Video | FR caption (opening) · EN line | Music | Notes |
|---|---|---|---|---|---|
| **CB-1020B** Roule avec moi : Étoile Rouge → Dantokpa (136, Tue 20 Oct, already past: re-use slot) | `1020b-web/` 5 slides | 20 s · 1.5 MB | « Place de l'Étoile Rouge à Marché Dantokpa. 3,2 km par la route. » · *Étoile Rouge to Dantokpa market, 3.2 km by road.* | « Allada » | **3,2 km, not 2,8 km**: the game today says 3171 m for this trip (its log `journey: … 3171 m by road`); the 136 caption said 2,8 km (older route) |
| **CB-1024B** Astuce : quelle vue ? (136, Sat 24 Oct 19:30) | `1024b-web/` 5 slides | 20 s · 1.3 MB | « Même trajet, 4 façons de le voir 👀 VILLE, OISEAU, CARTE, CONDUITE. » · *Same trip, 4 ways to see it.* | « Kumasi Groove » | VILLE / OISEAU / CARTE at the same spot (Étoile Rouge, trip to Dantokpa); CONDUITE is at Place de l'Amazone (slide says so): at Étoile Rouge the game's AUTO took the Drive view back during every screenshot |
| **CB-1026A** Hier / Aujourd'hui : Marina + Amazone, game half (142, Mon 26 Oct 12:30) | `1026a-web/` 3 slides | 12 s · 0.6 MB | « Hier / Aujourd'hui : le boulevard de la Marina. » · *Then / now: Boulevard de la Marina.* | « Slow Heat » | Replaces the old `1026a-game` slides 3–4 (Cesium strip). Slides 1–2 (2019 photo + « now » photo) still need the photo rights (155 SHOTLIST §2) |
| **CB-1027B** Roule avec moi : Amazone → Souvenir (142, Tue 27 Oct 19:30) | `1027b-web/` 5 slides | 20 s · 1.3 MB | « Roule avec moi : de l'Amazone à la Place du Souvenir. 2,1 km. » · *Drive with me: Amazon → Place du Souvenir, 2.1 km.* | « Allada » | **2,1 km** (game log: 2062 m; the draft said 2,0). Place du Souvenir closed for works since 9 Dec 2024: the caption must not invite people there (142 note) |
| **CB-1031A** Lancement J-1 (142, Sat 31 Oct 12:30) | `1031a-web/` 5 slides | 20 s · 1.3 MB | « J-1. Demain, Ceety Boy sort. » + ending (1) or (2) as in 142 · *Tomorrow, Ceety Boy launches.* | « Allada » | Replaces `1031a-game`; no event or venue named on the slides |
| **CB-1101A** Lancement : c'est aujourd'hui (142, Sun 1 Nov 12:30) | `1101a-web/` 3 slides | 12 s · 0.7 MB | « C'est aujourd'hui. » + ending (1) or (2) + « lien en bio (ceetyboy.com) » · *It's today.* | « Kumasi Groove » | Video version (155 SHOTLIST 10). Slide 1 is the area of the launch venue seen from above, no sign readable. `stills/venue-bird.jpg` shows the in-game « GOLDEN TULIP » sign: use it only with ending (1) (Lilian's OK for social) |

Every video ends on the card « Cotonou en 3D : ceetyboy.com » / *Cotonou in 3D: ceetyboy.com*. Music sources (CC BY 4.0, credit
required): Allada https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1500001 · Kumasi Groove …?isrc=USUAN1100183 ·
Slow Heat …?isrc=USUAN1100835 (the game's own free list, `public/data/audio.json`). Incompetech tracks can trigger a YouTube
Content ID claim: keep the credit line (board 367 advice).

## What to know before posting
- The city in these stills is our own model city: flat-looking ground in places and a **grey band at the far horizon** (the
  edge of the part of the city that was built around the car). Bird views show it least; the City-view stills with the widest grey
  band (Amazone, Souvenir) are not used in the posts.
- MOOP is « la voiture » / "the car" in every line.
- Re-render any post after a text change: in city-boy, `bun scripts/post-render.ts docs/cloud/441-cloud-video-desk/specs/<id>.json --out <folder>`
  (the stills must be in `data/web-shots/…`: take them again with `bun scripts/studio/web-shots.ts --plan docs/cloud/441-cloud-video-desk/plan-1023.json`).
