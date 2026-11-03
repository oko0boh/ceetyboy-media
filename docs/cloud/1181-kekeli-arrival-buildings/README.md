# Board 1181 · Kekeli Wear arrival: the pin stood on bare ground (3 Nov 2026)

**What was wrong (inspector 1175, finding 3):** in both Kekeli Wear films the 3-D arrival shows the pin on an empty brown block,
while the 2-D map right after it shows rows of buildings there. `public/data/cotonou-city.json` has **36 building footprints within
80 m of the pin** (6.362753, 2.419229) and 286 within 200 m (OSM 202, Microsoft ML 33, Google Open Buildings 51), so the data was fine.

## Why it happened (measured, not guessed)
1. The live build serves the same city file we have (`app.ceetyboy.com/StreamingAssets/data/cotonou-city.json`, 12.5 MB,
   OSM timestamp 2026-10-16, 145 885 buildings) and the same tile `b/4_-2` (577 buildings, 36 of them within 80 m of the pin).
   So nothing is missing from what the game downloads.
2. I drove the live Studio to the arrival (one `map-hold` frame, `?goto=` the pin, `?from=` 3700 m along the route, the section's own URL)
   and looked at the console: `[Tiles] city from tiles (537): overview + 59 boot tiles`, `8/8 chunks built, city queue 0`, every chunk
   built and nothing waiting — and the block was still empty (`proof/before-live-game-citytiles-on.jpg`). So it is not a chunk that
   never arrived, and not the Studio's wait being too short.
3. The same shot with the city tiles turned off for that run (`?nofeat-citytiles`, the game then reads the whole city JSON) shows the
   block full of buildings (`proof/after-live-game-citytiles-off.jpg`). So the bug is in the **tiled** city path (feature `citytiles`,
   board 537), which the web build has on.
4. The cause, in `CityBuilder.cs` (city-boy-unity): the chunk the car stands on was **built at once, without waiting for its tiles**
   (« no waiting for tiles, so there is always a strip under it »). Every other chunk waits for `TilesReady` (its tile and the 8
   around it). When the car starts away from the boot tiles — which is what every Studio section does (`?from=` a point along the
   route) — that chunk is built before its tile has been read, so it is built **empty**, and it is never rebuilt: it stays empty for
   the whole run. The pin sits in that chunk, which is why the arrival of this section was bare while the shots further back were full.

## The game fix (city-boy-unity branch `cloud/1181-truck-chunk-waits-for-tiles`, from `integrate/cloud-1`)
- `City/CityTiles.cs`: new `CityTileStream.TruckChunk(chunk, chunkSize)` — true when the chunk's tiles are settled; while they are not,
  it **promotes** them (fetched before the route queue, its own tile first).
- `World/CityBuilder.cs` (Unity-only, 2 lines + a comment): the car's chunk still gets its **road strips at once** (there is always a road
  under the car), but its **buildings** wait for `tiles.TruckChunk(...)`. With the city JSON (`tiles == null`) nothing changes.
- `Tests/EditMode/CityTilesTests.cs`: `TheCarsOwnChunkWaitsForItsTilesAndFetchesThemFirst` (waits, promotes both tiles, own tile first,
  not handed out twice, builds once they are in, and builds at once where there are no tiles with buildings).
- `dotnet test tools/logic-tests`: **2315 → 2316 passed, 0 failed** (checked on this branch and on its base).
  `CityBuilder.cs` cannot be compiled in the cloud (Unity only): read by hand, the change is one `if` around four lines that were
  already there; `CityTiles.cs` and the test do compile and run here. **Only `public` members are used** (board 108).

## The films (ceetyboy-media branch `cloud/1181-kekeli-arrival`, folder `1166-1103/`, same file names)
Re-cut on top of the 1179/1180 films (so they carry those fixes too):
| File | What changed |
|---|---|
| `kekeli-wear-v2-full-16x9.mp4` (+ `-nomusic`, `-music.m4a`) | frames 1908–2481 (the whole arrival section) re-rendered; 0–119 and 2692–2961 are 1179/1180's |
| `kekeli-wear-v2-short-9x16.mp4` (+ `-nomusic`, `-music.m4a`) | frames 762–1211 (the arrival piece of the short cut) re-rendered |
| the oba Architectes films | untouched (copied from the 1179 branch) |

