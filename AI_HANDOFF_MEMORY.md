# Whispering Shadows - AI Handoff Memory

Last updated: 2026-04-08

## Project Snapshot

`Whispering Shadows` is a cinematic choice-based visual novel platform with:

- Multiple anthology stories
- Multi-episode progression
- Branching endings
- Persistent progress and resumable runs
- In-story HUD, archive, journal, and ending systems

Core UI lives in:

- `UI/Views/index.html`
- `UI/Styles/style.css`
- `Core/Engine/engine.js`

## Major Upgrades Implemented

### 1. Home / Library Experience

The story library was upgraded from a simple grid into a guided discovery surface.

Implemented:

- Search bar with live filtering
- Search clear button
- Genre filter + sort menu
- Fixed search keyboard behavior so `spacebar` works inside search
- `Next Signal` recommendation spotlight
- Rotating spotlight signals
- Hover/focus `story preview panel` with:
  - cover art
  - genre
  - runtime
  - episode count
  - endings progress
- Resume-last-run CTA on the home hero
- Stats cards below the story shelf:
  - stories
  - episodes cleared
  - endings found
- `Memory Archive` widget below stories
- `Fate Atlas` widget below stories

Design direction:

- We intentionally moved away from overly blunt / aggressive surfaces.
- Current layout keeps the hero at the top, stories first in importance, and summary widgets below the shelf.
- The library top bar is now static, not sticky.

### 2. Memory Archive / Save System

The save system was turned into a real feature instead of a basic slot list.

Implemented:

- `Memory Archive` modal
- 3 manual save slots
- Save + load buttons per slot
- Archive widget on the home screen
- In-story archive access from HUD
- Archive close buttons now work correctly

Persistence behavior:

- Save slots persist across closing and reopening the app
- Loading a save now restores the active playable run
- Loaded save becomes the current resumable session

Hardening work:

- Snapshot validation
- Invalid snapshot sanitizing
- Shared restore flow via `activateSnapshot(...)`
- Session persistence via `ws_session`
- Save slots stored via `ws_save_slots`
- Old story timers / transitions are invalidated on load via `runToken`

Important result:

- Loading from inside another active story now properly overwrites the current run instead of leaving stale story state alive underneath.

### 3. Resume Session System

Implemented:

- Persistent active session tracking
- `Resume Last Run` button on home
- Session validation before resume

Storage:

- `ws_session`

### 4. Fate Atlas

Added a judge-facing meta-progression feature called `Fate Atlas`.

Implemented:

- Fate Atlas widget on home
- Fate Atlas modal
- Ending resonance tracking
- Archetype generation from unlocked endings
- Recommendation logic for next stories
- Per-story destiny mapping / endings discovered overview

Core idea:

- The game does not only track completion.
- It infers what kind of decision-maker the player is becoming.

Engine concepts:

- `RESONANCE_LABELS`
- `RESONANCE_ARCHETYPES`
- `ENDING_RESONANCE`

### 5. Story Journal

Implemented an in-story `Story Journal` panel that tracks live narrative context.

Includes:

- Cast tracking
- Milestones tracking
- Decision feed
- Story / episode metadata summary
- In-story HUD access
- Dedicated close button in the journal header

### 6. Portrait / Speaker System

Character dialogue was upgraded with portrait support.

Implemented:

- `PORTRAIT_MAP` in engine
- Speaker portrait rendering in gameplay
- Alias mapping for speakers whose IDs differ from asset names
- Portrait fallback behavior on image failure
- Dialogue layout support for portrait mode vs narrator mode

Notable portrait mapping additions include aliases like:

- `grandfather -> aldric.png`
- `mira`
- `ghost`
- `voss`
- `aelindra -> queen_aelindra.png`
- `thalion -> king_thalion.png`

### 7. In-Story Visual Interactivity

Gameplay scenes are no longer static.

Implemented:

- Pointer-responsive scene parallax
- Reactive glow / vignette movement
- Scene background and video subtle pan response
- Choice hover atmosphere system
- Theme-based choice aura colors

Key CSS variables on `#game-screen`:

