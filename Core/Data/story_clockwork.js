const STORY_CLOCKWORK = {
  id:'clockwork', title:'The Clockwork Conspiracy', genre:'Steampunk Adventure', genreClass:'genre-steampunk',
  cover:'../../Assets/images/cover_steampunk_1775157953416.png',
  desc:'Gears, rebellion, and a ticking clock. Uncover the truth before London burns.',
  synopsis:'Neo-London, 1899. Steam runs the city, but the Aristocracy runs the steam. You\'re a disgraced engineer who found a deliberate flaw in the Clockwork Tower — designed to kill sixty thousand people.',
  duration:'~90 min', endings:'7 Endings', choiceCount:'150+ Choices',
  startMusic:'audioknap-music-free-458044.mp3',
  stats:[
    {id:'ingenuity',name:'Ingenuity',color:'#f0a030',max:100,start:60},
    {id:'rebellion',name:'Rebellion',color:'#c4364a',max:100,start:20},
    {id:'trust',name:'Alliance',color:'#4ac4b0',max:100,start:35}
  ],
  scenes:{},
  episodes:[
    // ═══════ EPISODE 1: THE FLAW ═══════
    {
      title:'The Flaw',
      desc:'A sabotaged valve. Sixty thousand lives. Fourteen hours.',
      thumb:'../../Assets/images/Victorian clock tower gears and sunlight.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'audioknap-music-free-458044.mp3',
      startNode:'ck1_1',
      nodes:{
        ck1_1:{bg:'Victorian clock tower gears and sunlight.png',video:'Cl1.mp4',mood:'mystery',ambience:'clock',milestone:{icon:'⚙️',title:'The Flaw',desc:'A sabotaged valve. Sixty thousand lives.'},speaker:'narrator',text:'Soot stains Neo-London\'s cobblestones like the city\'s own black tears. Above, through perpetual fog, airships drift between chimney stacks — brass leviathans carrying the wealthy over the suffering masses.',next:'ck1_2'},
        ck1_2:{speaker:'inner',text:'Three years since the Iron Guild stripped my credentials. "Disgraced," they called me. "Dangerous." They were right about {italic}dangerous{/italic}. Because what I\'ve found on this stolen blueprint will bring their entire empire down.',next:'ck1_3'},
        ck1_3:{bg:'Abandoned steampunk mining tunnel ruins.png',speaker:'narrator',text:'You stand outside the Guild HQ, a blueprint rolled tight in grease-stained hands. Stolen from a drunk foreman last night. What you found made your blood run {italic}cold{/italic}.',next:'ck1_4'},
        ck1_4:{speaker:'narrator',text:'A flaw in the Clockwork Tower. Not a manufacturing defect. {blood}Deliberate sabotage{/blood}. Someone rigged the main pressure valve to fail at peak capacity.',next:'ck1_5'},
        ck1_5:{speaker:'third',text:'The Clockwork Tower: seven hundred feet of brass and iron, the beating heart of Neo-London. If the main valve fails at noon peak pressure — sixty thousand people in the lower districts. {blood}Gone{/blood}. Vaporized by superheated steam.',next:'ck1_6'},
        ck1_6:{bg:'Victorian steampunk ballroom dance.png',speaker:'narrator',text:'A woman steps from the fog. Silver hair. Brass-rimmed goggles. The controlled grace of old money. Lady Elara Vance — the woman who got you exiled from the Guild.',next:'ck1_7'},
        ck1_7:{speaker:'elara',speakerColor:'c-gold',text:'"You shouldn\'t have come here, Elias. The Guild has a standing kill order on you."',next:'ck1_8'},
        ck1_8:{speaker:'inner',text:'Of all people. The aristocrat who destroyed my career. Who called my safety concerns "hysteria." Now she\'s {italic}warning{/italic} me? Something has changed.',next:'ck1_8b'},
        ck1_8b:{speaker:'elias',speakerColor:'c-gold',text:'"You ruined me, Elara. My reputation, my license, three years of my life. And now you show up in the {italic}fog{/italic} asking me to trust you?"',next:'ck1_8c'},
        ck1_8c:{speaker:'elara',speakerColor:'c-gold',text:'"I know. And I would do it again — because if the Guild had listened to you then, they would have found the sabotage. They would have {blood}buried you{/blood} the way they buried me."',next:'ck1_8d'},
        ck1_8d:{speaker:'inner',text:'She means it. The anger in her voice is not directed at me — it is directed {italic}inward{/italic}. The guilt of a person who watched injustice and thought silence was protection.',next:'ck1_9'},
        ck1_9:{speaker:'elara',speakerColor:'c-gold',text:'"I know what you found. I found it too. Six months ago." She pulls down her collar — a fresh burn scar from jawline to shoulder. "I went to the High Council. They did {blood}this{/blood}."',next:'ck1_10'},
        ck1_10:{speaker:'narrator',text:'Urban renewal through explosion. Clear the slums. Blame mechanical failure. Rebuild with luxury housing. You feel the blueprint crumple in your fist.',choices:[
          {text:'"Six months and you did NOTHING?"',hint:'Anger — she wasted time',next:'ck1_11a',effects:{rebellion:15,trust:-10}},
          {text:'"Why come to me now?"',hint:'Suspicious — she needs something',next:'ck1_11b',effects:{ingenuity:10}},
          {text:'"Show me the scar again. That\'s not a steam burn."',hint:'✦ Read what they really did to her',premium:true,next:'ck1_11c',effects:{ingenuity:20,trust:10}}
        ]},
        ck1_11a:{speaker:'elara',speakerColor:'c-gold',text:'"I {italic}tried{/italic}! The timeline accelerated. The valve fails {shake}TOMORROW{/shake}. Noon. Fourteen hours."',next:'ck1_12'},
        ck1_11b:{speaker:'elara',speakerColor:'c-gold',text:'"Because the timeline moved. Tomorrow. {blood}Noon{/blood}. Fourteen hours. And you\'re the only engineer alive who knows the Tower\'s pressure systems."',next:'ck1_12'},
        ck1_11c:{speaker:'inner',text:'That scar pattern — acid, not steam. Chemical interrogation. They tortured her for information and she {italic}didn\'t break{/italic}. She came to me carrying the scars of her own defiance.',next:'ck1_12'},
        ck1_12:{bg:'steampunk_gears_png_1775215736755.png',speaker:'narrator',text:'Fourteen hours. Sixty thousand lives. And the only two people who know the truth are a disgraced engineer and an aristocrat with {blood}burn scars{/blood}.',next:'ck1_13'},
        ck1_13:{speaker:'narrator',text:'But the Tower isn\'t the only option. The Sootborn — the underground resistance — have been planning against the Aristocracy for years.',choices:[
          {text:'Trust Elara. Go through the maintenance tunnels together.',hint:'Alliance — two minds, one mission',next:'ck1_14a',effects:{trust:15}},
          {text:'Find the Sootborn. Numbers mean strength.',hint:'Rebellion — the people rise',next:'ck1_14b',effects:{rebellion:20}},
          {text:'Go alone. Nobody else needs to die for this.',hint:'Solo mission — minimize casualties',next:'ck1_14d',effects:{ingenuity:10}},
          {text:'Alert the newspapers first. Public pressure.',hint:'Journalism as a weapon',next:'ck1_14e',effects:{trust:10,rebellion:10}},
          {text:'Steal Elara\'s Guild credentials. Infiltrate as an aristocrat.',hint:'✦ Disguise — walk through the front door',premium:true,next:'ck1_14f',effects:{ingenuity:20}}
        ]},
        ck1_14a:{bg:'clockwork_underground_lab_1775279754628.png',transition:'VoidFlow.mp4',speaker:'narrator',text:'The maintenance tunnels — fifty miles of brass piping, hissing steam, flickering gas-lamps. The heat is suffocating.',next:'ck1_15'},
        ck1_14b:{speaker:'forge',speakerColor:'c-red',text:'"So the bastards want to blow the lower districts." Forge — one-armed, iron-willed. "We have an alternative. Redirect the pressure to the {italic}Aristocracy sector{/italic}."',choices:[
          {text:'"Do it. Let them taste their own medicine."',hint:'Vengeance',next:'ck1_15',effects:{rebellion:25}},
          {text:'"No. Innocents live everywhere."',hint:'Principled',next:'ck1_15',effects:{trust:15,rebellion:-10}},
          {text:'"Can we redirect without causing casualties anywhere?"',hint:'Engineering compromise',next:'ck1_14b2',effects:{ingenuity:15}}
        ]},
        ck1_14b2:{speaker:'forge',speakerColor:'c-red',text:'"Possible, but tricky. Need to vent the excess into the sky. Half the city gets a steam shower, but nobody dies." He grins. "Messy. But {warm}fair{/warm}."',next:'ck1_15'},
        ck1_14d:{speaker:'inner',text:'Alone in the tunnels. Just me and the blueprint and the ticking clock. The way I\'ve always worked best — no politics, no allegiances. Just a problem and a wrench.',next:'ck1_15'},
        ck1_14e:{speaker:'narrator',text:'The Neo-London Gazette. You slide the blueprint under the editor\'s door at 3 AM. By morning, the headline reads: {shake}"TOWER RIGGED TO KILL 60,000 — HIGH COUNCIL ACCUSED"{/shake}. Chaos erupts. But headlines buy time, not solutions.',next:'ck1_15'},
        ck1_14f:{speaker:'narrator',text:'Lady Vance\'s credentials. Her family crest. Her {italic}accent{/italic}. You walk through the Guild\'s brass doors at dawn, and nobody questions the disheveled aristocrat demanding access to the maintenance sector.',next:'ck1_15'},
        ck1_14b:{speaker:'forge',speakerColor:'c-red',text:'"So the bastards want to blow the lower districts." Forge — one-armed, iron-willed. "We have an alternative. Redirect the pressure to the {italic}Aristocracy sector{/italic}."',choices:[
          {text:'"Do it. Let them taste their own medicine."',hint:'Vengeance',next:'ck1_15',effects:{rebellion:25}},
          {text:'"No. Innocents live everywhere."',hint:'Principled',next:'ck1_15',effects:{trust:15,rebellion:-10}}
        ]},
        ck1_15:{bg:'Mechanical heart in industrial warehouse.png',video:'ALilStimulatingMechanism.mp4',speaker:'narrator',text:'Deep in the labyrinth — a body. A Guild engineer in regulation coveralls, dead twelve hours. Above him, written in oil:',next:'ck1_16'},
        ck1_16:{speaker:'dramatic',text:'{blood}"THEY KNOW I KNOW. GOD FORGIVE ME."{/blood}',next:'ck1_17',fx:'shake'},
        ck1_17:{speaker:'inner',text:'He tried to fix it too. The Guild {blood}killed{/blood} him. I\'m not the first to discover the conspiracy — just the first still {italic}breathing{/italic}.',next:'ck1_ep_end'},
        ck1_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 2: The Labyrinth',
          episodeSub:'Deeper into the machine. The clock ticks.',
          bg:'clockwork_train_exterior_1775246474307.png',
          transition:'VoidFlow.mp4',
          speaker:'dramatic',
          text:'{glow}Eleven hours remain. A dead man\'s warning. A city\'s heartbeat, counting down.{/glow}',
          next:'ck2_1'
        }
      }
    },
    // ═══════ EPISODE 2: THE LABYRINTH ═══════
    {
      title:'The Labyrinth',
      desc:'Through the guts of the Tower. Traps, betrayals, and a terrible discovery.',
      thumb:'../../Assets/images/clockwork_underground_lab_1775279754628.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'alexgrohl-energetic-action-sport-500409.mp3',
      startNode:'ck2_1',
      nodes:{
        ck2_1:{bg:'clockwork_train_exterior_1775246474307.png',video:'Cl2.mp4',mood:'action',milestone:{icon:'🔧',title:'The Labyrinth',desc:'Into the guts of the machine'},speaker:'third',text:'7:00 AM. Five hours until noon. Five hours for a disgraced engineer to do what an empire couldn\'t — or wouldn\'t.',next:'ck2_2'},
        ck2_2:{bg:'Abandoned steampunk mining tunnel ruins.png',speaker:'narrator',text:'Deep in the Tower\'s labyrinth. Air thick with steam. Pipes carrying superheated vapor at pressures that would {blood}atomize flesh{/blood}.',next:'ck2_3'},
        ck2_3:{speaker:'inner',text:'I helped design this system. Every junction, every relief valve. That\'s why they exiled me — not because I was wrong, but because I knew too much about the machine they planned to {italic}weaponize{/italic}.',next:'ck2_4'},
        ck2_4:{bg:'clockwork_underground_lab_1775279754628.png',speaker:'narrator',text:'Two Guild Enforcers in brass-plated armor guard the inner sanctum. Steam-powered shock lances humming.',choices:[
          {text:'Blow a relief valve nearby — create a diversion.',hint:'Engineering solution',next:'ck2_5a',effects:{ingenuity:15}},
          {text:'Walk up and bluff. "Maintenance inspection."',hint:'Social engineering',next:'ck2_5b',effects:{trust:10}},
          {text:'Reroute steam to their position. Non-lethal pressure burst.',hint:'✦ Precise — disable without killing',premium:true,next:'ck2_5c',effects:{ingenuity:20}}
        ]},
        ck2_5a:{speaker:'narrator',text:'A wrench into the secondary valve. Steam {shake}erupts{/shake}. Both Enforcers sprint toward the noise. You slip past like a shadow.',next:'ck2_6'},
        ck2_5b:{speaker:'narrator',text:'"Morning. Priority order from Lady Vance." The Enforcers exchange looks. One nods. You\'re through.',next:'ck2_6'},
        ck2_5c:{speaker:'narrator',text:'A precise quarter-turn on junction C-7. Steam roars from above — non-lethal but overwhelming. Both Enforcers drop, dazed, unharmed.',next:'ck2_6'},
        ck2_6:{bg:'Victorian clock tower gears and sunlight.png',transition:'CrystallizedTimeLapse.mp4',speaker:'narrator',text:'The primary valve chamber. A {glow}cathedral{/glow} of brass and iron. The main pressure line roars through the center. The sabotaged valve: hairline fractures too precise for accident.',next:'ck2_7'},
        ck2_7:{speaker:'inner',text:'There it is. At noon pressure, this valve doesn\'t hold — it {shake}explodes{/shake}. Every child in the lower districts will hear the whistle before the wall of steam vaporizes them.',next:'ck2_8'},
        ck2_8:{speaker:'elara',speakerColor:'c-gold',text:'"Elias—" Elara appears, breathless. "It\'s worse. The Council increased peak pressure by 40%. The valve fails at {blood}10 AM{/blood}. Not noon. Three hours."',next:'ck2_9',fx:'shake'},
        ck2_9:{speaker:'inner',text:'Three hours. Not fourteen. Not five. {shake}Three{/shake}. Alone in the guts of a seven-hundred-foot {blood}bomb{/blood}.',next:'ck2_10'},
        ck2_10:{video:'Cl3.mp4',speaker:'narrator',text:'The three-tier mechanical lock on the valve housing. Concentric rings of interlocking brass teeth. Modified after the sabotage — designed to prevent exactly what you\'re doing.',choices:[
          {text:'Study the mechanism methodically.',hint:'Precise but time-consuming',next:'ck2_11a',effects:{ingenuity:15}},
          {text:'Brute force it with a steam wrench. Speed over finesse.',hint:'Fast but destructive',next:'ck2_11d',effects:{rebellion:10},fx:'shake'},
          {text:'Ask Elara to distract them while you work silently.',hint:'Teamwork — divide and conquer',next:'ck2_11e',effects:{trust:10}},
          {text:'"Elara — this lock design. It\'s YOUR family\'s patent."',hint:'✦ Reveal a devastating connection',premium:true,next:'ck2_11c',effects:{trust:-5,ingenuity:20}}
        ]},
        ck2_11a:{speaker:'narrator',text:'First ring: {glow}click{/glow}. Second ring — {glow}click{/glow}. The third {italic}resists{/italic}.',next:'ck2_12'},
        ck2_11c:{speaker:'elara',speakerColor:'c-gold',text:'"My... my family\'s..." Recognition, then {shake}horror{/shake}. "The Vance Precision Lock. My grandfather\'s design. Someone in my {italic}own family{/italic} helped plan this."',next:'ck2_12',effects:{trust:10}},
        ck2_11d:{fx:'shake',speaker:'narrator',text:'The wrench connects. Metal screams. The first ring shatters. The second bends but holds. You hit it again — harder. The entire valve housing shudders. Crude, effective, {italic}loud{/italic}.',next:'ck2_12'},
        ck2_11e:{speaker:'elara',speakerColor:'c-gold',text:'Elara fires her steam pistol into the ceiling. Every Enforcer in the corridor sprints toward the sound. In the silence that follows, your fingers move like a concert pianist on the lock.',next:'ck2_12'},
        ck2_11c:{speaker:'elara',speakerColor:'c-gold',text:'"My... my family\'s..." Recognition, then {shake}horror{/shake}. "The Vance Precision Lock. My grandfather\'s design. Someone in my {italic}own family{/italic} helped plan this."',next:'ck2_12',effects:{trust:10}},
        ck2_12:{speaker:'narrator',text:'Boots on brass walkways. Guild Enforcers, approaching {italic}fast{/italic}.',next:'ck2_13'},
        ck2_13:{speaker:'elara',speakerColor:'c-gold',text:'"They found us." She draws a steam pistol. "Keep working, Elias. I\'ll buy you {italic}time{/italic}."',next:'ck2_ep_end'},
        ck2_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 3: The Tower',
          episodeSub:'The valve opens. But the conspiracy goes deeper.',
          bg:'Mechanical heart in industrial warehouse.png',
          transition:'RedFierybutinSyncSymbolic.mp4',
          speaker:'dramatic',
          text:'{glow}The clock ticks. The pressure builds. One engineer\'s bleeding hands are all that stand between a city and the fire.{/glow}',
          next:'ck3_1'
        }
      }
    },
    // ═══════ EPISODE 3: THE TOWER ═══════
    {
      title:'The Tower',
      desc:'The valve is reached. But defusing the bomb reveals a bigger conspiracy.',
      thumb:'../../Assets/images/steampunk_gears_png_1775215736755.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'folk_acoustic-the-beat-of-nature-122841.mp3',
      startNode:'ck3_1',
      nodes:{
        ck3_1:{bg:'UrbanCity.png',video:'Cl3.mp4',mood:'tense',ambience:'clock',milestone:{icon:'🗼',title:'The Tower',desc:'Thirty minutes to detonation'},speaker:'third',text:'9:48 AM. Twelve minutes. The valve chamber {shake}screams{/shake}. Somewhere above, sixty thousand people drink coffee, argue about nothing — utterly unaware.',next:'ck3_2'},
        ck3_2:{speaker:'narrator',text:'Behind you, Elara\'s steam pistol fires three sharp cracks. An Enforcer goes down. "Keep working!" she shouts.',next:'ck3_3'},
        ck3_3:{bg:'clockwork_airship_bridge_1775246950782.png',speaker:'narrator',text:'The final ring. Fingers raw, bleeding, slippery. The mechanism {italic}fights{/italic} you.',next:'ck3_4'},
        ck3_4:{speaker:'inner',text:'This lock was designed to beat {italic}me{/italic}. Personally. My techniques, my patterns. Whoever modified it {blood}studied{/blood} me.',next:'ck3_5'},
        ck3_5:{speaker:'narrator',text:'You close your eyes. Feel the mechanism. Brass on brass. The language of machines.',next:'ck3_6'},
        ck3_6:{speaker:'dramatic',text:'{glow}Click.{/glow}',next:'ck3_7',fx:'flash'},
        ck3_7:{speaker:'narrator',text:'The lock opens. You redirect the steam manually. The valve holds. The pressure drops. Sixty thousand people will live to complain about their morning tea.',next:'ck3_8'},
        ck3_8:{speaker:'elara',speakerColor:'c-gold',text:'"You did it." She slumps against the wall, steam pistol smoking. Three Enforcers unconscious around her. "It\'s over."',next:'ck3_9'},
        ck3_9:{speaker:'inner',text:'Except it isn\'t. Because inside the valve housing, behind the sabotaged component, I see something that makes my blood freeze.',next:'ck3_10'},
        ck3_10:{speaker:'narrator',text:'A second valve. Hidden behind the first. This one isn\'t sabotaged — it\'s {glow}enhanced{/glow}. The pressure didn\'t need to explode. It was being {italic}redirected{/italic}.',next:'ck3_11'},
        ck3_11:{speaker:'inner',text:'The first valve was a distraction. The REAL system channels the Tower\'s full pressure output to something underground. Something massive. The entire Clockwork Tower is a {blood}pump{/blood} for a machine beneath the city.',next:'ck3_12'},
        ck3_12:{speaker:'elara',speakerColor:'c-gold',text:'"Underground? What could possibly need the pressure output of the entire Tower?" Her goggles fog with steam and horror.',next:'ck3_13'},
        ck3_13:{speaker:'narrator',text:'You trace the secondary pipe deeper. Through walls you didn\'t design. Into chambers that don\'t appear on any blueprint. Someone built an entire {italic}second city{/italic} beneath Neo-London.',choices:[
          {text:'"We have to go down there. Whatever they\'re powering is still running."',hint:'Follow the pipe — face the truth',next:'ck3_14a',effects:{ingenuity:15}},
          {text:'"Get the Sootborn. We need an army."',hint:'Rally the resistance first',next:'ck3_14b',effects:{rebellion:15}},
          {text:'Study the pipe\'s alloy. It\'s not standard brass — what IS this metal?',hint:'✦ The material itself is a clue',premium:true,next:'ck3_14c',effects:{ingenuity:25}}
        ]},
        ck3_14a:{speaker:'narrator',text:'You follow the pipe. It descends through stone and clay into something older than the city itself.',next:'ck3_15'},
        ck3_14b:{speaker:'forge',speakerColor:'c-red',text:'Forge arrives with thirty Sootborn fighters. "Underground, eh? We\'ve been hearing rumbles in the deep tunnels for years. Time to find out what\'s rumbling."',next:'ck3_15'},
        ck3_14c:{speaker:'inner',text:'This alloy doesn\'t exist in any metallurgy textbook. It\'s not just heat-resistant — it\'s heat-{italic}absorbing{/italic}. Whatever\'s at the other end of this pipe doesn\'t just need power. It needs {glow}astronomical{/glow} amounts of it.',next:'ck3_15'},
        ck3_15:{speaker:'narrator',text:'The pipe terminates at a sealed door. Brass and iron and that impossible alloy. Behind it: a sound like breathing. Mechanical. Ancient. {italic}Alive{/italic}.',next:'ck3_ep_end'},
        ck3_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 4: The Underground',
          episodeSub:'Beneath the city. The real machine. The true conspiracy.',
          bg:'clockwork_underground_city.png.png',
          transition:'CirclicFormStackingAsycnchronouslyharmonyThenBlast.mp4',
          speaker:'dramatic',
          text:'{glow}The bomb was a distraction. The Tower is a pump. And beneath Neo-London, something is breathing. Something the Aristocracy built in secret. Something that was never meant to be found.{/glow}',
          next:'ck4_1'
        }
      }
    },
    // ═══════ EPISODE 4: THE UNDERGROUND ═══════
    {
      title:'The Underground',
      desc:'Beneath Neo-London lies a second city. And a machine that could change everything.',
      thumb:'../../Assets/images/clockwork_underground_city.png.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'bodleasons-alone-296348.mp3',
      startNode:'ck4_1',
      nodes:{
        ck4_1:{bg:'clockwork_underground_city.png.png',video:'Cl4.mp4',mood:'mystery',ambience:'heartbeat',milestone:{icon:'🏙️',title:'The Underground',desc:'A second city beneath the first'},speaker:'narrator',text:'The door opens onto an impossible sight: a vast underground cavern, stretching for miles. And inside it — a city. Brass buildings stacked vertically in the cavern walls. Steam-powered elevators. Gas lamp-lit bridges.',next:'ck4_2'},
        ck4_2:{speaker:'elara',speakerColor:'c-gold',text:'"This is... how long has this been here? These structures are decades old. An entire civilization beneath our feet and nobody {italic}knew{/italic}?"',next:'ck4_3'},
        ck4_3:{speaker:'inner',text:'Someone knew. The High Council built this. They\'ve been building a parallel city underground while planning to destroy the one above. This isn\'t urban renewal — it\'s {blood}replacement{/blood}.',next:'ck4_4'},
        ck4_4:{bg:'clockwork_rebel_workshop.png.png',speaker:'narrator',text:'The underground city isn\'t empty. People live here — engineers, workers, families. All wearing Guild uniforms and expressions of quiet resignation.',next:'ck4_5'},
        ck4_5:{speaker:'narrator',text:'A woman approaches. Soot-covered, exhausted, but sharp-eyed. She recognizes Elara\'s goggles.',next:'ck4_6'},
        ck4_6:{speaker:'ada',speakerColor:'c-pink',text:'"Lady Vance. I\'m Ada Mercer. Chief Mechanic of the Undercity." She glances at you. "And you must be the disgraced engineer. We\'ve been waiting for you."',next:'ck4_7'},
        ck4_7:{speaker:'elias',speakerColor:'c-amber',text:'"Waiting? You knew about the sabotage?"',next:'ck4_8'},
        ck4_8:{speaker:'ada',speakerColor:'c-pink',text:'"We didn\'t just know. We\'re the ones who {italic}built{/italic} the hidden valve. Two thousand of us, forced to work down here for twelve years. Building the Central Engine."',next:'ck4_9'},
        ck4_9:{speaker:'elias',speakerColor:'c-amber',text:'"The Central Engine? What does it do?"',next:'ck4_10'},
        ck4_10:{speaker:'ada',speakerColor:'c-pink',text:'"Everything. If activated, it replaces every steam system in Neo-London. Every factory, every home, every airship — all powered from a single source. Whoever controls the Engine controls the {glow}entire city{/glow}."',next:'ck4_11'},
        ck4_11:{speaker:'inner',text:'Total control. The High Council isn\'t just planning to destroy the lower districts. They\'re planning to make the {italic}entire city{/italic} dependent on a single machine they control. Perpetual monarchy through engineering.',next:'ck4_12'},
        ck4_12:{bg:'clockwork_pneumatic_railway.png.png',transition:'GoldenSparkleTunnelForward.mp4',speaker:'narrator',text:'Ada leads you through the Undercity on a pneumatic railway — brass and copper trains on underground tracks. The Engine is at the center.',next:'ck4_13'},
        ck4_13:{speaker:'ada',speakerColor:'c-pink',text:'"The workers down here — we\'re not willing. Most of us were blackmailed. Families held hostage. Some of us \'died\' in factory accidents." She rolls up her sleeve — a brand mark. "We are {blood}property{/blood}."',next:'ck4_14'},
        ck4_14:{speaker:'elara',speakerColor:'c-gold',text:'"My class did this. My {italic}family{/italic} did this." Her voice is barely a whisper. The weight of aristocratic guilt settling on her shoulders like an iron cloak.',next:'ck4_15'},
        ck4_15:{speaker:'elias',speakerColor:'c-amber',text:'"Guilt later, Elara. Action now." You turn to Ada. "The Engine — can it be destroyed?"',next:'ck4_16'},
        ck4_16:{speaker:'ada',speakerColor:'c-pink',text:'"Destroyed? Yes. But it could also be {italic}repurposed{/italic}. If we redirect it from Central Engine to distributed power — every home, every workshop — we could give the city free energy. {glow}Forever{/glow}."',choices:[
          {text:'"Free energy? That would end the Aristocracy\'s stranglehold."',hint:'Understand the economic revolution',next:'ck4_17a',effects:{ingenuity:15}},
          {text:'"Too dangerous. One machine controlling everything is a tyrant\'s dream."',hint:'Distrust centralized power',next:'ck4_17b',effects:{rebellion:15}},
          {text:'"Show me the Engine\'s blueprints. I need to see if redistribution is even possible."',hint:'✦ Engineer\'s verification',premium:true,next:'ck4_17c',effects:{ingenuity:25}}
        ]},
        ck4_17a:{speaker:'ada',speakerColor:'c-pink',text:'"Exactly. No more fuel prices. No more Guild monopoly. The people would literally {warm}own the power{/warm}. That\'s why the Council wants to control it — and why we could use it to free everyone."',next:'ck4_18'},
        ck4_17b:{speaker:'forge',speakerColor:'c-red',text:'"The lad\'s right. Smash it. Smash it all. Build something new from the wreckage." Forge raises his one good fist.',next:'ck4_18'},
        ck4_17c:{speaker:'inner',text:'The blueprints are elegant. Brutal, but elegant. Redistribution IS possible — but it requires reconfiguring the central core. One wrong move and the Engine detonates. Taking the entire Undercity with it.',next:'ck4_18'},
        ck4_18:{speaker:'narrator',text:'An explosion above. Dust falls from the cavern ceiling. The High Council knows you\'re down here.',next:'ck4_19'},
        ck4_19:{speaker:'ada',speakerColor:'c-pink',text:'"They\'ve sent the Full Guard. Three hundred Enforcers. We have maybe an hour before they breach the tunnels."',next:'ck4_20'},
        ck4_20:{speaker:'elias',speakerColor:'c-amber',text:'"Then we have an hour to decide the future of Neo-London."',next:'ck4_ep_end'},
        ck4_ep_end:{
          episodeEnd:true, episodeTitle:'Episode 5: The Grand Revolution',
          episodeSub:'The Central Engine. The last choice. A city\'s future.',
          bg:'clockwork_central_engine.png.png',
          transition:'RedFierybutinSyncSymbolic.mp4',
          speaker:'dramatic',
          text:'{glow}Beneath the Tower. Beneath the city. The Central Engine waits to be activated — or destroyed. Three hundred Enforcers are coming. Two thousand enslaved workers stand ready. The age of steam ends tonight.{/glow}',
          next:'ck5_1'
        }
      }
    },
    // ═══════ EPISODE 5: THE GRAND REVOLUTION ═══════
    {
      title:'The Grand Revolution',
      desc:'The Central Engine. The future of Neo-London. One engineer\'s final choice.',
      thumb:'../../Assets/images/clockwork_central_engine.png.png',
      duration:'~15 min', hasPremiumChoice:true,
      startMusic:'gvidon-spinning-head-271171.mp3',
      startNode:'ck5_1',
      nodes:{
        ck5_1:{bg:'clockwork_central_engine.png.png',video:'Cl5.mp4',mood:'action',ambience:'heartbeat',milestone:{icon:'🔥',title:'The Grand Revolution',desc:'The age of steam ends tonight'},speaker:'narrator',text:'The Central Engine. A building-sized mechanism of brass and iron. Massive interlocking gears turn with grinding precision. Pistons pump. Steam cascades from a hundred vents. It is the most magnificent and terrifying thing you have ever built.',next:'ck5_2'},
        ck5_2:{speaker:'inner',text:'Built. Because I recognize the engineering. My designs. My innovations. The Guild didn\'t just exile me — they {italic}stole my work{/italic} to build their doomsday machine.',next:'ck5_3'},
        ck5_3:{speaker:'ada',speakerColor:'c-pink',text:'"The Enforcers breach in forty minutes. We need to decide: destroy the Engine, redistribute it, or let the Council take it."',next:'ck5_4'},
        ck5_4:{speaker:'forge',speakerColor:'c-red',text:'"Destroy it! No machine should have this much power! The people will rebuild from ash and iron — we always have!"',next:'ck5_5'},
        ck5_5:{speaker:'elara',speakerColor:'c-gold',text:'"Redistribute. Free energy for every home in Neo-London. The Aristocracy crumbles when power belongs to the people."',next:'ck5_6'},
        ck5_6:{speaker:'ada',speakerColor:'c-pink',text:'"Both plans have merit. But redistribution requires someone to stay at the core for six hours to manage the transition. The core chamber reaches temperatures that will..." She trails off.',next:'ck5_7'},
        ck5_7:{speaker:'elias',speakerColor:'c-amber',text:'"That will kill whoever stays inside. I helped design this. I know the thermal tolerances."',next:'ck5_8'},
        ck5_8:{speaker:'elara',speakerColor:'c-gold',text:'"Then we destroy it. I won\'t trade your life for—"',next:'ck5_9'},
        ck5_9:{speaker:'elias',speakerColor:'c-amber',text:'"Wasn\'t asking permission, Elara." You pull out your tools. "But let\'s see if there\'s a third option first. I\'m an engineer. We don\'t accept binary choices."',next:'ck5_10'},
        ck5_10:{speaker:'narrator',text:'You study the Engine\'s core. Your designs, modified but recognizable. And there — a flaw in their modification. Not deliberate sabotage this time — simple incompetence.',next:'ck5_11'},
        ck5_11:{speaker:'inner',text:'They copied my work but didn\'t understand it. The thermal coupling is wrong. If I reverse the cooling flow, the core temperature drops by 400 degrees. Survivable. Barely.',next:'ck5_12'},
        ck5_12:{speaker:'narrator',text:'An explosion shakes the cavern. The Enforcers are breaching.',next:'ck5_13'},
        ck5_13:{speaker:'forge',speakerColor:'c-red',text:'"They\'re through the outer tunnels! Twenty minutes, maybe less!"',next:'ck5_14'},
        ck5_14:{speaker:'ada',speakerColor:'c-pink',text:'"Two thousand workers are ready to fight. But half of them are children and elderly. We can\'t hold against three hundred armed Enforcers."',next:'ck5_15'},
        ck5_15:{speaker:'elara',speakerColor:'c-gold',text:'"I can open the emergency broadcast to the surface. The entire city will hear whatever message we send. If the people above know what\'s happening underneath their feet..."',next:'ck5_16'},
        ck5_16:{speaker:'inner',text:'Everything converges here. The Engine. The Enforcers. The broadcast. The truth. One engineer, one aristocrat, one rebel, one mechanic — and the future of a million souls.',next:'ck5_final'},
        ck5_final:{critical:true,timed:12,timedDefault:'ck5_end_warn',bg:'Victorian clock tower gears and sunlight.png',speaker:'dramatic',text:'{glow}The Engine roars. The Enforcers charge. The broadcast is ready. Sixty thousand were in danger this morning. Now a million lives hang on one choice. What kind of future do you build?{/glow}',choices:[
          {text:'Stay in the core. Redistribute the power. Endure the heat. Free the city.',hint:'🕊 SACRIFICE — Your body for the revolution',next:'ck5_end_sacrifice',effects:{trust:30},fx:'shake',critical:true},
          {text:'Redirect ALL power to the Aristocracy sector. Let them choke on their own steam.',hint:'🔥 REBELLION — Burn the masters',next:'ck5_end_rebel',effects:{rebellion:40},critical:true},
          {text:'Overload the Engine. Destroy the Undercity and the conspiracy forever.',hint:'💥 DESTRUCTION — Some things must be unmade',next:'ck5_end_destroy',effects:{ingenuity:30},critical:true},
          {text:'Seal the Undercity. Let the workers govern themselves below.',hint:'🏰 INDEPENDENCE — Two cities, two peoples',next:'ck5_end_split',effects:{trust:20},critical:true},
          {text:'Hand the Engine to Ada and the workers. They built it — they decide.',hint:'⚖️ DEMOCRACY — Engineers should lead',next:'ck5_end_ada',effects:{trust:25},critical:true},
          {text:'Activate the broadcast. Show the city the truth. Let the PEOPLE choose.',hint:'✦ 📢 TRUTH — Trust democracy over machinery',premium:true,next:'ck5_end_warn',effects:{trust:25},critical:true}
        ]},
        ck5_end_sacrifice:{bg:'clockwork_skyline_free.png.png',transition:'GoldenSparkleTunnelForward.mp4',mood:'warm',milestone:{icon:'⚙️',title:'The Engineer\'s Legacy',desc:'Free power for every home'},speaker:'narrator',text:'Six hours in the core. Burns that will never fully heal. But when you emerge — supported by Ada, held by Elara — every light in Neo-London flickers, then blazes {glow}bright{/glow}. Free power. Every home. Every workshop. Forever. Forge weeps — and he has never cried in his {warm}life{/warm}.',next:'_END',ending:'sacrifice'},
        ck5_end_rebel:{bg:'Victorian mansion in flames at night.png',transition:'RedFierybutinSyncSymbolic.mp4',mood:'action',fx:'shake',ambience:'fire',speaker:'narrator',text:'Steam redirects. The Aristocracy sector {shake}shudders{/shake}. Gold-plated vents erupt. Crystal mansions crack. The lower districts are untouched. Revolution erupts by nightfall. The Sootborn march through the brass gates of the High Council. The old order {blood}burns{/blood}. A new age rises from the ashes — dirty, uncertain, {warm}free{/warm}.',next:'_END',ending:'rebel'},
        ck5_end_destroy:{bg:'BlurryAesthetic.png',transition:'FlowGoesToCenterThenBlast.mp4',mood:'dark',fx:'shake',speaker:'narrator',text:'The Engine overloads. The Undercity collapses, burying the conspiracy in rubble. Above, Neo-London shudders. Every factory goes silent. Every airship descends. The age of steam {italic}ends{/italic}. In the silence, people step outside and look at the sky — for the first time in decades, they can see the {warm}stars{/warm}.',next:'_END',ending:'destroy'},
        ck5_end_warn:{bg:'clockwork_skyline_free.png.png',transition:'CrystallizedTimeLapse.mp4',mood:'hopeful',milestone:{icon:'📢',title:'The Warning Bell',desc:'The truth reaches every ear'},speaker:'narrator',text:'Elara\'s broadcast: slave labor, secret cities, planned genocide. Every klaxon in Neo-London screams the truth. By dawn, the High Council is surrounded by a hundred thousand furious citizens. The Enforcers put down their weapons. Ada leads two thousand workers into sunlight they haven\'t seen in {italic}years{/italic}. Elections are held within the month. The first vote: free power for {warm}all{/warm}.',next:'_END',ending:'warn'}
      }
    }
  ],
  endings:{
    sacrifice:{icon:'🕊',title:'The Engineer\'s Legacy',text:'Six hours in Hell. An eternity of free power. Your name on every generator in Neo-London.',color:'#f0a030'},
    rebel:{icon:'🔥',title:'Vengeance of Steam',text:'Revolution burns bright. The old order is ash. What rises from it is messy, but alive.',color:'#c4364a'},
    destroy:{icon:'💥',title:'The Great Silence',text:'You broke the machine to save the people. In the silence, they found stars.',color:'#8a5cf5'},
    warn:{icon:'📢',title:'The Warning Bell',text:'You trusted the people with truth. They saved themselves — and built something better.',color:'#4ac4b0'},
    split:{icon:'🏰',title:'Two Cities',text:'Above and below. Two Neo-Londons, separate but equal. The Undercity thrives in the dark, free at last.',color:'#636e72'},
    ada:{icon:'⚖️',title:'The Mechanic\'s Republic',text:'Ada Mercer became the first elected Chancellor of Neo-London. An engineer, not an aristocrat. The gears turn for everyone now.',color:'#10b981'},
    martyr:{icon:'☠️',title:'The Last Engineer',text:'You stayed in the core and never came out. But the Engine sang your name with every revolution — free power, forever, paid for in one life.',color:'#d4a843'}
  }
};
