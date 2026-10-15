/* ════════════════════════════════════════════════════════════
   WHISPERING SHADOWS — Cinematic Visual Novel Engine v6
   Episode Module • Rich Text • Premium Choices • Parallax
   Ambient SFX • Milestone System • Cursor Trail
   Zero external dependencies
   ════════════════════════════════════════════════════════════ */

// ═══════ GLOBAL STATE ═══════
let G = {
  story: null, episode: null, episodeIdx: 0,
  node: null, nodeId: null,
  stats: {}, choices: 0, typing: false,
  typeTimer: null, flags: {},
  autoAdvance: false, autoTimer: null,
  textSpeed: 22, musicVolume: 0.35,
  currentMusic: null, activeMusicPlayer: 'a',
  timerInterval: null, timerRemaining: 0,
  pendingEpisodeNode: null,
  history: [],
  undoStack: [],
  progress: {}, // { storyId: { completedEpisodes: [0,1], currentEpisode: 0, endings: [] } }
  librarySearch: '',
  libraryFilter: 'all',
  librarySort: 'featured',
  recentChoices: [],
  journal: { speakers: [], milestones: [] },
  saveSlots: [],
  runToken: 0
};
const SCENE_INTERACTION = {
  currentX: 0,
  currentY: 0,
  targetX: 0,
  targetY: 0,
  currentGlowX: 50,
  currentGlowY: 38,
  targetGlowX: 50,
  targetGlowY: 38,
  rafId: null
};
const LIBRARY_SPOTLIGHT = {
  signals: [],
  index: 0,
  intervalId: null
};


const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);
const ASSET = '../../Assets/';
const INTERACTIVE_SURFACE_SELECTOR = [
  '.btn-play',
  '.btn-outline',
  '.memory-widget',
  '.filter-trigger',
  '.search-clear',
  '.archive-close',
  '.hud-btn',
  '.btn-back',
  '.btn-close',
  '.save-slot-btn'
].join(',');
const LIBRARY_SORT_LABELS = {
  featured: 'Featured',
  progress: 'Most Progress',
  episodes: 'Longest Story',
  alphabetical: 'A-Z'
};
const RESONANCE_LABELS = {
  truth: 'Truth',
  mercy: 'Mercy',
  defiance: 'Defiance',
  sacrifice: 'Sacrifice',
  ambition: 'Ambition',
  transcendence: 'Transcendence',
  control: 'Control',
  duty: 'Duty'
};
const RESONANCE_ARCHETYPES = {
  truth: {
    title: 'The Veil-Piercer',
    desc: 'You keep steering toward revelations, even when they wound. Your endings say you would rather face a difficult reality than inherit a beautiful lie.'
  },
  mercy: {
    title: 'The Gentle Reckoner',
    desc: 'You bend stories toward compassion without losing their consequence. Your pattern favors healing, forgiveness, and second chances earned under pressure.'
  },
  defiance: {
    title: 'The Chainbreaker',
    desc: 'You reject cages, rotten systems, and inherited fear. Your endings lean toward rupture, resistance, and the thrill of choosing freedom over comfort.'
  },
  sacrifice: {
    title: 'The Last Guardian',
    desc: 'You repeatedly pay the price yourself so someone else can cross safely. Your choices suggest a player who accepts loss when it protects the larger whole.'
  },
  ambition: {
    title: 'The Crown-Seeker',
    desc: 'You are drawn to power, leverage, and decisive command. Even your darkest routes reveal a fascination with what happens when one will bends the board.'
  },
  transcendence: {
    title: 'The Horizon Walker',
    desc: 'You keep reaching beyond the ordinary shape of a story. Your unlocked endings lean toward evolution, synthesis, and futures that outgrow the rules they began with.'
  },
  control: {
    title: 'The Quiet Sovereign',
    desc: 'You prefer to contain chaos, seize the hinge point, and decide what remains standing. Your endings reveal a player who values command as much as survival.'
  },
  duty: {
    title: 'The Oathbearer',
    desc: 'You answer the burden when no one else will. Your narrative signature favors responsibility, hard balance, and carrying the weight to its necessary end.'
  }
};
const ENDING_RESONANCE = {
  ravencroft: {
    lord: ['ambition', 'control'],
    free: ['defiance', 'truth'],
    justice: ['duty', 'mercy'],
    cage: ['control', 'defiance'],
    sacrifice: ['sacrifice', 'mercy']
  },
  neon: {
    revolt: ['defiance', 'sacrifice'],
    free: ['truth', 'defiance'],
    sacrifice: ['sacrifice', 'transcendence'],
    ghost: ['truth', 'control'],
    sellout: ['ambition', 'control']
  },
  crimson: {
    truth: ['truth', 'duty'],
    mercy: ['mercy', 'duty'],
    grace: ['mercy', 'truth'],
    player: ['ambition', 'control']
  },
  echoes: {
    destruct: ['sacrifice', 'duty'],
    evolve: ['transcendence', 'mercy'],
    bargain: ['sacrifice', 'transcendence'],
    upload: ['transcendence', 'mercy']
  },
  clockwork: {
    sacrifice: ['sacrifice', 'duty'],
    rebel: ['defiance', 'ambition'],
    destroy: ['defiance', 'truth'],
    warn: ['truth', 'mercy']
  },
  realm: {
    awaken: ['sacrifice', 'duty'],
    shatter: ['control', 'duty'],
    bond: ['mercy', 'sacrifice'],
    dark: ['ambition', 'control']
  },
  fractured: {
    accept: ['truth', 'sacrifice'],
    deny: ['control', 'ambition'],
    merge: ['transcendence', 'truth'],
    forgive: ['mercy', 'truth']
  }
};
const DEFAULT_CHOICE_AURA = {
  color: 'rgba(196,54,74,0)',
  glow: 'rgba(196,54,74,0)',
  border: 'rgba(255,255,255,.07)'
};

// ═══════ CHARACTER PORTRAIT MAP ═══════
// Maps speaker IDs → portrait filenames in Assets/images/portraits/
// Empty string = placeholder (no portrait shown until asset is added)
const PORTRAIT_MAP = {
  // Ravencroft Manor
  eleanor: 'eleanor.png',
  aldric: 'aldric.png',
  grandfather: 'aldric.png',
  the_entity: 'the_entity.png',
  // Neon Requiem
  kira: 'kai.png',
  chen: 'chen.png',
  ghost: 'ghost.png',
  voss: 'voss.png',
  kai: 'kai.png',
  ghost_ceo: 'ghost_ceo.png',
  aria: 'aria.png',
  raven: 'raven.png',
  // Crimson Tide
  mira: 'mira.png',
  captain: 'captain.png',
  elena: 'elena.png',
  detective: 'detective.png',
  the_confessor: 'the_confessor.png',
  // Echoes of Eternity
  ora: 'ora.png',
  zara: 'zara.png',
  vance: 'captain_voss.png',
  captain_voss: 'captain_voss.png',
  // Clockwork Conspiracy
  gear: 'gear.png',
  lyra: 'lyra.png',
  chancellor: 'chancellor.png',
  // Sunken Realm
  kael: 'kael.png',
  aelindra: 'queen_aelindra.png',
  thalion: 'king_thalion.png',
  queen_aelindra: 'queen_aelindra.png',
  king_thalion: 'king_thalion.png',
  // Fractured Minds
  elias: 'elias.png',
  lena: 'lena.png',
  thorne: 'thorne.png',
  the_child: 'the_child.png',
  soldier: 'soldier.png',
  librarian: 'librarian.png',
  judge: 'judge.png',
  sarah: 'sarah.png',
  sarah_ghost: 'sarah.png'
};

// ═══════ MC SPEAKER MAP ═══════
// Maps story ID → the speaker ID used for the MC's spoken dialogue
// When a node's speaker matches, we dynamically swap in G.mcName and G.mcLook
const MC_SPEAKER_MAP = {
  ravencroft: 'elias',   // The Heir
  neon:       'kira',    // The Hacker
  crimson:    'mira',    // The Detective
  echoes:     'vance',   // The Commander
  clockwork:  'elias'    // The Engineer
  // fractured & realm: MC speaks through 'inner' monologue only
};

function isMCSpeaker(speaker) {
  if (!G.story || !speaker) return false;
  return MC_SPEAKER_MAP[G.story.id] === speaker;
}

function hexToRgba(hex, alpha = 1) {
  if (!hex || typeof hex !== 'string') return `rgba(255,255,255,${alpha})`;
  const normalized = hex.replace('#', '').trim();
  const expanded = normalized.length === 3
    ? normalized.split('').map(ch => ch + ch).join('')
    : normalized;
  if (expanded.length !== 6) return `rgba(255,255,255,${alpha})`;
  const value = parseInt(expanded, 16);
  if (Number.isNaN(value)) return `rgba(255,255,255,${alpha})`;
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}

function initInteractiveSurfaces(root = document) {
  root.querySelectorAll(INTERACTIVE_SURFACE_SELECTOR).forEach(el => {
    if (el.dataset.surfaceInteractive === '1') return;
    el.dataset.surfaceInteractive = '1';

    const intensity = el.classList.contains('hud-btn') || el.classList.contains('btn-close') || el.classList.contains('archive-close')
      ? 4
      : el.classList.contains('save-slot-btn')
        ? 5
        : 8;

    const reset = () => {
      el.style.setProperty('--ui-shift-x', '0px');
      el.style.setProperty('--ui-shift-y', '0px');
      el.style.setProperty('--ui-sheen-x', '50%');
      el.style.setProperty('--ui-sheen-y', '50%');
    };

    const update = event => {
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const shiftX = ((px - 0.5) * 2) * intensity;
      const shiftY = ((py - 0.5) * 2) * intensity * 0.52;
      el.style.setProperty('--ui-shift-x', `${shiftX.toFixed(2)}px`);
      el.style.setProperty('--ui-shift-y', `${shiftY.toFixed(2)}px`);
      el.style.setProperty('--ui-sheen-x', `${(px * 100).toFixed(1)}%`);
      el.style.setProperty('--ui-sheen-y', `${(py * 100).toFixed(1)}%`);
    };

    reset();
    el.addEventListener('pointermove', update);
    el.addEventListener('pointerleave', reset);
    el.addEventListener('pointercancel', reset);
    el.addEventListener('blur', reset);
  });
}

function getThemeAccent() {
  const game = $('game-screen');
  if (!game) return DEFAULT_CHOICE_AURA;
  if (game.classList.contains('theme-cyberpunk')) {
    return {
      color: 'rgba(0,206,201,.24)',
      glow: 'rgba(0,206,201,.16)',
      border: 'rgba(0,206,201,.35)'
    };
  }
  if (game.classList.contains('theme-mystery')) {
    return {
      color: 'rgba(212,168,67,.24)',
      glow: 'rgba(212,168,67,.18)',
      border: 'rgba(212,168,67,.32)'
    };
  }
  if (game.classList.contains('theme-scifi')) {
    return {
      color: 'rgba(138,92,245,.24)',
      glow: 'rgba(138,92,245,.18)',
      border: 'rgba(138,92,245,.34)'
    };
  }
  if (game.classList.contains('theme-steampunk')) {
    return {
      color: 'rgba(240,160,48,.24)',
      glow: 'rgba(240,160,48,.18)',
      border: 'rgba(240,160,48,.32)'
    };
  }
  if (game.classList.contains('theme-fantasy')) {
    return {
      color: 'rgba(16,185,129,.24)',
      glow: 'rgba(16,185,129,.16)',
      border: 'rgba(16,185,129,.3)'
    };
  }
  if (game.classList.contains('theme-psychological')) {
    return {
      color: 'rgba(232,67,147,.24)',
      glow: 'rgba(232,67,147,.16)',
      border: 'rgba(232,67,147,.32)'
    };
  }
  return {
    color: 'rgba(196,54,74,.24)',
    glow: 'rgba(196,54,74,.16)',
    border: 'rgba(196,54,74,.35)'
  };
}

function getChoiceAura(choice) {
  const aura = { ...getThemeAccent() };
  if (!choice) return aura;

  if (choice.effects && G.story?.stats?.length) {
    const entries = Object.entries(choice.effects)
      .filter(([key]) => G.story.stats.some(stat => stat.id === key))
      .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));
    const [primaryStat] = entries;
    if (primaryStat) {
      const stat = G.story.stats.find(item => item.id === primaryStat[0]);
      if (stat?.color) {
        aura.color = hexToRgba(stat.color, choice.critical ? 0.3 : 0.24);
        aura.glow = hexToRgba(stat.color, choice.critical ? 0.2 : 0.16);
        aura.border = hexToRgba(stat.color, choice.critical ? 0.42 : 0.34);
      }
    }
  }

  if (choice.critical) {
    aura.color = 'rgba(196,54,74,.32)';
    aura.glow = 'rgba(196,54,74,.2)';
    aura.border = 'rgba(196,54,74,.46)';
  }

  return aura;
}

function applyChoiceAtmosphere(choice, event) {
  const game = $('game-screen');
  const panel = $('choice-panel');
  if (!game || !panel) return;

  const rect = panel.getBoundingClientRect();
  const fallbackX = rect.width ? rect.width * 0.5 : window.innerWidth * 0.5;
  const fallbackY = rect.height ? rect.height * 0.78 : window.innerHeight * 0.78;
  const clientX = event?.clientX ?? fallbackX;
  const clientY = event?.clientY ?? fallbackY;
  const x = rect.width ? ((clientX - rect.left) / rect.width) * 100 : 50;
  const y = rect.height ? ((clientY - rect.top) / rect.height) * 100 : 78;
  const aura = getChoiceAura(choice);

  game.classList.add('choice-active');
  game.style.setProperty('--choice-aura-x', `${Math.min(92, Math.max(8, x)).toFixed(1)}%`);
  game.style.setProperty('--choice-aura-y', `${Math.min(96, Math.max(16, y)).toFixed(1)}%`);
  game.style.setProperty('--choice-aura-color', aura.color);
  game.style.setProperty('--choice-aura-glow', aura.glow);
}

function clearChoiceAtmosphere() {
  const game = $('game-screen');
  if (!game) return;
  game.classList.remove('choice-active');
  game.style.setProperty('--choice-aura-x', '50%');
  game.style.setProperty('--choice-aura-y', '78%');
  game.style.setProperty('--choice-aura-color', DEFAULT_CHOICE_AURA.color);
  game.style.setProperty('--choice-aura-glow', DEFAULT_CHOICE_AURA.glow);
  $$('#choice-buttons .choice-btn').forEach(btn => {
    btn.classList.remove('choice-energized');
    btn.style.borderColor = '';
  });
}

// ═══════ BOOT ═══════
function bootGame() {
  initParticles();
  initSceneInteractivity();
  loadSettings();

  loadProgress();
  loadSaveSlots();
  populateLibraryFilters();
  updateHeroIntel();
  updateResumeButton();
  renderSaveSlots();
  initInteractiveSurfaces();
  initShowcaseTicker();

  let splashDismissed = false;
  const finishSplash = () => {
    if (splashDismissed) return;
    splashDismissed = true;
    switchScreen('title-screen');
    buildLibrary();
  };

  const splash = $('splash-screen');
  if (splash) {
    splash.addEventListener('click', finishSplash, { once: true });
    splash.addEventListener('pointerdown', finishSplash, { once: true });
  }
  setTimeout(finishSplash, 1200);
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', bootGame);
} else {
  bootGame();
}

// ═══════ PROGRESS PERSISTENCE ═══════
function loadProgress() {
  try {
    const p = JSON.parse(localStorage.getItem('ws_progress'));
    if (p) G.progress = p;
  } catch(e) {}
}

function saveProgress() {
  try {
    localStorage.setItem('ws_progress', JSON.stringify(G.progress));
  } catch(e) {}
}

function getStoryProgress(storyId) {
  if (!G.progress[storyId]) {
    G.progress[storyId] = { completedEpisodes: [], currentEpisode: 0, endings: [] };
  }
  if (!Array.isArray(G.progress[storyId].endings)) G.progress[storyId].endings = [];
  return G.progress[storyId];
}

function markEpisodeComplete(storyId, epIdx) {
  const prog = getStoryProgress(storyId);
  if (!prog.completedEpisodes.includes(epIdx)) {
    prog.completedEpisodes.push(epIdx);
  }
  if (epIdx >= prog.currentEpisode) {
    prog.currentEpisode = epIdx + 1;
  }
  saveProgress();
  updateHeroIntel();
  updateResumeButton();
}

function isEpisodeUnlocked(storyId, epIdx) {
  if (epIdx === 0) return true;
  const prog = getStoryProgress(storyId);
  return prog.completedEpisodes.includes(epIdx - 1);
}

function isEpisodeCompleted(storyId, epIdx) {
  const prog = getStoryProgress(storyId);
  return prog.completedEpisodes.includes(epIdx);
}

