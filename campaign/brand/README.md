# Ceety Boy campaign intro sting + outro end card (board 1659, campaign PREP-02)

The same opening and ending on **every** campaign video (16 Nov 2026 → 13 Feb 2027). Navy #0F172A · yellow #FACC15 · white #F8FAFC.

| File | Length | What it is |
|---|---|---|
| `sting-9x16.mp4`, `sting-16x9.mp4` | 1.5 s | Studio rising shot over Place de l'Étoile Rouge (the city comes into view over a rooftop), a navy wipe with a yellow edge sweeps across, the logo and « Ceety Boy » land. Whoosh at 0.45 s. No words to translate: one file for FR and EN. |
| `outro-fr-9x16.mp4`, `outro-fr-16x9.mp4` | 3 s | Logo · « Ceety Boy » · « ceetyboy.com » · CTA line « Lien en bio » · « Chaque lieu. Chaque trajet. » Soft hit as the logo lands. |
| `outro-en-9x16.mp4`, `outro-en-16x9.mp4` | 3 s | The same in English: CTA « Link in bio », « Every place. Every route. » |
| `outro-*.png` | — | The last frame of each outro, for carousels, thumbnails and stills. |

All MP4s: H.264, 30 fps, yuv420p, AAC 48 kHz stereo — the same settings, so they join without re-encoding.
9:16 = 1080×1920 (everything kept in the centre: the apps cover the top ~250 px and bottom ~400 px), 16:9 = 1920×1080.

## How to put them on a video
Your video must be 30 fps, same size, H.264 + AAC 48 kHz stereo (encode it with `-r 30 -c:a aac -ar 48000 -ac 2` if not). Then:

```sh
printf "file 'sting-9x16.mp4'\nfile 'my-video-9x16.mp4'\nfile 'outro-fr-9x16.mp4'\n" > parts.txt
ffmpeg -f concat -safe 0 -i parts.txt -c copy final-9x16.mp4
```
If the join complains (another frame rate or sample rate), re-encode instead: same command with `-c:v libx264 -crf 18 -c:a aac` in place of `-c copy`.
Studio reels that already end on their own card: put the outro after it anyway (the campaign's CTA lives on the outro); cut the reel's last card if both say the same.

## A different CTA line (the « CTA slot »)
The default CTA is « Lien en bio » / « Link in bio ». A video that needs its own (e.g. « Votre entreprise mérite d'être trouvée »):

```sh
# in city-boy (branch with scripts/studio/brand-sting.ts)
bun scripts/studio/brand-sting.ts outro --logo <logo.png> --out <dir> --name outro-d012 \
  --cta-fr "Votre entreprise mérite d'être trouvée" --cta-en "Your business deserves to be found"
```
→ `outro-d012-{fr,en}-{9x16,16x9}.mp4/.png` in about a minute. Keep the CTA under ~32 characters so it stays on one line in 9:16.

## How they were made (internal)
- Sting picture: Studio render from the live web game (`?feat-studio&studio=web`, `scripts/studio/web-render.ts`), reel
  `city-boy/docs/cloud/1659-intro-outro/reels/sting-{9x16,16x9}.reel.json`: the QA'd « reveal » camera of the Étoile Rouge reel
  (8 m → 42 m up, 170 → 123 m out, azimuth 247.5°), 5 s at 12 fps; frames 10–59 played back in 1.5 s.
- Overlay, outro and encoding: `city-boy/scripts/studio/brand-sting.ts` (Chromium draws each frame, ffmpeg encodes). Fonts Bricolage Grotesque + Figtree (Google Fonts, OFL).
- Sounds: the game's own `public/audio/sfx/whoosh.whip.wav` and `hit.soft.wav`. No music: the sting and outro sit under each video's own music.
- Engine sound of the car: none (Mac-only extra, not needed for a 1.5 s sting).

## Proof (`proof/`)
| File | What it shows | How made |
|---|---|---|
| `after-sting-frames.png` | the sting at 0, 0.35, 0.7, 0.8, 0.9, 1.0, 1.2, 1.45 s, 9:16 on top, 16:9 below | ffmpeg frame grabs from the MP4s |
| `after-outro-cards.png` | last frame of the four outros (FR 9:16, EN 9:16, FR 16:9, EN 16:9) | the `.png` files |
Check: sting + outro joined with `-c copy` → 4.52 s file, no error. Sound checked only as present and timed (whoosh 0.45 s, hit 0.08 s), not by ear.