**How, and why only the arrival.** The Studio section renders of 1166 were not kept, and re-rendering all five sections in both
aspects is about 7 h of this VM. Only section 5 (`arrivee`, 3700 → 3808 m) shows the ground near the pin: the roundabout shot
(section 4) and the drive before it are full of buildings in the old films (checked frame by frame). So:
1. `bun scripts/studio/web-render.ts studio/reels/781/kekeli-wear-5-arrivee.reel.json --aspect 16:9|9:16 --scale 0.6667 --url "<the
   section's URL + &nofeat-citytiles>"` — 288 frames each, about 30 min an aspect.
2. `trip-film.ts … --only arrivee [--short] --no-render` for the props, then Remotion rendered **only** the arrival's film frames
   (full: 273–846 of that timeline = 574 frames; short: 0–449 after setting the cut's `title` to false, because in the real short this
   piece is not the first one and carries no title card).
3. ffmpeg put them in place of the old frames and copied the music track unchanged (`-c:a copy`); the `-nomusic` file is the same video
   with no audio; the `.m4a` stems are unchanged because the length did not change.
4. The section boundaries were measured on the old films first (full: the map run ends at 1907, the 2-D close-up starts at 2482;
   short: the roundabout piece ends at 761, the end card starts at 1212) and they match the schedule arithmetic exactly
   (short = 180 + 204 + 210 + 168 + 450 + 120 end = 1332 frames = 44.4 s).

**`?nofeat-citytiles` is a render flag, not a shipped change.** It is how the cloud renders a clean section until the Mac merges the
game fix. The films show the city the game data has.

## How it was checked
- **Same length:** full 3082 frames / 102.741 s, short 1332 frames / 44.416 s, as before.
- **Every re-rendered frame watched at 2 fps** (`proof/sheet-kekeli-*-arrival-2fps.jpg`): buildings on both sides for the whole approach
  and under the pin in the map-hold; the car stays on the road; the cards and the live map read the same as before.
- **Seams** checked frame by frame (1905/1908 and 2479/2482; 759/762 and 1209/1213): nothing jumps, no title card over the arrival piece.
- **Sound:** full film mean −17.1 dB (before: −17.0); the `-nomusic` files have no audio stream.
- `bun run check` in city-boy: **1338 pass**, 7 skip, and the same 1 environment-only failure as on the 1179 branch
  (`scripts/testers/run.test.ts` reads branch `journey/auto` with `git show`; this shallow VM clone does not have it).
- Also fixed here: `web-render.ts` asked Chromium for its page list once, right after start, and threw when it was still empty
  (it happened on this VM on 3 Nov). It now asks for up to 10 s.

## Proof (`proof/`)
- `before-live-game-citytiles-on.jpg` / `after-live-game-citytiles-off.jpg`: the same Studio frame on the live build, tiles on and off —
  this is the finding's cause in one picture.
- `before-kekeli-full-arrival-3d.png` (1175), `after-kekeli-full-arrival-3d.png`: the full film's map-hold, before and after.
- `before-kekeli-short-arrival.png` (1175) and `before-kekeli-short-arrival-same-frame.png`, `after-kekeli-short-arrival.png`: the short.
- `sheet-kekeli-full-arrival-2fps.jpg`, `sheet-kekeli-short-arrival-2fps.jpg`: every re-rendered frame at 2 fps.

## Mac steps
1. **Merge the game fix** `cloud/1181-truck-chunk-waits-for-tiles` into `integrate/cloud-1`, compile in Unity (CityBuilder.cs could not be
   compiled in the cloud) and run the EditMode tests, `CityTilesTests` included (board task 1190).
2. **Mac proof shots** (they need a build, so the cloud cannot take them): with the fixed build, open a partner trip from a point along
   the route (`?goto=geo:0,0?q=6.362753,2.419229(Kekeli Wear)&from=geo:0,0?q=6.362428,2.418257(Trajet 3700 m)`) **without**
   `-nofeat-citytiles` and check the block around the pin is built; and one ordinary journey from the Home screen, to see the car's own
   chunk still has its road and its buildings in time (the fix delays only the buildings of that one chunk).
3. The films: inspector 1182 first, then task 1176 copies from the branch 1182 names.
