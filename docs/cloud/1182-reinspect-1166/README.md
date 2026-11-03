# CLEAR — ready for Henry

Board 1182 · Round 2 inspection of the 1166 route films (Kekeli Wear, oba Architectes) after fixes 1179, 1180 and 1181.
Inspected on 3 Nov 2026 by a cloud session that did not make the films. I fetched only the branches named below.

**The final films are on ceetyboy-media branch `cloud/1181-kekeli-arrival` (commit `06ec937`), folder `1166-1103/`.** Mac task 1176 now names that branch.

| File (in `1166-1103/`) | Size (bytes) | MD5 (first 12) | Changed since 1166? |
|---|---|---|---|
| `kekeli-wear-v2-full-16x9.mp4` | 45 980 429 | 6c7be42a33a0 | yes (1179 opening and itinerary, 1181 arrival) |
| `kekeli-wear-v2-full-16x9-nomusic.mp4` | 41 826 584 | 6201915af54b | yes (same pictures) |
| `kekeli-wear-v2-short-9x16.mp4` | 20 934 041 | bf46fb0cf400 | yes (1181 arrival) |
| `kekeli-wear-v2-short-9x16-nomusic.mp4` | 19 137 060 | ff3aa80f0151 | yes (same pictures) |
| `oba-architectes-v2-full-16x9.mp4` | 73 666 000 | 74f7ae22e674 | yes (1179 opening, 1180 itinerary) |
| `oba-architectes-v2-full-16x9-nomusic.mp4` | 67 185 494 | a0a25e7e1334 | yes (same pictures) |
| `oba-architectes-v2-short-9x16.mp4` | 21 091 667 | f206a7b036ce | no (same git blob as 1166) |
| `oba-architectes-v2-short-9x16-nomusic.mp4` | 18 798 067 | d2ffdae92274 | no (same git blob as 1166) |
| `POSTS.md` | 2 923 | bc04a772a378 | no (same git blob as 1166) |

## The three round-1 findings: all fixed
1. **Opening map of both full 16:9 films (0:00–0:04).** Fixed. The destination pin and its name sit fully inside the frame (« Kekeli Wear »,
   « oba Architectes »). « Golden Tulip Le Diplomate », its road name and the start of the orange route sit above the title card at every
   frame from 0 to 119. Proof: `after-kekeli-full-opening-f60.png`, `after-oba-full-opening-f60.png`, sheet 01 of each full film.
2. **oba full film, itinerary card (2:27–2:36).** Fixed. « oba Architectes » sits whole above the pin, inside the small map. Kekeli's
   itinerary card is still right: the whole route, the pin and its name are inside the map. Proof: `after-oba-full-itinerary-f4600.png`,
   `after-kekeli-full-itinerary-f2850.png`.
3. **Kekeli Wear 3-D arrival (full 1:03.6–1:22.7, short 25.4–40.4 s).** Fixed. The map-hold shot now shows the pin among buildings on
   every side: rows of roofs below and to the left, and a building right under the pin. Proof: `after-kekeli-full-arrival-3d-f2300.png`,
   `after-kekeli-short-arrival-f1100.png`, sheets 09–11 (full) and 03–05 (short).

## What I checked and how (the 1175 method, then the spliced frames more closely)
- **Every frame at 2 fps, all four films**, cut again from the final MP4s with a timestamp and frame number on each tile:
  Kekeli full 206 frames (13 sheets), Kekeli short 89 (5), oba full 321 (21), oba short 114 (7). I looked at every sheet.
- **Every frame at each join, at 30 fps** (`seam-*.jpg`, 12–16 frames around each cut, frame numbers on the tiles):
  Kekeli full 118/120, 1907/1908, 2481/2482, 2691/2692 and 2961/2962; Kekeli short 761/762 and 1211/1212; oba full 118/120,
  4418/4419 and 4688/4689. Nothing jumps, repeats or goes missing. No title card lands on the short's arrival piece. The one blank navy
  frame before each end card is that card's fade-in, and the untouched oba short has it as well.