function getUnlockedEndings(storyId) {
  return getStoryProgress(storyId).endings || [];
}

function getAtlasTotals() {
  return STORY_CATALOG.reduce((summary, story) => {
    summary.total += Object.keys(story.endings || {}).length;
    summary.unlocked += getUnlockedEndings(story.id).length;
    return summary;
  }, { total: 0, unlocked: 0 });
}

function getResonanceScores() {
  const scores = {};
  STORY_CATALOG.forEach(story => {
    getUnlockedEndings(story.id).forEach(endingKey => {
      const traits = ENDING_RESONANCE[story.id]?.[endingKey] || [];
      traits.forEach(trait => {
        scores[trait] = (scores[trait] || 0) + 1;
      });
    });
  });
  return scores;
}

function computeResonanceProfile() {
  const ranked = Object.entries(getResonanceScores()).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  if (!ranked.length) {
    return {
      title: 'The Unwritten Self',
      desc: 'Your choices have not formed a visible pattern yet. Reach a few endings and the atlas will begin tracing the instincts behind them.',
      traits: []
    };
  }

  const [primary, primaryScore] = ranked[0];
  const [secondary] = ranked[1] || [];
  const archetype = RESONANCE_ARCHETYPES[primary] || RESONANCE_ARCHETYPES.truth;
  const secondaryLabel = secondary ? RESONANCE_LABELS[secondary].toLowerCase() : null;

  return {
    title: archetype.title,
    desc: secondaryLabel
      ? `${archetype.desc} There is also a clear pull toward ${secondaryLabel}, which gives your routes a layered aftertaste.`
      : archetype.desc,
    traits: ranked.slice(0, 4).map(([trait, score], index) => ({
      label: RESONANCE_LABELS[trait] || capitalize(trait),
      score,
      tone: index === 0 ? 'Dominant' : index === 1 ? 'Echo' : 'Thread'
    })),
    primaryScore
  };
}

function buildAtlasRecommendations() {
  return STORY_CATALOG
    .map(story => {
      const totalEndings = Object.keys(story.endings || {}).length;
      const unlockedEndings = getUnlockedEndings(story.id).length;
      const completedEpisodes = getStoryProgress(story.id).completedEpisodes.length;
      const remaining = totalEndings - unlockedEndings;
      return { story, totalEndings, unlockedEndings, completedEpisodes, remaining };
    })
    .filter(item => item.remaining > 0)
    .sort((a, b) =>
      b.unlockedEndings - a.unlockedEndings ||
      b.completedEpisodes - a.completedEpisodes ||
      a.story.title.localeCompare(b.story.title)
    )
    .slice(0, 3)
    .map(item => {
      let tag = item.story.genre;
      let copy = `This thread still hides ${item.remaining} ending${item.remaining > 1 ? 's' : ''}.`;

      if (item.unlockedEndings === 0) {
        tag = 'Untouched Thread';
        copy = `You have not stepped into ${item.story.title} yet. ${item.totalEndings} possible endings means strong upside for expanding your resonance fast.`;
      } else if (item.remaining === 1) {
        tag = 'One Fate Left';
        copy = `${item.story.title} is one ending away from completion. Closing that final branch would sharpen the atlas immediately.`;
      } else if (item.completedEpisodes > 0) {
        tag = 'Closest Signal';
        copy = `You already have momentum here with ${item.unlockedEndings} discovered ending${item.unlockedEndings > 1 ? 's' : ''}. This is your clearest path to a stronger profile.`;
      }

      return {
        title: item.story.title,
        tag,
        copy
      };
    });
}

function renderFateAtlas() {
  const widgetMeta = $('atlas-widget-meta');
  const summaryMeta = $('atlas-summary-meta');
  const profileTitle = $('atlas-profile-title');
  const profileDesc = $('atlas-profile-desc');
  const traitsEl = $('atlas-traits');
  const recsEl = $('atlas-recommendations');
  const storyGrid = $('atlas-story-grid');
  if (!widgetMeta || !summaryMeta || !profileTitle || !profileDesc || !traitsEl || !recsEl || !storyGrid) return;

  const totals = getAtlasTotals();
  const profile = computeResonanceProfile();
  const recommendations = buildAtlasRecommendations();

  widgetMeta.textContent = totals.unlocked
    ? `${totals.unlocked} of ${totals.total} destinies mapped`
    : 'No destinies mapped yet';
  summaryMeta.textContent = `${totals.unlocked} of ${totals.total} endings found`;
  profileTitle.textContent = profile.title;
  profileDesc.textContent = profile.desc;
  traitsEl.innerHTML = profile.traits.length
    ? profile.traits.map(trait => `
        <span class="atlas-trait">
          <span>${trait.label}</span>
          <span class="atlas-trait-strength">${trait.score} ${trait.tone}</span>
        </span>
      `).join('')
    : `<span class="atlas-trait">Reach an ending to reveal your resonance.</span>`;
  recsEl.innerHTML = recommendations.length
    ? recommendations.map(item => `
        <article class="atlas-recommendation">
          <div class="atlas-recommendation-head">
            <h5 class="atlas-recommendation-title">${item.title}</h5>
            <span class="atlas-recommendation-tag">${item.tag}</span>
          </div>
          <p class="atlas-recommendation-copy">${item.copy}</p>
        </article>
      `).join('')
    : `<article class="atlas-recommendation"><p class="atlas-recommendation-copy">Every known ending is already mapped. This atlas is complete for now.</p></article>`;

  storyGrid.innerHTML = STORY_CATALOG.map(story => {
    const endingEntries = Object.entries(story.endings || {});
    const unlocked = new Set(getUnlockedEndings(story.id));
    const unlockedCount = unlocked.size;
    const completion = endingEntries.length ? (unlockedCount / endingEntries.length) * 100 : 0;
    const storyCopy = unlockedCount === 0
      ? 'This thread is still unopened. Its endings remain hidden beyond the first decisive turn.'
      : unlockedCount === endingEntries.length
        ? 'Every ending in this story has been brought into the atlas.'
        : `You have mapped ${unlockedCount} of ${endingEntries.length} endings here. More branches still wait beneath the surface.`;

    return `
      <article class="atlas-story-card">
        <div class="atlas-story-head">
          <div>
            <h5 class="atlas-story-title">${story.title}</h5>
            <div class="atlas-story-genre">${story.genre}</div>
          </div>
          <div class="atlas-story-progress">${unlockedCount} / ${endingEntries.length}</div>
        </div>
        <div class="atlas-story-line"><span style="width:${completion}%"></span></div>
        <p class="atlas-story-copy">${storyCopy}</p>
        <div class="atlas-ending-strip">
          ${endingEntries.map(([endingKey, ending]) => {
            const isUnlocked = unlocked.has(endingKey);
            return `
              <div class="atlas-ending-node ${isUnlocked ? 'unlocked' : 'locked'}">
                <span class="atlas-ending-icon">${isUnlocked ? ending.icon : '✦'}</span>
                <span class="atlas-ending-name">${isUnlocked ? ending.title : 'Undiscovered'}</span>
              </div>
            `;
          }).join('')}
        </div>
      </article>
    `;
  }).join('');
  initInteractiveSurfaces($('fate-atlas-modal') || document);
}

function unlockEnding(storyId, endingKey) {
  if (!storyId || !endingKey) return false;
  const prog = getStoryProgress(storyId);
  if (prog.endings.includes(endingKey)) return false;
  prog.endings.push(endingKey);
  saveProgress();
  updateHeroIntel();
  return true;
}

function createEmptyJournal() {
  return { speakers: [], milestones: [] };
}

function loadSaveSlots() {
  let sanitized = false;
  try {
    const slots = JSON.parse(localStorage.getItem('ws_save_slots'));
    G.saveSlots = Array.isArray(slots)
      ? slots.slice(0, 3).map(slot => {
          const valid = isSnapshotValid(slot);
          if (slot && !valid) sanitized = true;
          return valid ? slot : null;
        })
      : [];
  } catch(e) {
    G.saveSlots = [];
  }
  while (G.saveSlots.length < 3) G.saveSlots.push(null);
  if (sanitized) saveSaveSlots();
}

function saveSaveSlots() {
  try {
    localStorage.setItem('ws_save_slots', JSON.stringify(G.saveSlots));
  } catch(e) {}
}

