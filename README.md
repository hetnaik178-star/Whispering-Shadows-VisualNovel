<p align="center">
  <img src="Assets/images/logo.png" alt="Whispering Shadows" width="200"/>
</p>

<h1 align="center">Whispering Shadows</h1>

<p align="center">
  <em>A cinematic choice-based visual novel engine — zero dependencies, pure web.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/platform-Web_(HTML%2FCSS%2FJS)-1a1a2e?style=for-the-badge&labelColor=0d0d1a&color=8a5cf5" alt="Platform"/>
  <img src="https://img.shields.io/badge/stories-7_Anthology_Modules-1a1a2e?style=for-the-badge&labelColor=0d0d1a&color=c4364a" alt="Stories"/>
  <img src="https://img.shields.io/badge/dependencies-Zero-1a1a2e?style=for-the-badge&labelColor=0d0d1a&color=10b981" alt="Dependencies"/>
  <img src="https://img.shields.io/badge/voices-Dynamic_AI_TTS-1a1a2e?style=for-the-badge&labelColor=0d0d1a&color=00cec9" alt="Voice Engine"/>
</p>

---

## Overview

**Whispering Shadows** is a premium, dark-themed cinematic visual novel engine built entirely with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, no external dependencies. It delivers branching, multi-episode narratives with real-time stat tracking, AI-driven voiceovers, persistent save states, and a meta-progression system that tracks the kind of decision-maker the player is becoming.

The engine ships with **seven complete anthology stories** spanning gothic horror, cyberpunk, murder mystery, deep space sci-fi, steampunk adventure, high fantasy, and psychological thriller — each featuring 5 episodes, 150+ branching choices, and 7 unique endings.

---

## Table of Contents

