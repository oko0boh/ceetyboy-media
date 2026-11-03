# Board 1179 + 1180 · Partner films: the map labels are no longer cut (3 Nov 2026)

**What was wrong (inspector 1175, ceetyboy-media `cloud/1175-inspect-1166`):**
1. (1179) The opening map of both full 16:9 films (0:00–0:04). The destination pin's name was cut at the top of the frame (for oba,
   the pin itself was cut too). The « Golden Tulip Le Diplomate » start, its name and the start of the route sat under the title card.
2. (1180) The oba full 16:9 itinerary card (2:27–2:36). The « oba Architectes » pin name was cut by the top of the small map.

**What changed (city-boy branch `cloud/1179-opening-map-labels`, from `cloud/1166-partner-films`):**
- New `film/src/trip/fit.ts` (pure code, no React). `fitView` fits the route into the frame with margins in pixels: room above for the
  pin and its name (`pinLabelRise`, the same sizes `MapView` draws). In 16:9 it also keeps room below for the title card (70 px from the
  bottom, about 154 px tall), a 20 px gap and the road name under the start.
- `PartnerTripV3.tsx`, the opening map (16:9 full frame and the 9:16 band) now uses `fitView(route + named points + pin, introPad)`.
  It used to use `runView`, which left a fixed 200 m margin, and on a long route that is only a few pixels.
- `PartnerTripV2.tsx` `TripOutro`, the itinerary card's map (both aspects, and the older v2 films) now uses
  `fitView(map.box, routeMapPad, anchorBottom)`. The bottom edge of our data stays where it was (the sea south of our data is not
  drawn), and the pin's name gets the room it needs at the top.
- 5 new tests in `scripts/studio/trip-film-lib.test.ts`: the box stays inside the margins with no stretching; in 16:9 the pin's name is
  inside the frame and the start is above the title card; the same in the 9:16 band; the itinerary map in both aspects; and a
  regression test showing that the old itinerary fit cut a pin name on a route shaped like oba's.

## The films (ceetyboy-media branch `cloud/1179-opening-map-labels`, folder `1166-1103/`, same file names)
| File | What changed |
|---|---|
| `kekeli-wear-v2-full-16x9.mp4` (+ `-nomusic.mp4`, `-music.m4a`) | frames 0–119 (opening map) and 2692–2961 (itinerary card) are new |
| `oba-architectes-v2-full-16x9.mp4` (+ `-nomusic.mp4`, `-music.m4a`) | frames 0–119 and 4419–4688 are new |
| the 4 short 9:16 files | not changed (copied from `cloud/1166-1103`) |

**How they were re-cut, and why not with a full re-render.** The Studio section renders behind these films (about 9.5 h of VM
time) were not kept. The two maps do not use them, because they are drawn by Remotion from our map data alone. So I did this:
1. `trip-film.ts … --studio studio/reels/781/<id>-sections.json --aspects 16:9 --partial --no-render` writes the film's props with
   no sections. The map, route, pin, steps and labels come from the same data, so the labels are the same 21 / 32 as in 1166.
2. `bunx remotion render … partner-trip-v3 --frames=0-119` (the opening) and `--frames=<route start>-<+269>` (the itinerary card;
   in the props-only timeline it starts at 330 for Kekeli and 594 for oba), CRF 14, muted.
3. ffmpeg put back together: new opening + old film frames 120 to N−391 + new itinerary + old end card (the last 120 frames).
   It re-encoded with libx264 CRF 21, yuvj420p, 30 fps, and **copied the original music track unchanged** (`-c:a copy`). The
   `-nomusic` file is the same video with no audio. The `-music.m4a` stem is unchanged, because the film length did not change.
   The cut points (N−390 = start of the itinerary card, N−120 = end card) were checked on the old films frame by frame first.

## How it was checked
- **Same length:** Kekeli 3082 frames / 102.741 s, and oba 4809 frames / 160.320 s, exactly as before.
- **The middle of the film is untouched:** oba frames 1500–1800, old against new, SSIM 0.996. The only change there is the re-encode.
- **Sound:** oba music version mean −17.0 dB, peak −5.8 dB (1175 measured the same range). The `-nomusic` files have no audio stream.
- **Every new frame watched at 2 fps** (contact sheets in `proof/`). The joins were checked at 118–121, N−391/N−390 and N−121/N−120:
  opening → first map run, last photo or arrival → itinerary, itinerary → end card. Nothing jumps and nothing is missing.
- **Kekeli's itinerary card** (1180 asked for a check that it is still fine): the whole route, the pin and « Kekeli Wear » are
  inside the map. The map is a little smaller than before because of the new top margin.
- **9:16 shorts:** their timeline has no opening map and no itinerary card (`v3Schedule` cut: Studio pieces, photos, end card), so
  the change does not reach them, and they are not re-cut. 1175 found no cut labels in them.
- `bun run check`: **1333 → 1338 pass**, 7 skip. **1 fail on this VM, before and after my change:** `scripts/testers/run.test.ts`
  « board 321 » reads `journey/auto` with `git show`, and this shallow clone does not have that branch. That is an environment
  problem, not caused by this change. The film's own `tsc --noEmit` (film/) passes.

## Proof (`proof/`)
- `before-kekeli-full-opening.png`, `before-oba-full-opening.png`: the opening map in the 1166 films (from 1175). The pin name is cut
  at the top, and the start is under the title card.
- `before-oba-full-itinerary.png`: oba's itinerary card in the 1166 film (from 1175). « oba Architectes » is cut at the top of the map.
- `after-<kekeli|oba>-full-opening-0_5s.png`, `-2s.png`, `-3_9s.png`: the opening map in the new films at 0.5, 2 and 3.9 s. The pin and its
  name are inside the frame, and the start, its name and « Boulevard de la Marina » are above the title card.
- `after-<kekeli|oba>-full-itinerary.png`: the itinerary card in the new films. The pin's name is inside the map.
- `sheet-<kekeli|oba>-full-opening-2fps.jpg`, `sheet-<kekeli|oba>-full-itinerary-2fps.jpg`: every new frame at 2 fps.
All frames were taken with ffmpeg from the final MP4s.

## Not done here
- **1181** (Kekeli 3-D arrival with no buildings) needs new Studio section renders, and its re-cut must start from **this** branch's
  Kekeli films (or re-render them whole with this code).
- Mac: nothing new. Inspector 1182 re-checks these films, then updates Mac task 1176 to copy from the final branch.

## Mac steps (only if a film has to be made again from scratch)
`bun scripts/studio/trip-film.ts <render dir> --studio studio/reels/781/<id>-sections.json --aspects 16:9` (full) renders with the fixed
maps directly (1166 README, Mac step 3). No GPU or sound check is needed for this change: it only moves map views.