- **Files (ffprobe):** H.264, 30 fps; 1920×1080 and 1080×1920. Frame counts match round 1: Kekeli full 3082 (102.74 s), Kekeli short
  1332 (44.4 s), oba full 4809 (160.3 s), oba short 1701 (56.7 s). Both shorts are under 60 s. The 4 music versions each have one AAC
  stereo 48 kHz track. The 4 `-nomusic` versions have no audio stream. The 4 `.m4a` stems are unchanged since 1166 (same git blob).
- **Sound:** mean −17.1 / −13.6 / −17.0 / −13.2 dB, peak −5.8 / −1.9 / −5.8 / −1.9 dB (Kekeli full / Kekeli short / oba full /
  oba short). No silence longer than 1.5 s below −45 dB in any music version.
- **Same pictures:** each music version and its `-nomusic` version have identical video (MD5 of every frame at 1 fps, scaled).
- **What did not change:** I compared git blob ids of every file on `cloud/1166-1103`, `cloud/1179-opening-map-labels` and
  `cloud/1181-kekeli-arrival`. The oba short (both versions), POSTS.md, README and all four `.m4a` stems are byte-for-byte the files round 1
  passed. The oba full film is the same as on the 1179 branch.
- **Turn cards and names** read in the same order as in round 1 and as each film's own itinerary card. Kekeli: À gauche · À gauche ·
  À droite : Boulevard de la Marina · À gauche : Boulevard Saint-Michel · À gauche : Rue du Marché · Rond-point · Sortez à droite :
  Boulevard Roi Guézo · C'est à votre droite. oba: as in 1175. The icons point the same way as the words. The car stays on the road in
  every frame, and no tree or building floats.
- **End cards:** names and taglines match `public/data/partners.json` (city-boy). The credit line is the one 1175 checked, and the
  oba photo credits « © OBA Architectes (obaarchitectes.com) » (« , rendu 3D » on the Sofitel/CIC render) are still there.
- **Posts links** were checked again on 3 Nov ~18:20 UTC. `ceetyboy.com/fr/itineraire/kekeli-wear`, `/en/directions/kekeli-wear`,
  `/fr/itineraire/oba-architectes` and `/en/directions/oba-architectes` all answer 200 with the right titles.

## Looked at and not findings
- **« Oho les Lunettes → »** shows in the Kekeli top-down arrival shot. It is the game's label for a nearby place. It was already in the
  1166 films and in round 1's proof (`1175 … finding-3-kekeli-short-arrival.png`), so the re-cut did not add it. It is not a partner name.
- **Bare ground on the approach along Boulevard Roi Guézo** (short 27–34 s, full 1:16–1:20). The plots right beside the road just before
  the pin are still brown. That is the data, not a missing chunk. In `public/data/cotonou-city.json` (city-boy
  `cloud/1181-kekeli-arrival-buildings`) there are only 0–6 footprint centres per 20 m of road within 60 m on each side along those last
  113 m, against 36 within 80 m of the pin. The section was rendered from the full city file (`?nofeat-citytiles`, 1181 README), so every
  building in the data is drawn.
- **The re-rendered arrival looks a little softer** than the roundabout shot before it (blurdetect mean 5.05 against 4.39). Both were
  rendered the same way as all of 1166 (`web-render.ts --scale 0.6667`, upscaled; 1166 README line 117). The difference comes from the
  camera: a long forward view against a close top-down view. Round 1's frames of the same shot look the same.
- Both pins are still « trouvé par nous, à confirmer », and the end card still carries the « Partenaire de l'événement » badge. Both were
  already known (1175, 1166 README). Mac task 1176 still tells Henry about the pins.

## Proof (`proof/`)
- `sheet-<film>-NN.jpg`: every frame at 2 fps, with time and frame number (ffmpeg `fps=2,scale,drawtext,tile`, from the final MP4s).
- `seam-<film>-<frame>-from<first>.jpg`: every frame around each join. The tile label `fN` counts from the first frame in the file name.
- `after-*.png`: full-size frames of the three fixed findings (ffmpeg `select=eq(n,N)`).
- Round 1's « before » pictures are on `cloud/1175-inspect-1166` → `docs/cloud/1175-inspect-1166/proof/finding-*.png`.

## Mac proof shots
None. Everything here was measured in the cloud. Nothing here needs a GPU, a build or Henry's ears beyond the music bed 1175 already passed.