function formatTimestamp(ts) {
  if (!ts) return 'Empty';
  return new Date(ts).toLocaleString([], {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
}

function buildSessionPayload(snapshot = {}) {
  return {
    storyId: snapshot.storyId ?? G.story?.id,
    episodeIdx: snapshot.episodeIdx ?? G.episodeIdx,
    nodeId: snapshot.nodeId ?? G.nodeId,
    stats: { ...(snapshot.stats || G.stats || {}) },
    choices: snapshot.choices ?? G.choices ?? 0,
    flags: { ...(snapshot.flags || G.flags || {}) },
    history: Array.isArray(snapshot.history) ? [...snapshot.history] : [...(G.history || [])],
    recentChoices: Array.isArray(snapshot.recentChoices) ? [...snapshot.recentChoices] : [...(G.recentChoices || [])],
    journal: snapshot.journal ? {
      speakers: Array.isArray(snapshot.journal.speakers) ? [...snapshot.journal.speakers] : [],
      milestones: Array.isArray(snapshot.journal.milestones) ? [...snapshot.journal.milestones] : []
    } : {
      speakers: [...(G.journal?.speakers || [])],
      milestones: [...(G.journal?.milestones || [])]
    }
  };
}

function persistSession(payload) {
  if (!payload?.storyId || payload.episodeIdx === undefined || !payload.nodeId) return;
  try {
    localStorage.setItem('ws_session', JSON.stringify(buildSessionPayload(payload)));
  } catch(e) {}
}

function getSnapshotEpisode(snapshot, story) {
  if (!story) return null;
  if (story.episodes && story.episodes[snapshot.episodeIdx]) {
    return story.episodes[snapshot.episodeIdx];
  }
  if (story.nodes) {
    return { nodes: story.nodes, startNode: story.startNode, title: story.title };
  }
  return null;
}

function isSnapshotValid(snapshot) {
  if (!snapshot?.storyId || snapshot.episodeIdx === undefined || !snapshot.nodeId) return false;
  const story = STORY_CATALOG.find(item => item.id === snapshot.storyId);
  const episode = getSnapshotEpisode(snapshot, story);
  return !!(story && episode && episode.nodes && episode.nodes[snapshot.nodeId]);
}

function invalidateActiveFlow() {
  G.runToken++;
  G.typing = false;
  clearTimeout(G.typeTimer);
  G.typeTimer = null;
  clearTimeout(G.autoTimer);
  G.autoTimer = null;
  stopTimer();
  clearChoiceAtmosphere();
  $('choice-panel')?.classList.add('hidden');
  $('critical-banner')?.classList.add('hidden');
  $('critical-banner')?.classList.remove('visible');
  if ($('dialogue-area')) $('dialogue-area').style.opacity = '1';
  const overlay = $('transition-overlay');
  const video = $('transition-video');
  if (overlay && video) {
    overlay.classList.add('hidden');
    video.pause();
    video.currentTime = 0;
  }
}

function createSnapshot(kind = 'manual') {
  if (!G.story || !G.episode || !G.nodeId) return null;
  return {
    version: 2,
    kind,
    storyId: G.story.id,
    storyTitle: G.story.title,
    cover: G.story.cover,
    episodeIdx: G.episodeIdx,
    episodeTitle: G.episode.title || G.story.title,
    ...buildSessionPayload(),
    savedAt: Date.now()
  };
}

function hydrateSnapshot(snapshot) {
  if (!snapshot) return false;
  const story = STORY_CATALOG.find(item => item.id === snapshot.storyId);
  const episode = getSnapshotEpisode(snapshot, story);
  if (!story || !episode || !episode.nodes[snapshot.nodeId]) return false;

  selectedStoryId = story.id;
  G.story = story;
  G.episodeIdx = snapshot.episodeIdx;
  G.episode = episode;
  G.stats = { ...snapshot.stats };
  G.choices = snapshot.choices || 0;
  G.flags = { ...snapshot.flags };
  G.history = Array.isArray(snapshot.history) ? [...snapshot.history] : [];
  G.undoStack = [];
  G.recentChoices = Array.isArray(snapshot.recentChoices) ? [...snapshot.recentChoices] : [];
  G.nodeId = snapshot.nodeId;
  G.node = episode.nodes[snapshot.nodeId];
  G.journal = snapshot.journal ? {
    speakers: Array.isArray(snapshot.journal.speakers) ? [...snapshot.journal.speakers] : [],
    milestones: Array.isArray(snapshot.journal.milestones) ? [...snapshot.journal.milestones] : []
  } : createEmptyJournal();

  // ── Restore MC identity from customization persistence ──
  if (typeof CHAR_CUSTOM !== 'undefined' && CHAR_CUSTOM.hasCustomization(story.id)) {
    const charData = CHAR_CUSTOM.getStoryCustom(story.id);
    G.mcName = charData.name;
    G.mcGender = charData.gender;
    G.mcLook = charData.look;
  }

  return true;
}

function activateSnapshot(snapshot, toastMessage) {
  if (!hydrateSnapshot(snapshot)) return false;

  invalidateActiveFlow();
  clearFX();
  closeFilterMenus();

  $('archive-modal')?.classList.add('hidden');
  $('fate-atlas-modal')?.classList.add('hidden');
  $('settings-modal')?.classList.add('hidden');
  $('stats-panel')?.classList.add('hidden');
  $('journal-panel')?.classList.add('hidden');
  $('exit-modal')?.classList.add('hidden');
  $('choice-panel')?.classList.add('hidden');
  $('critical-banner')?.classList.add('hidden');
  if ($('dialogue-area')) $('dialogue-area').style.opacity = '1';
  const sceneVideo = $('scene-video');
  if (sceneVideo) {
    sceneVideo.pause();
    sceneVideo.classList.remove('active');
  }

  persistSession(snapshot);
  updateResumeButton();
  renderSaveSlots();

  switchScreen('game-screen');
  applyTheme(G.story.genreClass);
  $('hud-chapter').textContent = G.episode.title || G.story.title;
  updateStatsUI();
  updateJournalUI();

  const music = G.episode.startMusic || G.story.startMusic;
  if (music) playMusic(ASSET + 'Music/' + music);

  const runToken = G.runToken;
  setTimeout(() => {
    if (runToken !== G.runToken) return;
    showNode(snapshot.nodeId);
    if (toastMessage) toast(toastMessage);
  }, 180);

  return true;
}

function saveToSlot(idx) {
  const snapshot = createSnapshot('slot');
  if (!snapshot) {
    toast('Start a story before saving a slot.');
    return;
  }
  G.saveSlots[idx] = snapshot;
  saveSaveSlots();
  renderSaveSlots();
  toast(`Saved to slot ${idx + 1}.`);
}

function loadSaveSlot(idx) {
  const snapshot = G.saveSlots[idx];
  if (!snapshot) {
    toast('That save slot is empty.');
    return;
  }
  if (!activateSnapshot(snapshot, `Loaded slot ${idx + 1}.`)) {
    G.saveSlots[idx] = null;
    saveSaveSlots();
    renderSaveSlots();
    toast('That save slot is no longer valid.');
  }
}

function renderSaveSlots() {
  const containers = ['save-slot-list-archive']
    .map(id => $(id))
    .filter(Boolean);

  containers.forEach(container => {
    const compact = container.classList.contains('compact');
    container.innerHTML = '';

    G.saveSlots.forEach((slot, idx) => {
      const card = document.createElement('div');
      card.className = 'save-slot' + (!slot ? ' empty' : '');
      if (!slot) {
        card.innerHTML = `
          <div class="save-slot-head">
            <span class="save-slot-label">Slot ${idx + 1}</span>
            <span class="save-slot-time">Empty</span>
          </div>
          <div class="save-slot-empty">Hold a turning point here, then return whenever the thread calls you back.</div>
          <div class="save-slot-actions">
            <button class="save-slot-btn primary" onclick="saveToSlot(${idx})" ${G.story ? '' : 'disabled'}>Save</button>
            <button class="save-slot-btn" disabled>Load</button>
          </div>
        `;
      } else {
        card.innerHTML = `
          <div class="save-slot-head">
            <span class="save-slot-label">Slot ${idx + 1}</span>
            <span class="save-slot-time">${formatTimestamp(slot.savedAt)}</span>
          </div>
          <div class="save-slot-title">${slot.storyTitle}</div>
          <div class="save-slot-desc">${slot.episodeTitle} • ${slot.choices || 0} choices • ${(slot.journal?.milestones || []).length} milestones</div>
          <div class="save-slot-actions">
            <button class="save-slot-btn primary" onclick="saveToSlot(${idx})" ${G.story ? '' : 'disabled'}>${compact ? 'Replace' : 'Save'}</button>
            <button class="save-slot-btn" onclick="loadSaveSlot(${idx})">Load</button>
          </div>
        `;
      }
      container.appendChild(card);
    });
  });
  updateArchiveWidget();
  initInteractiveSurfaces($('archive-modal') || document);
}

function updateArchiveWidget() {
  const meta = $('archive-widget-meta');
  if (!meta) return;
  const filled = G.saveSlots.filter(Boolean).length;
  meta.textContent = filled
    ? `${filled} saved moment${filled > 1 ? 's' : ''} in reach`
    : 'No saved moments yet';
}

function toggleArchivePanel() {
  const modal = $('archive-modal');
  if (!modal) return;
  const opening = modal.classList.contains('hidden');

  if (opening) {
    closeFilterMenus();
    $('fate-atlas-modal')?.classList.add('hidden');
    $('settings-modal')?.classList.add('hidden');
    $('stats-panel')?.classList.add('hidden');
    $('journal-panel')?.classList.add('hidden');
    renderSaveSlots();
  }

  modal.classList.toggle('hidden');
}

function toggleFateAtlas() {
  const modal = $('fate-atlas-modal');
  if (!modal) return;
  const opening = modal.classList.contains('hidden');

  if (opening) {
    closeFilterMenus();
    $('archive-modal')?.classList.add('hidden');
    $('settings-modal')?.classList.add('hidden');
    $('stats-panel')?.classList.add('hidden');
    $('journal-panel')?.classList.add('hidden');
    $('exit-modal')?.classList.add('hidden');
    renderFateAtlas();
  }

  modal.classList.toggle('hidden');
}

// ═══════ SCREEN MANAGEMENT ═══════
function switchScreen(id) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  setTimeout(() => $(id).classList.add('active'), 100);
}

// Genre → Theme class mapping
const THEME_MAP = {
  'genre-gothic': 'theme-gothic',
  'genre-cyberpunk': 'theme-cyberpunk',
  'genre-mystery': 'theme-mystery',
  'genre-scifi': 'theme-scifi',
  'genre-steampunk': 'theme-steampunk',
  'genre-fantasy': 'theme-fantasy',
  'genre-psychological': 'theme-psychological'
};

function clearTheme() {
  const game = $('game-screen');
  Object.values(THEME_MAP).forEach(t => game.classList.remove(t));
}

function initSceneInteractivity() {
  const game = $('game-screen');
  if (!game || game.dataset.sceneInteractive === '1') return;
  game.dataset.sceneInteractive = '1';

  const animate = () => {
    SCENE_INTERACTION.currentX += (SCENE_INTERACTION.targetX - SCENE_INTERACTION.currentX) * 0.08;
    SCENE_INTERACTION.currentY += (SCENE_INTERACTION.targetY - SCENE_INTERACTION.currentY) * 0.08;
    SCENE_INTERACTION.currentGlowX += (SCENE_INTERACTION.targetGlowX - SCENE_INTERACTION.currentGlowX) * 0.1;
    SCENE_INTERACTION.currentGlowY += (SCENE_INTERACTION.targetGlowY - SCENE_INTERACTION.currentGlowY) * 0.1;

    game.style.setProperty('--scene-pan-x', `${SCENE_INTERACTION.currentX.toFixed(2)}px`);
    game.style.setProperty('--scene-pan-y', `${SCENE_INTERACTION.currentY.toFixed(2)}px`);
    game.style.setProperty('--scene-glow-x', `${SCENE_INTERACTION.currentGlowX.toFixed(2)}%`);
    game.style.setProperty('--scene-glow-y', `${SCENE_INTERACTION.currentGlowY.toFixed(2)}%`);

    SCENE_INTERACTION.rafId = requestAnimationFrame(animate);
  };

  SCENE_INTERACTION.rafId = requestAnimationFrame(animate);

  game.addEventListener('pointermove', e => {
    if (!G.story) return;
    const rect = game.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    SCENE_INTERACTION.targetX = ((50 - px) / 50) * 12;
    SCENE_INTERACTION.targetY = ((50 - py) / 50) * 10;
    SCENE_INTERACTION.targetGlowX = px;
    SCENE_INTERACTION.targetGlowY = py;
  });

  const resetSceneFocus = () => {
    SCENE_INTERACTION.targetX = 0;
    SCENE_INTERACTION.targetY = 0;
    SCENE_INTERACTION.targetGlowX = 50;
    SCENE_INTERACTION.targetGlowY = 38;
  };

  game.addEventListener('pointerleave', resetSceneFocus);
  game.addEventListener('pointercancel', resetSceneFocus);
}

function applyTheme(genreClass) {
  clearTheme();
  const theme = THEME_MAP[genreClass];
  if (theme) $('game-screen').classList.add(theme);
}

function goHome() {
  invalidateActiveFlow();
  stopLibrarySpotlightRotation();
  stopMusic();
  if (typeof VOICE_ENGINE !== 'undefined') VOICE_ENGINE.stop();
  clearFX();
  clearTheme();
  const vid = $('scene-video');
  if (vid) { vid.pause(); vid.classList.remove('active'); }
  switchScreen('title-screen');
  G.story = null;
  G.episode = null;
  G.node = null;
  G.nodeId = null;
  G.journal = createEmptyJournal();
  closeFilterMenus();
  $('archive-modal')?.classList.add('hidden');
  $('fate-atlas-modal')?.classList.add('hidden');
  $('stats-panel')?.classList.add('hidden');
  $('journal-panel')?.classList.add('hidden');
  clearSession();
  updateResumeButton();
  renderSaveSlots();
  buildLibrary();
}

function confirmExit() {
  $('exit-modal').classList.remove('hidden');
}
function forceExit() {
  $('exit-modal').classList.add('hidden');
  goHome();
}
function cancelExit() {
  $('exit-modal').classList.add('hidden');
}
function closeModalOnBackdrop(e) {
  if (e.target === e.currentTarget) {
    e.target.classList.add('hidden');
  }
}

// ═══════ STORY LIBRARY ═══════
function updateSearchClearButton() {
  const clearBtn = $('story-search-clear');
  const searchInput = $('story-search');
  if (!clearBtn || !searchInput) return;
  clearBtn.classList.toggle('hidden', !searchInput.value.trim());
}

function clearLibrarySearch() {
  const searchInput = $('story-search');
  if (!searchInput) return;
  searchInput.value = '';
  setLibrarySearch('');
  searchInput.focus();
}

function decorateLibraryStories(stories) {
  return stories.map(story => {
    const epCount = getEpisodeCount(story);
    const completedCount = getStoryProgress(story.id).completedEpisodes.length;
    const endingsFound = getUnlockedEndings(story.id).length;
    const totalEndings = Object.keys(story.endings || {}).length;
    const completionPct = epCount ? Math.round((completedCount / epCount) * 100) : 0;
    return { story, epCount, completedCount, endingsFound, totalEndings, completionPct };
  });
}

function getLibrarySpotlightSignals(stories) {
  if (!stories.length) return [];

  const decorated = decorateLibraryStories(stories);
  const signals = [];

  const partial = decorated
    .filter(item => item.completedCount > 0 && item.completedCount < item.epCount)
    .sort((a, b) => b.completionPct - a.completionPct || b.endingsFound - a.endingsFound || a.story.title.localeCompare(b.story.title));

  partial.slice(0, 2).forEach(item => {
    signals.push({
      ...item,
      kicker: 'Resume The Pull',
      title: `${item.story.title} is already leaning toward you`,
      desc: `You have already cleared ${item.completedCount} of ${item.epCount} episodes here. This is the cleanest path to another ending without losing momentum.`
    });
  });

  const nearBreakthrough = decorated
    .filter(item => item.endingsFound > 0 && item.endingsFound < item.totalEndings)
    .sort((a, b) => (a.totalEndings - a.endingsFound) - (b.totalEndings - b.endingsFound) || b.endingsFound - a.endingsFound);

  nearBreakthrough.slice(0, 2).forEach(item => {
    signals.push({
      ...item,
      kicker: 'Breakthrough Window',
      title: `${item.story.title} still has hidden destinies`,
      desc: `You have already uncovered ${item.endingsFound} ending${item.endingsFound > 1 ? 's' : ''} here. Another run could widen your Fate Atlas fast.`
    });
  });

  const untouched = decorated
    .filter(item => item.completedCount === 0)
    .sort((a, b) => b.totalEndings - a.totalEndings || a.story.title.localeCompare(b.story.title));

  untouched.slice(0, 3).forEach(item => {
    signals.push({
      ...item,
      kicker: G.librarySearch ? 'Best Match' : 'Fresh Voltage',
      title: `${item.story.title} is a strong next thread`,
      desc: G.librarySearch
        ? 'This is the strongest visible match for what you searched, and it still has room to surprise you.'
        : `${item.totalEndings} possible endings make this a high-upside thread if you want something fresh with real branching weight.`
    });
  });

  if (!signals.length) {
    const fallback = decorated[0];
    signals.push({
      ...fallback,
      kicker: 'Signal On Deck',
      title: `${fallback.story.title} is ready`,
      desc: 'This thread is visible right now and fits the way the shelf is currently tuned.'
    });
  }

  const unique = [];
  const seen = new Set();
  signals.forEach(signal => {
    if (seen.has(signal.story.id)) return;
    seen.add(signal.story.id);
    unique.push(signal);
  });
  return unique.slice(0, 4);
}

function renderSpotlightSignal(signal) {
  const spotlight = $('library-spotlight');
  const title = $('library-spotlight-title');
  const desc = $('library-spotlight-desc');
  const kicker = $('library-spotlight-kicker');
  const genre = $('library-spotlight-genre');
  const progress = $('library-spotlight-progress');
  const endings = $('library-spotlight-endings');
  const button = $('library-spotlight-btn');
  if (!spotlight || !title || !desc || !kicker || !genre || !progress || !endings || !button) return;

  kicker.textContent = signal.kicker;
  title.textContent = signal.title;
  desc.textContent = signal.desc;
  genre.textContent = signal.story.genre;
  progress.textContent = `${signal.completionPct}% explored`;
  endings.textContent = `${signal.endingsFound}/${signal.totalEndings} endings`;
  button.textContent = signal.completedCount > 0 ? 'Continue Thread' : 'Open Thread';
  button.onclick = () => openEpisodeSelect(signal.story.id);
  spotlight.classList.remove('hidden');
}

function stopLibrarySpotlightRotation() {
  if (LIBRARY_SPOTLIGHT.intervalId) {
    clearInterval(LIBRARY_SPOTLIGHT.intervalId);
    LIBRARY_SPOTLIGHT.intervalId = null;
  }
}

function startLibrarySpotlightRotation() {
  stopLibrarySpotlightRotation();
  if (LIBRARY_SPOTLIGHT.signals.length <= 1) return;
  LIBRARY_SPOTLIGHT.intervalId = setInterval(() => {
    LIBRARY_SPOTLIGHT.index = (LIBRARY_SPOTLIGHT.index + 1) % LIBRARY_SPOTLIGHT.signals.length;
    renderSpotlightSignal(LIBRARY_SPOTLIGHT.signals[LIBRARY_SPOTLIGHT.index]);
  }, 4800);
}

function renderLibrarySpotlight(stories) {
  const spotlight = $('library-spotlight');
  if (!spotlight) return;

  LIBRARY_SPOTLIGHT.signals = getLibrarySpotlightSignals(stories);
  LIBRARY_SPOTLIGHT.index = 0;

  if (!LIBRARY_SPOTLIGHT.signals.length) {
    stopLibrarySpotlightRotation();
    spotlight.classList.add('hidden');
    return;
  }

  if (spotlight.dataset.rotationBound !== '1') {
    spotlight.dataset.rotationBound = '1';
    spotlight.addEventListener('mouseenter', stopLibrarySpotlightRotation);
    spotlight.addEventListener('mouseleave', startLibrarySpotlightRotation);
  }

  renderSpotlightSignal(LIBRARY_SPOTLIGHT.signals[0]);
  startLibrarySpotlightRotation();
}

function showStoryPreview(storyId) {
  const panel = $('story-preview-panel');
  const media = $('story-preview-media');
  const kicker = $('story-preview-kicker');
  const title = $('story-preview-title');
  const desc = $('story-preview-desc');
  const genre = $('story-preview-genre');
  const duration = $('story-preview-duration');
  const episodes = $('story-preview-episodes');
  const endings = $('story-preview-endings');
  const button = $('story-preview-btn');
  const story = STORY_CATALOG.find(item => item.id === storyId);
  if (!panel || !media || !kicker || !title || !desc || !genre || !duration || !episodes || !endings || !button || !story) return;

  const epCount = getEpisodeCount(story);
  const completedCount = getStoryProgress(story.id).completedEpisodes.length;
  const endingsFound = getUnlockedEndings(story.id).length;
  const totalEndings = Object.keys(story.endings || {}).length;
  const completionPct = epCount ? Math.round((completedCount / epCount) * 100) : 0;

  media.style.setProperty('--preview-image', `url('${story.cover}')`);
  kicker.textContent = completedCount > 0 ? 'Active Thread' : 'Thread Preview';
  title.textContent = story.title;
  desc.textContent = story.synopsis || story.desc;
  genre.textContent = story.genre;
  duration.textContent = story.duration || '~ Cinematic';
  episodes.textContent = `${epCount} episode${epCount > 1 ? 's' : ''}`;
  endings.textContent = `${endingsFound}/${totalEndings} endings`;
  button.textContent = completionPct > 0 ? `Continue ${completionPct}%` : 'Open Thread';
  button.onclick = () => openEpisodeSelect(story.id);
  panel.classList.remove('hidden');
}

function hideStoryPreview() {
  $('story-preview-panel')?.classList.add('hidden');
}

function buildLibrary() {
  const grid = $('story-grid');
  const empty = $('library-empty');
  grid.innerHTML = '';
  const stories = getFilteredStories();
  updateLibraryStatus(stories);
  updateSearchClearButton();
  renderLibrarySpotlight(stories);
  if (empty) empty.classList.toggle('hidden', stories.length > 0);
  stories.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.dataset.storyId = s.id;
    card.style.setProperty('--card-delay', (i * 0.08) + 's');
    card.onclick = () => openEpisodeSelect(s.id);
    card.onmouseenter = () => showStoryPreview(s.id);
    card.onfocus = () => showStoryPreview(s.id);
    const epCount = getEpisodeCount(s);
    const prog = getStoryProgress(s.id);
    const completedCount = prog.completedEpisodes.length;
    const endingsFound = getUnlockedEndings(s.id).length;
    const totalEndings = Object.keys(s.endings || {}).length;
    const completionPct = Math.round((completedCount / epCount) * 100);
    card.innerHTML = `
      <img class="story-card-img" src="${s.cover}" alt="${s.title}" loading="lazy"
           onerror="this.style.background='var(--bg2)';this.style.height='100%'">
      <div class="story-card-aurora"></div>
      <div class="story-card-overlay"></div>
      <div class="story-card-content">
        <span class="story-card-genre ${s.genreClass}">${s.genre}</span>
        <div class="story-card-title">${s.title}</div>
        <div class="story-card-desc">${s.desc}</div>
        <div class="story-card-progress">
          <span>${completionPct}% explored</span>
          <span>${endingsFound}/${totalEndings} endings</span>
        </div>
        <div class="story-card-progress-bar"><span style="width:${completionPct}%"></span></div>
        <div class="story-card-meta">${epCount} Episode${epCount > 1 ? 's' : ''} &bull; ${completedCount}/${epCount} Complete</div>
      </div>
      <div class="story-card-play">▶</div>
    `;
    grid.appendChild(card);
  });
  if (stories.length) {
    showStoryPreview(stories[0].id);
  } else {
    hideStoryPreview();
  }
  initLibraryCardMotion();
  initInteractiveSurfaces();
}

// ═══════ EPISODE SELECTION ═══════
function updateLibraryStatus(stories) {
  const count = $('library-status-count');
  const copy = $('library-status-copy');
  if (!count || !copy) return;

  const visible = stories.length;
  const total = STORY_CATALOG.length;
  const searchValue = $('story-search')?.value?.trim() || '';

  count.textContent = `${visible} ${visible === 1 ? 'story' : 'stories'} in focus`;

  if (searchValue) {
    copy.textContent = `Search tuned to "${searchValue}" with ${LIBRARY_SORT_LABELS[G.librarySort] || 'Featured'} ordering.`;
    return;
  }

  if (G.libraryFilter !== 'all') {
    copy.textContent = `${G.libraryFilter} currents only, arranged by ${LIBRARY_SORT_LABELS[G.librarySort] || 'Featured'}.`;
    return;
  }

  if (visible !== total) {
    copy.textContent = `${visible} threads surfaced from the archive. Shift the filters to change the mood of the shelf.`;
    return;
  }

  copy.textContent = 'Every thread waits for a different version of you.';
}

