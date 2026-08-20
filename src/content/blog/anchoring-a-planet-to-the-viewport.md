---
title: Anchoring a planet to the viewport
description: A canvas horizon that scaled with width disappeared on ultrawide monitors. The fix was to invert which value is derived from which.
date: 2026-08-20
tags:
  - Canvas
  - Astro
  - Frontend
---

The hero background on this site draws a planet limb — the curved horizon of a
sphere much larger than the screen. The first version looked right on my laptop
and broke on every wide monitor. The bug is a good example of deriving the wrong
value from the wrong input.

## The original code

```js
const globe = {
  x: width * 0.5,
  y: height * 1.37,
  radius: Math.max(width * 0.67, height * 0.78),
};
const horizonY = globe.y - globe.radius;
```

The sphere's centre sits below the viewport, and only the top of the arc is
visible. The visible horizon is therefore `centre − radius`.

The problem: **radius scales with width, but the centre offset scales with
height.** Those two are independent, so the horizon position drifts with aspect
ratio rather than staying put.

## What that does at real resolutions

| Viewport | Radius | Centre | Horizon | Result |
| --- | --- | --- | --- | --- |
| 1440 × 900 | 964 | 1233 | **269** (30% down) | Correct |
| 1920 × 1080 | 1286 | 1479 | **193** (18% down) | Planet fills 82% of the hero |
| 2560 × 1080 | 1715 | 1479 | **−236** | Horizon is above the screen |

On the ultrawide the entire viewport falls *inside* the sphere. There is no arc
to see, just a faint interior wash. The wider the monitor, the worse it gets —
which is exactly backwards from what you want.

## The fix

Stop deriving the horizon. Anchor it, and derive the centre instead.

```js
const horizonY = height * (mobile ? 0.88 : 0.78);
const radius = Math.max(width * 0.92, height * 1.3);
const cy = horizonY + radius;
```

The horizon now sits at 78% of viewport height at every aspect ratio. Radius is
still free to grow with width, but it no longer moves the visible line — it only
controls **curvature**. A wider screen gets a bigger sphere, so the arc flattens.

That happens to be physically correct: a larger planet has a flatter horizon.
The fix is not just more robust, it is more accurate.

## The general shape of the bug

Two values were coupled through a third that nobody was watching. The visible
horizon was an *emergent* property of radius and centre, so neither could be
changed safely.

The repair was to promote the thing I actually cared about — where the line sits
on screen — into an explicit input, and let the less important value fall out of
it.

When a layout breaks at unusual sizes, it is worth asking which quantity you
actually care about holding still, and whether your code states it directly or
merely hopes it emerges.
