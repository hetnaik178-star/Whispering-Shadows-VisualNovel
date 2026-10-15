// ═══════════════════════════════════════════════════════════
// CHARACTER CUSTOMIZATION — Whispering Shadows
// Handles MC name, gender, and look selection per story
// Persists across all episodes of each story
// ═══════════════════════════════════════════════════════════

const CHAR_CUSTOM = (() => {
  const STORAGE_KEY = 'ws_char_custom';
  const ASSET = '../../Assets/images/CharacterCustomize/';

  // ── Per-story MC look definitions ──
  // Each story has 3 male + 3 female looks themed to its genre
  // Images mapped to actual assets in Assets/images/CharacterCustomize/
  const STORY_LOOKS = {
    ravencroft: {
      kicker: 'RAVENCROFT MANOR',
      nameDesc: 'The heir returns after thirty years. What name echoes through these hollow halls?',
      lookDesc: 'How does the haunted aristocracy see you?',
      theme: 'gothic',
      accentColor: '#c4364a',
      male: [
        { id: 'rav_m1', name: 'The Brooding Heir', desc: 'Dark coat, sharp jaw, eyes that have seen too much.', img: 'Rm1.png' },
        { id: 'rav_m2', name: 'The Scholar', desc: 'Wire spectacles, waistcoat, ink-stained fingers.', img: 'Rm2.png' },
        { id: 'rav_m3', name: 'The Soldier', desc: 'Military bearing, weathered face, rigid discipline.', img: 'Rm3.png' }
      ],
      female: [
        { id: 'rav_f1', name: 'The Dark Rose', desc: 'Victorian elegance, fierce gaze, midnight lace.', img: 'Rf1.png' },
        { id: 'rav_f2', name: 'The Occultist', desc: 'Wild curls, amber eyes, draped in arcane jewelry.', img: 'Rf2.png' },
        { id: 'rav_f3', name: 'The Governess', desc: 'Prim composure hiding iron will and sharp mind.', img: 'Rf3.png' }
      ]
    },
    neon: {
      kicker: 'NEON DISTRICT — 2089',
      nameDesc: 'Every hacker needs an alias. What name will burn across the feeds?',
      lookDesc: 'The street sees your skin before your code. Choose your signal.',
      theme: 'cyberpunk',
      accentColor: '#00cec9',
      male: [
        { id: 'neo_m1', name: 'The Ghost', desc: 'Hooded, augmented eyes, moves like static.', img: 'Nm1.png' },
        { id: 'neo_m2', name: 'The Punk', desc: 'Neon mohawk, chrome arm, leather and defiance.', img: 'Nm2.png' },
        { id: 'neo_m3', name: 'The Corp Runner', desc: 'Sleek suit, hidden tech, corporate camouflage.', img: 'Nm3.png' }
      ],
      female: [
        { id: 'neo_f1', name: 'The Netrunner', desc: 'Cyber-dreads, holographic tattoos, razor focus.', img: 'Nf1.png' },
        { id: 'neo_f2', name: 'The Rebel', desc: 'Shaved sides, combat jacket, boots that have kicked down doors.', img: 'Nf2.png' },
        { id: 'neo_f3', name: 'The Phantom', desc: 'Translucent coat, pale skin, whisper-quiet presence.', img: 'Nf3.png' }
      ]
    },
    crimson: {
      kicker: 'S.S. AURELIA — ATLANTIC OCEAN',
      nameDesc: 'A detective\'s name carries weight. What does the warrant say?',
      lookDesc: 'First impressions solve cases. How do suspects see you?',
      theme: 'mystery',
      accentColor: '#d4a843',
      male: [
        { id: 'cri_m1', name: 'The Noir', desc: 'Trench coat, loosened tie, shadows under the eyes.', img: 'Cm1.png' },
        { id: 'cri_m2', name: 'The Sharp', desc: 'Tailored suit, cold precision, never a hair displaced.', img: 'Cm2.png' },
        { id: 'cri_m3', name: 'The Veteran', desc: 'Salt-pepper scruff, rolled sleeves, seen-it-all stance.', img: 'Roguish pilot in a gritty cockpit.png' }
      ],
      female: [
        { id: 'cri_f1', name: 'The Analyst', desc: 'Sleek blazer, penetrating gaze, mind like a scalpel.', img: 'Confident detective in cyberpunk setting.png' },
        { id: 'cri_f2', name: 'The Undercover', desc: 'Evening dress hiding steel, champagne glass, calculating smile.', img: 'Elegant detective at gala event.png' },
        { id: 'cri_f3', name: 'The Gritty', desc: 'Leather jacket, combat boots, earns respect with fists.', img: 'Gritty detective in dim lights.png' }
      ]
    },
    clockwork: {
      kicker: 'THE PARLIAMENT OF GEARS',
      nameDesc: 'Behind the brass mask, a name whispers through the steam. What is it?',
      lookDesc: 'Cogsworth society judges by appearance. What do they see?',
      theme: 'steampunk',
      accentColor: '#f0a030',
      male: [
        { id: 'clk_m1', name: 'The Tinkerer', desc: 'Goggles, oil-stained apron, genius behind the grime.', img: 'Clockmale.png' },
        { id: 'clk_m2', name: 'The Gentleman', desc: 'Top hat, brass monocle, polished cane hiding a blade.', img: 'Steampunk gentleman with cane sword.png' },
        { id: 'clk_m3', name: 'The Rebel', desc: 'Long coat, soot-streaked, clockwork arm of his own design.', img: 'Clockmale2.png' }
      ],
      female: [
        { id: 'clk_f1', name: 'The Inventor', desc: 'Leather corset, brass bracers, mind sharper than any blade.', img: 'Steampunk inventor in a dim workshop.png' },
        { id: 'clk_f2', name: 'The Aristocrat', desc: 'Elegant bustle dress, hidden compartments, political daggers.', img: 'Steampunk aristocrat with political daggers.png' },
        { id: 'clk_f3', name: 'The Machinist', desc: 'Work coveralls, welding visor, grease and brilliance.', img: 'Steampunk machinist in a workshop.png' }
      ]
    },
    echoes: {
      kicker: 'STARSHIP ELYSIUM — DEEP SPACE',
      nameDesc: 'Commander\'s log: first entry. State your name for the record.',
      lookDesc: 'The crew needs a face to follow. What does the Commander look like?',
      theme: 'scifi',
      accentColor: '#8a5cf5',
      male: [
        { id: 'ech_m1', name: 'The Commander', desc: 'Military uniform, cropped hair, jaw set for the unknown.', img: 'Commanding starship officer in futuristic uniform.png' },
        { id: 'ech_m2', name: 'The Scientist', desc: 'Lab coat over uniform, tired eyes, caffeine-fueled brilliance.', img: 'Tired scientist in futuristic lab.png' },
        { id: 'ech_m3', name: 'The Rogue', desc: 'Unbuttoned collar, cocky grin, pilot jacket and bravado.', img: 'Space rogue pilot in cockpit.png' }
      ],
      female: [
        { id: 'ech_f1', name: 'The Captain', desc: 'Crisp uniform, braided hair, authority in every step.', img: 'Brave leader on a starship bridge.png' },
        { id: 'ech_f2', name: 'The Explorer', desc: 'Flight suit, curious eyes, reaching for the stars.', img: 'Curious explorer on alien surface.png' },
        { id: 'ech_f3', name: 'The Engineer', desc: 'Tool belt, rolled sleeves, fixes problems with brilliance.', img: 'Starship engineer in her workspace.png' }
      ]
    },
    fractured: {
      kicker: 'WHITMORE PSYCHIATRIC FACILITY',
      nameDesc: 'The file says one name. The mirror says another. Which one is real?',
      lookDesc: 'The person in the reflection — who stares back?',
      theme: 'psychological',
      accentColor: '#e84393',
      male: [
        { id: 'fra_m1', name: 'The Doctor', desc: 'Pressed shirt, composed exterior, cracks beneath.', img: 'Therapist in a dimly lit office.png' },
        { id: 'fra_m2', name: 'The Patient', desc: 'Hospital gown edges, haunted eyes, searching for self.', img: 'Caught between roles.png' },
        { id: 'fra_m3', name: 'The Stranger', desc: 'Disheveled hair, day-old stubble, identity uncertain.', img: 'Stranger in the psychiatric hallway.png' }
      ],
      female: [
        { id: 'fra_f1', name: 'The Therapist', desc: 'Professional blazer, kind eyes hiding deep fractures.', img: 'Therapist in a dimly lit office (1).png' },
        { id: 'fra_f2', name: 'The Lost', desc: 'Oversized cardigan, bare feet, wandering between selves.', img: 'Lost in the hospital hallway.png' },
        { id: 'fra_f3', name: 'The Survivor', desc: 'Sharp features, defiant posture, refuses to be broken.', img: 'Determined in the forgotten hallway.png' }
      ]
    },
    realm: {
      kicker: 'THE DROWNED COAST',
      nameDesc: 'The keystone hums as you speak. What name awakens its ancient light?',
      lookDesc: 'A mapmaker steps into legend. What does the legend look like?',
      theme: 'fantasy',
      accentColor: '#10b981',
      male: [
        { id: 'rlm_m1', name: 'The Wanderer', desc: 'Hooded cloak, worn boots, map case on his back.', img: 'Misty forest warrior in enchanted light.png' },
        { id: 'rlm_m2', name: 'The Knight', desc: 'Battered armor, chivalric bearing, sword at the hip.', img: "The battle-worn knight's resolve.png" },
        { id: 'rlm_m3', name: 'The Sage', desc: 'Robes, ancient staff, knowledge older than kingdoms.', img: 'Mysterious sage in glowing ruins.png' }
      ],
      female: [
        { id: 'rlm_f1', name: 'The Ranger', desc: 'Green cloak, bow on shoulder, swift and silent.', img: 'Elven ranger in a forest glade.png' },
        { id: 'rlm_f2', name: 'The Enchantress', desc: 'Flowing robes, glowing runes, power in every gesture.', img: 'Mystical enchantress in glowing magic.png' },
        { id: 'rlm_f3', name: 'The Pirate', desc: 'Sea coat, cutlass, wild hair, ocean in her veins.', img: 'Pirate queen at sunset.png' }
      ]
    }
  };

  // ── Theme accent colors for each story ──
  const THEME_ACCENTS = {
    gothic:        { primary: '#c4364a', glow: 'rgba(196,54,74,.25)',  border: 'rgba(196,54,74,.4)' },
    cyberpunk:     { primary: '#00cec9', glow: 'rgba(0,206,201,.25)',  border: 'rgba(0,206,201,.4)' },
    mystery:       { primary: '#d4a843', glow: 'rgba(212,168,67,.25)', border: 'rgba(212,168,67,.4)' },
    steampunk:     { primary: '#f0a030', glow: 'rgba(240,160,48,.25)', border: 'rgba(240,160,48,.4)' },
    scifi:         { primary: '#8a5cf5', glow: 'rgba(138,92,245,.25)', border: 'rgba(138,92,245,.4)' },
    psychological: { primary: '#e84393', glow: 'rgba(232,67,147,.25)', border: 'rgba(232,67,147,.4)' },
    fantasy:       { primary: '#10b981', glow: 'rgba(16,185,129,.25)', border: 'rgba(16,185,129,.4)' }
  };

  // ── State ──
  let currentStoryId = null;
  let selectedName = '';
  let selectedGender = null;
  let selectedLook = null;
  let onComplete = null; // callback when customization finishes
  let particleRAF = null;

  // ── Persistence ──
  function loadAll() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveAll(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
  }
  function getStoryCustom(storyId) {
    const all = loadAll();
    return all[storyId] || null;
  }
  function setStoryCustom(storyId, data) {
    const all = loadAll();
    all[storyId] = data;
    saveAll(all);
  }

  // ── UI Helpers ──
  function $(id) { return document.getElementById(id); }

  function getThemeForStory() {
    const storyData = STORY_LOOKS[currentStoryId];
    return storyData?.theme ? (THEME_ACCENTS[storyData.theme] || THEME_ACCENTS.gothic) : THEME_ACCENTS.gothic;
  }

  function applyThemeToModal() {
    const theme = getThemeForStory();
    const modal = $('char-custom-modal');
    if (!modal) return;
    modal.style.setProperty('--char-accent', theme.primary);
    modal.style.setProperty('--char-glow', theme.glow);
    modal.style.setProperty('--char-border', theme.border);
  }

  function showStep(stepId) {
    document.querySelectorAll('.char-step').forEach(s => s.classList.remove('active'));
    const step = $(stepId);
    if (step) {
      step.classList.add('active');
      step.style.animation = 'none';
      step.offsetHeight;
      step.style.animation = 'charStepIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards';
    }
  }

  // ── Animated Particles ──
  function startParticles() {
    const container = document.querySelector('.char-custom-particles');
    if (!container) return;
    container.innerHTML = '';
    const theme = getThemeForStory();

    for (let i = 0; i < 40; i++) {
      const dot = document.createElement('div');
      dot.className = 'char-particle';
      const size = Math.random() * 4 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 8;
      const dur = Math.random() * 6 + 6;
      const opacity = Math.random() * 0.4 + 0.1;

      dot.style.cssText = `
        position:absolute;
        width:${size}px; height:${size}px;
        left:${x}%; top:${y}%;
        background:${theme.primary};
        border-radius:50%;
        opacity:${opacity};
        animation: charParticleFloat ${dur}s ease-in-out ${delay}s infinite;
        pointer-events:none;
        box-shadow: 0 0 ${size * 3}px ${theme.glow};
      `;
      container.appendChild(dot);
    }
  }

  function stopParticles() {
    const container = document.querySelector('.char-custom-particles');
    if (container) container.innerHTML = '';
  }

  // ── Build Look Cards ──
  function buildLookCards(gender) {
    const storyData = STORY_LOOKS[currentStoryId];
    if (!storyData) return;

    const looks = storyData[gender];
    const grid = $('char-look-grid');
    grid.innerHTML = '';

    const theme = getThemeForStory();

    looks.forEach((look, i) => {
      const card = document.createElement('div');
      card.className = 'char-look-card';
      card.dataset.lookId = look.id;
      card.style.animationDelay = `${i * 0.15}s`;

      const imgSrc = ASSET + look.img;
      card.innerHTML = `
        <div class="char-look-img-wrap">
          <img class="char-look-img" src="${imgSrc}" alt="${look.name}" 
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
          <div class="char-look-fallback" style="display:none;">
            <span class="char-look-initial">${look.name.charAt(4) || look.name.charAt(0)}</span>
          </div>
          <div class="char-look-select-ring"></div>
          <div class="char-look-shimmer"></div>
        </div>
        <div class="char-look-info">
          <div class="char-look-name">${look.name}</div>
          <div class="char-look-desc">${look.desc}</div>
        </div>
        <div class="char-look-check">✓</div>
      `;

      // Parallax tilt on hover
      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const rotY = ((px - 0.5) * 14).toFixed(2);
        const rotX = ((0.5 - py) * 10).toFixed(2);
        card.style.transform = `perspective(600px) rotateY(${rotY}deg) rotateX(${rotX}deg) translateY(-6px) scale(1.03)`;
        const shimmer = card.querySelector('.char-look-shimmer');
        if (shimmer) {
          shimmer.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,.15), transparent 60%)`;
          shimmer.style.opacity = '1';
        }
      });

      card.addEventListener('pointerleave', () => {
        card.style.transform = '';
        const shimmer = card.querySelector('.char-look-shimmer');
        if (shimmer) shimmer.style.opacity = '0';
      });

      card.addEventListener('click', () => {
        document.querySelectorAll('.char-look-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selectedLook = look;
        $('char-btn-begin').disabled = false;
        $('char-btn-begin').classList.add('ready');

        // Pulse ripple effect on selection
        const ripple = document.createElement('div');
        ripple.className = 'char-select-ripple';
        ripple.style.setProperty('--ripple-color', theme.primary);
        card.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
      });

      grid.appendChild(card);
    });
  }

  // ── Initialize the customization flow ──
  function open(storyId, callback) {
    currentStoryId = storyId;
    onComplete = callback;
    // Pre-fill with existing customization if re-customizing (replay Episode 1)
    const existing = getStoryCustom(storyId);
    selectedName = existing ? existing.name : '';
    selectedGender = existing ? existing.gender : null;
    selectedLook = existing ? existing.look : null;

    const storyData = STORY_LOOKS[storyId];
    if (!storyData) {
      // No customization data for this story, skip
      if (callback) callback({ name: 'Protagonist', gender: 'male', look: null });
      return;
    }

    // Apply theme colors
    applyThemeToModal();

    // Set story-specific text
    $('char-story-kicker').textContent = storyData.kicker;
    $('char-name-desc').textContent = storyData.nameDesc;
    $('char-look-desc').textContent = storyData.lookDesc;

    // Pre-fill UI with existing data (or reset for first-time)
    $('char-name-input').value = selectedName;
    $('char-btn-to-gender').disabled = selectedName.length < 2;
    $('char-btn-begin').disabled = !selectedLook;
    if (selectedLook) $('char-btn-begin').classList.add('ready');
    else $('char-btn-begin').classList.remove('ready');
    document.querySelectorAll('.char-gender-card').forEach(c => {
      c.classList.toggle('selected', c.dataset.gender === selectedGender);
    });

    // Show modal
    const modal = $('char-custom-modal');
    modal.classList.remove('hidden');
    modal.style.animation = 'charFadeIn 0.5s ease forwards';
    showStep('char-step-name');
    startParticles();

    // If re-customizing with existing gender, pre-build look cards
    if (selectedGender) {
      buildLookCards(selectedGender);
      // Pre-select the existing look card if available
      if (selectedLook) {
        setTimeout(() => {
          const lookCard = document.querySelector(`.char-look-card[data-look-id="${selectedLook.id}"]`);
          if (lookCard) lookCard.classList.add('selected');
        }, 100);
      }
    }

    // Set name input underline state
    const nameInput = $('char-name-input');
    const ul = nameInput?.nextElementSibling;
    if (ul) ul.style.transform = selectedName.length > 0 ? 'scaleX(1) translateX(-50%)' : 'scaleX(0) translateX(-50%)';

    // Focus input after animation
    setTimeout(() => $('char-name-input').focus(), 600);
  }

  function close() {
    const modal = $('char-custom-modal');
    modal.style.animation = 'charFadeOut 0.4s ease forwards';
    stopParticles();
    setTimeout(() => {
      modal.classList.add('hidden');
      modal.style.animation = '';
    }, 400);
  }

  function complete() {
    const data = {
      name: selectedName,
      gender: selectedGender,
      look: selectedLook
    };
    setStoryCustom(currentStoryId, data);

    // Victory flash before closing
    const modal = $('char-custom-modal');
    const flash = document.createElement('div');
    flash.className = 'char-complete-flash';
    const theme = getThemeForStory();
    flash.style.setProperty('--flash-color', theme.primary);
    modal.appendChild(flash);

    setTimeout(() => {
      flash.remove();
      close();
      if (onComplete) onComplete(data);
    }, 600);
  }

  // ── Init event listeners ──
  function init() {
    // Name input
    const nameInput = $('char-name-input');
    if (nameInput) {
      nameInput.addEventListener('input', (e) => {
        selectedName = e.target.value.trim();
        $('char-btn-to-gender').disabled = selectedName.length < 2;
        // Underline animation
        const ul = nameInput.nextElementSibling;
        if (ul) ul.style.transform = selectedName.length > 0 ? 'scaleX(1) translateX(-50%)' : 'scaleX(0) translateX(-50%)';
      });
      nameInput.addEventListener('keydown', (e) => {
        // Allow spacebar
        if (e.key === ' ') e.stopPropagation();
        if (e.key === 'Enter' && selectedName.length >= 2) {
          showStep('char-step-gender');
        }
      });
    }

    // Continue to gender
    const btnGender = $('char-btn-to-gender');
    if (btnGender) {
      btnGender.addEventListener('click', () => {
        if (selectedName.length >= 2) {
          showStep('char-step-gender');
          // Blur immediately so browser doesn't auto-focus the first gender button
          setTimeout(() => { if (document.activeElement) document.activeElement.blur(); }, 0);
        }
      });
    }

    // Gender buttons
    document.querySelectorAll('.char-gender-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.char-gender-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selectedGender = card.dataset.gender;

        // Build look cards after short delay for animation
        setTimeout(() => {
          buildLookCards(selectedGender);
          showStep('char-step-look');
        }, 400);
      });
    });

    // Begin story
    const btnBegin = $('char-btn-begin');
    if (btnBegin) {
      btnBegin.addEventListener('click', () => {
        if (selectedLook) complete();
      });
    }

    // Back Button Logic
    const btnBack = $('char-btn-back');
    if (btnBack) {
      btnBack.addEventListener('click', () => {
        const activeStep = document.querySelector('.char-step.active');
        if (!activeStep) return;
        
        if (activeStep.id === 'char-step-look') {
          showStep('char-step-gender');
        } else if (activeStep.id === 'char-step-gender') {
          showStep('char-step-name');
        } else if (activeStep.id === 'char-step-name') {
          // At the first step, return to the main menu
          close();
          if (typeof goHome === 'function') goHome();
        }
      });
    }
  }

  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ── Public API ──
  return {
    open,
    close,
    getStoryCustom,
    setStoryCustom,
    hasCustomization: (storyId) => !!getStoryCustom(storyId),
    getMCName: (storyId) => {
      const c = getStoryCustom(storyId);
      return c ? c.name : null;
    },
    getMCLook: (storyId) => {
      const c = getStoryCustom(storyId);
      return c ? c.look : null;
    },
    getMCGender: (storyId) => {
      const c = getStoryCustom(storyId);
      return c ? c.gender : null;
    },
    STORY_LOOKS
  };
})();