function initLibraryCardMotion() {
  $$('#story-grid .story-card').forEach(card => {
    const resetCard = () => {
      card.style.setProperty('--card-rotate-x', '0deg');
      card.style.setProperty('--card-rotate-y', '0deg');
      card.style.setProperty('--mx', '50%');
      card.style.setProperty('--my', '50%');
    };

    resetCard();

    card.addEventListener('pointermove', e => {
      const rect = card.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;
      const rotateY = ((px - 50) / 50) * 4.5;
      const rotateX = ((50 - py) / 50) * 4;
      card.style.setProperty('--card-rotate-x', `${rotateX.toFixed(2)}deg`);
      card.style.setProperty('--card-rotate-y', `${rotateY.toFixed(2)}deg`);
      card.style.setProperty('--mx', `${px}%`);
      card.style.setProperty('--my', `${py}%`);
    });

    card.addEventListener('pointerleave', resetCard);
    card.addEventListener('pointercancel', resetCard);
  });
}

function populateLibraryFilters() {
  const filterOptions = $('story-filter-options');
  const sortOptions = $('story-sort-options');
  if (!filterOptions || !sortOptions) return;

  const genres = ['All Genres'];
  STORY_CATALOG.forEach(story => {
    if (!genres.includes(story.genre)) genres.push(story.genre);
  });

  filterOptions.innerHTML = genres.map(label => {
    const value = label === 'All Genres' ? 'all' : label;
    return `<button class="filter-option" type="button" data-value="${value}" onclick="chooseLibraryFilter('${value}', '${label.replace(/'/g, "\\'")}')">${label}</button>`;
  }).join('');

  sortOptions.innerHTML = Object.entries(LIBRARY_SORT_LABELS).map(([value, label]) => {
    return `<button class="filter-option" type="button" data-value="${value}" onclick="chooseLibrarySort('${value}', '${label}')">${label}</button>`;
  }).join('');

  syncLibraryMenus();
}

function setLibrarySearch(value) {
  G.librarySearch = (value || '').trim().toLowerCase();
  updateSearchClearButton();
  buildLibrary();
}

function setLibraryFilter(value) {
  G.libraryFilter = value || 'all';
  syncLibraryMenus();
  buildLibrary();
}

function setLibrarySort(value) {
  G.librarySort = value || 'featured';
  syncLibraryMenus();
  buildLibrary();
}

function syncLibraryMenus() {
  if ($('story-filter-label')) {
    $('story-filter-label').textContent = G.libraryFilter === 'all' ? 'All Genres' : G.libraryFilter;
  }
  if ($('story-sort-label')) {
    $('story-sort-label').textContent = LIBRARY_SORT_LABELS[G.librarySort] || 'Featured';
  }

  $$('#story-filter-options .filter-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.value === G.libraryFilter);
  });
  $$('#story-sort-options .filter-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.value === G.librarySort);
  });
}

function closeFilterMenus() {
  $('story-filter-options')?.classList.add('hidden');
  $('story-sort-options')?.classList.add('hidden');
}

function toggleFilterMenu(kind) {
  const target = $(kind === 'genre' ? 'story-filter-options' : 'story-sort-options');
  const other = $(kind === 'genre' ? 'story-sort-options' : 'story-filter-options');
  other?.classList.add('hidden');
  target?.classList.toggle('hidden');
}

function chooseLibraryFilter(value) {
  setLibraryFilter(value);
  closeFilterMenus();
}

function chooseLibrarySort(value) {
  setLibrarySort(value);
  closeFilterMenus();
}

function getEpisodeCount(story) {
  return story.episodes ? story.episodes.length : 1;
}

function getStoryCompletion(story) {
  const episodeCount = getEpisodeCount(story);
  return getStoryProgress(story.id).completedEpisodes.length / episodeCount;
}

function getFilteredStories() {
  const filtered = STORY_CATALOG.filter(story => {
    const matchesFilter = G.libraryFilter === 'all' || story.genre === G.libraryFilter;
    if (!matchesFilter) return false;
    if (!G.librarySearch) return true;
    const haystack = [story.title, story.genre, story.desc, story.synopsis].join(' ').toLowerCase();
    return haystack.includes(G.librarySearch);
  });

  const sorters = {
    featured: (a, b) => STORY_CATALOG.indexOf(a) - STORY_CATALOG.indexOf(b),
    alphabetical: (a, b) => a.title.localeCompare(b.title),
    episodes: (a, b) => getEpisodeCount(b) - getEpisodeCount(a),
    progress: (a, b) => {
      const diff = getStoryCompletion(b) - getStoryCompletion(a);
      return diff || a.title.localeCompare(b.title);
    }
  };

  return filtered.sort(sorters[G.librarySort] || sorters.featured);
}

function updateHeroIntel() {
  const totalStories = STORY_CATALOG.length;
  const totalEpisodes = STORY_CATALOG.reduce((sum, story) => sum + getStoryProgress(story.id).completedEpisodes.length, 0);
  const totalEndings = STORY_CATALOG.reduce((sum, story) => sum + getUnlockedEndings(story.id).length, 0);
  if ($('intel-stories')) $('intel-stories').textContent = totalStories;
  if ($('intel-episodes')) $('intel-episodes').textContent = totalEpisodes;
  if ($('intel-endings')) $('intel-endings').textContent = totalEndings;
  renderFateAtlas();
}

let selectedStoryId = null;

function openEpisodeSelect(id) {
  stopLibrarySpotlightRotation();
  const s = STORY_CATALOG.find(x => x.id === id);
  if (!s) return;
  selectedStoryId = id;

  // Set background
  $('ep-select-bg').style.backgroundImage = `url('${s.cover}')`;
  $('ep-select-genre').textContent = s.genre;
  $('ep-select-genre').className = 'ep-select-genre ' + s.genreClass;
  $('ep-select-title').textContent = s.title;
  $('ep-select-synopsis').textContent = s.synopsis;

  // Build episode list
  const list = $('ep-list');
  list.innerHTML = '';

  if (!s.episodes || s.episodes.length === 0) {
    // Legacy story with no episodes array — treat whole thing as Episode 1
    const card = buildEpisodeCard(s, { title: s.title, desc: s.desc, thumb: s.cover, duration: s.duration }, 0, true, false);
    list.appendChild(card);
  } else {
    s.episodes.forEach((ep, i) => {
      // All episodes unlocked for now (future: gating via relics/currency)
      const completed = isEpisodeCompleted(s.id, i);
      const card = buildEpisodeCard(s, ep, i, true, completed);
      list.appendChild(card);
    });
  }

  renderEndingTracker(s);

  switchScreen('episode-select');
}

function renderEndingTracker(story) {
  const list = $('ending-chip-list');
  const progress = $('ending-progress');
  if (!story || !list || !progress) return;

  const endings = Object.entries(story.endings || {});
  const unlocked = new Set(getUnlockedEndings(story.id));
  progress.textContent = `${unlocked.size} / ${endings.length} unlocked`;
  list.innerHTML = '';

  endings.forEach(([key, ending]) => {
    const chip = document.createElement('div');
    const isUnlocked = unlocked.has(key);
    chip.className = 'ending-chip ' + (isUnlocked ? 'unlocked' : 'locked');
    chip.innerHTML = `
      <span class="ending-chip-icon">${isUnlocked ? ending.icon : '?'}</span>
      <span class="ending-chip-name">${isUnlocked ? ending.title : 'Undiscovered Ending'}</span>
    `;
    list.appendChild(chip);
  });
}

function buildEpisodeCard(story, ep, idx, unlocked, completed) {
  const card = document.createElement('div');
  card.className = 'ep-card' + (completed ? ' completed' : '');

  const thumb = ep.thumb || story.cover;

  card.innerHTML = `
    <div class="ep-card-thumb" style="background-image:url('${thumb}')"></div>
    <div class="ep-card-body">
      <div class="ep-card-number">
        Episode ${idx + 1}
      </div>
      <div class="ep-card-title">${ep.title}</div>
      <div class="ep-card-desc">${ep.desc || ''}</div>
      <div class="ep-card-meta">
        <span class="ep-card-duration">${ep.duration || '~10 min'}</span>
        ${completed ? '<span class="ep-card-badge ep-badge-completed">✓ Completed</span>' : ''}
        ${!completed ? '<span class="ep-card-badge ep-badge-new">New</span>' : ''}
      </div>
    </div>
    <div class="ep-card-play">▶</div>
  `;

  card.onclick = () => beginEpisode(story.id, idx);
  return card;
}

// ═══════ BEGIN EPISODE ═══════
function beginEpisode(storyId, epIdx) {
  const s = STORY_CATALOG.find(x => x.id === storyId);
  if (!s) return;

  // ── Character Customization Gate ──
  // Episode 1: ALWAYS show customization (allows re-customization on replay)
  // Other episodes: Load existing customization silently and carry forward
  if (epIdx === 0 && typeof CHAR_CUSTOM !== 'undefined') {
    CHAR_CUSTOM.open(storyId, (charData) => {
      // Store MC data in game state — this governs all future episodes
      G.mcName = charData.name;
      G.mcGender = charData.gender;
      G.mcLook = charData.look;
      _beginEpisodeInternal(s, storyId, epIdx);
    });
    return;
  }

  // Episodes 2+: silently load the MC identity set during Episode 1
  if (typeof CHAR_CUSTOM !== 'undefined' && CHAR_CUSTOM.hasCustomization(storyId)) {
    const charData = CHAR_CUSTOM.getStoryCustom(storyId);
    G.mcName = charData.name;
    G.mcGender = charData.gender;
    G.mcLook = charData.look;
  }

  _beginEpisodeInternal(s, storyId, epIdx);
}

function _beginEpisodeInternal(s, storyId, epIdx) {
  invalidateActiveFlow();
  G.story = s;
  G.episodeIdx = epIdx;
  G.stats = {};
  G.choices = 0;
  G.flags = {};
  G.history = [];
  G.undoStack = [];
  G.recentChoices = [];
  G.journal = createEmptyJournal();

  // ── Safety: ensure MC identity is always loaded from persistence ──
  // G.mcName/mcLook/mcGender may already be set by beginEpisode's callback,
  // but we re-load here as a fallback for any other entry paths.
  if (typeof CHAR_CUSTOM !== 'undefined' && CHAR_CUSTOM.hasCustomization(storyId)) {
    const charData = CHAR_CUSTOM.getStoryCustom(storyId);
    if (!G.mcName)   G.mcName   = charData.name;
    if (!G.mcGender) G.mcGender = charData.gender;
    if (!G.mcLook)   G.mcLook   = charData.look;
  }

  // Get episode data
  if (s.episodes && s.episodes[epIdx]) {
    G.episode = s.episodes[epIdx];
  } else {
    // Legacy fallback
    G.episode = { nodes: s.nodes, startNode: s.startNode, title: s.title };
  }

  // Init stats
  s.stats.forEach(st => G.stats[st.id] = st.start);
  updateStatsUI();

  switchScreen('game-screen');
  applyTheme(s.genreClass);
  $('hud-chapter').textContent = G.episode.title || s.title;
  clearFX();
  updateStatsUI();
  updateJournalUI();
  saveSession();
  renderSaveSlots();

  // Start music
  const music = G.episode.startMusic || s.startMusic;
  if (music) {
    playMusic(ASSET + 'Music/' + music);
  }

  const runToken = G.runToken;
  setTimeout(() => {
    if (runToken !== G.runToken) return;
    showNode(G.episode.startNode);
  }, 700);
}

// Legacy support
function beginStory() {
  if (selectedStoryId) beginEpisode(selectedStoryId, 0);
}

function replayCurrentStory() {
  if (selectedStoryId && G.episodeIdx !== undefined) {
    beginEpisode(selectedStoryId, G.episodeIdx);
  }
}

function saveSession() {
  if (!G.story || !G.episode || !G.nodeId) return;
  persistSession();
}

function clearSession() {
  try {
    localStorage.removeItem('ws_session');
  } catch(e) {}
}

function getSavedSession() {
  try {
    const session = JSON.parse(localStorage.getItem('ws_session'));
    return isSnapshotValid(session) ? session : null;
  } catch(e) {
    return null;
  }
}

function updateResumeButton() {
  const btn = $('resume-run-btn');
  if (!btn) return;
  btn.classList.toggle('hidden', !getSavedSession());
}

function resumeSession() {
  const session = getSavedSession();
  if (!session) return;

  if (!activateSnapshot(session, 'Resumed your last run.')) {
    clearSession();
    updateResumeButton();
    toast('Saved run could not be restored.');
  }
}

// ═══════ NODE DISPLAY ═══════
function showNode(nodeId) {
  // End
  if (nodeId === '_END') { handleEnd(); return; }

  // Episode complete — mark and show transition
  if (nodeId === '_EPISODE_COMPLETE') { handleEpisodeComplete(); return; }

  // Legacy episode break
  if (nodeId === '_EPISODE') { handleEpisodeBreak(); return; }

  const nodes = G.episode ? G.episode.nodes : G.story.nodes;
  const node = nodes[nodeId];
  if (!node) { console.error('Missing node:', nodeId); return; }
  G.nodeId = nodeId;
  G.node = node;
  G.history.push(nodeId);
  saveSession();
  const runToken = G.runToken;

  // ── Transition effect ──
  if (node.transition) {
    playTransition(ASSET + 'TransitionEffects/' + node.transition, () => {
      if (runToken !== G.runToken) return;
      renderNode(node);
    });
    return;
  }

  renderNode(node);
}

