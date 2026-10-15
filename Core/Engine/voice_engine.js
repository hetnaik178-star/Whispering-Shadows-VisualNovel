/* ════════════════════════════════════════════════════════════
   WHISPERING SHADOWS — Dynamic Voice Engine
   Real-time TTS voiceover using Web Speech API
   Each character gets a unique voice profile (pitch, rate, gender)
   Fully dynamic: works with ANY dialogue text — no static audio files
   ════════════════════════════════════════════════════════════ */

const VOICE_ENGINE = (() => {
  // ── State ──
  let enabled = false;
  let volume = 0.85;
  let voicesReady = false;
  let cachedVoices = [];
  let currentUtterance = null;
  let speakQueue = [];
  let isSpeaking = false;
  let stateHandler = null;

  // ── Storage ──
  const STORAGE_KEY = 'ws_voice_settings';

  // ── Voice Gender Preference ──
  // Keywords used to identify male vs female voices from the browser's voice list
  const FEMALE_VOICE_HINTS = ['female', 'woman', 'zira', 'hazel', 'susan', 'jenny', 'aria',
    'samantha', 'victoria', 'karen', 'fiona', 'moira', 'tessa', 'kate',
    'ava', 'allison', 'emma', 'olivia', 'veena', 'heera', 'google us english'];
  const MALE_VOICE_HINTS = ['male', 'man', 'david', 'mark', 'james', 'daniel', 'george',
    'richard', 'alex', 'fred', 'tom', 'guy', 'rishi', 'google uk english male'];

  // ════════════════════════════════════════════════════════════
  // VOICE PROFILES — per-speaker vocal identity
  // pitch: 0.1 (very deep) to 2 (very high)
  // rate:  0.5 (slow/dramatic) to 1.5 (fast/energetic)
  // gender: 'male' | 'female' | 'any'
  // voiceHint: substring to prefer when matching browser voices
  // ════════════════════════════════════════════════════════════
  const VOICE_PROFILES = {
    // ── Abstract / Meta Speakers ──
    narrator:     { pitch: 1.0,  rate: 0.82, gender: 'male',   voiceHint: 'daniel',    label: 'Narrator' },
    inner:        { pitch: 1.0,  rate: 0.78, gender: 'any',    voiceHint: '',          label: 'Inner Monologue', volumeMod: 0.75 },
    third:        { pitch: 0.95, rate: 0.82, gender: 'male',   voiceHint: 'david',     label: 'Third Person' },
    dramatic:     { pitch: 0.7,  rate: 0.65, gender: 'male',   voiceHint: 'daniel',    label: 'Dramatic' },

    // ── Player MC Voices — driven by G.mcGender at runtime ──
    // These are used whenever the protagonist (MC) speaks or has an inner monologue.
    // engine.js selects 'mc_male' or 'mc_female' based on player's chosen gender.
    mc_male:      { pitch: 0.88, rate: 0.90, gender: 'male',   voiceHint: 'david',     label: 'MC (Male)' },
    mc_female:    { pitch: 1.10, rate: 0.90, gender: 'female', voiceHint: 'zira',      label: 'MC (Female)' },

    // ── Ravencroft Manor (Gothic Horror) ──
    eleanor:      { pitch: 0.88, rate: 0.82, gender: 'female', voiceHint: 'zira',    label: 'Eleanor' },
    aldric:       { pitch: 0.65, rate: 0.72, gender: 'male',   voiceHint: 'david',   label: 'Aldric' },
    grandfather:  { pitch: 0.60, rate: 0.70, gender: 'male',   voiceHint: 'david',   label: 'Grandfather' },
    the_entity:   { pitch: 0.35, rate: 0.60, gender: 'male',   voiceHint: 'daniel',  label: 'The Entity' },

    // ── Neon Requiem (Cyberpunk) ──
    kira:         { pitch: 1.15, rate: 1.02, gender: 'female', voiceHint: 'zira',    label: 'Kira' },
    chen:         { pitch: 0.88, rate: 0.88, gender: 'male',   voiceHint: 'david',   label: 'Chen' },
    ghost:        { pitch: 0.55, rate: 0.75, gender: 'male',   voiceHint: 'mark',    label: 'Ghost' },
    voss:         { pitch: 0.68, rate: 0.82, gender: 'male',   voiceHint: 'david',   label: 'Voss' },
    kai:          { pitch: 0.95, rate: 0.95, gender: 'male',   voiceHint: 'mark',    label: 'Kai' },
    ghost_ceo:    { pitch: 0.50, rate: 0.72, gender: 'male',   voiceHint: 'daniel',  label: 'Ghost CEO' },
    aria:         { pitch: 1.12, rate: 0.92, gender: 'female', voiceHint: 'hazel',   label: 'Aria' },
    raven:        { pitch: 0.92, rate: 0.82, gender: 'female', voiceHint: 'susan',   label: 'Raven' },

    // ── Crimson Tide (Mystery) ──
    mira:         { pitch: 1.0,  rate: 0.92, gender: 'female', voiceHint: 'zira',    label: 'Mira' },
    captain:      { pitch: 0.58, rate: 0.78, gender: 'male',   voiceHint: 'david',   label: 'Captain' },
    elena:        { pitch: 1.10, rate: 0.88, gender: 'female', voiceHint: 'hazel',   label: 'Elena' },
    detective:    { pitch: 0.78, rate: 0.82, gender: 'male',   voiceHint: 'mark',    label: 'Detective' },
    the_confessor:{ pitch: 0.45, rate: 0.65, gender: 'male',   voiceHint: 'daniel',  label: 'The Confessor' },

    // ── Echoes of Eternity (Sci-Fi) ──
    ora:          { pitch: 1.30, rate: 1.08, gender: 'female', voiceHint: 'zira',    label: 'ORA (AI)' },
    zara:         { pitch: 1.05, rate: 0.92, gender: 'female', voiceHint: 'hazel',   label: 'Zara' },
    vance:        { pitch: 0.72, rate: 0.82, gender: 'male',   voiceHint: 'david',   label: 'Vance' },
    captain_voss: { pitch: 0.65, rate: 0.78, gender: 'male',   voiceHint: 'mark',    label: 'Captain Voss' },

    // ── Clockwork Conspiracy (Steampunk) ──
    gear:         { pitch: 0.75, rate: 0.88, gender: 'male',   voiceHint: 'mark',    label: 'Gear' },
    lyra:         { pitch: 1.12, rate: 0.98, gender: 'female', voiceHint: 'zira',    label: 'Lyra' },
    chancellor:   { pitch: 0.55, rate: 0.72, gender: 'male',   voiceHint: 'daniel',  label: 'Chancellor' },

    // ── Sunken Realm (Fantasy) ──
    kael:         { pitch: 0.82, rate: 0.88, gender: 'male',   voiceHint: 'david',   label: 'Kael' },
    aelindra:     { pitch: 1.02, rate: 0.78, gender: 'female', voiceHint: 'hazel',   label: 'Queen Aelindra' },
    queen_aelindra:{ pitch: 1.02, rate: 0.78, gender: 'female', voiceHint: 'hazel',  label: 'Queen Aelindra' },
    thalion:      { pitch: 0.48, rate: 0.72, gender: 'male',   voiceHint: 'daniel',  label: 'King Thalion' },
    king_thalion: { pitch: 0.48, rate: 0.72, gender: 'male',   voiceHint: 'daniel',  label: 'King Thalion' },

    // ── Fractured Minds (Psychological) ──
    elias:        { pitch: 0.92, rate: 0.98, gender: 'male',   voiceHint: 'david',   label: 'Elias' },
    lena:         { pitch: 1.08, rate: 0.88, gender: 'female', voiceHint: 'zira',    label: 'Lena' },
    thorne:       { pitch: 0.68, rate: 0.78, gender: 'male',   voiceHint: 'mark',    label: 'Thorne' },
    the_child:    { pitch: 1.50, rate: 1.08, gender: 'female', voiceHint: 'zira',    label: 'The Child' },
    soldier:      { pitch: 0.60, rate: 0.82, gender: 'male',   voiceHint: 'david',   label: 'Soldier' },
    librarian:    { pitch: 1.18, rate: 0.78, gender: 'female', voiceHint: 'hazel',   label: 'Librarian' },
    judge:        { pitch: 0.48, rate: 0.68, gender: 'male',   voiceHint: 'daniel',  label: 'Judge' },
    sarah:        { pitch: 1.12, rate: 0.82, gender: 'female', voiceHint: 'zira',    label: 'Sarah' },
    sarah_ghost:  { pitch: 1.20, rate: 0.72, gender: 'female', voiceHint: 'hazel',   label: 'Sarah (Ghost)', volumeMod: 0.6 }
  };

  // ── Fallback profile for any unknown speaker ──
  const DEFAULT_PROFILE = { pitch: 1.0, rate: 0.88, gender: 'any', voiceHint: '', label: 'Unknown' };

  // ════════════════════════════════════════════════════════════
  // INITIALIZATION
  // ════════════════════════════════════════════════════════════
  function init() {
    if (!('speechSynthesis' in window)) {
      console.warn('[VoiceEngine] SpeechSynthesis not supported in this browser.');
      return;
    }

    // Load saved settings
    _loadSettings();

    // Voices load asynchronously in most browsers
    const loadVoices = () => {
      cachedVoices = speechSynthesis.getVoices();
      if (cachedVoices.length > 0) {
        voicesReady = true;
        console.log(`[VoiceEngine] ${cachedVoices.length} voices loaded.`);
      }
    };
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
  }

  // ════════════════════════════════════════════════════════════
  // VOICE SELECTION — smart matching based on profile preferences
  // ════════════════════════════════════════════════════════════
  function _selectVoice(profile) {
    if (!voicesReady || cachedVoices.length === 0) return null;

    // Filter to English voices
    const englishVoices = cachedVoices.filter(v =>
      v.lang.startsWith('en')
    );
    const pool = englishVoices.length > 0 ? englishVoices : cachedVoices;

    // 1. Try exact voiceHint match
    if (profile.voiceHint) {
      const hintLower = profile.voiceHint.toLowerCase();
      const hintMatch = pool.find(v => v.name.toLowerCase().includes(hintLower));
      if (hintMatch) return hintMatch;
    }

    // 2. Try gender-based match
    if (profile.gender !== 'any') {
      const hints = profile.gender === 'female' ? FEMALE_VOICE_HINTS : MALE_VOICE_HINTS;
      const genderMatch = pool.find(v => {
        const name = v.name.toLowerCase();
        return hints.some(h => name.includes(h));
      });
      if (genderMatch) return genderMatch;
    }

    // 3. Fallback: first available English voice, or first voice period
    return pool[0] || cachedVoices[0] || null;
  }

  // ════════════════════════════════════════════════════════════
  // SPEAK — the core TTS function
  // ════════════════════════════════════════════════════════════
  function speak(text, speakerId) {
    if (!enabled || !('speechSynthesis' in window)) return;
    if (!text || text.trim().length === 0) return;

    // Stop any currently playing speech
    stop();

    // Clean text — strip rich text tags like {shake}, {glow}, etc.
    const cleanText = _stripRichTags(text);
    if (cleanText.trim().length === 0) return;

    // Get voice profile
    const profile = VOICE_PROFILES[speakerId] || DEFAULT_PROFILE;

    // Create utterance
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.pitch = profile.pitch;
    utterance.rate = profile.rate;
    utterance.volume = volume * (profile.volumeMod || 1.0);

    // Select voice
    const voice = _selectVoice(profile);
    if (voice) utterance.voice = voice;

    // Track state
    utterance.onstart = () => {
      isSpeaking = true;
      if (stateHandler) stateHandler(true);
    };
    utterance.onend = () => {
      isSpeaking = false;
      currentUtterance = null;
      if (stateHandler) stateHandler(false);
    };
    utterance.onerror = () => {
      isSpeaking = false;
      currentUtterance = null;
      if (stateHandler) stateHandler(false);
    };

    currentUtterance = utterance;

    // Chrome workaround: speechSynthesis can stall on long text
    // Split into sentences if text is very long
    if (cleanText.length > 200) {
      _speakChunked(cleanText, profile, voice);
    } else {
      speechSynthesis.speak(utterance);
    }
  }

  // ── Chunked speech for long dialogue ──
  function _speakChunked(text, profile, voice) {
    // Split on sentence boundaries
    const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
    speakQueue = [];

    sentences.forEach((sentence, idx) => {
      const trimmed = sentence.trim();
      if (!trimmed) return;

      const utt = new SpeechSynthesisUtterance(trimmed);
      utt.pitch = profile.pitch;
      utt.rate = profile.rate;
      utt.volume = volume * (profile.volumeMod || 1.0);
      if (voice) utt.voice = voice;

      utt.onend = () => {
        // Speak next chunk
        if (speakQueue.length > 0) {
          const next = speakQueue.shift();
          speechSynthesis.speak(next);
        } else {
          isSpeaking = false;
          currentUtterance = null;
          if (stateHandler) stateHandler(false);
        }
      };

      utt.onerror = () => {
        isSpeaking = false;
        currentUtterance = null;
        speakQueue = [];
        if (stateHandler) stateHandler(false);
      };

      if (idx === 0) {
        utt.onstart = () => {
          isSpeaking = true;
          if (stateHandler) stateHandler(true);
        };
        currentUtterance = utt;
        speechSynthesis.speak(utt);
      } else {
        speakQueue.push(utt);
      }
    });
  }

  // ════════════════════════════════════════════════════════════
  // STOP — immediately cancel all speech
  // ════════════════════════════════════════════════════════════
  function stop() {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
    isSpeaking = false;
    currentUtterance = null;
    speakQueue = [];
    if (stateHandler) stateHandler(false);
  }

  // ════════════════════════════════════════════════════════════
  // TEXT CLEANING — strips rich text formatting tags
  // ════════════════════════════════════════════════════════════
  function _stripRichTags(text) {
    // Remove {tag}...{/tag} wrappers but keep inner text
    let clean = text.replace(/\{\/?\w+\}/g, '');
    // Remove any remaining HTML
    clean = clean.replace(/<[^>]+>/g, '');
    // Normalize whitespace
    clean = clean.replace(/\s+/g, ' ').trim();
    return clean;
  }

  // ════════════════════════════════════════════════════════════
  // SETTINGS PERSISTENCE
  // ════════════════════════════════════════════════════════════
  function _loadSettings() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved) {
        enabled = saved.enabled ?? false;
        volume = saved.volume ?? 0.85;
      }
    } catch (e) { /* ignore */ }
  }

  function _saveSettings() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ enabled, volume }));
    } catch (e) { /* ignore */ }
  }

  // ════════════════════════════════════════════════════════════
  // PUBLIC API
  // ════════════════════════════════════════════════════════════
  function toggle() {
    enabled = !enabled;
    if (!enabled) stop();
    _saveSettings();
    return enabled;
  }

  function setEnabled(val) {
    enabled = !!val;
    if (!enabled) stop();
    _saveSettings();
  }

  function setVolume(val) {
    volume = Math.max(0, Math.min(1, parseFloat(val) || 0));
    _saveSettings();
  }

  function isEnabled() {
    return enabled;
  }

  function getVolume() {
    return volume;
  }

  function isActive() {
    return isSpeaking;
  }

  /**
   * Get or define a voice profile dynamically.
   * Allows adding new speakers at runtime without touching this file.
   */
  function setProfile(speakerId, profileData) {
    VOICE_PROFILES[speakerId] = { ...DEFAULT_PROFILE, ...profileData };
  }

  function getProfile(speakerId) {
    return VOICE_PROFILES[speakerId] || DEFAULT_PROFILE;
  }

  function setStateHandler(handler) {
    stateHandler = typeof handler === 'function' ? handler : null;
  }

  /**
   * Get available voices for debugging / UI
   */
  function getAvailableVoices() {
    return cachedVoices.map(v => ({
      name: v.name,
      lang: v.lang,
      local: v.localService
    }));
  }

  // ── Auto-init on load ──
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return {
    speak,
    stop,
    toggle,
    setEnabled,
    setVolume,
    isEnabled,
    getVolume,
    isActive,
    setProfile,
    getProfile,
    setStateHandler,
    getAvailableVoices,
    VOICE_PROFILES
  };
})();