- `--scene-pan-x`
- `--scene-pan-y`
- `--scene-glow-x`
- `--scene-glow-y`
- `--choice-aura-x`
- `--choice-aura-y`
- `--choice-aura-color`
- `--choice-aura-glow`

### 8. Choice Atmosphere / Feedback

Choices now influence scene energy.

Implemented:

- Choice hover aura
- Theme-aware and stat-aware aura colors
- Critical choice emphasis
- Energized button state during hover
- Scene saturation / brightness response during active choice states

### 9. Button / Surface Interactivity

A shared premium interaction system was added for important controls.

Implemented:

- Pointer sheen
- Magnetic micro-shift
- Shared interactive surface logic for:
  - play buttons
  - outline buttons
  - memory widgets
  - filter triggers
  - search clear button
  - archive close buttons
  - HUD buttons
  - back / close buttons
  - save slot buttons

Entry point:

- `initInteractiveSurfaces(...)`

### 10. Modal / Overlay Quality Fixes

Fixed and improved multiple overlay behaviors.

Implemented / fixed:

- Archive modal close behavior
- Journal close button
- Escape-key handling for stacked overlays
- Exit modal handling
- Backdrop-close behavior for modals

### 11. Story Intro / Episode Select Improvements

Implemented:

- Top-right close button on intro / episode selection screens
- Cleaner back-to-home affordances
- Story intro preserves the more elegant, calmer visual language

### 12. Visual / Layout Polish

Current visual state reflects multiple refinements and rollbacks toward a more composed presentation.

Notable outcomes:

- Story cards rebalanced after an over-wide experiment was reverted
- Buttons toned down from harsh white/default-looking surfaces
- Library bar no longer awkwardly scrolls with sticky motion
- Search, filters, archive, journal, and shelf elements are integrated into the same premium-dark system

## Important Bug Fixes Already Made

### Save / Load

- Fixed load path that showed "loaded" but did not truly restore the playable node
- Fixed in-play loading from another story not properly replacing the active run
- Fixed stale async callbacks from old runs interfering after load

### Archive / Journal / Modal

- Fixed archive close button not working
- Added journal close button

### Search

- Fixed `spacebar` being blocked in the search field by global keyboard shortcuts

### Portraits

- Added portrait fallback so broken images do not show broken-icon placeholders
- Fixed portrait alignment issues vs narrator text flow

## Persistence Keys

Local storage keys currently used:

- `ws_progress`
- `ws_save_slots`
- `ws_session`
- `ws_settings`

## Important Engine Concepts

Another AI should preserve these systems carefully:

- `runToken` invalidation for stale async flow protection
- `activateSnapshot(...)` as the canonical restore path
- `buildSessionPayload(...)`
- `isSnapshotValid(...)`
- `toggleArchivePanel()`
- `toggleFateAtlas()`
- `toggleJournal()`
- `renderFateAtlas()`
- `renderSaveSlots()`
- `showStoryPreview(...)`
- `renderLibrarySpotlight(...)`

## Important UI Elements

Key IDs worth knowing:

- `resume-run-btn`
- `story-search`
- `story-search-clear`
- `library-spotlight`
- `story-preview-panel`
- `archive-widget`
- `fate-widget`
- `journal-panel`
- `archive-modal`
- `fate-atlas-modal`
- `exit-modal`
- `speaker-portrait`

## Current Design Intent

The preferred direction is:

- premium dark cinematic
- attractive but not aggressive
- stimulative and satisfying, not blunt
- calm hierarchy
- genuine labels instead of corny feature titles
- story-first experience

This means future edits should avoid:

- loud default white buttons
- overly sticky / floating utility bars
- awkwardly huge or stretched cards
- gimmicky labels like "hackathon boost"
- aggressive surfaces that break the atmospheric tone

## Recommended Safe Next Steps

If another AI continues work, the safest high-value directions are:

1. Strengthen Fate Atlas content and recommendations
2. Improve judge/demo mode presentation
3. Add cross-story memory bleed or meta-ending systems
4. Keep hardening save/load and overlay flows
5. Refine visual polish without breaking the current calmer aesthetic