function renderNode(node) {
  clearChoiceAtmosphere();
  // Stop any ongoing voiceover from the previous node
  if (typeof VOICE_ENGINE !== 'undefined') VOICE_ENGINE.stop();
  // ── Scene Background ──
  const sceneBg = $('scene-bg');
  const sceneVid = $('scene-video');

  // ── Set Background Image First (Guarantees image is always loaded and visible) ──
  const bgImg = node.bg || (node.scene && G.story.scenes && G.story.scenes[node.scene]?.bg);
  if (bgImg) {
    if (bgImg.startsWith('linear') || bgImg.startsWith('radial')) {
      sceneBg.style.backgroundImage = 'none';
      sceneBg.style.background = bgImg;
    } else {
      sceneBg.style.background = 'none';
      sceneBg.style.backgroundImage = `url('${ASSET}images/${bgImg}')`;
    }
  }
  sceneBg.style.opacity = '1';

  // ── Optional Video Overlay (Smooth fade-in if video is available and playable) ──
  if (node.video) {
    const targetVideoSrc = ASSET + 'videos/' + node.video;
    sceneVid.oncanplay = () => {
      sceneVid.classList.add('active');
      sceneBg.style.opacity = '0';
      sceneVid.play().catch(() => {
        sceneVid.classList.remove('active');
        sceneBg.style.opacity = '1';
      });
    };
    sceneVid.onerror = () => {
      sceneVid.classList.remove('active');
      sceneBg.style.opacity = '1';
    };
    sceneVid.src = targetVideoSrc;
  } else {
    sceneVid.classList.remove('active');
    sceneVid.pause();
    sceneVid.src = '';
    sceneBg.style.opacity = '1';
  }

  // ── Music ──
  if (node.music) {
    playMusic(ASSET + 'Music/' + node.music);
  }

  // ── FX ──
  clearFX();
  if (node.fx) applyFX(node.fx);

  // ── Mood (particles) ──
  if (node.mood) setParticleMood(node.mood);

  // ── Ambient SFX ──
  if (node.ambience) setAmbience(node.ambience);

  // ── Milestone ──
  if (node.milestone) showMilestone(node.milestone);

  // ── Speaker & Narrator Style ──
  const speakerEl = $('speaker-name');
  const dialogueText = $('dialogue-text');
  const portraitEl = $('speaker-portrait');
  const isNarrator = !node.speaker || node.speaker === 'narrator';
  const isInner = node.speaker === 'inner';
  const isThird = node.speaker === 'third';
  const isDramatic = node.speaker === 'dramatic';
  const isAbstractSpeaker = isNarrator || isInner || isThird || isDramatic;

  // Reset dialogue text classes
  dialogueText.className = 'dialogue-text';

  // ── Portrait System ──
  const dialogueArea = $('dialogue-area');
  if (isNarrator || isThird || isDramatic) {
    portraitEl.style.display = 'none';
    portraitEl.removeAttribute('src');
    dialogueArea.classList.remove('has-portrait');
  } else if (isInner && G.mcLook && G.mcLook.img) {
    // Show MC's chosen look for inner monologue
    portraitEl.onerror = () => {
      portraitEl.style.display = 'none';
      portraitEl.removeAttribute('src');
      dialogueArea.classList.remove('has-portrait');
    };
    portraitEl.src = ASSET + 'images/CustomizeCrop/' + G.mcLook.img;
    portraitEl.alt = G.mcName || 'You';
    portraitEl.style.display = 'block';
    dialogueArea.classList.add('has-portrait');
    portraitEl.style.animation = 'none';
    portraitEl.offsetHeight;
    portraitEl.style.animation = '';
  } else if (isInner) {
    portraitEl.style.display = 'none';
    portraitEl.removeAttribute('src');
    dialogueArea.classList.remove('has-portrait');
  } else if (isMCSpeaker(node.speaker) && G.mcLook && G.mcLook.img) {
    // ── MC Speaker: use player's chosen look from customization ──
    portraitEl.onerror = () => {
      portraitEl.style.display = 'none';
      portraitEl.removeAttribute('src');
      dialogueArea.classList.remove('has-portrait');
    };
    portraitEl.src = ASSET + 'images/CustomizeCrop/' + G.mcLook.img;
    portraitEl.alt = G.mcName || 'You';
    portraitEl.style.display = 'block';
    dialogueArea.classList.add('has-portrait');
    portraitEl.style.animation = 'none';
    portraitEl.offsetHeight;
    portraitEl.style.animation = '';
  } else {
    const portraitSrc = PORTRAIT_MAP[node.speaker];
    if (portraitSrc) {
      portraitEl.onerror = () => {
        portraitEl.style.display = 'none';
        portraitEl.removeAttribute('src');
        dialogueArea.classList.remove('has-portrait');
      };
      portraitEl.src = ASSET + 'images/portraits/' + portraitSrc;
      portraitEl.alt = formatSpeaker(node.speaker);
      portraitEl.style.display = 'block';
      dialogueArea.classList.add('has-portrait');
      portraitEl.style.animation = 'none';
      portraitEl.offsetHeight; // reflow
      portraitEl.style.animation = '';
    } else {
      portraitEl.style.display = 'none';
      portraitEl.removeAttribute('src');
      dialogueArea.classList.remove('has-portrait');
    }
  }

  if (isInner) {
    // Show MC name on inner monologue if a custom name exists (portrait already shows)
    if (G.mcName) {
      speakerEl.textContent = G.mcName;
      speakerEl.className = 'speaker-name c-narrator';
    } else {
      speakerEl.textContent = '';
      speakerEl.className = 'speaker-name c-narrator';
    }
    dialogueText.classList.add('narrator-inner');
  } else if (isThird) {
    speakerEl.textContent = '';
    speakerEl.className = 'speaker-name c-narrator';
    dialogueText.classList.add('narrator-third');
  } else if (isDramatic) {
    speakerEl.textContent = '';
    speakerEl.className = 'speaker-name c-narrator';
    dialogueText.classList.add('narrator-dramatic');
  } else if (isNarrator) {
    speakerEl.textContent = '';
    speakerEl.className = 'speaker-name c-narrator';
  } else {
    // ── Use player's custom MC name when this speaker is the protagonist ──
    const mcActive = isMCSpeaker(node.speaker) && G.mcName;
    speakerEl.textContent = mcActive ? G.mcName : formatSpeaker(node.speaker);
    speakerEl.className = 'speaker-name ' + (node.speakerColor || 'c-teal');
    trackSpeaker(mcActive ? G.mcName : node.speaker);
  }

  // ── Hide choices, show dialogue ──
  $('choice-panel').classList.add('hidden');
  $('critical-banner').classList.add('hidden');
  $('dialogue-area').style.opacity = '1';
  stopTimer();

  // ── Type text with rich formatting ──
  const speed = node.typeSpeed || G.textSpeed;

  // ── Voice Engine: speak the line with character-appropriate voice ──
  if (typeof VOICE_ENGINE !== 'undefined') {
    // ── Determine the correct voice speaker ──
    // For inner monologue and MC dialogue, respect the player's chosen gender
    let voiceSpeaker;
    if (isNarrator) {
      voiceSpeaker = 'narrator';
    } else if (isThird) {
      voiceSpeaker = 'third';
    } else if (isDramatic) {
      voiceSpeaker = 'dramatic';
    } else if (isInner) {
      // Inner monologue: player's own thoughts — use their gender
      voiceSpeaker = (G.mcGender === 'female') ? 'mc_female' : 'mc_male';
    } else if (isMCSpeaker(node.speaker)) {
      // MC spoken dialogue: use player's chosen gender
      voiceSpeaker = (G.mcGender === 'female') ? 'mc_female' : 'mc_male';
    } else {
      voiceSpeaker = node.speaker;
    }
    VOICE_ENGINE.speak(node.text, voiceSpeaker);
  }

  typeRichText(node.text, speed, () => {
    if (node.choices) {
      $('click-hint').style.display = 'none';
      const hasCritical = node.critical || node.choices.some(c => c.critical);
      if (hasCritical) {
        showCriticalBanner(() => showChoices(node.choices, node.timed, node.timedDefault));
      } else {
        showChoices(node.choices, node.timed, node.timedDefault);
      }
    } else if (node.episodeEnd) {
      $('click-hint').style.display = 'block';
    } else {
      $('click-hint').style.display = 'block';
      if (G.autoAdvance && node.next) {
        G.autoTimer = setTimeout(() => {
          if (G.node?.next && !G.node?.choices) {
            if (!G.undoStack) G.undoStack = [];
            G.undoStack.push(buildSessionPayload());
            showNode(G.node.next);
          }
        }, 2500);
      }
    }
  });
}

function formatSpeaker(s) {
  if (!s) return '';
  return s.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// ═══════ EPISODE SYSTEM ═══════
function continueEpisode() {
  const nextIdx = G.episodeIdx + 1;
  if (G.story && G.story.episodes && G.story.episodes[nextIdx]) {
    beginEpisode(G.story.id, nextIdx);
  } else {
    openEpisodeSelect(G.story ? G.story.id : null);
  }
}

function handleEpisodeComplete() {
  if (G.story && G.episodeIdx !== undefined) {
    markEpisodeComplete(G.story.id, G.episodeIdx);
  }
  // Show episode transition screen
  const nextIdx = G.episodeIdx + 1;
  const hasNext = G.story.episodes && G.story.episodes[nextIdx];
  $('episode-title').textContent = hasNext ? G.story.episodes[nextIdx].title : 'Story Complete';
  $('episode-subtitle').textContent = hasNext ? 'The story continues...' : 'All episodes completed.';
  switchScreen('episode-screen');
  const epVid = $('episode-video');
  if (epVid) { epVid.currentTime = 0; epVid.play().catch(() => {}); }
}

function handleEpisodeBreak() {
  handleEpisodeComplete();
}

// ═══════ RICH TEXT TYPEWRITER ═══════
function typeRichText(rawText, speed, cb) {
  G.typing = true;
  clearTimeout(G.autoTimer);
  const runToken = G.runToken;
  const el = $('dialogue-text');
  el.innerHTML = '';
  el.classList.add('typing-active');

  // Parse rich text tags
  const parsed = parseRichText(rawText);
  el.dataset.full = rawText;
  el._parsedHtml = parsed;
  $('click-hint').style.display = 'none';

  // Strip HTML to get plain characters for typewriter
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = parsed;
  const plainText = tempDiv.textContent;

  let i = 0;
  (function type() {
    if (runToken !== G.runToken) return;
    if (i < plainText.length) {
      // Build partial HTML up to character i
      el.innerHTML = buildPartialRichText(parsed, i + 1);
      i++;
      G.typeTimer = setTimeout(type, speed);
    } else {
      el.innerHTML = parsed;
      G.typing = false;
      el.classList.remove('typing-active');
      if (cb && runToken === G.runToken) cb();
    }
  })();
  el._cb = cb;
}

function parseRichText(text) {
  // Rich text tags: {shake}text{/shake}, {glow}text{/glow}, etc.
  const tags = {
    shake: 'txt-shake', glow: 'txt-glow', pulse: 'txt-pulse',
    italic: 'txt-italic', whisper: 'txt-whisper', scream: 'txt-scream',
    glitch: 'txt-glitch', fade: 'txt-fade', blood: 'txt-blood',
    magic: 'txt-magic', cold: 'txt-cold', warm: 'txt-warm'
  };

  let result = text;
  for (const [tag, cls] of Object.entries(tags)) {
    const openRe = new RegExp(`\\{${tag}\\}`, 'g');
    const closeRe = new RegExp(`\\{/${tag}\\}`, 'g');
    result = result.replace(openRe, `<span class="${cls}">`);
    result = result.replace(closeRe, '</span>');
  }
  return result;
}

function buildPartialRichText(fullHtml, charCount) {
  // Show only first N visible characters of the rich HTML
  let visible = 0;
  let inTag = false;
  let result = '';
  for (let i = 0; i < fullHtml.length; i++) {
    const ch = fullHtml[i];
    if (ch === '<') { inTag = true; result += ch; continue; }
    if (ch === '>') { inTag = false; result += ch; continue; }
    if (inTag) { result += ch; continue; }
    visible++;
    if (visible <= charCount) {
      result += ch;
    }
  }
  return result;
}

function skipType() {
  if (!G.typing) return;
  clearTimeout(G.typeTimer);
  // Stop voice when user skips the typing animation
  if (typeof VOICE_ENGINE !== 'undefined') VOICE_ENGINE.stop();
  const el = $('dialogue-text');
  if (el._parsedHtml) {
    el.innerHTML = el._parsedHtml;
  } else {
    el.textContent = el.dataset.full;
  }
  G.typing = false;
  el.classList.remove('typing-active');
  if (el._cb) el._cb();
}

function previousLine() {
  if (G.typing) skipType();
  if (!G.undoStack || G.undoStack.length === 0) {
    toast("No previous dialogue to return to.");
    return;
  }
  const prevState = G.undoStack.pop();
  
  G.nodeId = prevState.nodeId;
  G.stats = { ...prevState.stats };
  G.choices = prevState.choices;
  G.flags = { ...prevState.flags };
  G.history = [...prevState.history];
  G.recentChoices = [...prevState.recentChoices];
  G.journal = {
    speakers: [...prevState.journal.speakers],
    milestones: [...prevState.journal.milestones]
  };
  
  invalidateActiveFlow();
  showNode(G.nodeId);
}

// ═══════ CRITICAL CHOICE ═══════
function showCriticalBanner(cb) {
  const banner = $('critical-banner');
  const runToken = G.runToken;
  banner.classList.remove('hidden');
  banner.classList.add('visible');
  $('game-screen').classList.add('fx-screen-shake');
  setTimeout(() => {
    if (runToken !== G.runToken) return;
    $('game-screen').classList.remove('fx-screen-shake');
  }, 600);
  setTimeout(() => {
    if (runToken !== G.runToken) return;
    if (cb) cb();
  }, 1800);
}

// ═══════ CHOICES ═══════
function showChoices(choices, timed, timedDefault) {
  const panel = $('choice-panel');
  const btnsContainer = $('choice-buttons');
  btnsContainer.innerHTML = '';
  panel.classList.remove('hidden');
  $('dialogue-area').style.opacity = '0.25';
  clearChoiceAtmosphere();

  choices.forEach((ch, i) => {
    const btn = document.createElement('button');
    let classes = 'choice-btn';
    if (ch.critical) classes += ' critical-choice';
    btn.className = classes;
    btn.style.animationDelay = (i * 0.1) + 's';

    let html = '';
    html += ch.text;
    if (ch.hint) html += `<span class="choice-hint">${ch.hint}</span>`;
    btn.innerHTML = html;
    btn.onpointerenter = e => {
      const aura = getChoiceAura(ch);
      btn.classList.add('choice-energized');
      btn.style.borderColor = aura.border;
      applyChoiceAtmosphere(ch, e);
    };
    btn.onpointermove = e => applyChoiceAtmosphere(ch, e);
    btn.onpointerleave = () => {
      btn.classList.remove('choice-energized');
      btn.style.borderColor = '';
      clearChoiceAtmosphere();
    };
    btn.onpointercancel = btn.onpointerleave;
    btn.onfocus = () => {
      const aura = getChoiceAura(ch);
      btn.classList.add('choice-energized');
      btn.style.borderColor = aura.border;
      applyChoiceAtmosphere(ch);
    };
    btn.onblur = () => {
      btn.classList.remove('choice-energized');
      btn.style.borderColor = '';
      clearChoiceAtmosphere();
    };
    btn.onclick = () => pickChoice(ch);
    btnsContainer.appendChild(btn);
  });

  if (timed && timedDefault) {
    startTimer(timed, timedDefault);
  }
}

function pickChoice(ch) {
  if (!G.undoStack) G.undoStack = [];
  G.undoStack.push(buildSessionPayload());
  
  G.choices++;
  stopTimer();
  clearChoiceAtmosphere();
  const runToken = G.runToken;
  G.recentChoices.unshift({
    text: ch.text.replace(/\{[^}]+\}/g, '').trim(),
    next: ch.next
  });
  G.recentChoices = G.recentChoices.slice(0, 5);

  // Apply effects
  if (ch.effects) {
    for (const [k, v] of Object.entries(ch.effects)) {
      if (k in G.stats) {
        G.stats[k] = Math.max(0, Math.min(100, G.stats[k] + v));
      } else {
        G.flags[k] = v;
      }
    }
    updateStatsUI();
    const entries = Object.entries(ch.effects).filter(([k]) => k in G.stats);
    if (entries.length) {
      const sorted = entries.sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));
      const [k, v] = sorted[0];
      const st = G.story.stats.find(s => s.id === k);
      if (st) toast(`${v > 0 ? '▲' : '▼'} ${st.name} ${v > 0 ? '+' : ''}${v}`);
    }
  }
  updateStatsUI();
  updateJournalUI();
  saveSession();

  if (ch.fx) applyFX(ch.fx);

  $('choice-panel').classList.add('hidden');
  $('critical-banner').classList.add('hidden');
  $('critical-banner').classList.remove('visible');
  $('dialogue-area').style.opacity = '1';
  setTimeout(() => {
    if (runToken !== G.runToken) return;
    showNode(ch.next);
  }, 350);
}

// ═══════ TIMED CHOICES ═══════
function startTimer(seconds, defaultNode) {
  const timerEl = $('choice-timer');
  const fillEl = $('choice-timer-fill');
  const textEl = $('choice-timer-text');
  const runToken = G.runToken;
  timerEl.classList.remove('hidden', 'urgent');
  G.timerRemaining = seconds * 10;
  const total = G.timerRemaining;

  G.timerInterval = setInterval(() => {
    if (runToken !== G.runToken) {
      stopTimer();
      return;
    }
    G.timerRemaining--;
    const pct = (G.timerRemaining / total) * 100;
    fillEl.style.width = pct + '%';
    textEl.textContent = Math.ceil(G.timerRemaining / 10) + 's';

    if (G.timerRemaining <= 30) {
      timerEl.classList.add('urgent');
    }

    if (G.timerRemaining <= 0) {
      stopTimer();
      toast('⏰ Time ran out!');
      clearChoiceAtmosphere();
      $('choice-panel').classList.add('hidden');
      $('dialogue-area').style.opacity = '1';
      setTimeout(() => {
        if (runToken !== G.runToken) return;
        showNode(defaultNode);
      }, 500);
    }
  }, 100);
}

function stopTimer() {
  if (G.timerInterval) {
    clearInterval(G.timerInterval);
    G.timerInterval = null;
  }
  const timerEl = $('choice-timer');
  if (timerEl) timerEl.classList.add('hidden');
}

// ═══════ STATS UI ═══════
function trackSpeaker(speaker) {
  if (!speaker || ['narrator', 'inner', 'third', 'dramatic'].includes(speaker)) return;
  if (!G.journal.speakers.includes(speaker)) {
    G.journal.speakers.push(speaker);
    updateJournalUI();
    saveSession();
  }
}

function recordMilestone(data) {
  const milestone = typeof data === 'string' ? { title: data, desc: '' } : data;
  if (!milestone || !milestone.title) return;
  const exists = G.journal.milestones.some(item => item.title === milestone.title);
  if (!exists) {
    G.journal.milestones.unshift({ title: milestone.title, desc: milestone.desc || '' });
    G.journal.milestones = G.journal.milestones.slice(0, 10);
    updateJournalUI();
    saveSession();
  }
}

