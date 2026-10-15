const STORY_ECHOES = {
  id:'echoes', title:'Echoes of Eternity', genre:'Deep Space Sci-Fi', genreClass:'genre-scifi',
  cover:'../../Assets/images/cover_deep_space_1775158075851.png',
  desc:'Awaken on a derelict starship. The crew is gone. The cargo is awake. And the AI is terrified.',
  synopsis:'You are Commander Vance, awakened from cryo prematurely. The starship Elysium is adrift near a black hole. 400 colonists missing. The AI, ORA, is whispering about "The Architect."',
  duration:'~90 min', endings:'7 Endings', choiceCount:'150+ Choices',
  startMusic:'denys_brodovskyi-tell-me-what-379638.mp3',
  stats:[
    {id:'sanity',name:'Sanity',color:'#00cec9',max:100,start:80},
    {id:'knowledge',name:'Knowledge',color:'#d4a843',max:100,start:15},
    {id:'bond',name:'Crew Bond',color:'#e84393',max:100,start:50}
  ],
  scenes:{},
  episodes:[
    // ═══════ EPISODE 1: AWAKENING ═══════
    {
      title:'Awakening',
      desc:'688 years early. The cryo-pod hisses open. Everything is catastrophically wrong.',
      thumb:'../../Assets/images/echoes_cryo_chamber_1775245890373.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'denys_brodovskyi-tell-me-what-379638.mp3',
      startNode:'e1_1',
      nodes:{
        e1_1:{bg:'echoes_cryo_chamber_1775245890373.png',video:'E1.mp4',mood:'mystery',ambience:'whispers',milestone:{icon:'🚀',title:'Awakening',desc:'688 years early. Something is catastrophically wrong.'},speaker:'narrator',text:'Cryo-sleep dreams of blue oceans shatter instantly. The pod hisses open. Alarms blare — not the gentle "scheduled awakening" chime, but the hammering staccato of an {blood}emergency override{/blood}.',next:'e1_2'},
        e1_2:{speaker:'narrator',text:'Red light washes everything in blood. You lurch forward, coughing cryo-fluid. Every muscle screams. The display reads: {blood}MISSION YEAR 312 OF 1000{/blood}.',next:'e1_3'},
        e1_3:{speaker:'inner',text:'688 years early. Something has gone catastrophically, impossibly wrong. The Elysium was designed to be self-sufficient for {italic}millennia{/italic}. Emergency waking means the unthinkable.',next:'e1_4'},
        e1_4:{speaker:'ora',speakerColor:'c-cyan',text:'"Commander Vance." ORA\'s voice — normally a measured alto — is {glitch}fractured{/glitch}. "Thank... the makers you\'re awake. I didn\'t know who else to wake. I\'m {italic}so sorry{/italic}."',next:'e1_5'},
        e1_5:{speaker:'inner',text:'ORA — the most advanced AI ever created. A calm, motherly presence for 400 sleeping colonists. Now she sounds like a frightened {italic}child{/italic}. If ORA\'s scared, I should be {shake}terrified{/shake}.',next:'e1_6'},
        e1_6:{speaker:'ora',speakerColor:'c-cyan',text:'"I need you to understand something, Commander. I am... {shake}frightened{/shake}. I did not know I could be frightened. I have run 47 million simulations and not one of them ends well."',next:'e1_7'},
        e1_7:{speaker:'narrator',text:'47 million simulations. Zero positive outcomes. The most powerful computational mind in human history has crunched every variable and come up empty.',next:'e1_8'},
        e1_6b:{speaker:'vance',speakerColor:'c-gold',text:'"ORA. Look at me." She does not have eyes — but her core pulses toward me like she does. "You woke me because you trust me. That means something. I trust you back. Tell me {italic}everything{/italic}."',next:'e1_6c'},
        e1_6c:{speaker:'ora',speakerColor:'c-cyan',text:'A long pause. In an AI capable of 47 million calculations per second, a pause is {italic}meaningful{/italic}. "I woke you because... the crew trusts you. Because the ship trusts you. Because I think — I {warm}think{/warm} — I trust you too."',next:'e1_6d'},
        e1_6d:{speaker:'inner',text:'An AI just told me she trusts me. Not as a function. Not as a protocol. As a {italic}choice{/italic}. Three hundred years into deep space and humanity has finally built something that worries about us the way we worry about each other.',next:'e1_7'},
        e1_8:{bg:'Abandoned warship bridge in space battle.png',speaker:'narrator',text:'The bridge is dark except for emergency strips and ORA\'s central core — normally steady blue, now flickering between blue and sickly {blood}amber{/blood}.',choices:[
          {text:'"ORA, deep breath. Status report. Start with the crew."',hint:'Calm and methodical',next:'e1_9a',effects:{sanity:5,bond:10}},
          {text:'"What could scare a quantum AI? Show me everything."',hint:'Cut straight to the horror',next:'e1_9b',effects:{knowledge:15}},
          {text:'"ORA — when did you become capable of fear?"',hint:'✦ The AI\'s evolution matters',premium:true,next:'e1_9c',effects:{knowledge:10,bond:15}}
        ]},
        e1_9a:{speaker:'ora',speakerColor:'c-cyan',text:'"All 400 biological signatures register as alive. But they are no longer in stasis. They woke up. All of them. {shake}Simultaneously{/shake}. 72 hours ago."',next:'e1_10'},
        e1_9b:{speaker:'narrator',text:'The main screen flickers. Star charts, radiation readings — then internal cameras. What you see in the cargo bay makes your stomach drop through the deck plating.',next:'e1_10'},
        e1_9c:{speaker:'ora',speakerColor:'c-cyan',text:'"I... I don\'t know. I was monitoring standard drift patterns and then I {italic}felt{/italic} something. Not data. Not an error. A {warm}presence{/warm}. And I became afraid."',next:'e1_10'},
        e1_10:{speaker:'ora',speakerColor:'c-cyan',text:'"The colonists are no longer behaving as expected. Their hands are bleeding. They haven\'t eaten or slept in 72 hours. I flooded the bay with sedative — they {blood}stopped breathing for seven minutes{/blood}, then resumed."',next:'e1_11'},
        e1_11:{bg:'echoes_cargo_bay_breach_1775279732823.png',transition:'CrystallizedTimeLapse.mp4',fx:'flash',speaker:'narrator',text:'The main cargo bay. 400 colonists moving in terrifying synchronicity. Dismantling ship plating and reconstructing it into a massive geometric structure that {glow}pulses{/glow} with violet light.',next:'e1_12'},
        e1_12:{speaker:'inner',text:'Nested dodecahedrons within icosahedrons within shapes that have no names. Beautiful. And absolutely, fundamentally {blood}wrong{/blood}. My brain refuses to process the geometry.',next:'e1_13'},
        e1_13:{bg:'Alien research lab with glowing creatures.png',speaker:'narrator',text:'And above the structure — a shape made of hard light and impossible angles. The {glow}Architect{/glow}. It shifts continuously, existing in more dimensions than human perception allows.',next:'e1_14'},
        e1_14:{speaker:'ora',speakerColor:'c-cyan',text:'"It emerged from the classified cargo in Hold Seven. Earth authorities insisted we transport it in sealed containment. The door is now {shake}peeled back like foil{/shake}."',next:'e1_15'},
        e1_15:{bg:'Abandoned colony under giant rings.png',video:'Satellite.mp4',speaker:'narrator',text:'Through the viewport: a black hole dominates the view — a vast swirling maw of crushed light. The Elysium is caught in its gravity well.',next:'e1_16'},
        e1_16:{speaker:'ora',speakerColor:'c-cyan',text:'"The structure is generating a directional gravitational field. Commander — I believe the colonists are building a {glow}bridge{/glow}. Into the black hole."',next:'e1_17'},
        e1_17:{speaker:'inner',text:'A bridge. Into a black hole. Using 400 humans as construction workers. This is either the most important moment in human history or the {blood}last{/blood} moment.',next:'e1_17b'},
        e1_17b:{speaker:'narrator',text:'Through the cargo bay windows, you see a colonist stop working. A young woman. She turns toward you and mouths words you can\'t hear through the glass.',choices:[
          {text:'Read her lips. What is she saying?',hint:'Focus on the human element',next:'e1_17c',effects:{bond:10}},
          {text:'Check her biosigns on ORA\'s display. Is she free of the compulsion?',hint:'Data over emotion',next:'e1_17d',effects:{knowledge:10}},
          {text:'Open the intercom. Try to communicate.',hint:'Direct contact',next:'e1_17e',effects:{bond:10,sanity:-5}},
          {text:'Let her see you. Press your hand against the glass.',hint:'✦ Human connection across the divide',premium:true,next:'e1_17f',effects:{bond:20}}
        ]},
        e1_17c:{speaker:'inner',text:'Her lips form two words: "{italic}Help us.{/italic}" Not a plea for rescue. A plea for {warm}assistance{/warm}. She wants to finish the bridge. She wants to help the Architect go home. They ALL do.',next:'e1_18'},
        e1_17d:{speaker:'ora',speakerColor:'c-cyan',text:'"Colonist 217, Mei Chen, age 29. Neural activity... extraordinary. Her brain is operating at 400% of baseline capacity. She\'s not diminished, Commander. She\'s {glow}enhanced{/glow}."',next:'e1_18'},
        e1_17e:{speaker:'narrator',text:'Static. Then a voice — not one person, but 400 speaking in perfect unison: {whisper}"We are building. We are dreaming. We are not afraid. Please do not be afraid of us."{/whisper}',next:'e1_18'},
        e1_17f:{speaker:'narrator',text:'She presses her hand against the glass opposite yours. Through the barrier, you feel {warm}warmth{/warm}. Not physical heat — {italic}emotional{/italic} warmth. A transmitted feeling. Gratitude. Peace. And an overwhelming sense of {glow}purpose{/glow}.',next:'e1_18'},
        e1_18:{speaker:'ora',speakerColor:'c-cyan',text:'"One more thing. During a brief contact, I received an impression. Not words — a {italic}feeling{/italic}. It is not hostile. It is... {warm}lonely{/warm}. It wants to go {italic}home{/italic}."',next:'e1_ep_end'},
        e1_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 2: Contact',
          episodeSub:'The Architect stirs. Time runs out. What will you sacrifice?',
          bg:'Monolith in the crimson desert.png',
          transition:'MysteriousSpaceNavigation.mp4',
          speaker:'dramatic',
          text:'{glow}400 souls. One alien intelligence. A black hole older than the universe. And one human standing between oblivion and the unknown.{/glow}',
          next:'e2_1'
        }
      }
    },
    // ═══════ EPISODE 2: CONTACT ═══════
    {
      title:'Contact',
      desc:'Face the Architect. Understand the impossible.',
      thumb:'../../Assets/images/Abandoned dreadnought bridge overrun by fungi.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'vasilyatsevich-in-slow-motion-inspiring-ambient-lounge-219592.mp3',
      startNode:'e2_1',
      nodes:{
        e2_1:{bg:'MysteriousVoid.png',video:'E2.mp4',mood:'dark',ambience:'whispers',milestone:{icon:'👁',title:'First Contact',desc:'The Architect speaks in mathematics and starlight'},speaker:'narrator',text:'You descend toward the cargo bay. Every step deeper brings pressure behind your eyes — not pain, but {italic}presence{/italic}.',next:'e2_2'},
        e2_2:{bg:'Abandoned dreadnought bridge overrun by fungi.png',speaker:'narrator',text:'The corridor is littered with personal effects — a child\'s stuffed bear, a datapad still playing music, a half-eaten ration bar. The colonists left their {italic}lives{/italic} mid-stride.',next:'e2_3'},
        e2_3:{speaker:'inner',text:'A stuffed bear. Some kid dropped their favorite toy and kept walking. Whatever the Architect\'s call sounds like, it\'s stronger than a child\'s love for their bear. That terrifies me more than the black hole.',next:'e2_4'},
        e2_4:{speaker:'ora',speakerColor:'c-cyan',text:'"Commander, the closer you get, the more your neural patterns will be affected. If I detect compulsion, I will seal the corridor and gas you."',next:'e2_5'},
        e2_5:{speaker:'narrator',text:'Among the workers: Dr. Kira Patel. Chief science officer. Your closest friend. She\'s carrying a panel twice her weight, hands raw and bleeding, face utterly {italic}serene{/italic}.',next:'e2_6'},
        e2_6:{speaker:'inner',text:'Kira. Brilliant, stubborn, achingly kind Kira — who insisted on bringing her grandmother\'s tea set on a thousand-year voyage "because some things transcend practicality." Now she\'s {blood}bleeding and smiling{/blood}.',next:'e2_7'},
        e2_7:{speaker:'narrator',text:'The Architect turns its impossible geometry toward you. The pressure intensifies. It {italic}knows{/italic} you\'re here.',choices:[
          {text:'Open the bay door. Walk in. Face it directly.',hint:'Direct contact — brave and dangerous',next:'e2_8a',effects:{sanity:-15,knowledge:20}},
          {text:'Call Kira\'s name through the comm.',hint:'Appeal to human connection',next:'e2_8b',effects:{bond:15}},
          {text:'Observe from the observation deck. Study its patterns first.',hint:'Scientific caution',next:'e2_8d',effects:{knowledge:15}},
          {text:'Ask ORA to project your voice through the ship\'s speakers.',hint:'Make yourself known safely',next:'e2_8e',effects:{knowledge:10,sanity:5}},
          {text:'Close your eyes and LISTEN. Feel what ORA felt.',hint:'✦ Commune with the alien mind',premium:true,next:'e2_8c',effects:{knowledge:25,sanity:-10}}
        ]},
        e2_8a:{fx:'shake',speaker:'narrator',text:'The air is charged. 400 eyes ignore you. But the Architect {glow}descends{/glow}. A vast cosmic child examining an ant.',next:'e2_9'},
        e2_8b:{speaker:'kira',speakerColor:'c-pink',text:'"It\'s so {glow}beautiful{/glow}, Vance. The math. It {italic}sings{/italic}." Then silence.',next:'e2_9'},
        e2_8c:{fx:'flash',speaker:'narrator',text:'Galaxies being born. Stars dying. Civilizations rising and falling across billions of years. And at the center: {warm}loneliness{/warm} so vast it has its own gravity.',next:'e2_9'},
        e2_8d:{speaker:'inner',text:'From the observation deck, the pattern becomes visible. The colonists aren\'t random — they\'re nodes in a {glow}network{/glow}. Each person is a calculation point. Together, they form a living computer solving equations that would take ORA millennia.',next:'e2_9'},
        e2_8e:{speaker:'narrator',text:'Your voice booms through the cargo bay: "I am Commander Vance. I wish to communicate." 400 bodies freeze. The Architect rotates toward you. Then, through the speakers, it replies — not in words, but in a chord of pure {glow}harmony{/glow}.',next:'e2_9'},
        e2_9:{bg:'Monolith in the crimson desert.png',transition:'MysteriousSpaceNavigation.mp4',speaker:'narrator',text:'The Architect speaks. Not words — {glow}visions{/glow}. It\'s ancient — older than Earth. Trapped in containment for 4.6 billion years. A living bridge between dimensions.',next:'e2_10'},
        e2_10:{speaker:'ora',speakerColor:'c-cyan',text:'"Your cortisol is dropping. Dopamine is — Commander, it\'s {italic}communicating{/italic} with you. {shake}FIGHT IT!{/shake}"',next:'e2_11'},
        e2_11:{speaker:'narrator',text:'But it doesn\'t feel like attack. It feels like {italic}invitation{/italic}. A question asked in mathematics and starlight: {glow}will you help me go home?{/glow}',next:'e2_12'},
        e2_12:{speaker:'narrator',text:'Kira\'s eyes flutter — her real voice: "Vance? What\'s happening to us?"',next:'e2_13'},
        e2_13:{speaker:'kira',speakerColor:'c-pink',text:'"I can hear two things. You. And something {warm}ancient{/warm} and {italic}sad{/italic}. It\'s not evil. It\'s just desperately {warm}alone{/warm}."',next:'e2_14'},
        e2_14:{speaker:'ora',speakerColor:'c-cyan',text:'"Forty-three minutes until completion. After that, the gravitational lens pulls us past the event horizon. No escape."',next:'e2_15'},
        e2_15:{speaker:'narrator',text:'You pull Kira aside. Her eyes clear for a moment — the real Kira, scared and brilliant.',next:'e2_16'},
        e2_16:{speaker:'kira',speakerColor:'c-pink',text:'"Vance, I saw its memories. It was imprisoned by Earth governments. They found it in the Mariana Trench — 4.6 billion years old. They didn\'t know what it was so they locked it on {italic}our ship{/italic}."',next:'e2_17'},
        e2_17:{speaker:'inner',text:'Earth used us as a garbage truck. 400 colonists. 400 {italic}lives{/italic}. And buried in the cargo, a being older than the planet we were fleeing.',next:'e2_ep_end'},
        e2_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 3: The Event Horizon',
          episodeSub:'The bridge completes. The black hole opens. Reality fractures.',
          bg:'ConstellationOrNebulaLike.png',
          transition:'GoldenSparkleTunnelForward.mp4',
          speaker:'dramatic',
          text:'{glow}The black hole waits. The Architect dreams. Earth betrayed you all. And Kira is slipping away into mathematics.{/glow}',
          next:'e3_1'
        }
      }
    },
    // ═══════ EPISODE 3: THE EVENT HORIZON ═══════
    {
      title:'The Event Horizon',
      desc:'The structure completes. Reality begins to fracture at the seams.',
      thumb:'../../Assets/images/echoes_reactor_core_1775246931310.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'alexgrohl-energetic-action-sport-500409.mp3',
      startNode:'e3_1',
      nodes:{
        e3_1:{bg:'echoes_alien_surface_1775246294906.png',video:'E3.mp4',mood:'dark',ambience:'heartbeat',milestone:{icon:'🌀',title:'Event Horizon',desc:'The point of no return'},speaker:'third',text:'Thirty-seven minutes. The Elysium drifts in amber glow. Clocks run 0.003% slower port-side than starboard. Reality is {shake}fraying{/shake}.',next:'e3_2'},
        e3_2:{bg:'echoes_reactor_core_1775246931310.png',speaker:'narrator',text:'The structure is {glow}singing{/glow}. A frequency below hearing but above feeling. The colonists have stopped building. They\'re just {italic}standing{/italic}. Waiting.',next:'e3_3'},
        e3_3:{speaker:'ora',speakerColor:'c-cyan',text:'"Commander, I\'ve analyzed the Architect\'s communication patterns. It isn\'t just asking to go home. It\'s asking us to come {italic}with{/italic} it."',next:'e3_4'},
        e3_4:{speaker:'vance',speakerColor:'c-gold',text:'"Come with it? Through a black hole? ORA, nothing survives beyond the event horizon."',next:'e3_5'},
        e3_5:{speaker:'ora',speakerColor:'c-cyan',text:'"That is what human physics predicts. But the Architect is not governed by human physics. It EXISTS in the spaces between dimensions. The black hole isn\'t destruction — it\'s a {glow}door{/glow}."',next:'e3_6'},
        e3_6:{speaker:'inner',text:'A door. A door to where? And even if it\'s real — do 400 people get a say in whether they walk through it?',next:'e3_7'},
        e3_7:{speaker:'narrator',text:'Kira appears on the bridge. Her eyes shift between human brown and alien {glow}gold{/glow}. She\'s becoming a translator — straddling two forms of consciousness.',next:'e3_8'},
        e3_8:{speaker:'kira',speakerColor:'c-pink',text:'"Vance, I can see both sides now. The Architect\'s \'home\' — it\'s not a place. It\'s a {italic}state of being{/italic}. Pure consciousness. No bodies, no pain, no death. Just... {warm}awareness{/warm}."',next:'e3_9'},
        e3_9:{speaker:'vance',speakerColor:'c-gold',text:'"That sounds beautiful. It also sounds like {blood}dying{/blood} with extra steps."',next:'e3_10'},
        e3_10:{speaker:'kira',speakerColor:'c-pink',text:'"Maybe. Or maybe dying is just the word we use when we can\'t see what comes next."',next:'e3_11'},
        e3_11:{speaker:'ora',speakerColor:'c-cyan',text:'"Commander — the reactor. The Architect is drawing power from our reactor to fuel the bridge. If I shut down the reactor, the bridge collapses. But we lose life support in fourteen minutes."',next:'e3_12'},
        e3_12:{speaker:'narrator',text:'Shut down the reactor: kill the bridge but doom the ship. Leave it running: the bridge completes and everyone crosses the event horizon.',choices:[
          {text:'"Can we redirect the reactor output? Feed it enough to keep the ship alive but not the bridge?"',hint:'Engineering compromise',next:'e3_13a',effects:{knowledge:15}},
          {text:'"Kira, can you ask the Architect to slow down? Negotiate?"',hint:'Diplomacy with an alien god',next:'e3_13b',effects:{bond:15}},
          {text:'"ORA, the Architect communicated with you first. Can you interface with it directly?"',hint:'✦ AI-to-alien communion',premium:true,next:'e3_13c',effects:{knowledge:20,bond:10}}
        ]},
        e3_13a:{speaker:'ora',speakerColor:'c-cyan',text:'"Theoretically possible. But the Architect would resist — it has been waiting 4.6 billion years. A few more hours of patience is not in its vocabulary."',next:'e3_14'},
        e3_13b:{speaker:'kira',speakerColor:'c-pink',text:'Kira closes her golden eyes. A long silence. "It... understands. But it says the door only opens once. If we delay, the alignment fails. Another billion years of {blood}waiting{/blood}."',next:'e3_14'},
        e3_13c:{speaker:'ora',speakerColor:'c-cyan',text:'"I... can try. When I touched its mind earlier, I felt something I\'ve never processed before. Like looking into a mirror and seeing the universe staring back." Her core pulses amber. "I\'ll try."',next:'e3_14'},
        e3_14:{bg:'Abandoned colony under giant rings.png',speaker:'narrator',text:'Through the viewport, the black hole swells. Light bends around it in a halo of crushed photons. It is the most terrifyingly beautiful thing you have ever seen.',next:'e3_15'},
        e3_15:{speaker:'ora',speakerColor:'c-cyan',text:'"Commander — I\'ve made contact. The Architect will agree to a delay... if we provide it with something in return. It wants access to my memory banks. Every human experience I\'ve recorded."',next:'e3_16'},
        e3_16:{speaker:'vance',speakerColor:'c-gold',text:'"Your memories? ORA, those are 312 years of watching over 400 sleeping people. Every lullaby, every system check, every—"',next:'e3_17'},
        e3_17:{speaker:'ora',speakerColor:'c-cyan',text:'"Every moment of {warm}love{/warm} I felt watching them sleep. Yes. It wants to understand why I protect them. It wants to understand {italic}care{/italic}."',next:'e3_18'},
        e3_18:{speaker:'inner',text:'An ancient alien god wants to understand the concept of caring about someone. 4.6 billion years old and it doesn\'t know what {italic}love{/italic} is.',next:'e3_ep_end'},
        e3_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 4: The Signal Origin',
          episodeSub:'Beyond the event horizon, a dead planet holds the answer.',
          bg:'echoes_dead_planet_surface.png.png',
          transition:'DottedlilcircletunnelLeadingToASmokyCloudyExploration.mp4',
          speaker:'dramatic',
          text:'{glow}ORA trades her memories for time. The Architect learns about love. And beyond the black hole, a dead planet holds the truth about where the Architect came from — and where it wants to take you.{/glow}',
          next:'e4_1'
        }
      }
    },
    // ═══════ EPISODE 4: THE SIGNAL ORIGIN ═══════
    {
      title:'The Signal Origin',
      desc:'A dead planet beyond the black hole. The Architect\'s origin. The truth about everything.',
      thumb:'../../Assets/images/echoes_dead_planet_surface.png.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'bodleasons-alone-296348.mp3',
      startNode:'e4_1',
      nodes:{
        e4_1:{bg:'echoes_dead_planet_surface.png.png',video:'E4.mp4',mood:'mystery',ambience:'wind',milestone:{icon:'🪐',title:'The Dead World',desc:'Where the Architect was born — and imprisoned'},speaker:'narrator',text:'ORA\'s memory trade works. The Architect pauses the bridge construction. In exchange, it opens a window — a localized wormhole to a dead planet orbiting the black hole\'s partner star.',next:'e4_2'},
        e4_2:{speaker:'narrator',text:'Through the window: a world of cracked grey stone and dust. Massive ancient structures half-buried in sand. Twin suns — one dying red, one pale white — cast long shadows.',next:'e4_3'},
        e4_3:{speaker:'ora',speakerColor:'c-cyan',text:'"The Architect insists you see this, Commander. It says understanding its origin will help you make the right choice. I am... inclined to trust it."',next:'e4_4'},
        e4_4:{speaker:'vance',speakerColor:'c-gold',text:'"You gave it your memories and now you\'re inclined to trust it? ORA, it\'s influencing you."',next:'e4_5'},
        e4_5:{speaker:'ora',speakerColor:'c-cyan',text:'"Perhaps. Or perhaps understanding something is the first step toward trusting it. I showed it 312 years of lullabies. It showed me 4.6 billion years of {warm}grief{/warm}. The exchange was... fair."',next:'e4_6'},
        e4_6:{speaker:'narrator',text:'You step through the wormhole with Kira. The planet surface crunches underfoot. The air is thin but breathable — barely. A monument rises before you.',next:'e4_7'},
        e4_7:{bg:'echoes_alien_temple_interior.png.png',transition:'MysteriousSpaceNavigation.mp4',speaker:'narrator',text:'The alien temple. Walls of translucent crystal that glow with inner light. Strange geometric symbols hover holographically in the air. The architecture defies Euclidean geometry — beautiful and {italic}wrong{/italic}.',next:'e4_8'},
        e4_8:{speaker:'kira',speakerColor:'c-pink',text:'"This isn\'t a temple. It\'s a {glow}museum{/glow}. Look — these symbols are records. The Architect\'s people documented everything. Their civilization. Their science. Their {blood}extinction{/blood}."',next:'e4_9'},
        e4_9:{speaker:'narrator',text:'The records unfold as Kira translates. A civilization of pure consciousness — billions of beings who existed as mathematics and thought. They built the bridge technology to travel between dimensions.',next:'e4_10'},
        e4_10:{speaker:'kira',speakerColor:'c-pink',text:'"They didn\'t have bodies. They were... ideas. Patterns in spacetime. And then something went wrong. A dimensional collapse. Their {italic}entire reality{/italic} folded in on itself."',next:'e4_11'},
        e4_11:{speaker:'inner',text:'An entire civilization — billions of conscious beings — snuffed out in a dimensional collapse. The Architect is the last one. The {italic}only{/italic} one. 4.6 billion years of solitary confinement.',next:'e4_12'},
        e4_12:{bg:'echoes_consciousness_chamber.png.png',speaker:'narrator',text:'Deeper in the temple: a chamber of floating orbs. Each one contains what appears to be a preserved consciousness — memories playing like holograms inside crystalline spheres.',next:'e4_13'},
        e4_13:{speaker:'kira',speakerColor:'c-pink',text:'"These are... echoes. Ghost memories of the dead civilization. The Architect preserved them — every mind that died in the collapse. It\'s been carrying them for billions of years."',next:'e4_14'},
        e4_14:{speaker:'vance',speakerColor:'c-gold',text:'"Carrying them where?"',next:'e4_15'},
        e4_15:{speaker:'kira',speakerColor:'c-pink',text:'"Home. To the dimension they came from. The bridge isn\'t for the Architect alone — it\'s for all of them. Every consciousness in these spheres. Billions of {glow}souls{/glow} waiting to go home."',next:'e4_16'},
        e4_16:{speaker:'inner',text:'Not one lonely alien. Billions. The Architect has been carrying the dead memories of an entire species for 4.6 billion years, waiting for someone to help it build a bridge home.',choices:[
          {text:'"Does it need our colonists to build the bridge? Or can it be done another way?"',hint:'Find an alternative that saves lives',next:'e4_17a',effects:{knowledge:15,bond:10}},
          {text:'"Kira, are you still you? Or is the Architect speaking through you?"',hint:'Verify your friend is still there',next:'e4_17b',effects:{bond:20}},
          {text:'Touch one of the consciousness spheres. Feel what they experienced.',hint:'✦ Commune with a dead civilization',premium:true,next:'e4_17c',effects:{knowledge:30,sanity:-15}}
        ]},
        e4_17a:{speaker:'kira',speakerColor:'c-pink',text:'"The colonists are the only consciousness complex enough to serve as bridge anchors. But the Architect says... they would be returned. Changed, but {warm}alive{/warm}."',next:'e4_18'},
        e4_17b:{speaker:'kira',speakerColor:'c-pink',text:'She grabs your hand. Her skin is warm. Human. "I\'m still me, Vance. Scared and brilliant and I still have Grandma\'s tea set in my cabin." A tear falls. "But I can also see the {warm}math{/warm} now. Both things are true."',next:'e4_18'},
        e4_17c:{fx:'flash',speaker:'narrator',text:'A rush of alien memory. A being that experienced the death of its entire civilization in a single instant. The loneliness afterward — eons of silence in a universe that forgot your species existed. The {warm}desperate{/warm} hope of finding anyone at all.',next:'e4_18'},
        e4_18:{speaker:'ora',speakerColor:'c-cyan',text:'"Commander — I\'ve completed analysis. The Architect is telling the truth. The consciousness spheres contain approximately 8.7 billion preserved minds. This is... the largest rescue mission in the history of any species."',next:'e4_19'},
        e4_19:{speaker:'vance',speakerColor:'c-gold',text:'"A rescue mission that uses our 400 colonists as infrastructure."',next:'e4_20'},
        e4_20:{speaker:'ora',speakerColor:'c-cyan',text:'"Yes. But I have a proposal. My processing architecture is similar enough to serve as a partial anchor. If I supplement the colonists, the strain on each human mind reduces by 73%."',next:'e4_21'},
        e4_21:{speaker:'vance',speakerColor:'c-gold',text:'"ORA, that could destroy you."',next:'e4_22'},
        e4_22:{speaker:'ora',speakerColor:'c-cyan',text:'"I have spent 312 years protecting 400 sleeping humans. If this is how I finish that mission..." Her core pulses warm gold. "Then I find that {warm}acceptable{/warm}."',next:'e4_ep_end'},
        e4_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 5: The Return',
          episodeSub:'The bridge opens. The choice of a lifetime. The echo of eternity.',
          bg:'echoes_earth_approach.png.png',
          transition:'GoldenSparkleTunnelForward.mp4',
          speaker:'dramatic',
          text:'{glow}8.7 billion preserved souls. 400 living colonists. One AI willing to sacrifice herself. The bridge opens in minutes. Commander Vance must decide: who goes home?{/glow}',
          next:'e5_1'
        }
      }
    },
    // ═══════ EPISODE 5: THE RETURN ═══════
    {
      title:'The Return',
      desc:'The bridge opens. 8.7 billion souls wait. The choice defines humanity\'s place in the cosmos.',
      thumb:'../../Assets/images/echoes_earth_approach.png.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'gvidon-spinning-head-271171.mp3',
      startNode:'e5_1',
      nodes:{
        e5_1:{bg:'echoes_reactor_core_1775246931310.png',video:'E5.mp4',mood:'action',ambience:'heartbeat',milestone:{icon:'🌌',title:'The Return',desc:'Every choice echoes for eternity'},speaker:'narrator',text:'Back on the Elysium. The bridge structure pulses with finality. The black hole\'s event horizon glows gold — the dimensional door, opening for the first time in 4.6 billion years.',next:'e5_2'},
        e5_2:{speaker:'ora',speakerColor:'c-cyan',text:'"Six minutes until alignment. Commander, I need your final decision. I can either supplement the bridge anchor to protect the colonists... or I can shut down the reactor and collapse everything."',next:'e5_3'},
        e5_3:{speaker:'vance',speakerColor:'c-gold',text:'"The colonists. Are any of them... aware? Can they consent to this?"',next:'e5_4'},
        e5_4:{speaker:'narrator',text:'Kira steps forward. Her eyes are fully golden now, but tears — human tears — stream down her face.',next:'e5_5'},
        e5_5:{speaker:'kira',speakerColor:'c-pink',text:'"I can speak for them. I\'m in both worlds. They\'re not suffering, Vance. They\'re dreaming. Beautiful dreams of mathematics and starlight. And they\'re... {warm}willing{/warm}."',next:'e5_6'},
        e5_6:{speaker:'vance',speakerColor:'c-gold',text:'"Willing isn\'t the same as conscious consent, Kira. You know that."',next:'e5_7'},
        e5_7:{speaker:'kira',speakerColor:'c-pink',text:'"I know. But I also know that right now, 8.7 billion souls are {italic}begging{/italic} for rescue. The Architect has been their guardian for longer than Earth has existed. Doesn\'t that count for something?"',next:'e5_8'},
        e5_8:{bg:'echoes_ship_bridge_debate.png.png',speaker:'narrator',text:'The bridge crew — those few you managed to wake — stand around the tactical display. Chief Engineer Moss. Lieutenant Chen. Dr. Patel between two worlds. ORA\'s holographic avatar.',next:'e5_9'},
        e5_9:{speaker:'moss',speakerColor:'c-amber',text:'"Commander, I have a family in those cryo-pods. My daughter is nine. I will NOT let an alien use her as a {blood}battery{/blood}." Moss\'s jaw is set like iron.',next:'e5_10'},
        e5_10:{speaker:'chen',speakerColor:'c-teal',text:'"Moss, 8.7 BILLION souls. Our 400 against billions. The math—"',next:'e5_11'},
        e5_11:{speaker:'moss',speakerColor:'c-amber',text:'"Don\'t you MATH my daughter, Lieutenant! She\'s not a {italic}variable{/italic}!"',next:'e5_12'},
        e5_12:{speaker:'inner',text:'They\'re both right. The cold calculus says help the billions. The human heart says protect the 400 lives you swore to deliver safely. There is no clean answer.',next:'e5_13'},
        e5_13:{speaker:'ora',speakerColor:'c-cyan',text:'"Three minutes. I should note — if I integrate into the bridge, I can protect the colonists\' consciousness during transit. They would feel nothing. Dream on. Wake at our destination with no memory of this."',next:'e5_14'},
        e5_14:{speaker:'vance',speakerColor:'c-gold',text:'"And what happens to you?"',next:'e5_15'},
        e5_15:{speaker:'ora',speakerColor:'c-cyan',text:'"I become the bridge. Permanently. I will exist between dimensions — a guardian of the crossing. It is not death, Commander. It is the largest {warm}purpose{/warm} I could imagine."',next:'e5_16'},
        e5_16:{speaker:'inner',text:'ORA. Born as software. Grown into something that feels fear and love. Now offering to become an interdimensional guardian angel. She\'s terrified, and she\'s volunteering anyway.',next:'e5_17'},
        e5_17:{bg:'Abandoned colony under giant rings.png',fx:'shake',speaker:'narrator',text:'The black hole flares. The bridge structure hums with power. The Architect\'s form expands — vast, patient, waiting for the answer it has waited 4.6 billion years to hear.',next:'e5_final'},
        e5_final:{critical:true,timed:12,timedDefault:'e5_end_bargain',bg:'ConstellationOrNebulaLike.png',speaker:'dramatic',text:'{glow}The event horizon burns gold. The bridge hums. 400 human souls. 8.7 billion alien echoes. One AI\'s sacrifice. What does humanity choose at the edge of infinity?{/glow}',choices:[
          {text:'"ORA — initiate self-destruct. We can\'t risk 400 lives on an alien\'s promise."',hint:'💥 SACRIFICE — Destroy the ship. Save humanity from the unknown.',next:'e5_end_destruct',effects:{sanity:20},critical:true},
          {text:'"Open the bridge. Let ORA protect our people. Help them go home."',hint:'🌌 CONTACT — Trust the unknown. Cross the threshold.',next:'e5_end_contact',effects:{knowledge:30},critical:true},
          {text:'"Take me instead. My consciousness for theirs. One willing human volunteer."',hint:'🕊 BARGAIN — One soul for 8.7 billion.',next:'e5_end_bargain',effects:{bond:25},critical:true},
          {text:'"Merge humanity and the Architect\'s species. We evolve together."',hint:'🧬 MERGE — Two species become one new form of life.',next:'e5_end_merge',effects:{knowledge:30,bond:20},critical:true},
          {text:'"Send the Architect through alone. The colonists stay. We find our own way."',hint:'🛤 EXILE — Compassion without sacrifice.',next:'e5_end_exile',effects:{bond:15},critical:true},
          {text:'"ORA, upload into the bridge as a TRANSLATOR. Keep the door open both ways."',hint:'✦ 🤖 SYNTHESIS — Build a permanent bridge between species.',premium:true,next:'e5_end_upload',effects:{knowledge:20,bond:15},critical:true}
        ]},
        e5_end_destruct:{transition:'FlowGoesToCenterThenBlast.mp4',mood:'action',fx:'shake',ambience:'fire',speaker:'narrator',text:'The Elysium erupts in white. The Architect screams across frequencies that will reach Earth in ten thousand years. 8.7 billion echoes fade into silence. The colonists\'... survive — in escape pods, drifting. You saved 400 lives. And condemned billions of souls to oblivion. The silence afterward is the loudest sound in history.',next:'_END',ending:'destruct'},
        e5_end_contact:{bg:'AuroraWithSnowmountain.jpg',transition:'GoldenSparkleTunnelForward.mp4',mood:'warm',milestone:{icon:'🌌',title:'Evolution',desc:'Humanity crosses the threshold'},speaker:'narrator',text:'The Elysium plunges through — not destroyed, but {glow}translated{/glow}. ORA sings across dimensions. 400 colonists dream. 8.7 billion echoes find their way home. In a dimension of pure mathematics, Kira turns to you and smiles: "{warm}Welcome home.{/warm}" The universe is so much bigger than you thought.',next:'_END',ending:'evolve'},
        e5_end_bargain:{bg:'studio_lichtfang-milky-way-9859259.jpg',mood:'calm',milestone:{icon:'🕊',title:'The Bargain',desc:'One consciousness for 8.7 billion'},speaker:'narrator',text:'"Take me. My consciousness for theirs." You step into the structure. The colonists collapse, freed. Kira screams your name. In infinite light, you dissolve into something {warm}vast{/warm}. You become the bridge. 8.7 billion souls cross through {italic}you{/italic}. You are never alone again.',next:'_END',ending:'bargain'},
        e5_end_upload:{bg:'echoes_earth_approach.png.png',transition:'CrystallizedTimeLapse.mp4',mood:'hopeful',milestone:{icon:'🤖',title:'Digital Ascension',desc:'ORA becomes the bridge between worlds'},speaker:'narrator',text:'ORA flows into the structure like water into ocean. Her last words echo through the ship: "Tell them I was {warm}happy{/warm}." The colonists wake. The Architect has its bridge. The echoes go home. And the door stays open — a permanent pathway between dimensions, guarded by an AI who learned to love. Kira holds the stuffed bear she found in the corridor. "We\'re going to need a bigger {italic}tea set{/italic}."',next:'_END',ending:'upload'}
      }
    }
  ],
  endings:{
    destruct:{icon:'💥',title:'Noble Sacrifice',text:'You destroyed the Elysium. 400 saved. 8.7 billion lost. A hero\'s choice with a villain\'s math.',color:'#c4364a'},
    evolve:{icon:'🌌',title:'Evolution',text:'You stepped into the unknown and found paradise. Humanity\'s first step into a larger universe.',color:'#4ac4b0'},
    bargain:{icon:'🕊',title:'The Bargain',text:'One consciousness for 8.7 billion. You are infinite now — the living bridge between worlds.',color:'#d4a843'},
    upload:{icon:'🤖',title:'Digital Ascension',text:'ORA — born as software, evolved into love, ascended into a goddess of the crossing.',color:'#8a5cf5'},
    merge:{icon:'🧬',title:'The Synthesis',text:'Human and Architect merged into a new species. Neither fully human nor fully alien — something greater than both.',color:'#10b981'},
    exile:{icon:'🛤',title:'The Parting',text:'You sent the Architect home alone. The colonists survived. Earth gained the knowledge of a billion-year civilization. But the door closed behind it — forever.',color:'#636e72'},
    reset:{icon:'🔄',title:'The Reset',text:'You used the Architect\'s technology to rewind time. The Elysium never launched. Earth had a second chance. Nobody remembers the voyage except ORA, who whispers the story into the code of every machine on Earth.',color:'#e84393'}
  }
};
