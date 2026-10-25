# Ceety Boy · partner trip videos (board 614, 25 Oct 2026)

Golden Tulip Le Diplomate → each event partner with a pin, **driven in the live web game** (app.ceetyboy.com, build Web-1024d) from the
cloud, with the « 30 s » trip length. The businesses are the partners of Lilian's event (1 Nov); the end card says « Partenaire de
l'événement ». **Nothing here is posted or sent.** Made by city-boy branch `cloud/614-partner-trip-videos`
(`docs/cloud/614-partner-trip-videos/README.md` explains how and what was found).

## Clips (25 s each: ~21 s drive + 4 s end card, H.264, 30 fps)
| Partner | File | Format | Length | Size | Road route | Pin |
|---|---|---|---|---|---|---|
| Dido's Beauty Company | `didos-beauty-trajet-16x9.mp4` | 1920×1080 | 25.0 s | 26.4 MB | 6.2 km | in partners.json (journey/auto) |
| Dido's Beauty Company | `didos-beauty-trajet-9x16.mp4` | 1080×1920 | 25.0 s | 22.2 MB | 6.2 km | in partners.json (journey/auto) |
| GOTA International Group | `gota-international-trajet-16x9.mp4` | 1920×1080 | 25.0 s | 26.9 MB | 4.7 km | in partners.json (journey/auto) |
| GOTA International Group | `gota-international-trajet-9x16.mp4` | 1080×1920 | 25.0 s | 22.9 MB | 4.7 km | in partners.json (journey/auto) |
| Kekeli Wear | `kekeli-wear-pin-a-confirmer-trajet-16x9.mp4` | 1920×1080 | 25.0 s | 23.5 MB | 3.8 km | **found by board 617, à confirmer** |
| Kekeli Wear | `kekeli-wear-pin-a-confirmer-trajet-9x16.mp4` | 1080×1920 | 25.0 s | 20.8 MB | 3.8 km | **found by board 617, à confirmer** |
| Lagos Buka & Grills | `lagos-buka-grills-trajet-16x9.mp4` | 1920×1080 | 24.9 s | 19.5 MB | 10.5 km | in partners.json (journey/auto) |
| Lagos Buka & Grills | `lagos-buka-grills-trajet-9x16.mp4` | 1080×1920 | 25.0 s | 16.8 MB | 10.5 km | in partners.json (journey/auto) |
| Leadpreneur Academy | `leadpreneur-academy-trajet-16x9.mp4` | 1920×1080 | 25.0 s | 22.9 MB | 9.4 km | in partners.json (journey/auto) |
| Leadpreneur Academy | `leadpreneur-academy-trajet-9x16.mp4` | 1080×1920 | 25.0 s | 20.0 MB | 9.4 km | in partners.json (journey/auto) |
| Lolo Andoche | `lolo-andoche-trajet-16x9.mp4` | 1920×1080 | 25.0 s | 23.4 MB | 5.2 km | in partners.json (journey/auto) |
| Lolo Andoche | `lolo-andoche-trajet-9x16.mp4` | 1080×1920 | 25.0 s | 20.8 MB | 5.2 km | in partners.json (journey/auto) |
| Marsal Technologies | `marsal-technologies-trajet-16x9.mp4` | 1920×1080 | 25.0 s | 22.4 MB | 7.0 km | in partners.json (journey/auto) |
| Marsal Technologies | `marsal-technologies-trajet-9x16.mp4` | 1080×1920 | 25.0 s | 21.0 MB | 7.0 km | in partners.json (journey/auto) |
| oba Architectes | `oba-architectes-pin-a-confirmer-trajet-16x9.mp4` | 1920×1080 | 25.0 s | 25.7 MB | 8.0 km | **found by board 617, à confirmer** |
| oba Architectes | `oba-architectes-pin-a-confirmer-trajet-9x16.mp4` | 1080×1920 | 25.0 s | 22.5 MB | 8.0 km | **found by board 617, à confirmer** |

- Each clip: the real drive with the game's own HUD and views (City / Bird / Drive, the Map view when the game jumps ahead), the
  route title over the first 3 s, then the end card: Ceety Boy, logo, name, line, « Partenaire de l'événement », km of the road route
  the game picked, « ceetyboy.com », credits.
- **oba Architectes and Kekeli Wear**: pins found by board 617, not approved yet. File names say `-pin-a-confirmer-` and every frame
  shows a red « Position à confirmer » badge. Do not use them until the pins are approved. They are not in the film.
- Marsal Technologies has no line yet: its end card shows the name only (as in the film).
- `sheets/`: one contact sheet per clip (a frame every 2 s), looked at before delivery: the car moves, the city is built, no grey or
  blank frames. `meta/`: per clip the frame ranges kept, route length, the exact game link.
- Smooth video although the cloud draws 1–9 FPS: **virtual time** (each frame = exactly 1/30 s of game time). The car's speed matches the
  game's own clock (checked in the game log: 60 frames = 2.0 s of the game's trip clock, 28 m/s = the reported 50 km/h at the trip's 2× pace).

## Sound and credits
Music: « Allada », Kevin MacLeod (incompetech.com), CC BY 4.0 (our free music list), credited on each end card and in the films.
No engine sound (the cloud cannot record the game's sound). Credits: « Images du jeu Ceety Boy · © OpenStreetMap contributors (ODbL) ·
ESA WorldCover 2021, Meta & WRI, GHS © UE (CC BY 4.0) ».

## Film drafts with the real trips (`film/`, BROUILLON on every frame)
| File | Length | Size | What |
|---|---|---|---|
| `ceetyboy-film-brouillon-trajets.mp4` | 3 min 00 s | 62.9 MB | Long draft (board 474) with the 6 full partner slots (15 s): map route, then the real drive full screen, then the card with the arrival |
| `ceetyboy-film-court-brouillon-trajets.mp4` | 1 min 50 s | 35.1 MB | Short room cut (board 497), same slots at 12 s, French only |
| `contact-sheet-long.jpg` / `contact-sheet-short.jpg` | | | a frame every 3 s |
| `frame-0m37-gota-drive.jpg` / `frame-0m43-gota-card.jpg` | | | GOTA's slot: the drive, then the card with the arrival |

1920×1080, 30 fps, music on. The openings use our own map (the Studio O1 opening clip is on the Mac); the badge says what is not final.
The Mac's Studio renders (board 379) replace these trips only if they are better.