function updateJournalUI() {
  if (!$('journal-meta')) return;
  const speakerCount = G.journal.speakers.length;
  const milestoneCount = G.journal.milestones.length;
  $('journal-meta').textContent = G.story
    ? `${G.story.title} • ${G.episode ? G.episode.title : 'Unknown Chapter'} • ${speakerCount} cast • ${milestoneCount} milestones`
    : 'No signal yet';

  if ($('journal-cast-list')) {
    $('journal-cast-list').innerHTML = speakerCount
      ? G.journal.speakers.map(name => `
          <div class="journal-chip">
            <span class="journal-chip-name">${formatSpeaker(name)}</span>
            <span class="journal-chip-role">Observed</span>
          </div>
        `).join('')
      : '<div class="journal-empty">New characters will be cataloged here as the story unfolds.</div>';
  }

  if ($('journal-milestone-list')) {
    $('journal-milestone-list').innerHTML = milestoneCount
      ? G.journal.milestones.map(item => `
          <div class="journal-note">
            <div class="journal-note-title">${item.title}</div>
            <div class="journal-note-desc">${item.desc || 'Story milestone recorded.'}</div>
          </div>
        `).join('')
      : '<div class="journal-empty">Major turns in the narrative will be logged here.</div>';
  }

  if ($('journal-choice-feed')) {
    $('journal-choice-feed').innerHTML = G.recentChoices.length
      ? G.recentChoices.map(item => `
          <div class="journal-feed-item">
            <div class="journal-feed-title">${item.text}</div>
            <div class="journal-feed-desc">Path updated.</div>
          </div>
        `).join('')
      : '<div class="journal-empty">Your latest decisions will appear here.</div>';
  }
}

function updateStatsUI() {
  if (!G.story) return;
  const container = $('stats-content');
  container.innerHTML = '';
  G.story.stats.forEach(st => {
    const val = G.stats[st.id] || 0;
    container.innerHTML += `
      <div class="stat-row">
        <div class="stat-name"><span>${st.name}</span><span style="color:${st.color}">${val}%</span></div>
        <div class="stat-track"><div class="stat-fill" style="width:${val}%;background:${st.color}"></div></div>
      </div>`;
  });
  if ($('stats-choices-total')) $('stats-choices-total').textContent = G.choices;
  if ($('choice-log')) {
    $('choice-log').innerHTML = G.recentChoices.length
      ? G.recentChoices.map(item => `<div class="choice-log-item">${item.text}</div>`).join('')
      : '<div class="choice-log-empty">Your recent choices will appear here.</div>';
  }
}

function toggleStats() {
  updateStatsUI();
  $('journal-panel')?.classList.add('hidden');
  $('stats-panel').classList.toggle('hidden');
}

function toggleJournal() {
  updateJournalUI();
  $('stats-panel')?.classList.add('hidden');
  $('journal-panel').classList.toggle('hidden');
}

// ═══════ SETTINGS ═══════
function toggleSettings() {
  $('archive-modal')?.classList.add('hidden');
  $('stats-panel')?.classList.add('hidden');
  $('journal-panel')?.classList.add('hidden');
  renderSaveSlots();

  // Sync voice UI state
  syncVoiceoverUi();
  syncMusicVolumeUi();

  $('settings-modal').classList.toggle('hidden');
}

function syncVoiceoverUi() {
  if (typeof VOICE_ENGINE === 'undefined') return;
  const vBtn = $('voice-toggle-btn');
  if (vBtn) {
    const isOn = VOICE_ENGINE.isEnabled();
    vBtn.textContent = isOn ? 'ON' : 'OFF';
    vBtn.classList.toggle('on', isOn);
  }
  const vSlider = $('voice-volume');
  if (vSlider) vSlider.value = Math.round(VOICE_ENGINE.getVolume() * 100);
}

function syncMusicVolumeUi() {
  const mSlider = $('music-volume');
  if (mSlider) mSlider.value = Math.round(G.musicVolume * 100);
}

function getEffectiveMusicVolume() {
  return G.musicVolume;
}

function applyMusicVolume() {
  const a = $('music-a'), b = $('music-b');
  const volume = getEffectiveMusicVolume();
  if (a) a.volume = volume;
  if (b) b.volume = volume;
}

function setMusicVolume(val) {
  G.musicVolume = val / 100;
  syncMusicVolumeUi();
  applyMusicVolume();
  saveSettings();
}

function setTextSpeed(val) {
  G.textSpeed = parseInt(val);
  saveSettings();
}

function toggleAutoAdvance() {
  G.autoAdvance = !G.autoAdvance;
  const btn = $('auto-advance-btn');
  btn.textContent = G.autoAdvance ? 'ON' : 'OFF';
  btn.classList.toggle('on', G.autoAdvance);
  saveSettings();
}

// ═══════ VOICE ENGINE CONTROLS ═══════
function toggleVoiceover() {
  if (typeof VOICE_ENGINE === 'undefined') return;
  VOICE_ENGINE.toggle();
  syncVoiceoverUi();
  applyMusicVolume();
  saveSettings();
}

function setVoiceVolume(val) {
  if (typeof VOICE_ENGINE === 'undefined') return;
  VOICE_ENGINE.setVolume(val / 100);
  syncVoiceoverUi();
}


function saveSettings() {
  try {
    localStorage.setItem('ws_settings', JSON.stringify({
      musicVolume: G.musicVolume,
      textSpeed: G.textSpeed,
      autoAdvance: G.autoAdvance
    }));
  } catch(e) {}
}

function loadSettings() {
  try {
    const s = JSON.parse(localStorage.getItem('ws_settings'));
    if (s) {
      G.musicVolume = s.musicVolume ?? 0.35;
      G.textSpeed = s.textSpeed ?? 22;
      G.autoAdvance = s.autoAdvance ?? false;
      $('text-speed').value = G.textSpeed;
      if (G.autoAdvance) {
        $('auto-advance-btn').textContent = 'ON';
        $('auto-advance-btn').classList.add('on');
      }
      syncMusicVolumeUi();
      syncVoiceoverUi();
      applyMusicVolume();
    }
  } catch(e) {}
}

// ═══════ MUSIC SYSTEM (CROSSFADE & AUTOPLAY RESILIENCE) ═══════
let pendingMusic = null;
function unlockAudioPlayback() {
  if (pendingMusic) {
    const src = pendingMusic;
    pendingMusic = null;
    playMusic(src);
  }
}
window.addEventListener('pointerdown', unlockAudioPlayback, { passive: true });
window.addEventListener('keydown', unlockAudioPlayback, { passive: true });

function playMusic(src) {
  if (!src) return;
  if (G.currentMusic === src) {
    // If same music is already set, ensure active player is actually playing
    const active = $('music-' + G.activeMusicPlayer);
    if (active && active.paused && active.src) {
      active.play().catch(e => { pendingMusic = src; });
    }
    return;
  }
  G.currentMusic = src;

  const current = $('music-' + G.activeMusicPlayer);
  const next = $('music-' + (G.activeMusicPlayer === 'a' ? 'b' : 'a'));
  const getVolume = () => getEffectiveMusicVolume();

  next.src = src;
  next.volume = 0;
  const playPromise = next.play();
  if (playPromise !== undefined) {
    playPromise.catch(err => {
      console.warn('Audio play deferred pending user interaction:', err);
      pendingMusic = src;
    });
  }

  const steps = 20;
  const duration = 1500;
  let step = 0;
  const fade = setInterval(() => {
    step++;
    const progress = step / steps;
    const volume = getVolume();
    if (current && current.src) current.volume = Math.max(0, volume * (1 - progress));
    if (next) next.volume = volume * progress;
    if (step >= steps) {
      clearInterval(fade);
      if (current) {
        current.pause();
        current.src = '';
      }
      G.activeMusicPlayer = G.activeMusicPlayer === 'a' ? 'b' : 'a';
      applyMusicVolume();
    }
  }, duration / steps);
}

function stopMusic() {
  const a = $('music-a'), b = $('music-b');
  const steps = 15;
  let step = 0;
  const fade = setInterval(() => {
    step++;
    const progress = step / steps;
    const volume = getEffectiveMusicVolume();
    if (a && a.src) a.volume = Math.max(0, volume * (1 - progress));
    if (b && b.src) b.volume = Math.max(0, volume * (1 - progress));
    if (step >= steps) {
      clearInterval(fade);
      if (a) { a.pause(); a.src = ''; }
      if (b) { b.pause(); b.src = ''; }
      G.currentMusic = null;
    }
  }, 60);
}

// ═══════ TRANSITION SYSTEM ═══════
function playTransition(videoSrc, cb) {
  const overlay = $('transition-overlay');
  const video = $('transition-video');
  const runToken = G.runToken;

  overlay.classList.remove('hidden');

  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    video.removeEventListener('ended', finish);
    video.removeEventListener('error', finish);
    clearTimeout(maxTimer);
    overlay.classList.add('hidden');
    video.pause();
    if (runToken !== G.runToken) return;
    if (cb) cb();
  };

  video.addEventListener('ended', finish);
  video.addEventListener('error', finish);
  const maxTimer = setTimeout(finish, 2000);

  video.src = videoSrc;
  video.currentTime = 0;
  video.play().catch(() => {
    finish();
  });
}

// ═══════ EFFECTS ═══════
function applyFX(fx) {
  const overlay = $('fx-overlay');
  const game = $('game-screen');

  const fxMap = {
    flash: () => overlay.className = 'fx-overlay fx-flash',
    red: () => overlay.className = 'fx-overlay fx-red-flash',
    shake: () => game.classList.add('fx-shake'),
    glitch: () => game.classList.add('fx-glitch'),
    rain: () => game.classList.add('fx-rain'),
    snow: () => game.classList.add('fx-snow'),
    heartbeat: () => game.classList.add('fx-heartbeat'),
    blur: () => game.classList.add('fx-blur'),
    slowmo: () => game.classList.add('fx-slowmo'),
    screenShake: () => game.classList.add('fx-screen-shake'),
  };

  if (fxMap[fx]) fxMap[fx]();

  const persistent = ['rain', 'snow'];
  if (!persistent.includes(fx)) {
    setTimeout(() => clearFX(), 1800);
  }
}

function clearFX() {
  $('fx-overlay').className = 'fx-overlay';
  const game = $('game-screen');
  game.classList.remove('fx-shake','fx-glitch','fx-rain','fx-snow','fx-heartbeat','fx-blur','fx-slowmo','fx-screen-shake');
}

// ═══════ ENDING ═══════
function handleEnd() {
  stopMusic();
  stopTimer();
  clearFX();
  fadeOutAmbience();
  const sceneVid = $('scene-video');
  if (sceneVid) { sceneVid.pause(); sceneVid.classList.remove('active'); }

  // Mark episode complete
  if (G.story && G.episodeIdx !== undefined) {
    markEpisodeComplete(G.story.id, G.episodeIdx);
  }

  const endingKey = G.node?.ending;
  const endData = G.story.endings[endingKey];
  if (!endData) { goHome(); return; }
  const isNewEnding = unlockEnding(G.story.id, endingKey);
  clearSession();
  updateResumeButton();

  $('ending-bg').style.backgroundImage = `url('${G.story.cover}')`;
  $('ending-badge').textContent = endData.icon;
  $('ending-title').textContent = endData.title;
  $('ending-title').style.background = `linear-gradient(135deg,${endData.color},var(--red))`;
  $('ending-title').style.webkitBackgroundClip = 'text';
  $('ending-title').style.webkitTextFillColor = 'transparent';
  $('ending-desc').textContent = endData.text;

  let statsHtml = `<div class="e-stat"><span class="e-stat-label">Choices Made</span><span class="e-stat-val">${G.choices}</span></div>`;
  G.story.stats.forEach(st => {
    statsHtml += `<div class="e-stat"><span class="e-stat-label">${st.name}</span><span class="e-stat-val" style="color:${st.color}">${G.stats[st.id]}%</span></div>`;
  });
  $('ending-stats').innerHTML = statsHtml;

  // Ending rarity
  const rarityEl = document.createElement('div');
  const totalPaths = Object.keys(G.story.endings || {}).length;
  let rarityClass, rarityText;
  if (totalPaths >= 5) {
    rarityClass = 'rarity-legendary'; rarityText = '✦ Legendary Path';
  } else if (totalPaths >= 4) {
    rarityClass = 'rarity-rare'; rarityText = '✦ Rare Path';
  } else if (totalPaths >= 3) {
    rarityClass = 'rarity-uncommon'; rarityText = '◇ Uncommon Path';
  } else {
    rarityClass = 'rarity-common'; rarityText = '○ Common Path';
  }
  rarityEl.className = 'ending-rarity ' + rarityClass;
  rarityEl.textContent = rarityText;
  $('ending-stats').insertAdjacentElement('afterend', rarityEl);

  $('ending-unlock-note').textContent = isNewEnding
    ? 'New ending discovered and added to your tracker.'
    : 'Ending already discovered. Try a different route to uncover the rest.';

  // Confetti celebration on new ending
  if (isNewEnding) {
    setTimeout(() => fireConfetti(), 400);
  }

  switchScreen('ending-screen');
}

// ═══════ TOAST ═══════
function toast(msg) {
  $('toast-text').textContent = msg;
  $('toast').classList.remove('hidden');
  setTimeout(() => $('toast').classList.add('hidden'), 2400);
}

// ═══════ CLICK HANDLERS ═══════
$('dialogue-area').addEventListener('click', () => {
  if (G.typing) { skipType(); return; }
  if (G.node?.choices) return;
  if (G.node?.episodeEnd) {
    if (G.story && G.episodeIdx !== undefined) {
      markEpisodeComplete(G.story.id, G.episodeIdx);
    }
    $('episode-title').textContent = G.node.episodeTitle || 'Next Episode';
    $('episode-subtitle').textContent = G.node.episodeSub || 'The story continues...';
    switchScreen('episode-screen');
    const epVid = $('episode-video');
    if (epVid) { epVid.currentTime = 0; epVid.play().catch(() => {}); }
    return;
  }
  clearTimeout(G.autoTimer);
  if (G.node?.next) {
    if (!G.undoStack) G.undoStack = [];
    G.undoStack.push(buildSessionPayload());
    showNode(G.node.next);
  }
});

// ═══════ KEYBOARD ═══════
document.addEventListener('keydown', e => {
  const target = e.target;
  const isTypingField = target && (
    target.matches?.('input, textarea, [contenteditable="true"], [contenteditable=""]') ||
    target.closest?.('input, textarea, [contenteditable="true"], [contenteditable=""]')
  );

  if (isTypingField) return;

  if (e.key === '/' && !G.story && $('title-screen')?.classList.contains('active')) {
    e.preventDefault();
    $('story-search')?.focus();
    return;
  }

  if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault();
    $('dialogue-area')?.click();
  }
  if (e.key === 'Escape') {
    if ($('story-filter-options') && !$('story-filter-options').classList.contains('hidden')) { closeFilterMenus(); return; }
    if ($('story-sort-options') && !$('story-sort-options').classList.contains('hidden')) { closeFilterMenus(); return; }
    if (!$('identity-modal').classList.contains('hidden')) { toggleIdentityCard(); return; }
    if (!$('settings-modal').classList.contains('hidden')) { toggleSettings(); return; }
    if (!$('fate-atlas-modal').classList.contains('hidden')) { toggleFateAtlas(); return; }
    if (!$('archive-modal').classList.contains('hidden')) { toggleArchivePanel(); return; }
    if (!$('exit-modal').classList.contains('hidden')) { cancelExit(); return; }
    if (!$('stats-panel').classList.contains('hidden')) { toggleStats(); return; }
    if (!$('journal-panel').classList.contains('hidden')) { toggleJournal(); return; }
    if (G.story) confirmExit();
  }
  if (e.key >= '1' && e.key <= '4') {
    const btns = $('choice-buttons')?.querySelectorAll('.choice-btn');
    const idx = parseInt(e.key) - 1;
    if (btns && btns[idx]) btns[idx].click();
  }
  if ((e.key === 'j' || e.key === 'J') && G.story) {
    toggleJournal();
  }
});

document.addEventListener('click', e => {
  if (!e.target.closest('.filter-menu')) closeFilterMenus();
});

// ═══════ UTILITIES ═══════
function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

// ═══════ PARTICLE SYSTEM ═══════
let particleMood = { r: 138, g: 92, b: 245 };
let particleTarget = { r: 138, g: 92, b: 245 };

function setParticleMood(mood) {
  const moods = {
    dark:    { r: 100, g: 40,  b: 140 },
    tense:   { r: 196, g: 54,  b: 74  },
    calm:    { r: 74,  g: 196, b: 176 },
    hopeful: { r: 212, g: 168, b: 67  },
    action:  { r: 232, g: 67,  b: 147 },
    mystery: { r: 138, g: 92,  b: 245 },
    cold:    { r: 100, g: 180, b: 220 },
    warm:    { r: 220, g: 140, b: 60  },
  };
  if (moods[mood]) particleTarget = { ...moods[mood] };
}