- [Key Features](#key-features)
- [Story Catalog](#story-catalog)
- [Getting Started](#getting-started)
- [Project Architecture](#project-architecture)
- [Core Engine Systems](#core-engine-systems)
- [Design Philosophy](#design-philosophy)
- [Persistence & Storage](#persistence--storage)
- [Development Guidelines](#development-guidelines)
- [Screenshots](#screenshots)
- [License](#license)

---

## Key Features

### 🎬 Cinematic Narrative Engine
- **Branching storylines** with 150+ choices per story, critical decision nodes, and timed choices
- **Multi-episode progression** — each story unfolds across 5 episodes with chapter transitions
- **7 unique endings per story** — from triumph to tragedy, determined by player choices
- **Rich text formatting** — shake, glow, blood, italic, warm, and glitch effects rendered in real-time
- **Premium choice system** — special ✦ choices unlock deeper narrative paths

### 🎙️ Dynamic AI Voice Engine
- **Real-time TTS voiceover** using the Web Speech API — no pre-recorded audio files
- **40+ unique voice profiles** — each character has distinct pitch, rate, gender, and voice hints
- **Per-speaker vocal identity** — the narrator is deep and measured; the AI entity is high-pitched and fractured; the child alter is light and innocent
- **Chunked speech synthesis** for long dialogue passages with automatic sentence boundary detection
- **Player MC voice** adapts to the gender selected during character customization

### 🧭 Fate Atlas — Meta-Progression
- **Resonance tracking** — every ending unlocked carries a resonance trait (Courage, Mercy, Rebellion, Intellect, Sacrifice, etc.)
- **Archetype generation** — the system infers what kind of decision-maker the player is becoming across all stories
- **Recommendation engine** — suggests the next story based on the player's emerging archetype
- **Per-story destiny mapping** — visual overview of endings discovered vs. remaining

### 💾 Memory Archive — Save System
- **3 manual save slots** with full game state snapshots
- **Snapshot validation & sanitization** — guards against corrupted or stale saves
- **Cross-episode persistence** — save in Episode 3, load and resume seamlessly
- **Session resumption** — "Resume Last Run" on the home screen picks up exactly where you left off
- **Run token invalidation** — prevents stale async callbacks from old runs interfering after a load

### 🪪 Character Customization
- **Per-story MC identity** — name, gender, and visual appearance customized for each story's genre
- **Genre-themed look sets** — 3 male + 3 female character looks per story, all with unique art
- **Parallax tilt cards** — hover-responsive look selection with shimmer/ripple feedback
- **Persistent identity** — your MC appearance and name carry through all 5 episodes

### 📖 Story Journal
- **Live narrative tracker** — cast members, milestones, and decisions logged in real-time
- **Episode metadata** — current story, episode, duration, and choice count
- **In-story HUD access** — toggle journal from the gameplay overlay

### 🎨 Cinematic Visual System
- **Pointer-responsive scene parallax** — backgrounds and video layers subtly react to mouse movement
- **Reactive glow/vignette** — scene atmosphere shifts with cursor position
- **Choice hover aura** — hovering over choices casts genre-themed color auras on the scene
- **Theme-based stat coloring** — each story's stat bars carry genre-appropriate color palettes
- **Scene transitions** — video transitions, music crossfades, and ambient sound layers
- **Character portraits** — speaker portraits rendered dynamically with fallback handling

### 🏠 Home / Discovery Experience
- **Story library** with search, genre filters, and sort controls
- **"Next Signal" spotlight** — rotating story recommendation on the hero section
- **Story preview panel** — hover a story card to see cover art, genre, runtime, episode count, and ending progress
- **Stats dashboard** — stories completed, episodes cleared, endings discovered
- **Memory Archive & Fate Atlas widgets** — summary cards on the home screen

---

## Story Catalog

| # | Title | Genre | Episodes | Endings | Description |
|---|-------|-------|----------|---------|-------------|
| 1 | **Ravencroft Manor** | Gothic Horror | 5 | 7 | Return to a cursed ancestral estate. Confront the darkness dwelling within its walls — and within your bloodline. |
| 2 | **Neon Requiem** | Cyberpunk Thriller | 5 | 7 | A hacker. A conspiracy. A city of neon lies. Intercept the data that could free eleven million enslaved minds. |
| 3 | **Crimson Tide** | Murder Mystery | 5 | 7 | A billionaire dead in a locked cabin on a luxury cruise. Everyone has secrets. Everyone is a suspect — including you. |
| 4 | **Echoes of Eternity** | Deep Space Sci-Fi | 5 | 7 | Awaken on a derelict starship near a black hole. The crew is gone. The cargo is awake. And the AI is terrified. |
| 5 | **The Clockwork Conspiracy** | Steampunk Adventure | 5 | 7 | Gears, rebellion, and a ticking clock. Uncover a sabotaged steam valve before it kills sixty thousand people. |
| 6 | **The Sunken Realm** | High Fantasy | 5 | 7 | An ancient elven kingdom slumbers beneath the waves. You must raise it before the Shadow King devours what remains. |
| 7 | **Fractured Minds** | Psychological Thriller | 5 | 7 | Therapy is going well. Until you realize you're not the patient — you're the disease. |

> Each story features **~90 minutes** of branching narrative, **150+ choices**, unique stat systems, and a full cast of voiced characters.

---

## Getting Started

### Quick Launch (Windows)

1. Double-click **`Play_Whispering_Shadows.bat`** in the project root
2. Choose your browser:
   - `[1]` Default Browser *(recommended)*
   - `[2]` Chrome — fullscreen app mode
   - `[3]` Edge — fullscreen app mode
   - `[4]` Firefox
3. Play!

### Manual Launch

Open `UI/Views/index.html` directly in any modern browser. No server required — the entire engine runs client-side from static files.

### Requirements

- Any modern browser (Chrome, Edge, Firefox, Safari)
- JavaScript enabled
- For voice features: Web Speech API support (Chrome/Edge recommended)
- No internet connection required after initial load

---

## Project Architecture

```
Whispering Shadows/
├── Assets/
│   ├── images/                   # Scene backgrounds, cover art, portraits
│   │   └── CharacterCustomize/   # MC look assets per genre
│   ├── Music/                    # Background music tracks
│   ├── Sfx/                      # Sound effects (ambience, UI)
│   └── Videos/                   # Scene transition videos, cinematic clips
│
├── Core/
│   ├── Data/
│   │   ├── stories.js            # Story catalog assembler
│   │   ├── story_ravencroft.js   # Gothic Horror module
│   │   ├── story_neon.js         # Cyberpunk Thriller module
│   │   ├── story_crimson.js      # Murder Mystery module
│   │   ├── story_echoes.js       # Deep Space Sci-Fi module
│   │   ├── story_clockwork.js    # Steampunk Adventure module
│   │   ├── story_realm.js        # High Fantasy module
│   │   └── story_fractured.js    # Psychological Thriller module
│   │
│   ├── Engine/
│   │   ├── engine.js             # Core engine — state, rendering, game loop
│   │   ├── voice_engine.js       # Dynamic TTS voice system
│   │   └── char_customization.js # MC name/gender/look selection
│   │
│   └── Firebase/                 # (Reserved for backend integration)
│
├── UI/
│   ├── Views/
│   │   └── index.html            # Single-page application entry point
│   └── Styles/
│       └── style.css             # Complete design system & UI styling
│
├── Play_Whispering_Shadows.bat   # Windows launcher script
├── AI_HANDOFF_MEMORY.md          # Technical handoff documentation
└── README.md                     # ← You are here
```

### Architecture Principles

- **Zero dependencies** — no npm, no bundler, no frameworks. Pure HTML/CSS/JS
- **Single-page application** — `index.html` is the only HTML file; all views are rendered dynamically
- **Modular story data** — each story is a self-contained JS module with its own scenes, episodes, nodes, stats, and endings
- **Event-driven engine** — the core loop advances node-by-node, rendering choices, processing effects, and managing transitions
- **Client-side persistence** — all progress, saves, and settings live in `localStorage`

---

## Core Engine Systems

### Global State (`G`)

The central state object tracks everything about the active game session:

| Property | Purpose |
|----------|---------|
| `G.activeStory` | Currently loaded story module |
| `G.currentNode` | Active narrative node ID |
| `G.currentEpisode` | Current episode index |
| `G.stats` | Live stat values (e.g., Sanity, Evidence, Magic) |
| `G.decisions` | Chronological log of player choices |
| `G.milestones` | Narrative milestones achieved |
| `G.cast` | Characters encountered |
| `G.mcName` / `G.mcGender` | Player character identity |
| `G.runToken` | Unique token to invalidate stale async callbacks |

### Story Data Schema

Each story module follows a consistent structure:

```javascript
{
  id: 'neon',
  title: 'Neon Requiem',
  genre: 'Cyberpunk Thriller',
  genreClass: 'genre-cyberpunk',
  cover: '../../Assets/images/cover_neon.png',
  desc: 'Short tagline...',
  synopsis: 'Extended synopsis...',
  duration: '~90 min',
  endings: '7 Endings',
  choiceCount: '150+ Choices',
  stats: [
    { id: 'heat', name: 'Corp Heat', color: '#e84393', max: 100, start: 20 }
  ],
  episodes: [
    {
      title: 'The Intercept',
      startNode: 'n1_1',
      nodes: {
        n1_1: {
          bg: 'scene.png',        // Background image
          video: 'N1.mp4',        // Overlay video
          mood: 'tense',          // Mood class
          ambience: 'rain',       // Ambient sound
          speaker: 'kira',        // Voice profile key
          text: 'Dialogue...',    // Rich text with formatting tags
          choices: [              // Branch points
            { text: '...', next: 'n1_2', effects: { heat: 15 } }
          ]
        }
      }
    }
  ],
  endings: {
    revolt: { icon: '🔥', title: 'Revolution', text: '...', color: '#e84393' }
  }
}
```

### Key Engine Functions

| Function | Purpose |
|----------|---------|
| `activateSnapshot(snapshot)` | Canonical restore path for save/load |
| `buildSessionPayload()` | Creates a serializable game state snapshot |
| `isSnapshotValid(snapshot)` | Validates a save snapshot before restoration |
| `renderFateAtlas()` | Renders the Fate Atlas meta-progression view |
| `renderSaveSlots()` | Renders the Memory Archive save slot UI |
| `showStoryPreview(storyId)` | Displays the story preview panel on hover |
| `renderLibrarySpotlight()` | Renders the "Next Signal" recommendation |
| `initInteractiveSurfaces()` | Initializes premium button interactions (sheen, micro-shift) |

### Voice Engine

The dynamic voice system maps each speaker to a unique vocal profile:

```javascript
VOICE_PROFILES = {
  narrator:  { pitch: 1.0,  rate: 0.82, gender: 'male',   label: 'Narrator' },
  kira:      { pitch: 1.15, rate: 1.02, gender: 'female', label: 'Kira' },
  the_entity:{ pitch: 0.35, rate: 0.60, gender: 'male',   label: 'The Entity' },
  ora:       { pitch: 1.30, rate: 1.08, gender: 'female', label: 'ORA (AI)' },
  the_child: { pitch: 1.50, rate: 1.08, gender: 'female', label: 'The Child' },
  // ... 40+ profiles across all stories
}
```

---

## Design Philosophy

Whispering Shadows follows a deliberately crafted aesthetic direction:

### Core Principles

| Principle | Meaning |
|-----------|---------|
| **Premium Dark Cinematic** | Deep blacks, subtle gradients, atmospheric glow — never flat or harsh |
| **Attractive, Not Aggressive** | Surfaces invite interaction without shouting for attention |
| **Calm Hierarchy** | Story content is always king; UI supports but never competes |
| **Genuine Labels** | Real descriptive language — no gimmicky marketing speak |
| **Story-First Experience** | Every pixel serves the narrative immersion |

### What to Avoid

- ❌ Loud, default-white buttons
- ❌ Overly sticky/floating utility bars
- ❌ Awkwardly oversized or stretched cards
- ❌ Gimmicky feature labels
- ❌ Aggressive surfaces that break atmospheric tone

### Visual Identity

- **Color palette** — Deep navy/charcoal base with genre-specific accent colors:
  - Gothic Horror: `#c4364a` (crimson)
  - Cyberpunk: `#00cec9` (cyan)
  - Mystery: `#d4a843` (gold)
  - Sci-Fi: `#8a5cf5` (violet)
  - Steampunk: `#f0a030` (amber)
  - Fantasy: `#10b981` (emerald)
  - Psychological: `#e84393` (pink)
- **Typography** — Clean, modern sans-serif with cinematic weight
- **Micro-interactions** — Pointer sheen on buttons, parallax scene response, choice aura glow, card tilt on hover

---

## Persistence & Storage

All game data persists in `localStorage` under the following keys:

| Key | Contents |
|-----|----------|
| `ws_progress` | Story completion, episode progress, endings unlocked, resonance data |
| `ws_save_slots` | Memory Archive — 3 manual save slot snapshots |
| `ws_session` | Active session state for "Resume Last Run" |
| `ws_settings` | User preferences (volume, voice toggle, etc.) |
| `ws_voice_settings` | Voice engine enable/disable and volume |
| `ws_char_custom` | Per-story MC customization (name, gender, look) |

---

## Development Guidelines

### Adding a New Story

1. Create `Core/Data/story_yourstory.js` following the existing story schema
2. Define episodes, nodes, choices, effects, and endings
3. Add the constant to `Core/Data/stories.js`:
   ```javascript
   const STORY_CATALOG = [
     // ...existing stories
     STORY_YOURSTORY
   ];
   ```
4. Add voice profiles to `Core/Engine/voice_engine.js`
5. Add MC look definitions to `Core/Engine/char_customization.js`
6. Add ending resonance mappings to the `ENDING_RESONANCE` map in `engine.js`
7. Place assets (cover, backgrounds, portraits, music, videos) in the `Assets/` directories

### Rich Text Tags

Story dialogue supports inline formatting:

| Tag | Effect |
|-----|--------|
| `{italic}text{/italic}` | Italic emphasis |
| `{blood}text{/blood}` | Red/danger text |
| `{glow}text{/glow}` | Luminous glow effect |
| `{warm}text{/warm}` | Warm/golden highlight |
| `{shake}text{/shake}` | Screen shake / tremor |
| `{glitch}text{/glitch}` | Digital glitch distortion |
| `{whisper}text{/whisper}` | Whispered / quiet styling |

### Node Properties

| Property | Type | Description |
|----------|------|-------------|
| `bg` | string | Background image filename |
| `video` | string | Overlay video filename |
| `transition` | string | Transition video played between nodes |
| `music` | string | Background music track |
| `mood` | string | Scene mood class (`tense`, `dark`, `warm`, `mystery`, etc.) |
| `ambience` | string | Ambient sound (`rain`, `wind`, `whispers`, `heartbeat`, etc.) |
| `speaker` | string | Voice profile ID |
| `speakerColor` | string | CSS class for speaker name color |
| `text` | string | Dialogue text with rich formatting |
| `choices` | array | Branch choices with `text`, `hint`, `next`, `effects`, `premium` |
| `next` | string | Auto-advance to next node ID |
| `ending` | string | Terminal ending key |
| `fx` | string | Visual effect (`shake`, `flash`, `glitch`) |
| `milestone` | object | `{ icon, title, desc }` — narrative milestone |
| `critical` | boolean | Marks high-stakes decision nodes |
| `timed` | number | Countdown seconds for timed choices |
| `timedDefault` | string | Fallback node if timer expires |
| `episodeEnd` | boolean | Marks end-of-episode transition |

---

## Screenshots

> *Launch the game with `Play_Whispering_Shadows.bat` to experience the full cinematic interface.*

---

## Roadmap

- [ ] Strengthen Fate Atlas content and archetype descriptions
- [ ] Cross-story memory bleed / meta-ending systems
- [ ] Judge/demo mode for presentation contexts
- [ ] Further save/load and overlay hardening
- [ ] Accessibility improvements (keyboard navigation, screen reader support)
- [ ] Mobile-responsive layout optimization

---

## License

This project is proprietary. All story content, artwork, music, and engine code are original works.

---

<p align="center">
  <em>"Every choice leaves a shadow. Every shadow tells a story."</em>
</p>
