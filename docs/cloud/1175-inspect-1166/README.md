# NOT CLEAR — 3 findings (fix tasks 1179, 1180, 1181; re-inspection 1182). Mac task 1176 must wait.

Board 1175 · Inspection of the 1166 route films (Kekeli Wear, oba Architectes) on ceetyboy-media branch `cloud/1166-1103`, folder
`1166-1103/`, and their `POSTS.md`. Inspected 3 Nov 2026 by a cloud session (fetched that one branch only).

## What was checked and how
- **Every frame at 2 fps, all four films**, cut with ffmpeg (`fps=2`, a timestamp burned in) and laid out as contact sheets in `proof/`:
  Kekeli short 89 frames (6 sheets), Kekeli full 206 frames (13 sheets), oba short 114 frames (8 sheets), oba full 321 frames (21 sheets).
  Every sheet was looked at; suspicious frames were then pulled at full size (the `finding-*.png` files).
- **Files (ffprobe):** all 8 MP4s are H.264, 30 fps; 16:9 = 1920×1080, 9:16 = 1080×1920.
  The 4 music versions each have one AAC stereo 48 kHz track; the 4 `-nomusic` versions have **no audio stream**; the 4 `.m4a` are AAC
  stereo with the same length as their film. Shorts: Kekeli 44.4 s, oba 56.7 s (both ≤ 60 s). Fulls: 1:42.7 and 2:40.3.
- **Sound present:** mean volume −13 to −17 dB, peak −1.9 to −5.8 dB; no silence longer than 1.5 s below −45 dB in any music version.
- **Same pictures:** the video of each music version and its `-nomusic` version is identical (MD5 of every frame at 1 fps, scaled).
- **Names on screen** were checked against the label table in city-boy `cloud/1166-partner-films` →
  `docs/cloud/1166-partner-films/README.md` and against `public/data/partners.json` (names, `lineFr`).
- **Turn cards, in order:** Kekeli: À gauche · À gauche · À droite : Boulevard de la Marina · À gauche : Boulevard Saint-Michel · À gauche :
  Rue du Marché · **Rond-point · Sortez à droite : Boulevard Roi Guézo** (at the ring, seen from above) · C'est à votre droite.
  oba: À droite : Boulevard de la Marina · À gauche : Boulevard Saint-Michel · Pont Martin Luther King · Tout droit sur le pont · À gauche :
  Rue Bel-Air · À droite (km 6,3) · À gauche (km 6,5) · À droite (km 7,9) · C'est à votre droite · Quartier Sègbeya. Same order as each
  film's own itinerary card. The icons point the same way as the words; the side of each turn matches the 3-D frames.
- **End card credit line** (all four): « Images du jeu Ceety Boy (Studio) · Cartes : © OpenStreetMap contributors (ODbL) · Bâtiments ©
  Microsoft (CDLA), © Google Open Buildings (CC BY 4.0) · ESA WorldCover 2021, Meta & WRI, GHS © UE (CC BY 4.0) · Musique : « Afrobeat »,
  Alex Morgan (freemusicarchive.org), CC BY 4.0 ». oba project photos carry « © OBA Architectes (obaarchitectes.com) » (« , rendu 3D » on the
  Sofitel/CIC render). Correct.
- **Posts (`POSTS.md`):** French first, English second for both; music credit in both languages; no event line in the captions; oba posts
  credit « © OBA Architectes ». Names and taglines match `partners.json` (`lineFr`/`lineEn`). Facts (roads, 3,8 km / 8,0 km, « à votre
  droite ») match the films. Links checked on 3 Nov: `https://ceetyboy.com/fr/itineraire/kekeli-wear`, `/en/directions/kekeli-wear`,
  `/fr/itineraire/oba-architectes`, `/en/directions/oba-architectes`: **all four answer 200** with the right page titles.
- **No floating trees or buildings and no grey blocks** in any frame. The car stays on the road, and no labels are cut except the ones listed below.

## Findings (one fix task each)
1. **Opening overview map of both 16:9 full films (0:00–0:04): names cut off or hidden.** The destination pin's label sits at the top edge
   of the frame and is cut (« Kekeli Wear » is only half visible; for oba the pin itself is cut at the top). The « Golden Tulip Le Diplomate »
   start label and the start of the orange route are under the title card (« Golden Tulip Le Diplomate → … »), which partly hides them.
   Proof: `proof/finding-1-kekeli-full-opening-map.png`, `proof/finding-1-oba-full-opening-map.png`. → **task 1179**
2. **oba full 16:9, itinerary card (2:27–2:36): the « oba Architectes » pin label is cut** by the top edge of the small map (only the bottom
   of the yellow letters shows). The Kekeli itinerary map is fine. Proof: `proof/finding-2-oba-full-itinerary-pin-label.png`. → **task 1180**
3. **Kekeli Wear arrival in 3-D (short 30–36 s, full 1:16–1:22): the pin stands on bare brown ground**, while the 2-D arrival map just after it
   shows rows of buildings around the pin. The game data does have buildings there: `public/data/cotonou-city.json` (city-boy, branch
   `cloud/1166-partner-films`) has 37 footprints within 80 m of the pin (6.362753, 2.419229) and 101 within 120 m. So the 3-D shot looks
   like the city chunk around the pin was not built (or not loaded) when the frames were captured. The block of empty ground also shows
   on the approach along Boulevard Roi Guézo. This makes the shop look like it is in an empty lot. Proof:
   `proof/finding-3-kekeli-full-arrival-3d.png` (3-D), `proof/finding-3-kekeli-full-arrival-map.png` (2-D map, same place),
   `proof/finding-3-kekeli-short-arrival.png` (short: approach and pin). → **task 1181**

## Not findings (noted only)
- Both pins are « trouvé par nous, à confirmer ». This was already known and is flagged in POSTS.md, so it is not a finding, and nothing in the films contradicts the data.
- The end card still shows the « Partenaire de l'événement » badge. The 1166 README already lists it as point 5, and it is the template Henry approved.
- The 1166 label table does not list some generic turn cards that appear on screen: Kekeli's second « À gauche » at km 0,3, and oba's
  « À gauche » at km 6,5 and « À droite » at km 7,9. These cards carry no name, and they match each film's itinerary, so this is a documentation gap only.
- `partners.json` still says `partnerConsent: false` for Kekeli Wear. By the board rule (Lilian's agreement covers the event partners), that is stale data. It is not a film issue.

## Proof (`proof/`)
- `sheet-<film>-NN.jpg`: every frame at 2 fps with its timestamp (16 frames per sheet). Made with ffmpeg `fps=2,scale,drawtext,tile` from
  the final MP4s in `1166-1103/`.
- `finding-*.png`: full-size frames of each finding (ffmpeg `-ss <time> -frames:v 1`).

## Mac proof shots
None. Everything here was measured in the cloud.