function initParticles() {
  const c = $('particles'), ctx = c.getContext('2d');
  let particles = [];
  function resize() { c.width = innerWidth; c.height = innerHeight; }
  resize(); window.addEventListener('resize', resize);

  class P {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * c.width;
      this.y = Math.random() * c.height;
      this.s = Math.random() * 2 + .3;
      this.dx = (Math.random() - .5) * .2;
      this.dy = (Math.random() - .5) * .15 - .05;
      this.o = Math.random() * .3 + .03;
      this.df = Math.random() * .003 + .0008;
      this.g = Math.random() > .5;
    }
    update() {
      this.x += this.dx; this.y += this.dy;
      this.g ? (this.o += this.df, this.o >= .4 && (this.g = false)) : (this.o -= this.df, this.o <= .01 && this.reset());
      (this.x < -10 || this.x > c.width + 10 || this.y < -10 || this.y > c.height + 10) && this.reset();
    }
    draw() {
      particleMood.r += (particleTarget.r - particleMood.r) * 0.005;
      particleMood.g += (particleTarget.g - particleMood.g) * 0.005;
      particleMood.b += (particleTarget.b - particleMood.b) * 0.005;
      const { r, g, b } = particleMood;
      ctx.beginPath(); ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${~~r},${~~g},${~~b},${this.o})`; ctx.fill();
      ctx.beginPath(); ctx.arc(this.x, this.y, this.s * 5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${~~r},${~~g},${~~b},${this.o * .08})`; ctx.fill();
    }
  }
  for (let i = 0; i < 140; i++) particles.push(new P());
  (function loop() {
    ctx.clearRect(0, 0, c.width, c.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  })();
}

// ═══════ SPARKLE PARTICLE SYSTEM ═══════
function initSparkles() {
  const c = $('sparkles');
  if (!c) return;
  const ctx = c.getContext('2d');
  let sparkles = [];
  function resize() { c.width = innerWidth; c.height = innerHeight; }
  resize(); window.addEventListener('resize', resize);

  const colors = [
    { r: 138, g: 92, b: 245 },  // purple
    { r: 99, g: 102, b: 241 },  // indigo
    { r: 168, g: 85, b: 247 },  // violet
    { r: 124, g: 58, b: 237 },  // deep purple
    { r: 192, g: 180, b: 255 }, // lavender
    { r: 79, g: 70, b: 229 },   // blue-violet
  ];

  class S {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * c.width;
      this.y = Math.random() * c.height;
      this.size = Math.random() * 1.8 + 0.4;
      this.twinkleSpeed = Math.random() * 0.035 + 0.01;
      this.twinklePhase = Math.random() * Math.PI * 2;
      this.maxOpacity = Math.random() * 0.45 + 0.08;
      this.drift = (Math.random() - 0.5) * 0.08;
      this.driftY = -Math.random() * 0.04 - 0.01;
      const col = colors[~~(Math.random() * colors.length)];
      this.r = col.r; this.g = col.g; this.b = col.b;
    }
    update() {
      this.twinklePhase += this.twinkleSpeed;
      this.x += this.drift;
      this.y += this.driftY;
      if (this.y < -10 || this.x < -10 || this.x > c.width + 10) this.reset();
    }
    draw() {
      const o = Math.max(0, Math.sin(this.twinklePhase) * this.maxOpacity);
      if (o < 0.01) return;
      // Core sparkle
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${o})`;
      ctx.fill();
      // Cross sparkle (4-point star)
      if (this.size > 0.8 && o > 0.1) {
        ctx.strokeStyle = `rgba(${this.r},${this.g},${this.b},${o * 0.5})`;
        ctx.lineWidth = 0.5;
        const len = this.size * 4;
        ctx.beginPath();
        ctx.moveTo(this.x - len, this.y);
        ctx.lineTo(this.x + len, this.y);
        ctx.moveTo(this.x, this.y - len);
        ctx.lineTo(this.x, this.y + len);
        ctx.stroke();
      }
      // Glow halo
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${o * 0.04})`;
      ctx.fill();
    }
  }
  for (let i = 0; i < 200; i++) sparkles.push(new S());
  (function loop() {
    ctx.clearRect(0, 0, c.width, c.height);
    sparkles.forEach(s => { s.update(); s.draw(); });
    requestAnimationFrame(loop);
  })();
}

// Init sparkles after DOM ready
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(initSparkles, 100);
  initParallax();
  initCursorTrail();
});

// ═══════ PARALLAX MOUSE TRACKING ═══════
function initParallax() {
  const sceneBg = $('scene-bg');
  const sceneVid = $('scene-video');
  if (!sceneBg) return;

  // Scale bg slightly larger so parallax doesn't show edges
  sceneBg.style.backgroundSize = '110%';
  sceneBg.style.transition = 'background-position 0.15s ease-out, opacity 1s ease';

  document.addEventListener('mousemove', e => {
    const gameScreen = $('game-screen');
    if (!gameScreen || !gameScreen.classList.contains('active')) return;

    const cx = (e.clientX / window.innerWidth - 0.5) * 2;  // -1 to 1
    const cy = (e.clientY / window.innerHeight - 0.5) * 2;
    const shiftX = 50 + cx * -2.5; // subtle 2.5% movement
    const shiftY = 50 + cy * -2;
    sceneBg.style.backgroundPosition = `${shiftX}% ${shiftY}%`;

    // Video parallax via transform
    if (sceneVid && sceneVid.classList.contains('active')) {
      sceneVid.style.transform = `translate(${cx * -8}px, ${cy * -6}px) scale(1.05)`;
    }
  });
}

// ═══════ AMBIENT SFX SYSTEM ═══════
let currentAmbience = null;
let ambienceAudio = null;

function setAmbience(type) {
  if (type === currentAmbience) return;
  currentAmbience = type;

  // Create ambient audio element if needed
  if (!ambienceAudio) {
    ambienceAudio = document.createElement('audio');
    ambienceAudio.id = 'ambience-audio';
    ambienceAudio.loop = true;
    ambienceAudio.volume = 0;
    document.body.appendChild(ambienceAudio);
  }

  if (type === 'none' || !type) {
    fadeOutAmbience();
    return;
  }

  // Ambience types with inline-generated audio via oscillator or existing assets
  const ambienceMap = {
    rain: { visual: 'fx-rain', volume: 0.12 },
    storm: { visual: 'fx-rain', volume: 0.15 },
    wind: { visual: null, volume: 0.08 },
    heartbeat: { visual: 'fx-heartbeat', volume: 0.1 },
    clock: { visual: null, volume: 0.06 },
    whispers: { visual: null, volume: 0.05 },
    underwater: { visual: null, volume: 0.08 },
    fire: { visual: null, volume: 0.1 },
  };

  const cfg = ambienceMap[type];
  if (!cfg) return;

  // Apply visual effect if any
  if (cfg.visual) {
    $('game-screen').classList.add(cfg.visual);
  }

  // Use Web Audio API to generate procedural ambience
  generateProceduralAmbience(type, cfg.volume);
}

let ambienceCtx = null;
let ambienceNodes = [];

function generateProceduralAmbience(type, targetVolume) {
  // Clean up previous
  cleanupAmbience();

  ambienceCtx = new (window.AudioContext || window.webkitAudioContext)();
  const master = ambienceCtx.createGain();
  master.gain.value = 0;
  master.connect(ambienceCtx.destination);

  // Fade in
  master.gain.linearRampToValueAtTime(targetVolume, ambienceCtx.currentTime + 2);

  if (type === 'rain' || type === 'storm') {
    // White noise filtered to sound like rain
    const bufferSize = 2 * ambienceCtx.sampleRate;
    const buffer = ambienceCtx.createBuffer(1, bufferSize, ambienceCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const noise = ambienceCtx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;
    const filter = ambienceCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = type === 'storm' ? 1200 : 800;
    noise.connect(filter);
    filter.connect(master);
    noise.start();
    ambienceNodes.push(noise);
  } else if (type === 'wind') {
    // Filtered noise with LFO modulation
    const bufferSize = 2 * ambienceCtx.sampleRate;
    const buffer = ambienceCtx.createBuffer(1, bufferSize, ambienceCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const noise = ambienceCtx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;
    const filter = ambienceCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 400;
    filter.Q.value = 2;
    // LFO to modulate filter
    const lfo = ambienceCtx.createOscillator();
    const lfoGain = ambienceCtx.createGain();
    lfo.frequency.value = 0.15;
    lfoGain.gain.value = 300;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();
    noise.connect(filter);
    filter.connect(master);
    noise.start();
    ambienceNodes.push(noise, lfo);
  } else if (type === 'heartbeat') {
    // Low frequency pulse
    function beat() {
      if (!ambienceCtx) return;
      const osc = ambienceCtx.createOscillator();
      const env = ambienceCtx.createGain();
      osc.frequency.value = 55;
      osc.type = 'sine';
      env.gain.setValueAtTime(0, ambienceCtx.currentTime);
      env.gain.linearRampToValueAtTime(0.6, ambienceCtx.currentTime + 0.06);
      env.gain.exponentialRampToValueAtTime(0.001, ambienceCtx.currentTime + 0.35);
      osc.connect(env);
      env.connect(master);
      osc.start();
      osc.stop(ambienceCtx.currentTime + 0.4);
      // Double beat
      setTimeout(() => {
        if (!ambienceCtx) return;
        const osc2 = ambienceCtx.createOscillator();
        const env2 = ambienceCtx.createGain();
        osc2.frequency.value = 55;
        osc2.type = 'sine';
        env2.gain.setValueAtTime(0, ambienceCtx.currentTime);
        env2.gain.linearRampToValueAtTime(0.4, ambienceCtx.currentTime + 0.05);
        env2.gain.exponentialRampToValueAtTime(0.001, ambienceCtx.currentTime + 0.25);
        osc2.connect(env2);
        env2.connect(master);
        osc2.start();
        osc2.stop(ambienceCtx.currentTime + 0.3);
      }, 180);
    }
    beat();
    const interval = setInterval(() => {
      if (!ambienceCtx) { clearInterval(interval); return; }
      beat();
    }, 900);
    ambienceNodes._interval = interval;
  } else if (type === 'clock') {
    // Tick-tock
    function tick(high) {
      if (!ambienceCtx) return;
      const osc = ambienceCtx.createOscillator();
      const env = ambienceCtx.createGain();
      osc.frequency.value = high ? 1800 : 1200;
      osc.type = 'sine';
      env.gain.setValueAtTime(0.3, ambienceCtx.currentTime);
      env.gain.exponentialRampToValueAtTime(0.001, ambienceCtx.currentTime + 0.04);
      osc.connect(env);
      env.connect(master);
      osc.start();
      osc.stop(ambienceCtx.currentTime + 0.05);
    }
    let isHigh = true;
    tick(isHigh);
    const interval = setInterval(() => {
      if (!ambienceCtx) { clearInterval(interval); return; }
      isHigh = !isHigh;
      tick(isHigh);
    }, 1000);
    ambienceNodes._interval = interval;
  } else if (type === 'whispers') {
    // Ghostly filtered noise
    const bufferSize = 2 * ambienceCtx.sampleRate;
    const buffer = ambienceCtx.createBuffer(1, bufferSize, ambienceCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const noise = ambienceCtx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;
    const filter = ambienceCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2000;
    filter.Q.value = 8;
    const lfo = ambienceCtx.createOscillator();
    const lfoGain = ambienceCtx.createGain();
    lfo.frequency.value = 0.3;
    lfoGain.gain.value = 800;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();
    noise.connect(filter);
    filter.connect(master);
    noise.start();
    ambienceNodes.push(noise, lfo);
  } else if (type === 'fire') {
    // Crackling noise
    const bufferSize = 2 * ambienceCtx.sampleRate;
    const buffer = ambienceCtx.createBuffer(1, bufferSize, ambienceCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * (Math.random() > 0.97 ? 1 : 0.1);
    const noise = ambienceCtx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;
    const filter = ambienceCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 3000;
    noise.connect(filter);
    filter.connect(master);
    noise.start();
    ambienceNodes.push(noise);
  }

  ambienceNodes._master = master;
}

function cleanupAmbience() {
  if (ambienceNodes._interval) clearInterval(ambienceNodes._interval);
  ambienceNodes.forEach(n => { try { n.stop(); } catch(e) {} });
  ambienceNodes = [];
  if (ambienceCtx) {
    try { ambienceCtx.close(); } catch(e) {}
    ambienceCtx = null;
  }
}

function fadeOutAmbience() {
  if (ambienceNodes._master && ambienceCtx) {
    ambienceNodes._master.gain.linearRampToValueAtTime(0, ambienceCtx.currentTime + 1);
    setTimeout(cleanupAmbience, 1200);
  } else {
    cleanupAmbience();
  }
  currentAmbience = null;
}

// ═══════ MILESTONE ACHIEVEMENT SYSTEM ═══════
function showMilestone(data) {
  // data: { icon: '🩸', title: 'Blood Awakened', desc: 'The entity senses your presence' }
  if (typeof data === 'string') {
    data = { icon: '🌟', title: data, desc: '' };
  }

  recordMilestone(data);
  // Create milestone popup
  let popup = document.getElementById('milestone-popup');
  if (!popup) {
    popup = document.createElement('div');
    popup.id = 'milestone-popup';
    popup.style.cssText = `
      position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(0.5);
      z-index:200;pointer-events:none;text-align:center;
      opacity:0;transition:all 0.8s cubic-bezier(0.16,1,0.3,1);
    `;
    document.body.appendChild(popup);
  }

  popup.innerHTML = `
    <div style="font-size:3.5rem;margin-bottom:0.5rem;filter:drop-shadow(0 0 30px rgba(212,168,67,.4));animation:floatPulse 2s ease-in-out infinite">${data.icon}</div>
    <div style="font-family:var(--ff-d);font-size:1.4rem;color:var(--gold);letter-spacing:.2em;text-shadow:0 0 30px rgba(212,168,67,.3);margin-bottom:0.3rem">${data.title}</div>
    <div style="font-family:var(--ff-u);font-size:0.65rem;color:var(--txt2);letter-spacing:.15em;text-transform:uppercase">${data.desc || 'Story milestone unlocked'}</div>
  `;

  // Animate in
  requestAnimationFrame(() => {
    popup.style.opacity = '1';
    popup.style.transform = 'translate(-50%,-50%) scale(1)';
  });

  // Animate out
  setTimeout(() => {
    popup.style.opacity = '0';
    popup.style.transform = 'translate(-50%,-50%) scale(1.2)';
  }, 3000);

  setTimeout(() => {
    popup.style.transform = 'translate(-50%,-50%) scale(0.5)';
  }, 3800);
}

// ═══════ CURSOR GLOW TRAIL ═══════
function initCursorTrail() {
  const canvas = document.createElement('canvas');
  canvas.id = 'cursor-trail';
  canvas.style.cssText = `
    position:fixed;inset:0;z-index:9998;pointer-events:none;
    mix-blend-mode:screen;opacity:0.7;
  `;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  const trail = [];
  const maxTrail = 18;
  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    trail.push({ x: mouseX, y: mouseY, life: 1.0 });
    if (trail.length > maxTrail) trail.shift();
  });

  (function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Outer glow at cursor position
    const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 35);
    gradient.addColorStop(0, 'rgba(138, 92, 245, 0.06)');
    gradient.addColorStop(0.5, 'rgba(138, 92, 245, 0.02)');
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 35, 0, Math.PI * 2);
    ctx.fill();

    // Trail dots
    for (let i = 0; i < trail.length; i++) {
      const p = trail[i];
      p.life -= 0.04;
      if (p.life <= 0) { trail.splice(i, 1); i--; continue; }

      const size = p.life * 2;
      const alpha = p.life * 0.15;
      ctx.beginPath();
      ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(168, 130, 255, ${alpha})`;
      ctx.fill();
    }

    requestAnimationFrame(draw);
  })();
}

// ═══════ CLEANUP ON EXIT ═══════
const _origGoHome = goHome;
goHome = function() {
  fadeOutAmbience();
  _origGoHome();
};

// ═══════ CONSOLE BRANDING ═══════
console.log('%c🌑 Whispering Shadows Engine v6', 'color:#c4364a;font-size:14px;font-family:serif;font-weight:bold');
console.log('%cParallax • Ambient SFX • Milestones • Cursor FX', 'color:#8a5cf5;font-size:11px');

// ═══════ SHOWCASE TICKER INIT ═══════
function initShowcaseTicker() {
  const track = $('showcase-ticker-track');
  if (!track) return;
  // Duplicate full content for seamless loop
  const clone = track.innerHTML;
  track.innerHTML = clone + clone;
}

// ═══════ PLAYER IDENTITY CARD SYSTEM ═══════
const ARCHETYPE_SIGILS = {
  truth: '🔮', mercy: '💚', defiance: '⚡', sacrifice: '🔥',
  ambition: '👑', transcendence: '🌟', control: '🏯', duty: '🛡️'
};

const IDENTITY_BADGES = [
  { id: 'first_ending', icon: '🌟', label: 'First Ending', condition: (totals) => totals.unlocked >= 1 },
  { id: 'five_endings', icon: '✨', label: 'Five Fates', condition: (totals) => totals.unlocked >= 5 },
  { id: 'all_stories', icon: '📚', label: 'Story Taster', condition: (_, touched) => touched >= STORY_CATALOG.length },
  { id: 'completionist', icon: '🏆', label: 'Completionist', condition: (totals) => totals.unlocked >= totals.total && totals.total > 0 },
  { id: 'three_endings', icon: '🌬️', label: 'Branching Mind', condition: (totals) => totals.unlocked >= 3 },
  { id: 'explorer', icon: '🧭', label: 'Deep Explorer', condition: (totals) => totals.unlocked >= 10 },
];

const RESONANCE_COLORS = {
  truth: '#8a5cf5', mercy: '#10b981', defiance: '#e84393',
  sacrifice: '#c4364a', ambition: '#d4a843', transcendence: '#00cec9',
  control: '#f0a030', duty: '#4ac4b0'
};

function toggleIdentityCard() {
  const modal = $('identity-modal');
  if (!modal) return;
  const opening = modal.classList.contains('hidden');

  if (opening) {
    closeFilterMenus();
    $('archive-modal')?.classList.add('hidden');
    $('fate-atlas-modal')?.classList.add('hidden');
    $('settings-modal')?.classList.add('hidden');
    $('stats-panel')?.classList.add('hidden');
    $('journal-panel')?.classList.add('hidden');
    $('exit-modal')?.classList.add('hidden');
    renderIdentityCard();
  }

  modal.classList.toggle('hidden');
}

function renderIdentityCard() {
  const profile = computeResonanceProfile();
  const totals = getAtlasTotals();
  const scores = getResonanceScores();

  // Count stories touched
  const storiesTouched = STORY_CATALOG.filter(story => {
    const prog = getStoryProgress(story.id);
    return prog.completedEpisodes.length > 0 || getUnlockedEndings(story.id).length > 0;
  }).length;

  // Count total choices across all saves
  const totalChoices = G.saveSlots.filter(Boolean).reduce((sum, slot) => sum + (slot.choices || 0), 0) + (G.choices || 0);

  // Determine primary archetype sigil
  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const primaryTrait = ranked.length ? ranked[0][0] : null;
  const sigil = $('identity-sigil');
  const archetype = $('identity-archetype');
  const subtitle = $('identity-subtitle');

  if (sigil) sigil.textContent = primaryTrait ? (ARCHETYPE_SIGILS[primaryTrait] || '🌑') : '🌑';
  if (archetype) archetype.textContent = profile.title;
  if (subtitle) subtitle.textContent = totals.unlocked > 0
    ? `Narrative fingerprint across ${storiesTouched} ${storiesTouched === 1 ? 'story' : 'stories'}`
    : 'Begin your journey to reveal your narrative identity';

  // Stats
  if ($('id-stat-stories')) $('id-stat-stories').textContent = storiesTouched;
  if ($('id-stat-endings')) $('id-stat-endings').textContent = totals.unlocked;
  if ($('id-stat-choices')) $('id-stat-choices').textContent = totalChoices;

  // Resonance bars
  const resonanceEl = $('identity-resonance');
  if (resonanceEl) {
    const maxScore = ranked.length ? ranked[0][1] : 1;
    resonanceEl.innerHTML = ranked.length
      ? ranked.slice(0, 4).map(([trait, score]) => {
          const pct = Math.round((score / maxScore) * 100);
          const color = RESONANCE_COLORS[trait] || '#fff';
          return `
            <div class="identity-resonance-bar">
              <span class="identity-resonance-label">${RESONANCE_LABELS[trait] || capitalize(trait)}</span>
              <div class="identity-resonance-track">
                <div class="identity-resonance-fill" style="width:${pct}%;background:${color}"></div>
              </div>
            </div>
          `;
        }).join('')
      : '<div class="identity-resonance-bar"><span class="identity-resonance-label">No resonance data yet</span></div>';
  }

  // Badges
  const badgeStrip = $('identity-badge-strip');
  if (badgeStrip) {
    badgeStrip.innerHTML = IDENTITY_BADGES.map(badge => {
      const earned = badge.condition(totals, storiesTouched);
      return `
        <span class="identity-badge ${earned ? 'earned' : 'locked'}">
          <span>${earned ? badge.icon : '✦'}</span>
          <span>${badge.label}</span>
        </span>
      `;
    }).join('');
  }

  // Update widget meta
  const widgetMeta = $('identity-widget-meta');
  if (widgetMeta) {
    widgetMeta.textContent = totals.unlocked > 0
      ? `${profile.title} • ${totals.unlocked} endings`
      : 'Your narrative fingerprint';
  }

  // Render decision heatmap
  renderDecisionHeatmap();

  initInteractiveSurfaces($('identity-modal') || document);
}

// ═══════ CONFETTI CELEBRATION SYSTEM ═══════
function fireConfetti() {
  const canvas = $('confetti-canvas');
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.classList.add('active');
  const ctx = canvas.getContext('2d');

  const colors = [
    '#c4364a', '#8a5cf5', '#4ac4b0', '#d4a843', '#e84393',
    '#00cec9', '#f0a030', '#10b981', '#fff', '#ddd6fe'
  ];

  class Confetto {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = -20 - Math.random() * canvas.height * 0.5;
      this.w = Math.random() * 8 + 4;
      this.h = Math.random() * 5 + 2;
      this.color = colors[~~(Math.random() * colors.length)];
      this.rotation = Math.random() * 360;
      this.rotSpeed = (Math.random() - 0.5) * 12;
      this.speedY = Math.random() * 3 + 2;
      this.speedX = (Math.random() - 0.5) * 4;
      this.wobble = Math.random() * Math.PI * 2;
      this.opacity = 1;
      this.decay = Math.random() * 0.003 + 0.002;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.wobble) * 0.5;
      this.wobble += 0.04;
      this.rotation += this.rotSpeed;
      this.speedY += 0.05; // gravity
      this.opacity -= this.decay;
    }
    draw() {
      if (this.opacity <= 0) return;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation * Math.PI / 180);
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;
      ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
      ctx.restore();
    }
  }

  const confetti = [];
  for (let i = 0; i < 200; i++) confetti.push(new Confetto());

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    confetti.forEach(c => {
      c.update();
      c.draw();
      if (c.opacity > 0 && c.y < canvas.height + 50) alive = true;
    });
    frame++;
    if (alive && frame < 300) {
      requestAnimationFrame(animate);
    } else {
      canvas.classList.remove('active');
    }
  }
  animate();
}

// ═══════ CINEMATIC LOADING QUOTES ═══════
const LOADING_QUOTES = [
  { text: '"Every choice is a thread pulled from the loom of fate. Some strengthen the tapestry; others unravel it."', author: '— The Weaver\'s Codex' },
  { text: '"In the architecture of stories, doors do not merely open and close. They remember who passed through."', author: '— Narrative Engine Philosophy' },
  { text: '"The shadow you cast is shaped by the light you choose to walk toward."', author: '— The Whispering Theorem' },
  { text: '"Not all endings are conclusions. Some are invitations to return with wiser eyes."', author: '— The Fate Atlas Inscription' },
  { text: '"Your choices do not define who you are. They reveal who you were becoming all along."', author: '— Resonance Theory' },
  { text: '"A story that bends to your will is a mirror. One that resists… is a teacher."', author: '— The Archive Keeper' },
  { text: '"Between two silences lives the space where narratives breathe."', author: '— Memory Engine Notes' },
  { text: '"The bravest path in any story is the one where you don\'t know what comes next."', author: '— Player\'s Oath' },
  { text: '"We do not inherit the stories of our ancestors. We borrow them from our unborn selves."', author: '— The Fractured Axiom' },
  { text: '"A character remembered is a character that still lives. You are the author of their immortality."', author: '— The Echo Engine' },
  { text: '"Fate whispers to the player: you cannot withstand the storm. The player whispers back: I am the storm."', author: '— The Defiance Protocol' },
  { text: '"Some doors open into rooms. Others open into versions of yourself you haven\'t met yet."', author: '— Whispering Shadows, Ch. 0' },
  { text: '"The most dangerous choice in any story is the one that feels safe."', author: '— Resonance Theory, Vol. II' },
  { text: '"Every great narrative began as a whisper someone refused to ignore."', author: '— The Origin Index' },
  { text: '"You are not playing the game. The game is remembering you."', author: '— Consciousness Imprint Doctrine' },
  { text: '"The distance between two endings is never measured in clicks. It is measured in conviction."', author: '— The Fate Cartographer' },
];

let _loadingQuoteTimer = null;
let _loadingQuoteCallback = null;
let _loadingQuoteSkipHandler = null;

function showLoadingQuote(cb, duration = 5000) {
  const quoteOverlay = $('loading-quote');
  const quoteText = $('loading-quote-text');
  const quoteAuthor = $('loading-quote-author');
  if (!quoteOverlay || !quoteText || !quoteAuthor) { if (cb) cb(); return; }

  // Clean up any previous
  clearTimeout(_loadingQuoteTimer);
  if (_loadingQuoteSkipHandler) {
    quoteOverlay.removeEventListener('click', _loadingQuoteSkipHandler);
  }

  const quote = LOADING_QUOTES[~~(Math.random() * LOADING_QUOTES.length)];
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = quote.author;
  quoteOverlay.classList.remove('hidden');

  let fired = false;
  function finish() {
    if (fired) return;
    fired = true;
    clearTimeout(_loadingQuoteTimer);
    if (_loadingQuoteSkipHandler) {
      quoteOverlay.removeEventListener('click', _loadingQuoteSkipHandler);
      _loadingQuoteSkipHandler = null;
    }
    quoteOverlay.classList.add('hidden');
    setTimeout(() => { if (cb) cb(); }, 700);
  }

  // Tap-to-skip: clicking the overlay skips immediately
  _loadingQuoteSkipHandler = finish;
  quoteOverlay.addEventListener('click', _loadingQuoteSkipHandler);

  // Auto-advance after duration
  _loadingQuoteTimer = setTimeout(finish, duration);
}

// ═══════ GENRE ATMOSPHERIC PARTICLES ═══════
let genreParticlesActive = false;
let genreParticlesRAF = null;

function startGenreAtmosphere(genreClass) {
  stopGenreAtmosphere();
  const canvas = $('sparkles');
  if (!canvas) return;

  const configs = {
    'theme-gothic': { type: 'embers', color: [196, 54, 74], count: 30 },
    'theme-cyberpunk': { type: 'digital', color: [0, 206, 201], count: 40 },
    'theme-mystery': { type: 'dust', color: [212, 168, 67], count: 25 },
    'theme-scifi': { type: 'stars', color: [138, 92, 245], count: 35 },
    'theme-steampunk': { type: 'gears', color: [240, 160, 48], count: 20 },
    'theme-fantasy': { type: 'leaves', color: [16, 185, 129], count: 28 },
    'theme-psychological': { type: 'static', color: [232, 67, 147], count: 45 },
  };

  const cfg = configs[genreClass];
  if (!cfg) return;

  genreParticlesActive = true;
  // The sparkle canvas already handles atmospheric effects globally.
  // We change the particle mood color to match the genre.
  setParticleMood(getGenreMoodName(genreClass));
}

function getGenreMoodName(genreClass) {
  const map = {
    'theme-gothic': 'tense',
    'theme-cyberpunk': 'action',
    'theme-mystery': 'warm',
    'theme-scifi': 'mystery',
    'theme-steampunk': 'warm',
    'theme-fantasy': 'calm',
    'theme-psychological': 'dark',
  };
  return map[genreClass] || 'tense';
}

function stopGenreAtmosphere() {
  genreParticlesActive = false;
  if (genreParticlesRAF) {
    cancelAnimationFrame(genreParticlesRAF);
    genreParticlesRAF = null;
  }
}

// Patch applyTheme to trigger genre atmosphere
const _originalApplyTheme = applyTheme;
applyTheme = function(genreClass) {
  _originalApplyTheme(genreClass);
  const theme = THEME_MAP[genreClass];
  if (theme) startGenreAtmosphere(theme);
};

// ═══════ ENHANCED BEGINNING WITH LOADING QUOTE ═══════
const _originalBeginEpisode = beginEpisode;
beginEpisode = function(storyId, epIdx) {
  const s = STORY_CATALOG.find(x => x.id === storyId);
  if (!s) return;

  // Show a cinematic quote before entering the story (tap to skip)
  showLoadingQuote(() => {
    _originalBeginEpisode(storyId, epIdx);
  });
};

// ═══════ NAVIGATION BAR SYSTEM ═══════
function initNavBar() {
  const nav = $('nav-float');
  const wrapper = document.querySelector('.home-wrapper');
  if (!nav || !wrapper) return;

  // Scroll-responsive nav
  wrapper.addEventListener('scroll', () => {
    if (wrapper.scrollTop > 120) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  updateNavIndicators();
}

function navScrollTo(section) {
  const wrapper = document.querySelector('.home-wrapper');
  if (!wrapper) return;

  if (section === 'library') {
    const grid = $('story-grid');
    if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function updateNavIndicators() {
  const storiesEl = $('nav-stories-count');
  const endingsEl = $('nav-endings-count');
  if (storiesEl) storiesEl.textContent = `${STORY_CATALOG.length} Stories`;
  if (endingsEl) {
    const totalEndings = STORY_CATALOG.reduce((sum, story) => sum + getUnlockedEndings(story.id).length, 0);
    endingsEl.textContent = `${totalEndings} Ending${totalEndings !== 1 ? 's' : ''}`;
  }
}

// ═══════ DECISION HEATMAP ═══════
function renderDecisionHeatmap() {
  const container = $('identity-heatmap');
  if (!container) return;

  // Build a grid of cells: each story gets a row of cells proportional to its episodes
  const cells = [];
  STORY_CATALOG.forEach(story => {
    const epCount = getEpisodeCount(story);
    const prog = getStoryProgress(story.id);
    const endingsFound = getUnlockedEndings(story.id).length;
    const totalEndings = Object.keys(story.endings || {}).length;

    for (let i = 0; i < epCount; i++) {
      const completed = prog.completedEpisodes.includes(i);
      let intensity = 0;
      if (completed) {
        intensity = 0.4 + (endingsFound / Math.max(totalEndings, 1)) * 0.6;
      }
      cells.push({
        storyTitle: story.title,
        episode: i + 1,
        completed,
        intensity,
        genre: story.genreClass
      });
    }
  });

  const genreColors = {
    'genre-gothic': 'rgba(196,54,74,',
    'genre-cyberpunk': 'rgba(0,206,201,',
    'genre-mystery': 'rgba(212,168,67,',
    'genre-scifi': 'rgba(138,92,245,',
    'genre-steampunk': 'rgba(240,160,48,',
    'genre-fantasy': 'rgba(16,185,129,',
    'genre-psychological': 'rgba(232,67,147,'
  };

  container.innerHTML = cells.map(cell => {
    const colorBase = genreColors[cell.genre] || 'rgba(138,92,245,';
    const bg = cell.completed
      ? `${colorBase}${cell.intensity.toFixed(2)})`
      : 'rgba(255,255,255,.04)';
    const border = cell.completed
      ? `${colorBase}${(cell.intensity * 0.5).toFixed(2)})`
      : 'rgba(255,255,255,.02)';
    return `<div class="identity-heatmap-cell" style="background:${bg};border:1px solid ${border}" title="${cell.storyTitle} — Ep ${cell.episode}${cell.completed ? ' ✓' : ''}"></div>`;
  }).join('');

  if (!cells.length) {
    container.innerHTML = '<div style="font-family:var(--ff-u);font-size:.55rem;color:var(--txt3);letter-spacing:.1em;text-align:center;padding:.5rem">Play stories to generate your decision pattern</div>';
  }
}

// ═══════ ENHANCED BOOT WITH NAV ═══════
// Patch the DOMContentLoaded to include nav init
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(initNavBar, 200);
  initChoiceGlow();
});

// Patch updateHeroIntel to also update nav indicators
const _origUpdateHeroIntel = updateHeroIntel;
updateHeroIntel = function() {
  _origUpdateHeroIntel();
  updateNavIndicators();
};

// ═══════ CHOICE BUTTON MOUSE-FOLLOW GLOW ═══════
function initChoiceGlow() {
  document.addEventListener('mousemove', (e) => {
    const btns = document.querySelectorAll('.choice-btn');
    btns.forEach(btn => {
      const rect = btn.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
      const my = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
      btn.style.setProperty('--mx', mx + '%');
      btn.style.setProperty('--my', my + '%');
    });
  });
}
